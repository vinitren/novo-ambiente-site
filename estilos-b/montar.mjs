// A B escolhida em 12/11/2026, com as ressalvas dos áudios dela e do Lucas:
//  · a entrada mostra os 4 serviços num painel com foto (o Lucas: "parece que só trabalham com rapel")
//  · barra fixa no celular, sempre visível: ligar e orçamento no WhatsApp
//  · a página inteira em 3 cores pra ela escolher (marinho "carregado", azul-clarinho "básico")
// Uso: node estilos-b/montar.mjs            → estilos-b/index.html (abre local)
//      node estilos-b/montar.mjs --aprovar  → também em aprovar/public/novo-ambiente/estilos-b/
import { cpSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FONE, wa, seta, ico, ext, publicos, servicos, passos, tambem, T, MSG, icones, planos, imgServ, parFotos, fotoRodo, acoesFecho } from '../estilos/conteudo.mjs';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');
const VINICIUS = '5541997128458';

const CORES = [
  { n: 1, nome: 'Branco e azul', frase: 'Fundo branco, o azul da logo nos detalhes e o marinho só na entrada e no fim' },
  { n: 2, nome: 'Estampa do uniforme', frase: 'A 1, com a estampa do uniforme em dois blocos' },
  { n: 3, nome: 'Marinho e branco', frase: 'Blocos marinho e branco se alternando, como o uniforme' },
];

/* o painel da entrada: o que a pessoa precisa limpar, cada linha abre o WhatsApp com a mensagem certa */
const msgDe = (id) => tambem.find((s) => s.id === id).m;
const painel = [
  { id: 'vidros', mini: 'vitrine', h: 'Vidros e janelas', p: 'Vitrine, janela alta, pé-direito alto, fachada de vidro', m: MSG.geral, alt: 'Vitrine de loja sendo limpa com rodo' },
  { id: 'fachada', mini: 'fachada-acm', h: 'Fachada', p: 'ACM, pastilha, textura e pedra', m: msgDe('fachada'), alt: 'Técnico limpando fachada de ACM' },
  { id: 'placa-solar', mini: 'placa-solar', h: 'Placa solar', p: 'Casa, comércio e indústria', m: msgDe('placa-solar'), alt: 'Técnico limpando placas solares no telhado' },
  { id: 'piso', mini: 'piso', h: 'Piso', p: 'Pisos, pedras e áreas externas', m: msgDe('piso'), alt: 'Técnico lavando piso de pedra' },
];

/* ---------- as duas entradas ---------- */
const entradaPainel = (p) => `<section class="entrada" aria-labelledby="t-entrada">
  <picture class="entrada-foto">
    <source media="(max-width: 47.99rem)" srcset="${p}img/entrada-rapel-cel-750.webp 750w, ${p}img/entrada-rapel-cel-1080.webp 1080w" sizes="100vw" width="1080" height="1920">
    <img src="${p}img/entrada-rapel-1600.webp" srcset="${p}img/entrada-rapel-1600.webp 1600w, ${p}img/entrada-rapel-2560.webp 2560w" sizes="100vw" width="2560" height="1440" alt="Técnico em rapel limpando a fachada de vidro de um prédio, com araucárias refletidas no vidro" fetchpriority="high">
  </picture>
  <div class="entrada-veu"></div>
  <div class="wrap entrada-texto eb-entrada">
    <div class="eb-titulo">
      <h1 id="t-entrada">Limpeza de vidros <em>em Curitiba</em></h1>
      <p>Do térreo ao último andar: vidros em altura com rapel, fachadas de vidro, vitrines, casas e pós-obra.</p>
    </div>
    <nav class="eb-painel" aria-labelledby="t-painel">
      <h2 id="t-painel">O que você precisa limpar?</h2>
      <p class="eb-painel-sub">Toque no serviço e a conversa abre no WhatsApp com a mensagem pronta.</p>
      <ul>
        ${painel.map((s, i) => `<li><a class="eb-linha${i === 0 ? ' eb-linha-principal' : ''}" style="--i: ${i}" href="${wa(s.m)}" data-servico="${s.id}" ${ext}>
          <span class="eb-mini"><img src="${p}img/mini-${s.mini}-160.webp" srcset="${p}img/mini-${s.mini}-160.webp 160w, ${p}img/mini-${s.mini}-320.webp 320w" sizes="3.5rem" width="160" height="160" alt=""></span>
          <span class="eb-linha-texto"><strong>${s.h}</strong><small>${s.p}</small></span>${seta}
        </a></li>`).join('\n        ')}
      </ul>
      <p class="eb-ligar">Prefere ligar? <a href="tel:+${FONE}" data-servico="ligar">(41) 99779-9646</a></p>
    </nav>
  </div>
</section>`;
const barraFixa = () => `<div class="barra-fixa">
  <a class="bf-ligar" href="tel:+${FONE}" data-servico="ligar">${ico('i-fone')}Ligar</a>
  <a class="bf-wa" href="${wa(MSG.geral)}" ${ext}><svg class="wa" aria-hidden="true"><use href="#i-wa"/></svg>Orçamento no WhatsApp</a>
</div>`;
const barraWa = () => `<div class="barra-wa"><a class="botao botao-azul" href="${wa(MSG.geral)}" ${ext}><svg class="wa" aria-hidden="true"><use href="#i-wa"/></svg>Pedir orçamento no WhatsApp</a></div>`;

/* Vidraça (12/11): sem o painel e sem a barra fixa, só com o que eles pediram. A entrada é uma fachada
   de vidro: cada painel é uma foto de serviço, o título é o painel sólido, e a esquadria é o filete marinho */
const vidros = [
  { cls: 'v-rapel', img: 'servico-altura', pos: '45% 35%', h: 'Vidros em altura e rapel', href: '#vidros', alt: 'Técnico em rapel limpando a fachada de vidro de uma torre' },
  { cls: 'v-vitrine', img: 'servico-vitrine', pos: '40% 50%', h: 'Vitrines e lojas', href: '#vidros', alt: 'Vitrine de loja sendo limpa com rodo' },
  { cls: 'v-casa', img: 'servico-sacada', pos: '50% 45%', h: 'Casas e sacadas', href: '#vidros', alt: 'Envidraçamento de sacada de apartamento sendo limpo' },
  { cls: 'v-solar', img: 'servico-placa-solar', pos: '50% 55%', h: 'Placa solar', href: '#placa-solar', alt: 'Técnico limpando placas solares no telhado de uma casa' },
  { cls: 'v-piso', img: 'servico-piso', pos: '50% 60%', h: 'Piso', href: '#piso', alt: 'Técnico lavando piso de pedra na área externa de um condomínio' },
];
const entradaVidraca = (p) => `<section class="entrada v-entrada" aria-labelledby="t-entrada">
  <div class="v-grade">
    <div class="v-titulo">
      <h1 id="t-entrada">Limpeza de vidros <em>em Curitiba</em></h1>
      <p>Do térreo ao último andar: vidros em altura com rapel, fachadas, vitrines, casas, placa solar e piso.</p>
      <a class="botao botao-azul" data-esconde-barra href="${wa(MSG.geral)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
    </div>
    ${vidros.map((v, i) => `<a class="v-painel ${v.cls}" style="--i: ${i}" href="${v.href}">
      <img src="${p}img/${v.img}.webp" alt="${v.alt}" width="1000" height="1250" style="object-position: ${v.pos}"${i === 0 ? ' fetchpriority="high"' : ''}>
      <span class="v-nome">${v.h}${seta}</span>
    </a>`).join('\n    ')}
  </div>
</section>
`;

/* Foto grande e ícones (12/11): a foto do rapel inteira, como ela gostou, e logo abaixo do título os serviços
   em ícone (o jeito da B que ela aprovou), pro Lucas: quem olha rápido vê que não é só rapel */
const iconesNovos = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-janela" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4.5 3.5h15v17h-15zM12 3.5v17M4.5 12h15"/><path d="m7 9.5 2.5-2.5M14.5 17l2.5-2.5"/></g></symbol>
  <symbol id="i-altura" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M14 21V3h7v18M2.5 21h19M16.5 6.5h2M16.5 10h2M16.5 13.5h2"/><path d="M9 3v8.5"/><circle cx="9" cy="13.2" r="1.6"/><path d="M9 14.8v3.4l-1.8 2.3M9 16.2l2.6-1.3M9 18.2l1.6 2.3"/></g></symbol>
  <symbol id="i-posobra" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3.5 4h11v4.5h-11zM14.5 6.2H18v5.3h-8.5V14"/><path d="M8.5 14h2v6.5h-2z"/></g></symbol>
</svg>`;
const servIcones = [
  { ico: 'i-janela', h: 'Vidros e janelas', href: '#vidros' },
  { ico: 'i-altura', h: 'Altura e rapel', href: '#vidros' },
  { ico: 'i-posobra', h: 'Pós-obra', href: '#vidros' },
  { ico: 'i-fachada', h: 'Fachada', href: '#fachada' },
  { ico: 'i-solar', h: 'Placa solar', href: '#placa-solar' },
  { ico: 'i-piso', h: 'Piso', href: '#piso' },
];
const entradaIcones = (p) => `${iconesNovos}
<section class="entrada" aria-labelledby="t-entrada">
  <picture class="entrada-foto">
    <source media="(max-width: 47.99rem)" srcset="${p}img/entrada-rapel-cel-750.webp 750w, ${p}img/entrada-rapel-cel-1080.webp 1080w" sizes="100vw" width="1080" height="1920">
    <img src="${p}img/entrada-rapel-1600.webp" srcset="${p}img/entrada-rapel-1600.webp 1600w, ${p}img/entrada-rapel-2560.webp 2560w" sizes="100vw" width="2560" height="1440" alt="Técnico em rapel limpando a fachada de vidro de um prédio, com araucárias refletidas no vidro" fetchpriority="high">
  </picture>
  <div class="entrada-veu"></div>
  <div class="wrap entrada-texto">
    <h1 id="t-entrada">Limpeza de vidros <em>em Curitiba</em></h1>
    <p>Do térreo ao último andar, em prédios, comércios e casas.</p>
    <a class="botao botao-claro" data-esconde-barra href="${wa(MSG.geral)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
    <nav class="i-servicos" aria-label="Serviços">
      <ul>
        ${servIcones.map((s, i) => `<li style="--i: ${i}"><a href="${s.href}"><span class="i-disco">${ico(s.ico)}</span><span class="i-nome">${s.h}</span></a></li>`).join('\n        ')}
      </ul>
    </nav>
  </div>
</section>
`;

/* um link só: as três entradas vão na mesma página, e o script do começo do <body> deixa só a escolhida.
   Trocar de entrada recarrega a página (a logo e a barra medem a entrada na abertura); trocar de cor é na hora */
const HOMES = [
  { id: 'a', nome: 'Painel de serviços', classe: 'eb-painel-home', entrada: entradaPainel, barra: barraFixa },
  { id: 'b', nome: 'Vidraça', classe: 'ev', entrada: entradaVidraca, barra: barraWa },
  { id: 'c', nome: 'Foto e ícones', classe: 'ei', entrada: entradaIcones, barra: barraWa },
];
const classes = Object.fromEntries(HOMES.map((h) => [h.id, h.classe]));

function pagina(p, css) {
  return `<!doctype html>
<html lang="pt-BR" class="sem-js estilo-b eb eb-painel-home" data-entrada="rapel" data-home="a" data-paleta="1">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Prévia · página principal | Novo Ambiente Service</title>
<meta name="theme-color" content="#08192a">
<link rel="icon" href="${p}img/icone-48.png" type="image/png">
<link rel="preload" as="image" imagesrcset="${p}img/entrada-rapel-1600.webp 1600w, ${p}img/entrada-rapel-2560.webp 2560w" imagesizes="100vw" media="(min-width: 48rem)" fetchpriority="high">
<link rel="preload" as="image" imagesrcset="${p}img/entrada-rapel-cel-750.webp 750w, ${p}img/entrada-rapel-cel-1080.webp 1080w" imagesizes="100vw" media="(max-width: 47.99rem)" fetchpriority="high">
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/instrument-sans-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/source-serif-4-latin.woff2" crossorigin>
<link rel="stylesheet" href="${p}estilo.css">
<link rel="stylesheet" href="${css}estilos/comum.css">
<link rel="stylesheet" href="${css}estilos/b.css">
<link rel="stylesheet" href="${css}estilos-b/pagina.css">
<link rel="stylesheet" href="${css}estilos-b/vidraca.css">
<link rel="stylesheet" href="${css}estilos-b/icones.css">
<script>
document.documentElement.classList.replace('sem-js', 'js');
(function () {
  var q = new URLSearchParams(location.search), h = document.documentElement, c = q.get('cor'), e = q.get('home');
  try { c = c || localStorage.getItem('na-cor'); e = e || localStorage.getItem('na-home'); } catch (x) {}
  if (/^[123]$/.test(c || '')) h.dataset.paleta = c;
  var classes = ${JSON.stringify(classes)};
  if (classes[e]) { h.classList.remove('eb-painel-home'); h.classList.add(classes[e]); h.dataset.home = e; }
})();
</script>
</head>
<body>
${icones}
<a class="pular" href="#conteudo">Pular para o conteúdo</a>

<header class="topo">
  <div class="wrap">
    <a class="marca" href="#conteudo" aria-label="Novo Ambiente Service, início">
      <span class="marca-logo">
        <img class="logo-clara" src="${p}img/logo-branca.svg" alt="Novo Ambiente Service" width="120" height="61">
        <img class="logo-escura" src="${p}img/logo-escura.svg" alt="" width="120" height="61">
      </span>
    </a>
    <nav aria-label="Principal">
      <a href="#vidros">Vidros</a><a href="#fachada">Fachada</a><a href="#placa-solar">Placa solar</a><a href="#piso">Piso</a><a href="#contato">Contato</a>
    </nav>
    <a class="botao botao-topo" href="${wa(MSG.geral)}" ${ext}>Orçamento${seta}</a>
  </div>
</header>

<main id="conteudo">
${HOMES.map((h) => `<div class="eb-home" data-home="${h.id}">${h.entrada(p)}</div>`).join('')}
<script>(function () { var e = document.documentElement.dataset.home; document.querySelectorAll('.eb-home').forEach(function (d) { if (d.dataset.home !== e) d.remove(); }); })();</script>
<section class="secao b-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-quem">${T.quem}</h2>
    </div>
    <div class="b-cartoes-3">
      ${publicos.map((q) => `<article class="b-cartao">
        <span class="b-bolinha">${ico(q.ico)}</span>
        <h3>${q.h}</h3>
        <p>${q.p}</p>
        <p class="resolve">${q.r}</p>
        <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao b-vidros" id="vidros" aria-labelledby="t-vidros">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-vidros">${T.vidros}</h2>
      <p>${T.vidrosP}</p>
    </div>
    <ul class="b-servicos" data-anima>
      ${servicos.map((s, i) => `<li class="b-cartao b-servico${i === 0 ? ' b-servico-grande' : ''}" style="--i: ${i}">
        <figure>${imgServ(s, p, i === 0 ? '(min-width: 62rem) 30vw, 100vw' : '(min-width: 62rem) 30vw, (min-width: 48rem) 50vw, 100vw')}</figure>
        <div class="b-servico-texto">
          <h3>${s.h}</h3>
          <p>${s.p}</p>
          <p class="termos">${s.t}</p>
          <a class="${i === 0 ? 'botao botao-azul' : 'link-seta'}" href="${wa(s.m)}" ${ext}>${s.l}${seta}</a>
        </div>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao b-par" aria-labelledby="t-ba">
  <div class="wrap">
    <div class="b-painel">
      <div class="b-cabeca">
        <h2 id="t-ba">${T.ba}</h2>
        <p>${T.baP}</p>
      </div>
      <div class="b-fotos" data-ba>
        ${parFotos(p).map((f) => `<figure>${f.img}<figcaption>${f.cap}</figcaption></figure>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="secao b-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-passos">${T.passos}</h2>
    </div>
    <ol class="b-trilha" data-anima>
      ${passos.map((s, i) => `<li style="--i: ${i}"><span class="b-bolinha b-bolinha-grande">${ico(s.ico)}</span><span class="b-passo">Passo ${i + 1}</span><h3>${s.h}</h3><p>${s.p}</p></li>`).join('\n      ')}
    </ol>
    <div class="b-centro"><a class="botao botao-azul" href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a></div>
  </div>
</section>
${planos.replace('<div class="ano">', '<div class="ano" data-anima>')}
<section class="secao b-tambem" aria-labelledby="t-tambem">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-tambem">${T.tambem}</h2>
    </div>
    <ul class="b-cartoes-3">
      ${tambem.map((s) => `<li id="${s.id}" class="b-cartao b-cartao-link"><a href="${wa(s.m)}" ${ext}><span class="b-bolinha">${ico(s.ico)}</span><h3>${s.h}</h3><p>${s.p}</p><span class="link-seta">Pedir orçamento${seta}</span></a></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao b-fecho" aria-labelledby="t-fecho">
  <div class="wrap">
    <div class="b-fecho-painel">
      <figure>${fotoRodo(p, '(min-width: 62rem) 45vw, 100vw')}</figure>
      <div class="b-fecho-texto">
        <h2 id="t-fecho">${T.fecho}</h2>
        <p>${T.fechoP}</p>
        ${acoesFecho('botao-claro')}
      </div>
    </div>
  </div>
</section>
</main>

<footer class="rodape" id="contato">
  <div class="wrap">
    <img class="rodape-logo-escura" src="${p}img/logo-escura.svg" alt="Novo Ambiente Service" width="150" height="76" loading="lazy" decoding="async">
    <img class="rodape-logo-clara" src="${p}img/logo-branca.svg" alt="Novo Ambiente Service" width="150" height="76" loading="lazy" decoding="async">
    <address>
      <strong>Novo Ambiente Service</strong><br>
      Limpeza de vidros em Curitiba e Região Metropolitana
    </address>
    <ul>
      <li><a href="${wa(MSG.geral)}" ${ext}>WhatsApp</a></li>
      <li><a href="tel:+${FONE}">(41) 99779-9646</a></li>
      <li><a href="mailto:contato@novoambienteservice.com.br">contato@novoambienteservice.com.br</a></li>
      <li><a href="https://www.instagram.com/novoambienteservice/" ${ext}>@novoambienteservice</a></li>
    </ul>
    <p class="previa">Prévia da página principal, feita pela Trentini Digital. Fotos ilustrativas.</p>
  </div>
</footer>

${HOMES.map((h) => `<div class="eb-home-barra" data-home="${h.id}">${h.barra(p)}</div>`).join('')}
<script>(function () { var e = document.documentElement.dataset.home; document.querySelectorAll('.eb-home-barra').forEach(function (d) { if (d.dataset.home !== e) d.remove(); }); })();</script>
<div class="eb-cor" role="group" aria-label="Escolher a entrada e a cor da página">
  <button type="button" class="eb-cor-abrir" aria-expanded="false">Entrada <b data-mostra="home">A</b> · Cor <b data-mostra="cor">1</b></button>
  <div class="eb-cor-linha"><span class="eb-cor-rotulo">Entrada</span>
  ${HOMES.map((h) => `<button type="button" data-home="${h.id}" aria-pressed="false" title="${h.nome}"><span class="so-leitor">Entrada </span>${h.id.toUpperCase()}</button>`).join('')}</div>
  <div class="eb-cor-linha"><span class="eb-cor-rotulo">Cor</span>
  ${CORES.map((c) => `<button type="button" data-cor="${c.n}" aria-pressed="false" title="${c.nome}: ${c.frase}"><span class="so-leitor">Cor </span>${c.n}</button>`).join('')}</div>
  <a class="eb-cor-responder" href="#" data-vinicius="${VINICIUS}" ${ext}>Escolher</a>
</div>
<script>window.EB_CORES = ${JSON.stringify(CORES.map(({ n, nome }) => ({ n, nome })))}; window.EB_HOMES = ${JSON.stringify(HOMES.map(({ id, nome }) => ({ id, nome })))};</script>

<script src="${p}blindagem.js" defer></script>
<script src="${p}script.js" defer></script>
<script src="${css}estilos-b/pagina.js" defer></script>
</body>
</html>
`;
}

writeFileSync(join(aqui, 'index.html'), pagina('../', '../'));
for (const velha of ['vidraca', 'icones']) rmSync(join(aqui, velha), { recursive: true, force: true });
console.log('Montada em', join(aqui, 'index.html'), '(as três entradas, ?home=a|b|c)');

if (process.argv.includes('--aprovar')) {
  const base = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente');
  const destino = join(base, 'home');
  /* as versões soltas de antes saem: o link é um só */
  for (const velha of ['estilos-b', 'vidraca', 'icones', 'home']) rmSync(join(base, velha), { recursive: true, force: true });
  for (const d of ['img', 'estilos', 'estilos-b']) mkdirSync(join(destino, 'assets', d), { recursive: true });
  cpSync(join(raiz, 'fonts'), join(destino, 'assets', 'fonts'), { recursive: true });
  for (const f of ['estilo.css', 'script.js', 'blindagem.js']) cpSync(join(raiz, f), join(destino, 'assets', f));
  for (const f of ['comum.css', 'b.css']) cpSync(join(raiz, 'estilos', f), join(destino, 'assets', 'estilos', f));
  for (const f of ['pagina.css', 'pagina.js', 'vidraca.css', 'icones.css']) cpSync(join(aqui, f), join(destino, 'assets', 'estilos-b', f));
  const usadas = /^(entrada-rapel|entrada-janela|servico-|mini-|vidro-|estampa-|logo|icone)/;
  for (const f of readdirSync(join(raiz, 'img'))) {
    if (usadas.test(f) && !f.endsWith('.json')) cpSync(join(raiz, 'img', f), join(destino, 'assets', 'img', f));
  }
  writeFileSync(join(destino, 'index.html'), pagina('assets/', 'assets/'));
  console.log('Publicável em', destino);
}
