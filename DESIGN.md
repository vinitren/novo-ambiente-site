---
name: Novo Ambiente Service
description: Limpeza técnica de vidros em Curitiba, apresentada como um estúdio de arquitetura apresentaria uma obra.
colors:
  azul: "#0095da"
  azul-texto: "#006596"
  azul-claro: "#8cc3e6"
  tinta: "#08192a"
  tinta-2: "#0d2438"
  veu: "#040e18"
  rodape: "#020b14"
  nevoa: "#f1f4f6"
  nevoa-2: "#e3e9ee"
  branco: "#ffffff"
  texto: "#0b1d2e"
  texto-2: "#46596b"
  branco-2: "rgba(255, 255, 255, .78)"
  linha: "rgba(8, 25, 42, .14)"
  linha-clara: "rgba(255, 255, 255, .16)"
typography:
  display:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.2rem + 5.6vw, 6rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-.03em"
  headline:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-.025em"
  statement:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.05rem + 2.9vw, 3.6rem)"
    fontWeight: 300
    lineHeight: 1.14
    letterSpacing: "-.025em"
  title:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 1.25rem + 1.4vw, 2.5rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-.025em"
  title-sm:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + .8vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-.025em"
  fact:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.1rem + .9vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.02em"
  lead:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + .3vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
  question:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + .3vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.1
  nav:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: ".6875rem"
    fontWeight: 400
    letterSpacing: ".03em"
rounded:
  soft: "4px"
  pill: "99px"
  circle: "50%"
spacing:
  gutter: "1.25rem"
  gutter-wide: "2.5rem"
  section: "clamp(5.5rem, 4rem + 6vw, 10rem)"
  row: "1.5rem"
  row-wide: "2.4rem"
  column-gap: "2.5rem"
  split-gap: "5rem"
  action-gap: "1rem 1.8rem"
components:
  button-primary:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".8rem 1.6rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.azul-claro}"
    textColor: "{colors.tinta}"
  button-ghost:
    textColor: "{colors.branco}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: ".8rem 1.6rem"
    height: "3.25rem"
  button-ghost-hover:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta}"
  button-header:
    textColor: "{colors.branco}"
    typography: "{typography.nav}"
    rounded: "{rounded.pill}"
    padding: ".5rem 1.15rem"
    height: "2.75rem"
  link-arrow:
    textColor: "{colors.azul-texto}"
    typography: "{typography.label}"
  header-solid:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.branco}"
    height: "5.5rem"
  row-link-arrow:
    rounded: "{rounded.circle}"
    size: "2.75rem"
  row-link-arrow-hover:
    backgroundColor: "{colors.tinta}"
    textColor: "{colors.branco}"
  compare-handle:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.circle}"
    size: "3.5rem"
  compare-tag-after:
    backgroundColor: "{colors.branco}"
    textColor: "{colors.tinta}"
    rounded: "{rounded.pill}"
    padding: ".3rem .85rem"
  service-image:
    backgroundColor: "{colors.nevoa-2}"
    rounded: "{rounded.soft}"
---

# Design System: Novo Ambiente Service

## Overview

**Creative North Star: "O Estúdio de Altura"**

A página se apresenta como um estúdio de arquitetura apresentaria uma obra: primeiro uma cena em tela cheia, a marca grande no centro e silêncio em volta; só depois a informação. O trabalho é técnico e perigoso (rapel, pele de vidro, fachada de torre), e o sistema visual responde com calma, não com urgência. Nada pisca, nada chama atenção por chamar. A seriedade vem do espaço, do peso leve dos títulos e das linhas finas que organizam tudo.

O mundo tem duas marés. A maré escura (o azul-marinho quase preto) carrega as cenas, a comparação antes e depois e o fecho; a maré clara (névoa fria e branco) carrega a leitura. Seções vizinhas nunca dividem o mesmo fundo, então a rolagem alterna respiração e cena. O azul da logo existe, mas como sinal pequeno: foco, seleção, o ponto que marca cada termo. A ação principal é uma pílula branca sobre o escuro, e a paleta continua sendo a da marca deles, só que usada com contenção.

O movimento é guiado pela rolagem e aparece em dois lugares só: na entrada (a marca sobe pro menu, o título assenta, a cena troca de rapel pra vitrine) e no índice de serviços (a imagem presa ao lado troca a cada serviço). Fora disso, só dissolução e deslocamento curto com saída longa. O sistema recusa o padrão do ramo (foto com faixa escura, título, botão e quatro cards com ícone) e recusa o excesso (vídeo, efeito em toda seção).

**Key Characteristics:**
- Cena sangrada em tela cheia com véu escuro, marca no centro, informação depois.
- Duas marés de fundo, escuro (#08192a) e claro (#f1f4f6 / #fff), alternando a cada seção.
- Uma família só, Albert Sans, com títulos em peso 300 e espaçamento negativo.
- Estrutura por filetes de 1px, sem cards, sem sombras em superfície.
- Azul da logo como sinal, nunca como superfície; ação primária em pílula branca.
- Movimento guiado pela rolagem em dois pontos só, com saída exponencial.
- Toda cena gerada por IA leva a etiqueta "ilustrativa".

## Colors

Uma paleta fria e contida, inteira dentro do azul da marca: quase preto azulado, névoa, branco e um azul vivo usado em gotas.

### Primary
- **Azul da Logo** (`azul`): o azul da onda da logo. Aparece só como sinal: anel de foco (2px, afastado 3px), fundo da seleção de texto e o ponto de .35rem antes de cada termo de serviço. Não preenche botão nem superfície.
- **Azul de Leitura** (`azul-texto`): o azul da marca escurecido pra passar contraste em fundo claro. É a cor dos links de ação nas seções claras ("Orçamento pro condomínio"), do sinal de mais das perguntas e do título de linha no hover.
- **Azul Claro** (`azul-claro`): o azul claro da marca, pra fundo escuro. Hover da pílula branca, anel de foco do comparador e a linha "Prévia" do rodapé.

### Neutral
- **Tinta** (`tinta`): o azul-marinho quase preto. Fundo da entrada, da comparação, do fecho, do topo fixo depois da entrada e da barra do WhatsApp; também a cor de texto das pílulas brancas. É a cor de `theme-color`.
- **Tinta Funda** (`tinta-2`): um passo acima da tinta, fundo do comparador enquanto as imagens carregam.
- **Véu** (`veu`): nunca aparece sólido. É a base de todos os gradientes que escurecem as cenas (em opacidades de .25 a .86) e do rótulo "antes" do comparador (a .7).
- **Rodapé** (`rodape`): o fundo mais escuro da página, só no rodapé, um degrau abaixo do fecho.
- **Névoa** (`nevoa`): fundo do corpo e das seções claras de leitura (sobre, pra quem, perguntas).
- **Névoa Funda** (`nevoa-2`): o fundo que fica atrás da imagem presa dos serviços antes de ela carregar.
- **Branco** (`branco`): fundo das seções claras alternadas (serviços de vidro, também limpamos), texto sobre o escuro e preenchimento da pílula primária.
- **Texto** (`texto`): títulos e texto principal no claro.
- **Texto Secundário** (`texto-2`): parágrafos de apoio, descrições, respostas das perguntas.
- **Branco de Apoio** (`branco-2`): o texto de apoio sobre o escuro (subtítulo da entrada, apoio do fecho, legenda do comparador).
- **Filete** (`linha`) e **Filete Claro** (`linha-clara`): as linhas de 1px que estruturam listas, fatos e colunas no claro, e o fio que separa o topo e a barra do WhatsApp no escuro.

### Named Rules
**A Regra do Azul de Sinal.** O azul da logo só aparece em gotas: foco, seleção e o ponto de cada termo. Se ele estiver preenchendo um botão, um fundo ou um ícone grande, está errado. A ação primária é branca sobre tinta.

**A Regra das Duas Marés.** Seções vizinhas nunca dividem o mesmo fundo. A ordem construída é névoa, branco, tinta, névoa, branco, névoa, tinta, rodapé. Seção nova entra respeitando a alternância.

**A Regra do Véu.** Texto sobre cena nunca fica sobre a foto crua: sempre sobre o véu (gradiente do `veu`) que escurece a base, o topo e, na vitrine, a esquerda.

## Typography

**Display Font:** Albert Sans (com system-ui, sans-serif)
**Body Font:** Albert Sans (com system-ui, sans-serif)

**Character:** Uma sans geométrica só, em peso leve nos títulos grandes e regular no corpo. O contraste vem de tamanho e peso, não de troca de família; os títulos grandes em 300 com espaçamento negativo dão o ar de estúdio, e o corpo em 1.0625rem com entrelinha 1.65 lê bem no celular.

### Hierarchy
- **Display** (300, até 6rem, 1.05, -.03em): só o H1 da entrada ("Limpeza de vidros em Curitiba", largura máxima 11ch) e o título do fecho (mesma escala, centralizado, 13ch).
- **Headline** (300, até 4rem, 1.05): título de cada seção, largura máxima 17ch.
- **Statement** (300, até 3.6rem, 1.14): a frase longa do "sobre", até 24ch. Entrelinha maior porque é frase, não título.
- **Title** (300, até 2.5rem): o nome de cada serviço no índice de vidros. **Title pequeno** (300, até 2rem) nas colunas de "pra quem"; as linhas de "também limpamos" ficam entre os dois (até 2.2rem).
- **Fato** (400, até 1.9rem, 1.15, -.02em): a primeira linha de cada fato da faixa do "sobre".
- **Lead** (400, até 1.25rem): o apoio do H1. Subtítulo de seção e apoio do fecho ficam em 1.125rem, em até 36rem de largura.
- **Pergunta** (400, até 1.3rem): o resumo de cada pergunta frequente.
- **Body** (400, 1.0625rem, 1.65): todo o resto; parágrafos de serviço em até 34rem, respostas em até 40rem.
- **Label** (500, 1rem, 1.1): texto das pílulas e dos links com seta. No topo, a pílula desce pra .9375rem.
- **Nav** (400, .9375rem): links do menu, com opacidade .8 que vai a 1 no hover.
- **Legenda** (400, .6875rem, .03em): etiquetas "imagem ilustrativa" e "cenas ilustrativas". Os rótulos do comparador sobem pra .8125rem/500 e a legenda dele pra .875rem.

### Named Rules
**A Regra do Peso Leve.** Todo h1, h2 e h3 sai em 300 com espaçamento -.025em (o H1 em -.03em) e `text-wrap: balance`. O peso 500 é reservado pra ação (pílula, link com seta) e pra linha que resolve ("Equipe de altura e data marcada..."). Não existe negrito de título.

**A Regra da Família Única.** Albert Sans em tudo. Hierarquia por tamanho e peso, nunca por uma segunda família.

## Layout

Coluna única centrada com largura máxima de 84rem e respiro lateral de 1.25rem no celular e 2.5rem a partir de 48rem. Cada seção tem respiro vertical fluido (5.5rem no celular até 10rem no computador). Os pontos de quebra construídos são 30rem (a pílula do topo ganha "no WhatsApp"), 48rem (respiro largo, entrada com a cena deslocada), 62rem (menu completo, grades de duas e três colunas, imagem presa dos serviços) e 72rem (faixa de fatos em quatro colunas).

- **Cabeça de seção:** título e subtítulo empilhados no celular; a partir de 62rem, lado a lado em 1.3fr / 1fr, alinhados pela base, com 5rem entre eles.
- **Topo:** grade de três colunas. No celular, marca à esquerda e pílula à direita (altura 4.75rem); a partir de 62rem, menu à esquerda, marca no centro, pílula à direita (altura 5.5rem). Fica transparente sobre a entrada e vira tinta sólida quando ela acaba.
- **Faixas de fatos e colunas:** uma coluna no celular, depois duas (fatos, 48rem) e três ou quatro colunas (62rem / 72rem), separadas por filete vertical com 2rem a 2.4rem de respiro de cada lado.
- **Índice de serviços:** uma coluna com a foto 4:3 dentro de cada serviço no celular; a partir de 62rem, duas colunas (5fr de imagem presa, 6fr de lista) com até 7rem entre elas, e cada serviço ocupa pelo menos 44% da altura da tela, centrado.
- **Perguntas:** título à esquerda e lista à direita em 1fr / 1.5fr a partir de 62rem.
- **Barra do WhatsApp:** só abaixo de 48rem, presa embaixo, aparece quando nenhum outro botão de orçamento está na tela. O rodapé ganha 7rem de respiro embaixo pra ela não cobrir o endereço.

### Named Rules
**A Regra da Linha que Organiza.** Listas, fatos, colunas e perguntas são separados por filetes de 1px no topo e entre itens, nunca por caixas. O espaço entre os itens faz o resto.

## Elevation & Depth

O sistema é plano. A profundidade vem da foto sangrada com véu, da alternância entre as duas marés e dos filetes, não de sombra. Superfícies não flutuam: o topo e a barra do WhatsApp se separam do conteúdo por um fio de 1px, não por uma sombra difusa. O único objeto erguido é o puxador redondo do comparador, porque é a única coisa que se arrasta.

### Shadow Vocabulary
- **Fio do topo** (`box-shadow: 0 1px 0 rgba(255, 255, 255, .16)`): separa o topo sólido do conteúdo. A barra do WhatsApp usa o mesmo fio virado pra cima.
- **Puxador** (`box-shadow: 0 10px 28px rgba(0, 0, 0, .3)`): só o puxador do antes e depois.
- **Legenda sobre foto** (`text-shadow: 0 1px 2px rgba(0, 0, 0, .5)`): mantém a etiqueta "imagem ilustrativa" legível sobre qualquer parte da imagem.

### Named Rules
**A Regra do Plano por Padrão.** Nenhum card, painel ou imagem leva sombra. Sombra só existe em objeto que a mão arrasta.

## Shapes

Duas formas, com papéis separados. A pílula (raio de 99px) é a forma da ação: botões de orçamento e o rótulo "antes / depois". O círculo marca os objetos de controle (a seta de cada linha de "também limpamos", 2.75rem; o puxador do comparador, 3.5rem; o ponto de cada termo, .35rem). Tudo o que é imagem é retângulo de canto quase reto (4px), sem moldura e sem borda: a imagem presa dos serviços em 4:5, a foto do serviço no celular em 4:3, o comparador em 16:9 (4:5 no celular). As cenas da entrada são sangradas, sem canto nenhum. O anel de foco acompanha o canto de 4px.

### Named Rules
**A Regra da Pílula e do Retângulo.** Pílula pra agir, retângulo pra ver. Imagem nunca vira pílula ou círculo, e botão nunca vira retângulo.

## Components

### Buttons
Calmos e firmes: grandes o bastante pro dedo, sem sombra e sem peso extra.
- **Shape:** pílula (99px), altura mínima de 3.25rem, ícone do WhatsApp de 1.2rem antes do texto com .6rem de espaço.
- **Primary (pílula branca):** fundo branco, texto tinta, label 500 1rem, respiro de .8rem por 1.6rem. É o "Pedir orçamento" da entrada, do fecho e da barra do celular.
- **Hover / Focus:** o fundo passa pro azul claro em .3s com a saída longa; o foco é o anel azul de 2px a 3px de distância.
- **Ghost (pílula de vidro):** contorno branco a 45%, texto branco, fundo transparente; no hover enche de branco e o texto vira tinta. É a pílula do topo, compacta (2.75rem de altura, .5rem por 1.15rem, .9375rem).
- **Link com seta:** texto 500 sem sublinhado e seta de 1.1rem que anda 4px pra direita no hover (.35s). Branco no escuro, azul de leitura no claro. É a ação secundária ao lado de toda pílula ("Mandar foto do vidro", "Ligar").

### Navigation
- **Topo fixo:** transparente com texto branco sobre a entrada; vira tinta sólida com o fio claro quando a entrada termina. Links em .9375rem com opacidade .8, 1 no hover, 2rem de espaço entre eles; o menu só aparece a partir de 62rem. No celular ficam a marca e a pílula.
- **Marca do topo:** a mesma logo sem a linha "Limpeza Especializada" (2.5rem de altura no celular, 3.2rem no computador). Com o script ligado ela começa invisível e aparece quando a marca grande chega nela.

### Faixa de fatos
Quatro fatos em definição: a primeira linha no tamanho de fato (400), a segunda em texto secundário. Filete em cima e embaixo; no computador, quatro colunas com filete vertical entre elas.

### Linhas de serviço ("também limpamos")
Cada linha é um link inteiro: nome do serviço no tamanho de título, descrição em texto secundário e um círculo de 2.75rem com seta, com filete. No hover o nome anda .4rem pra direita e fica azul de leitura (.5s), e o círculo enche de tinta com a seta branca.

### Perguntas frequentes
`details` nativo com filete entre os itens. A pergunta no tamanho de pergunta, com um sinal de mais azul de leitura (1.3rem) à direita que gira 45° quando abre (.4s). A resposta em texto secundário, até 40rem.

### Entrada guiada pela rolagem (assinatura)
A entrada tem três telas de altura (300svh) e o palco fica preso na tela (100svh, mínimo 34rem) enquanto ela passa. O script escreve o progresso da rolagem (0 a 1) e cada camada lê o seu trecho:
- **0 a .34:** a marca grande (até 30rem / 76vw no celular, 26rem / 40vw no computador) anda e encolhe até cair exatamente em cima da marca do menu, com curva de ida e volta; a linha "Limpeza de vidros · Curitiba e Região" e a indicação "Role" somem antes; o véu central clareia junto.
- **0 a .5:** a cena do rapel sai do zoom de 1.08 pra 1.
- **.26 a .50:** o H1, o apoio e as ações assentam em cascata (.26, .30 e .34 de início), subindo 28px e ganhando opacidade com saída cúbica. No celular o véu de baixo escurece junto.
- **.58 a .86:** a cena da vitrine entra por dissolução lenta (de escala 1.06 pra 1), e um segundo véu escurece a esquerda e o topo, porque a vitrine é clara.
- **Fim da entrada:** o topo vira sólido.

No computador, a cena do rapel é deslocada pra direita pra que a marca e o título fiquem sobre a cidade. A segunda cena só carrega depois da primeira, e não carrega com economia de dados ou 2G. Sem script ou com "reduzir movimento", a entrada vira uma tela só, com a cena 1, o H1 e as ações à vista, sem marca central nem troca. A linha sob a marca e o "Role" pertencem a essa composição da marca e não são um estilo de rótulo pra reuso.

### Índice de serviços com imagem presa (assinatura)
A partir de 62rem, a imagem fica presa a 7.5rem do topo, em 4:5, e troca conforme o serviço que está no meio da tela (faixa central de 10% da altura). A imagem que entra dissolve em .9s e sai do zoom de 1.04 em 1.4s; os serviços fora de foco ficam em opacidade .38, e o ativo volta a 1 em .6s. Cada serviço tem o nome, um parágrafo e os termos de busca em linha, cada termo com o ponto azul. No celular a imagem desce pra dentro de cada serviço, em 4:3. A etiqueta "imagem ilustrativa" fica no canto da imagem nos dois casos.

### Comparador antes e depois (assinatura)
Duas imagens sobrepostas, a de depois recortada a partir da posição do puxador; uma linha branca de 1px e o puxador redondo branco de 3.5rem com setas. Rótulos em pílula: "antes" em véu a .7, "depois" em branco. O controle é um `range` invisível por cima de tudo (teclado e toque funcionam; o foco desenha o anel azul claro em volta). Ao entrar na tela, abre sozinho de 92% pra 50% em 1.6s com saída cúbica; com "reduzir movimento" já começa em 50%.

## Do's and Don'ts

### Do:
- **Do** pôr texto sobre cena só em cima do véu (gradiente do `veu`), nunca sobre a foto crua; o H1 continua texto real, legível na primeira tela.
- **Do** alternar as duas marés: nenhuma seção nova encosta numa vizinha com o mesmo fundo.
- **Do** separar itens com filete de 1px (`linha` no claro, `linha-clara` no escuro) e espaço, não com caixa.
- **Do** usar a pílula branca (texto tinta, hover azul claro) pra toda ação de orçamento, com o link com seta ao lado como ação secundária.
- **Do** animar só com dissolução e deslocamento curto (até 28px) na curva de saída longa `cubic-bezier(.16, 1, .3, 1)`.
- **Do** etiquetar como "imagem ilustrativa" (ou "cenas ilustrativas") toda imagem gerada por IA, em legenda de .6875rem no canto, com a sombra de texto.
- **Do** mostrar pessoas só com o uniforme real (camisa de manga longa com camuflado azul-marinho e azul-royal, calça escura, logo do rodo, capacete branco no rapel).
- **Do** garantir que sem script ou com "reduzir movimento" tudo fique à vista e funcionando, sem nenhum estado escondido.

### Don't:
- **Don't** usar o azul da logo (`azul`) como fundo de botão, de seção ou de ícone grande; ele é sinal de foco, seleção e marcador.
- **Don't** montar a vitrine do ramo: foto com faixa escura, título, botão e quatro cards com ícone.
- **Don't** pôr vídeo na primeira tela nem efeito de rolagem em toda seção; a troca guiada pela rolagem existe na entrada e no índice de serviços, e só.
- **Don't** colocar sombra em card, imagem ou painel; sombra só no puxador do comparador.
- **Don't** usar título em negrito ou peso acima de 500, nem uma segunda família.
- **Don't** escrever texto dentro de imagem; todo texto é HTML indexável.
- **Don't** emoldurar imagem com borda ou arredondar além de 4px.
