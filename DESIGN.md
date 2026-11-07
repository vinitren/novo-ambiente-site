---
name: Novo Ambiente Service
description: Limpeza técnica de vidros em Curitiba, com o vidro limpo como assunto da página.
colors:
  marinho: "#08192a"
  marinho-2: "#0d2438"
  marinho-3: "#020b14"
  bege: "#d8e6ef"
  off: "#f4f8fa"
  azul: "#0095da"
  azul-texto: "#006596"
  azul-claro: "#8cc3e6"
  texto: "#0b1d2e"
  texto-2: "#4a5866"
  claro-2: "rgba(244, 248, 250, .8)"
  linha: "rgba(8, 25, 42, .16)"
  linha-clara: "rgba(244, 248, 250, .2)"
typography:
  display:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1.7rem + 5.1vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.025em"
  serifada:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontWeight: 400
    letterSpacing: "-.02em"
  headline:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 2.6vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "-.025em"
  body:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: ".8125rem"
    fontWeight: 500
    letterSpacing: ".05em"
  caption:
    fontFamily: "Instrument Sans, system-ui, sans-serif"
    fontSize: ".6875rem"
    fontWeight: 400
    letterSpacing: ".03em"
rounded:
  etiqueta: "3px"
  pega: "6px"
  botao: "8px"
spacing:
  margem: "clamp(1.25rem, .6rem + 2.8vw, 3rem)"
  secao: "clamp(5.5rem, 4rem + 6.5vw, 10.5rem)"
components:
  botao-claro:
    backgroundColor: "{colors.off}"
    textColor: "{colors.marinho}"
    typography: "{typography.label}"
    rounded: "{rounded.botao}"
    height: "3.25rem"
  botao-marinho:
    backgroundColor: "{colors.marinho}"
    textColor: "{colors.off}"
    typography: "{typography.label}"
    rounded: "{rounded.botao}"
    height: "3.25rem"
  topo-solido:
    backgroundColor: "{colors.off}"
    textColor: "{colors.marinho}"
    height: "4.75rem"
---

# Design System: Novo Ambiente Service

## Overview

**Creative North Star: "A Passada do Rodo"**

A página mostra o vidro voltando a ser vidro. O assunto não é a equipe nem o prédio: é a diferença entre o vidro sujo e o limpo, em Curitiba, com a araucária refletida. Tudo segue esse gesto: a foto se revela da direita pra esquerda, como uma passada, e no antes e depois é a própria rolagem da página que passa o rodo.

**Key Characteristics:**
- Campos inteiros de marinho e azul-gelo, com off-white nas seções de leitura.
- Sem card, sombra de superfície, ícone em bolinha ou selo. A estrutura é feita de filetes de 1px.
- Foto sempre sangrada, de borda a borda, sem moldura.
- Sem etiqueta de "imagem ilustrativa" na página nem na apresentação (pedido do Vinicius em 07/11). A origem de cada imagem fica só no `.json` ao lado dela.

## Colors

- **Marinho (#08192a):** entrada, comparador, fechamento e botão sobre fundo claro.
- **Bege (#d8e6ef):** seções "Como funciona" e "Também limpamos".
- **Off (#f4f8fa):** fundo de leitura e botão sobre foto.
- **Azul da logo (#0095da):** só no foco e na logo. Nunca como superfície.

A paleta do cliente é azul. O verde proposto pela outra IA foi recusado pelo Vinicius em 05/11.

## Typography

Instrument Sans em peso 400 nos títulos e no texto. Source Serif 4 romana, sem itálico, na linha do título que carrega a ideia. Fontes hospedadas no próprio site, só o conjunto latino. Botões em caixa alta com espaçamento de .05em. O menu usa a serifada, em 18px.

## Elevation

Sem sombra de superfície.

## Components

- **Botão:** reto, raio de 8px, altura de 52px. A seta anda 3px na diagonal no hover.
- **Menu:** transparente sobre a entrada, off-white com logo escura depois dela. Sublinhado de 1px que entra da direita pra esquerda.
- **Logo:** presa no canto do menu, sem mudar de lugar. Nasce grande e só diminui até o tamanho do menu conforme a página desce, terminando antes do título chegar nela. Sem script ou com "reduzir movimento", já fica no tamanho do menu.
- **Antes e depois:** imagem sangrada, fixa enquanto a página desce; o vidro clareia da direita pra esquerda com a rolagem, por uma borda larga e irregular (`img/mascara-vidro.webp`), com inércia. A máscara fica parada numa camada que desliza, sem repintar durante a rolagem. As duas fotos têm a mesma geometria: a suja foi alinhada à limpa. Sem botão, filete ou arrasto. Sem script ou com "reduzir movimento", fica parado no meio.
- **Lista de serviços:** numerada, com a foto ao lado no computador (troca no hover, no foco e na rolagem) e sangrada acima de cada item no celular.
- **Como funciona:** título fixo à esquerda, numeral grande na serifada à direita.
- **Barra do WhatsApp:** fixa no celular, some quando já há um botão na tela.

## Motion

Uma ideia só: a passada do rodo, da direita pra esquerda com saída exponencial. No celular as fotos ficam paradas: a passada ali é só o antes e depois, que anda em camada pronta. No computador a faixa e a foto dos serviços entram com `clip-path`. Na entrada, zoom de 1.04 a 1 e título subindo 18px. Com "reduzir movimento", tudo aparece parado.

## Do's and Don'ts

- **Faça:** deixe o vidro ser o assunto e rotule toda imagem de IA.
- **Faça:** use a roupa com a estampa de respingos da arte real e aplique a logo real quando ela precisar aparecer.
- **Não faça:** camuflado, nem logo desenhada por IA.
- **Não faça:** card, pílula, gradiente decorativo, fundo verde ou prova que não existe (NR-35, seguro, clientes, avaliações) antes do documento.
