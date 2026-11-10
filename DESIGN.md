---
name: Novo Ambiente Service
description: Limpeza técnica de vidros em Curitiba. A página é uma fachada de vidro, no marinho da entrada do rapel.
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

**Creative North Star: "A Fachada"** (prévia 7, 10/11/2026)

A página é uma pele de vidro. O clima da entrada do rapel (a opção B que a cliente escolheu) continua pela página inteira: marinho, foto grande e gente trabalhando. As fotos são os painéis de vidro, e o filete escuro de 3px entre elas é a esquadria. A prévia 6 ("A Passada do Rodo") foi achada simples pela cliente: o corpo era texto fino em fundo claro e as fotos mudavam com a rolagem. **Nada muda com a rolagem agora.**

**Key Characteristics:**
- Marinho na maior parte da página, em três tons pra separar as seções. Azul-gelo só nos planos e off-white nas perguntas, como respiro.
- Foto sempre sangrada, sem moldura, raio ou sombra. Várias fotos juntas formam uma grade com filete de 3px (`--marinho-3`), nunca cards.
- Títulos grandes, com a linha da ideia na serifada.
- Sem etiqueta de "imagem ilustrativa" na página (pedido do Vinicius em 07/11). A origem de cada imagem fica só no `.json` ao lado dela.

## Colors

- **Marinho (#08192a):** sobre, antes e depois, pra quem, fechamento.
- **Marinho-2 (#0d2438):** como funciona.
- **Marinho-3 (#020b14):** serviços, também limpamos, rodapé e o filete da esquadria.
- **Azul-gelo (#d8e6ef, token `--bege` por histórico):** planos.
- **Off (#f4f8fa):** perguntas, botão sobre foto e menu sólido.
- **Azul-claro (#8cc3e6):** destaque de texto no escuro (a frase do sobre, os numerais, os termos dos serviços).
- **Azul da logo (#0095da):** foco e logo. **Azul-texto (#006596):** destaque no claro (o plano pontual).

## Typography

Instrument Sans em peso 400 nos títulos e no texto. Source Serif 4 romana, sem itálico, na linha do título que carrega a ideia, nos nomes dos planos, nos fatos e nos itens de "Também limpamos". Títulos de seção de 40 a 80px, o da frase do sobre até 76px. Botões em caixa alta com espaçamento de .05em. Fontes hospedadas no próprio site, só o conjunto latino.

## Elevation

Sem sombra de superfície. Legibilidade sobre foto vem de véu em gradiente marinho.

## Components

- **Entrada e menu:** não mudaram na prévia 7 (a cliente gostou). Logo presa no canto, nasce grande e diminui até o menu; menu transparente sobre a foto e off-white depois dela.
- **Sobre:** frase grande no topo; abaixo, a foto do rodo sangrada à esquerda e o texto com 4 fatos (grade 2×2 de filetes) à direita.
- **Serviços, a fachada:** mosaico de 5 painéis de foto parada. No computador, 12 colunas e 2 linhas: vidro em altura alto à esquerda (5 colunas, 2 linhas), os outros 4 à direita. No tablet, 2 colunas com o de altura na largura toda; no celular, um embaixo do outro. Texto por cima, embaixo, sobre véu. No hover, só a foto aproxima 4% devagar.
- **Antes e depois:** duas fotos paradas lado a lado (empilhadas no celular), com a etiqueta "Antes" em marinho e "Depois" em off-white no canto de baixo.
- **Planos:** a régua do ano. Uma linha por plano (semanal, quinzenal, mensal, trimestral, semestral, pontual), com um risco por limpeza no mesmo intervalo, os meses em cima no computador e a frequência por extenso à direita. O pontual leva o azul-texto.
- **Como funciona:** três colunas com numeral grande na serifada em azul-claro (empilhadas no celular).
- **Faixa:** foto das araucárias com "Curitiba e Região Metropolitana" grande por cima.
- **Botão:** reto, raio de 8px, altura de 52px. A seta anda 3px na diagonal no hover.
- **Barra do WhatsApp:** fixa no celular, some quando já há um botão na tela.

## Motion

Pouco e parado: zoom de 1.04 a 1 na foto da entrada e o título subindo 18px, a logo diminuindo com a rolagem, e o hover dos painéis. Nenhuma foto troca ou se revela com a rolagem (a cliente não gostou na prévia 6). Com "reduzir movimento", tudo aparece parado.

## Do's and Don'ts

- **Faça:** foto grande e sangrada, gente de uniforme real trabalhando, o marinho da entrada continuando pela página.
- **Faça:** use a roupa com a estampa de respingos da arte real e aplique a logo real quando ela precisar aparecer.
- **Não faça:** foto que troca ou se revela na rolagem, camuflado, logo desenhada por IA.
- **Não faça:** card, pílula, gradiente decorativo, fundo verde ou prova que não existe (NR-35, seguro, clientes, avaliações, tempo de mercado) antes do documento.