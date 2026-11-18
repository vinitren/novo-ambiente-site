# Uso, na pasta das fotos: python -I <caminho>/rodar.py fotos.json
# fotos.json: lista de {src, out, trocas: [{poli, centro, largura, angulo, suave?, opac?, brilho?}], zoom?}
import json, os, sys
aqui = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(aqui, 'logo_fix.py'), encoding='utf-8').read().replace("if __name__ == '__main__':", "if False:")
exec(compile(src, os.path.join(aqui, 'logo_fix.py'), 'exec'))
for cfg in json.load(open(sys.argv[1], encoding='utf-8')):
    rodar(cfg)
    print('ok', cfg['out'])
