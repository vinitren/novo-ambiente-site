"""Troca a logo das costas da camisa pela logo vetorial real.
1) apaga a logo antiga: marca os pixels claros (texto branco e azul claro) dentro da caixa,
   e preenche por difusão (borrão repetido só dentro da máscara), com o grão do tecido por cima;
2) cola a logo real (renderizada do SVG), girada e na escala da camisa, com leve suavização
   pra casar com a nitidez da foto."""
import sys, json, os
from PIL import Image, ImageFilter, ImageChops, ImageEnhance
import numpy as np

LOGO = Image.open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'logo-real.png')).convert('RGBA')
LOGO = LOGO.crop(LOGO.getbbox())


def apagar(im, caixa, limiar):
    a = np.asarray(im).astype(np.float32)
    x0, y0, x1, y1 = caixa
    reg = a[y0:y1, x0:x1]
    lum = reg.mean(axis=2)
    azul_claro = (reg[..., 1] > 125) & (reg[..., 2] > 170) & (reg[..., 2] - reg[..., 0] > 40)
    m = (lum > limiar) | azul_claro
    mask = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(7)).filter(ImageFilter.MaxFilter(5))
    m = np.asarray(mask) > 0
    out = a.copy()
    sub = out[y0:y1, x0:x1]
    # chute inicial: a cor média do tecido em volta
    sub[m] = reg[~m].mean(axis=0) if (~m).any() else reg.mean(axis=(0, 1))
    for r in (9, 7, 5, 4, 3, 2, 2, 1, 1, 1):
        for _ in range(12):
            b = np.asarray(Image.fromarray(sub.clip(0, 255).astype(np.uint8)).filter(ImageFilter.BoxBlur(r))).astype(np.float32)
            sub[m] = b[m]
    rng = np.random.default_rng(1)
    sub[m] += rng.normal(0, 3.0, size=(m.sum(), 1))
    out[y0:y1, x0:x1] = sub
    return Image.fromarray(out.clip(0, 255).astype(np.uint8))


def colar(im, centro, largura, angulo, opac=0.93, suave=0.5, brilho=0.93):
    lg = LOGO.resize((int(largura * 3), int(largura * 3 * LOGO.height / LOGO.width)), Image.LANCZOS)
    lg = lg.rotate(angulo, resample=Image.BICUBIC, expand=True)
    lg = lg.resize((max(1, lg.width // 3), max(1, lg.height // 3)), Image.LANCZOS)
    rgb = ImageEnhance.Brightness(lg.convert('RGB')).enhance(brilho)
    alpha = lg.getchannel('A').point(lambda v: int(v * opac))
    if suave:
        rgb = rgb.filter(ImageFilter.GaussianBlur(suave))
        alpha = alpha.filter(ImageFilter.GaussianBlur(suave))
    lg = Image.merge('RGBA', (*rgb.split(), alpha))
    base = im.convert('RGBA')
    base.alpha_composite(lg, (int(centro[0] - lg.width / 2), int(centro[1] - lg.height / 2)))
    return base.convert('RGB')


if __name__ == '__main__':
    cfg = json.loads(sys.argv[1])
    im = Image.open(cfg['src']).convert('RGB')
    for c in cfg['trocas']:
        im = apagar(im, c['caixa'], c.get('limiar', 140))
        im = colar(im, c['centro'], c['largura'], c.get('angulo', 0), c.get('opac', .93), c.get('suave', .5), c.get('brilho', .93))
    im.save(cfg['out'], quality=95)
    if 'zoom' in cfg:
        im.crop(cfg['zoom']).resize(((cfg['zoom'][2] - cfg['zoom'][0]) * 2, (cfg['zoom'][3] - cfg['zoom'][1]) * 2), Image.LANCZOS).save(cfg['out'].replace('.jpg', '-zoom.jpg'), quality=92)
    print('ok')


def apagar_poligono(im, poli, ruido=1.5, pena=3):
    """Apaga dentro de um polígono desenhado à mão: difusão a partir da borda, borda esfumada."""
    from PIL import ImageDraw
    xs = [p[0] for p in poli]; ys = [p[1] for p in poli]
    x0, y0, x1, y1 = min(xs) - 20, min(ys) - 20, max(xs) + 20, max(ys) + 20
    a = np.asarray(im).astype(np.float32)
    sub = a[y0:y1, x0:x1].copy()
    mimg = Image.new('L', (x1 - x0, y1 - y0), 0)
    ImageDraw.Draw(mimg).polygon([(x - x0, y - y0) for x, y in poli], fill=255)
    m = np.asarray(mimg) > 0
    fill = sub.copy()
    fill[m] = sub[~m].mean(axis=0)
    for r in (12, 9, 7, 5, 4, 3, 2, 2, 1, 1, 1):
        for _ in range(15):
            b = np.asarray(Image.fromarray(fill.clip(0, 255).astype(np.uint8)).filter(ImageFilter.BoxBlur(r))).astype(np.float32)
            fill[m] = b[m]
    rng = np.random.default_rng(1)
    fill[m] += rng.normal(0, ruido, size=(m.sum(), 1))
    w = np.asarray(mimg.filter(ImageFilter.GaussianBlur(pena))).astype(np.float32)[..., None] / 255
    w = np.maximum(w, m[..., None] * 1.0) if pena == 0 else w
    sub = sub * (1 - w) + fill * w
    a[y0:y1, x0:x1] = sub
    return Image.fromarray(a.clip(0, 255).astype(np.uint8))


def rodar(cfg):
    im = Image.open(cfg['src']).convert('RGB')
    for c in cfg['trocas']:
        im = apagar_poligono(im, c['poli'], c.get('ruido', 1.5), c.get('pena', 3)) if 'poli' in c else apagar(im, c['caixa'], c.get('limiar', 140))
        im = colar(im, c['centro'], c['largura'], c.get('angulo', 0), c.get('opac', .93), c.get('suave', .5), c.get('brilho', .93))
    im.save(cfg['out'], quality=95)
    if 'zoom' in cfg:
        z = cfg['zoom']
        im.crop(z).resize(((z[2] - z[0]) * 2, (z[3] - z[1]) * 2), Image.LANCZOS).save(cfg['out'].replace('.jpg', '-zoom.jpg'), quality=92)
