# Logo real nas costas da camisa (17/11/2026)

As fotos que a Novo Ambiente fez com IA vieram com a logo borrada e, em duas
(vitrine e piso), com o **símbolo errado**. IA não acerta logo em roupa (testado
em 05/11), então a troca é por código:

1. `apagar_poligono`: apaga a logo antiga dentro de um contorno desenhado à mão
   (o azul da logo é o mesmo azul da camisa, então separar por cor não funciona)
   e preenche com o tecido em volta, borda esfumada
2. `colar`: cola `logo-real.png` (o `img/logo.svg` renderizado) girada e na escala
   da camisa, com leve suavização pra casar com a nitidez da foto

`fotos-17-11.json` tem o contorno, o centro, a largura e o ângulo de cada foto.
Pra foto nova: achar a logo com uma grade de coordenadas, escrever a entrada e
rodar `python -I logo_fix.py fotos.json` na pasta das fotos. Os originais
corrigidos ficam em `Desktop\Clientes\Novo-Ambiente-Service\material-do-cliente\2026-11-17-imagens-do-site\logo-corrigida\`.
