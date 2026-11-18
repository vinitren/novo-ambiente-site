# Teste isolado de ícones (18/11/2026): os cartões reais do site em 4 versões, pra escolher.
# Uso: python -I scripts/teste-icones.py <pasta dos svg do Lucide>
# Sai em ../aprovar/public/novo-ambiente/teste-icones/index.html, usando o CSS e as imagens publicados em ../site/.
import os, re, sys
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LUC = sys.argv[1]
home = open(os.path.join(RAIZ, 'dist', 'index.html'), encoding='utf-8').read()
cabeca = home[:home.find('</head>')]
cabeca = re.sub(r'<title>.*?</title>', '<title>Teste de ícones | Novo Ambiente</title>', cabeca)
cabeca = re.sub(r'<link rel="preload"[^>]*>\n?', '', cabeca)
cabeca = re.sub(r'<script type="application/ld\+json">.*?</script>\n?', '', cabeca, flags=re.S)
cabeca = cabeca.replace('href="site.css"', 'href="../site/site.css"').replace('href="img/', 'href="../site/img/').replace('href="fonts/', 'href="../site/fonts/')
sprites = ''.join(re.findall(r'<svg width="0" height="0".*?</svg>', home, flags=re.S))

def luc(nome, traco):
    s = open(os.path.join(LUC, nome + '.svg'), encoding='utf-8').read()
    s = re.sub(r'<!--.*?-->', '', s, flags=re.S).strip()
    s = re.sub(r'class="[^"]*"', 'class="ico" aria-hidden="true"', s, count=1)
    s = s.replace('stroke-width="2"', f'stroke-width="{traco}"')
    return re.sub(r'\s+', ' ', s)

tambem = [
    ('Fachada', 'ACM, pastilha, textura e pedra em prédios e empresas.', 'i-fachada', 'building-2', 'mini-fachada-acm-320'),
    ('Placa solar', 'Placas de casas, comércios e indústrias, sem riscar o vidro.', 'i-solar', 'solar-panel', 'mini-placa-solar-320'),
    ('Piso', 'Pisos, pedras e áreas externas de condomínios, empresas e casas.', 'i-piso', 'layers-2', 'mini-piso-320'),
]
quem = [
    ('Condomínio e prédio comercial', 'Fachada de vidro e vidro alto que ninguém do prédio alcança.', 'i-predio', 'building', 'mini-fachada-320'),
    ('Loja, clínica ou escritório', 'Vitrine com marca de dedo toda semana.', 'i-loja', 'store', 'mini-vitrine-320'),
    ('Casa', 'Janela alta, pé-direito alto e vidro de sacada.', 'i-casa', 'house', 'mini-sacada-320'),
]

def marca(v, ico, lu, foto):
    if v == 'atual': return f'<span class="b-bolinha"><svg class="ico" aria-hidden="true"><use href="#{ico}"/></svg></span>'
    if v == 'foto': return f'<span class="t-foto"><img src="../site/img/{foto}.webp" alt="" width="320" height="320"></span>'
    if v == 'traco': return f'<span class="t-traco">{luc(lu, 1.25)}</span>'
    return f'<span class="t-gelo">{luc(lu, 1.5)}</span>'

def cartoes(lista, v):
    return '\n'.join(f'<li class="b-cartao b-cartao-link"><a href="#"><span class="t-marca">{marca(v, i, l, f)}</span><h3>{h}</h3><p>{p}</p><span class="link-seta">Ver o serviço<svg aria-hidden="true"><use href="#i-seta"/></svg></span></a></li>' for h, p, i, l, f in lista)

versoes = [
    ('atual', 'Hoje no site', 'Ícone na bolinha azul cheia.'),
    ('foto', 'A · Foto no lugar do ícone', 'Uma fotinho das imagens de vocês, do mesmo jeito que já aparece no painel do topo.'),
    ('traco', 'B · Traço fino, sem bolinha', 'Ícone maior, linha fina em azul, solto no cartão.'),
    ('gelo', 'C · Quadrado gelo + ícone marinho', 'Ícone marinho num quadrado azul-gelo de canto arredondado.'),
]
estilo = '''<style>
.t-topo { padding-block: 3rem 1rem; } .t-topo h1 { font-size: clamp(2rem, 1.5rem + 2vw, 3rem); } .t-topo p { margin-top: .75rem; color: var(--texto-2); max-width: 40rem; }
.t-versao { padding: 2.5rem 0 3rem; border-top: 1px solid rgba(8,25,42,.12); }
.t-versao > .wrap > h2 { font-size: clamp(1.5rem, 1.2rem + 1vw, 2rem); } .t-versao > .wrap > p { margin-top: .4rem; color: var(--texto-2); }
.t-versao .b-cartoes-3 { margin-top: 1.5rem; } .t-sub { margin-top: 2rem; font: 500 .8125rem/1.2 var(--sans); letter-spacing: .05em; text-transform: uppercase; color: var(--texto-2); }
.t-marca { display: block; margin-bottom: 1.25rem; }
.t-foto { display: block; width: 4.5rem; height: 4.5rem; border-radius: 12px; overflow: hidden; } .t-foto img { width: 100%; height: 100%; object-fit: cover; }
.t-traco { display: block; color: var(--azul, #0095da); } .t-traco .ico { width: 2.75rem; height: 2.75rem; }
.t-gelo { display: grid; place-items: center; width: 3.5rem; height: 3.5rem; border-radius: 14px; background: #d8e6ef; color: #08192a; } .t-gelo .ico { width: 1.75rem; height: 1.75rem; }
.b-cartao-link .b-bolinha { margin-bottom: 0; }
</style>'''
corpo = ''.join(f'''<section class="t-versao"><div class="wrap"><h2>{t}</h2><p>{d}</p>
<p class="t-sub">Também limpamos</p><ul class="b-cartoes-3">{cartoes(tambem, v)}</ul>
<p class="t-sub">Pra quem limpamos</p><ul class="b-cartoes-3">{cartoes(quem, v)}</ul></div></section>''' for v, t, d in versoes)
html = cabeca + estilo + '</head>\n<body>\n' + sprites + f'''<main class="b-tambem"><div class="wrap t-topo"><h1>Teste de ícones</h1><p>Os mesmos cartões do site em quatro versões. Só pra escolher: nada aqui está no site. Ícones das versões B e C: Lucide (livre, licença ISC).</p></div>{corpo}</main>\n</body></html>'''
destino = os.path.join(RAIZ, '..', 'aprovar', 'public', 'novo-ambiente', 'teste-icones')
os.makedirs(destino, exist_ok=True)
open(os.path.join(destino, 'index.html'), 'w', encoding='utf-8').write(html)
print('ok', os.path.join(destino, 'index.html'))
