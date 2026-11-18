// O site inteiro da Novo Ambiente (15/11/2026): a home aprovada (Painel · Uniforme · Cartões), as 4 páginas de
// serviço e a de contato, em dist/, pronto pra Cloudflare Pages. Os endereços são os do site antigo.
// Uso: node site/montar.mjs              → dist/ como prévia (noindex, com a linha de prévia no rodapé)
//      node site/montar.mjs --producao   → dist/ pra ir pro ar (indexável, sitemap, robots e 301)
//      node site/montar.mjs --aprovar    → também em aprovar/public/novo-ambiente/site/ (sempre prévia)
import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { wa, seta, ico, ext, publicos, passos, tambem, MSG, icones, planos, fotoRodo } from '../estilos/conteudo.mjs';
import { painel, barraFixa } from '../estilos-b/montar.mjs';
import { corpoCartoes, iconesNovos } from '../estilos-b/corpos.mjs';
import { SERVICOS, CONTATO, SEGURANCA, ELOGIOS } from './paginas.mjs';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');
const DOMINIO = 'https://novoambienteservice.com.br';
const PRODUCAO = process.argv.includes('--producao');

/* ícones que só as páginas novas usam */
const iconesSite = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-mais" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-pedra" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3 20.5h18M4.5 20.5l2-7 4-2.5 3.5 1.5 3 4 1.5 4"/><path d="m10.5 11-1-4.5 3.5-3 4 2.5-1 5.5-2.5 1"/></g></symbol>
  <symbol id="i-email" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3.5 5.5h17v13h-17z"/><path d="m3.5 6 8.5 7 8.5-7"/></g></symbol>
  <symbol id="i-insta" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></g></symbol>
  <symbol id="i-portao" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.5 21h19M4 21V6.5M20 21V6.5M3 6.5h3M18 6.5h3"/><path d="M6.5 9h11M6.5 18h11M8.5 9v9M11 9v9M13.5 9v9M16 9v9"/></g></symbol>
  <symbol id="i-industria" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M2.5 21h19M3.5 21V11l5 3v-3l5 3v-3l5 3V21"/><path d="M17 12.7V3.5h2.5V14"/><path d="M6.5 17.5h2M11 17.5h2M15.5 17.5h2"/></g></symbol>
  <symbol id="i-corda" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"><path d="M12 2.5v6"/><path d="M9.5 8.5h5l-.8 4h-3.4z"/><path d="M12 12.5c0 2-2.5 2.5-2.5 4.5s2.5 2.5 2.5 4.5"/><path d="M8 8.5a4 4 0 0 1 8 0"/></g></symbol>
  <symbol id="i-mapa" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></g></symbol>
</svg>`;

/* os endereços, relativos a quem pede (p = '' na home, '../' nas outras) */
const rota = (p, id) => (id === 'inicio' ? (p || './') : `${p}${id === 'contato' ? 'contato' : SERVICOS.find((s) => s.id === id).slug}/`);
const rotas = (p) => Object.fromEntries([...SERVICOS.map((s) => [s.id, rota(p, s.id)]), ['contato', rota(p, 'contato')]]);

const EMPRESA = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': `${DOMINIO}/#empresa`, name: 'Novo Ambiente Service',
  description: 'Empresa de limpeza de vidros em Curitiba e Região Metropolitana: vidros em altura com rapel, fachadas de vidro, vitrines, vidros residenciais e pós-obra. Serviço pontual ou plano recorrente, com visita técnica presencial. Também limpeza de fachada, placa solar e piso.',
  telephone: '+55 41 99779-9646', email: 'contato@novoambienteservice.com.br', url: `${DOMINIO}/`, image: `${DOMINIO}/img/og.jpg`, logo: `${DOMINIO}/img/logo.svg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Curitiba', addressRegion: 'PR', addressCountry: 'BR' },
  areaServed: [{ '@type': 'City', name: 'Curitiba' }, { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Curitiba' }],
  sameAs: ['https://www.instagram.com/novoambienteservice/'],
  hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Serviços de limpeza', itemListElement: SERVICOS.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.h1.replace(/<[^>]+>/g, ''), url: `${DOMINIO}/${s.slug}/` } })) },
};
const ld = (o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`;
const semTag = (t) => t.replace(/<[^>]+>/g, '');

function cabeca(p, { titulo, descricao, url, classe, preload, schemas = [] }) {
  return `<!doctype html>
<html lang="pt-BR" class="sem-js estilo-b eb ${classe} cc" data-paleta="2" data-corpo="a">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
${PRODUCAO ? '' : '<meta name="robots" content="noindex, nofollow">\n'}<title>${titulo}</title>
<meta name="description" content="${descricao}">
<link rel="canonical" href="${DOMINIO}${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Novo Ambiente Service">
<meta property="og:url" content="${DOMINIO}${url}">
<meta property="og:title" content="${titulo.split(' | ')[0]}">
<meta property="og:description" content="${descricao}">
<meta property="og:image" content="${DOMINIO}/img/og.jpg">
<meta name="theme-color" content="#08192a">
<link rel="icon" href="${p}img/icone-48.png" type="image/png">
<link rel="apple-touch-icon" href="${p}img/icone-180.png">
${preload}
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/instrument-sans-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/source-serif-4-latin.woff2" crossorigin>
<link rel="stylesheet" href="${p}site.css">
<script>document.documentElement.classList.replace('sem-js', 'js');</script>
${[ld(EMPRESA), ...schemas.map(ld)].join('\n')}
</head>
<body>
${icones}
${iconesNovos}
${iconesSite}
<a class="pular" href="#conteudo">Pular para o conteúdo</a>
`;
}

const topo = (p, atual) => `<header class="topo">
  <div class="wrap">
    <a class="marca" href="${rota(p, 'inicio')}" aria-label="Novo Ambiente Service, início">
      <span class="marca-logo">
        <img class="logo-clara" src="${p}img/logo-branca.svg" alt="Novo Ambiente Service" width="120" height="61">
        <img class="logo-escura" src="${p}img/logo-escura.svg" alt="" width="120" height="61">
      </span>
    </a>
    <nav aria-label="Principal">
      ${[...SERVICOS.map((s) => [s.id, s.menu]), ['contato', 'Contato']].map(([id, nome]) => `<a href="${rota(p, id)}"${id === atual ? ' aria-current="page"' : ''}>${nome}</a>`).join('')}
    </nav>
    <a class="botao botao-topo" href="${wa(MSG.topo)}" ${ext}>Orçamento${seta}</a>
  </div>
</header>
`;

const rodape = (p) => `<footer class="rodape" id="contato">
  <div class="wrap">
    <img class="rodape-logo-escura" src="${p}img/logo-escura.svg" alt="Novo Ambiente Service" width="150" height="76" loading="lazy" decoding="async">
    <img class="rodape-logo-clara" src="${p}img/logo-branca.svg" alt="Novo Ambiente Service" width="150" height="76" loading="lazy" decoding="async">
    <address>
      <strong>Novo Ambiente Service</strong><br>
      Limpeza de vidros em Curitiba e Região Metropolitana
    </address>
    <ul>
      ${SERVICOS.map((s) => `<li><a href="${rota(p, s.id)}">${s.menu === 'Vidros' ? 'Limpeza de vidros' : `Limpeza de ${s.menu.toLowerCase()}`}</a></li>`).join('\n      ')}
    </ul>
    <ul>
      <li><a href="${wa(MSG.topo)}" ${ext}>WhatsApp (41) 99779-9646</a></li>
      <li><a href="mailto:contato@novoambienteservice.com.br">contato@novoambienteservice.com.br</a></li>
      <li><a href="https://www.instagram.com/novoambienteservice/" ${ext}>@novoambienteservice</a></li>
    </ul>
    ${PRODUCAO ? '' : '<p class="previa">Prévia do site, feita pela Trentini Digital. Fotos ilustrativas.</p>'}
  </div>
</footer>
`;

const scripts = (p) => `<script src="${p}blindagem.js" defer></script>
<script src="${p}script.js" defer></script>
<script src="${p}estilos-b/pagina.js" defer></script>
</body>
</html>
`;

const barra = (m) => `<div class="barra-fixa">
  <a class="bf-wa" href="${wa(m)}" ${ext}><svg class="wa" aria-hidden="true"><use href="#i-wa"/></svg>Orçamento no WhatsApp</a>
</div>`;

/* uma linha do painel: foto pequena ou ícone, nome, detalhe e a seta; abre o WhatsApp com a mensagem dela */
const linha = (p, l, i) => `<li><a class="eb-linha${i === 0 ? ' eb-linha-principal' : ''}" style="--i: ${i}" href="${wa(l.m)}" ${ext}>
          ${l.ico ? `<span class="eb-mini eb-mini-ico">${ico(l.ico)}</span>` : `<span class="eb-mini"><img src="${p}img/mini-${l.mini}-160.webp" srcset="${p}img/mini-${l.mini}-160.webp 160w, ${p}img/mini-${l.mini}-320.webp 320w" sizes="3.5rem" width="160" height="160" alt=""></span>`}
          <span class="eb-linha-texto"><strong>${l.h}</strong><small>${l.p}</small></span>${seta}
        </a></li>`;

/* ---------------------------------------------------------------- os blocos novos (17/11) */
const seguranca = () => `<section class="secao sv-seguranca" aria-labelledby="t-seguranca">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-seguranca">${SEGURANCA.h}</h2>
      <p>${SEGURANCA.p}</p>
    </div>
    <ul class="b-cartoes-3">
      ${SEGURANCA.itens.map((c) => `<li class="b-cartao"><span class="b-bolinha">${ico(c.ico)}</span><h3>${c.h}</h3><p>${c.p}</p></li>`).join('\n      ')}
    </ul>
  </div>
</section>
`;
/* 18/11: o "G" do Google (as 4 cores oficiais) marca de onde vem a avaliação; avatar com a inicial, como no Google */
const G_LOGO = `<svg class="gg-g" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>`;
const SETA_RETA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
const GG_CORES = ['#5c6bc0', '#00897b', '#8e24aa', '#f4511e', '#3949ab', '#6d4c41', '#039be5', '#7cb342', '#c2185b', '#546e7a'];
const elogios = () => `<section class="secao sv-elogios" aria-labelledby="t-elogios">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-elogios">${ELOGIOS.h}</h2>
      <p>${ELOGIOS.p}</p>
    </div>
    <div class="gg-barra">
      <a class="gg-resumo" href="${ELOGIOS.perfil}" ${ext}>
        ${G_LOGO}
        <span class="gg-nota">${ELOGIOS.nota}</span>
        <span class="gg-estrelas" role="img" aria-label="Nota ${ELOGIOS.nota} de 5">★★★★★</span>
        <span class="gg-total">${ELOGIOS.total} avaliações no Google</span>
        <span class="gg-ver">Ver no Google${seta}</span>
      </a>
      <div class="gg-setas" hidden>
        <button type="button" class="gg-seta gg-ant" aria-label="Avaliação anterior">${SETA_RETA}</button>
        <button type="button" class="gg-seta gg-prox" aria-label="Próxima avaliação">${SETA_RETA}</button>
      </div>
    </div>
    <ul class="gg-lista" tabindex="0" aria-label="Avaliações de clientes no Google">
      ${ELOGIOS.itens.map((a, i) => `<li class="gg-cartao">
        <div class="gg-alto"><span class="gg-estrelas" role="img" aria-label="5 estrelas">★★★★★</span>${G_LOGO}</div>
        <blockquote><p>${a.t}</p></blockquote>
        <div class="gg-quem"><span class="gg-avatar" style="--c: ${GG_CORES[i % GG_CORES.length]}" aria-hidden="true">${a.n[0]}</span>
          <span class="gg-nome">${a.n}<small>${a.cargo ? a.cargo + ' · ' : ''}Avaliação no Google</small></span></div>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>
`;

/* ---------------------------------------------------------------- home */
/* 17/11: o topo passa a ser a vitrine (pedido do Lucas). A foto deles é em pé (1024x1536): no celular ela entra
   inteira; no computador entra a mesma cena estendida pra 16:9 (Nano Banana, logo real colada depois), em tela
   inteira, com título e painel empilhados à esquerda e o técnico à direita, sem espelhar (tem a logo nas costas). O subtítulo é o dela (1a frase); a 2a abre a seção de vidros */
const SUB_HOME = 'Do térreo às grandes alturas: limpeza especializada de vidros residenciais, vitrines e fachadas de vidro.';
const INTRO_VIDROS = 'Atendemos locais de difícil acesso com técnicas de rapel e extensores, além da remoção de resíduos de obra em superfícies de vidro. Da sacada à pele de vidro de um prédio comercial, em Curitiba e na Região Metropolitana, com orçamento por foto ou visita técnica presencial.';
const ALT_VITRINE = 'Técnico da Novo Ambiente, de costas, limpando com haste e rodo a vitrine de uma loja de roupas';
const entradaHome = (p) => `<section class="entrada" aria-labelledby="t-entrada" style="--pos: 45% 30%">
  <picture class="entrada-foto">
    <source media="(max-width: 61.99rem)" srcset="${p}img/entrada-vitrine-750.webp 750w, ${p}img/entrada-vitrine-1080.webp 1024w" sizes="100vw" width="1024" height="1536">
    <img src="${p}img/entrada-vitrine-larga-1600.webp" srcset="${p}img/entrada-vitrine-larga-1600.webp 1600w, ${p}img/entrada-vitrine-larga-2560.webp 2560w" sizes="100vw" width="2560" height="1429" alt="${ALT_VITRINE}" fetchpriority="high">
  </picture>
  <div class="entrada-veu"></div>
  <div class="wrap entrada-texto eb-entrada">
    <div class="eb-titulo">
      <h1 id="t-entrada">Limpeza de vidros <em>em Curitiba</em></h1>
      <p>${SUB_HOME}</p>
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
      <p class="eb-ligar">Outro serviço? <a href="${wa(MSG.topo)}" data-servico="outro" ${ext}>Chame no WhatsApp</a></p>
    </nav>
  </div>
</section>`;

function home() {
  const p = '';
  const preload = `<link rel="preload" as="image" imagesrcset="img/entrada-vitrine-larga-1600.webp 1600w, img/entrada-vitrine-larga-2560.webp 2560w" imagesizes="100vw" media="(min-width: 62rem)" fetchpriority="high">
<link rel="preload" as="image" imagesrcset="img/entrada-vitrine-750.webp 750w, img/entrada-vitrine-1080.webp 1024w" imagesizes="100vw" media="(max-width: 61.99rem)" fetchpriority="high">`;
  const corpo = corpoCartoes(p, rotas(p));
  const vidrosP = /(<h2 id="t-vidros">[\s\S]*?<\/h2>\s*<p>)[\s\S]*?(<\/p>)/;
  if (!vidrosP.test(corpo) || !corpo.includes('<section class="secao b-passos"')) throw new Error('home: o corpo mudou, conferir os encaixes de 17/11');
  const corpoNovo = corpo.replace(vidrosP, `$1${INTRO_VIDROS}$2`).replace('<section class="secao b-passos"', `${elogios()}<section class="secao b-passos"`);
  return cabeca(p, {
    titulo: 'Limpeza de Vidros em Curitiba e Região | Novo Ambiente Service',
    descricao: 'Limpeza de vidros em Curitiba: vidros em altura com rapel, fachadas de vidro, vitrines, sacadas e pós-obra. Também fachada, placa solar e piso. Orçamento pelo WhatsApp.',
    url: '/', classe: 'eb-painel-home sv-home', preload,
  }) + topo(p, 'inicio') + `<main id="conteudo">
${entradaHome(p)}
${corpoNovo}
</main>
` + rodape(p) + barraFixa() + '\n' + scripts(p);
}

/* ---------------------------------------------------------------- serviço */
function servico(s) {
  const p = '../';
  const outros = tambem.filter((t) => t.id !== s.id);
  const vidro = s.id === 'vidros';
  const meusPassos = passos.map((x) => ({ ...x, p: vidro ? x.p : x.p.replace('Uma foto do vidro', 'Uma foto').replace('cada tipo de vidro', 'cada serviço') }));
  const preload = `<link rel="preload" as="image" href="${p}img/${s.foto.img}.webp" fetchpriority="high">`;
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: s.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.r } })) };
  const trilhaLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${DOMINIO}/` },
    { '@type': 'ListItem', position: 2, name: semTag(s.h1), item: `${DOMINIO}/${s.slug}/` }] };
  const servicoLd = { '@context': 'https://schema.org', '@type': 'Service', name: semTag(s.h1), serviceType: semTag(s.h1), url: `${DOMINIO}/${s.slug}/`, description: s.descricao,
    provider: { '@id': `${DOMINIO}/#empresa` }, areaServed: EMPRESA.areaServed };

  const tipos = s.tipos ? `<ul class="b-servicos" data-anima>
      ${s.tipos.map((t, i) => { const grande = i === 0 && !s.iguais; return `<li class="b-cartao b-servico${grande ? ' b-servico-grande' : ''}" style="--i: ${i}">
        <figure>${t.wide
          ? `<img class="largo" src="${p}img/${t.img}.webp" srcset="${p}img/${t.img}.webp 1000w, ${p}img/${t.img.replace('-1000', '-1600')}.webp 1600w" sizes="(min-width: 62rem) 50vw, 100vw" alt="${t.alt}" width="1000" height="563" loading="lazy" decoding="async" style="object-position: ${t.pos}">`
          : `<img src="${p}img/${t.img}.webp" alt="${t.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${t.pos}">`}</figure>
        <div class="b-servico-texto">
          <h3>${t.h}</h3>
          <p>${t.p}</p>
          <p class="termos">${t.t}</p>
          <a class="${grande || s.iguais ? 'botao botao-azul' : 'link-seta'}" href="${wa(t.m)}" ${ext}>${t.l}${seta}</a>
        </div>
      </li>`; }).join('\n      ')}
    </ul>` : `<ul class="sv-cartoes-4" data-anima>
      ${s.icones.map((c, i) => `<li class="b-cartao" style="--i: ${i}"><span class="b-bolinha">${ico(c.ico)}</span><h3>${c.h}</h3><p>${c.p}</p></li>`).join('\n      ')}
    </ul>${s.completa ? `
    <div class="b-cartao b-servico b-servico-grande sv-completa">
      <figure><img src="${p}img/${s.completa.img}.webp" alt="${s.completa.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${s.completa.pos}"></figure>
      <div class="b-servico-texto">
        <h3>${s.completa.h}</h3>
        <p>${s.completa.p}</p>
        <p class="termos">${s.completa.t}</p>
        <a class="botao botao-azul" href="${wa(s.completa.m)}" ${ext}>${s.completa.l}${seta}</a>
      </div>
    </div>` : `
    <div class="b-centro sv-cta"><a class="botao botao-azul" href="${wa(s.fecho.m)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a></div>`}`;

  /* 18/11: sinais de que precisa limpar + por que não fazer sozinho (placa solar e piso) */
  const sinais = s.sinais ? `<section class="secao sv-sinais" aria-labelledby="t-sinais">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-sinais">${s.sinais.h}</h2>
      <p>${s.sinais.p}</p>
    </div>
    <ol class="sv-sinais-lista sv-sinais-${s.sinais.itens.length}">
      ${s.sinais.itens.map((x) => `<li><h3>${x.h}</h3><p>${x.p}</p></li>`).join('\n      ')}
    </ol>
    <div class="sv-sozinho">
      <h3>${s.sinais.sozinho.h}</h3>
      <p>${s.sinais.sozinho.p}</p>
      <a class="botao botao-azul" href="${wa(s.mFoto)}" ${ext}>${s.botaoFoto}${seta}</a>
    </div>
  </div>
</section>
` : '';
  const quem = s.publicos ? publicos : s.publicosEspecificos;
  const par = s.par ? `<section class="secao b-par" aria-labelledby="t-ba">
  <div class="wrap">
    <div class="b-painel">
      <div class="b-cabeca">
        <h2 id="t-ba">${s.par.h}</h2>
        <p>${s.par.p}</p>
      </div>
      <div class="b-fotos" data-ba>
        ${[[s.par.a, 'Antes', s.par.alts[0]], [s.par.d, 'Depois', s.par.alts[1]]].map(([n, cap, alt]) => `<figure><img src="${p}img/${n}-${s.par.larguras[1]}.webp" srcset="${p}img/${n}-${s.par.larguras[0]}.webp ${s.par.larguras[0]}w, ${p}img/${n}-${s.par.larguras[1]}.webp ${s.par.larguras[1]}w" sizes="(min-width: 48rem) 50vw, 100vw" width="1600" height="900" alt="${alt}" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>
` : '';
  const meusPlanos = s.planos ? planos
    .replace('<div class="ano">', '<div class="ano" data-anima>')
    .replace(wa(MSG.plano), wa(s.planos.m))
    .replace('o vidro <em>sempre em dia</em>', vidro ? 'o vidro <em>sempre em dia</em>' : 'a placa <em>sempre em dia</em>')
    .replace('avaliamos o vidro com você', vidro ? 'avaliamos o vidro com você' : 'avaliamos as placas com você') : '';
  const fotoFecho = vidro ? fotoRodo(p, '(min-width: 62rem) 45vw, 100vw')
    : `<img src="${p}img/${s.foto.img}.webp" width="1000" height="1250" alt="${s.foto.alt}" loading="lazy" decoding="async" style="object-position: ${s.foto.pos}">`;

  return cabeca(p, { titulo: s.titulo, descricao: s.descricao, url: `/${s.slug}/`, classe: 'sv', preload, schemas: [servicoLd, trilhaLd, faqLd] })
    + topo(p, s.id) + `<main id="conteudo">
<section class="entrada" aria-labelledby="t-entrada" style="--pos: ${s.foto.pos}">
  <picture class="entrada-foto">
    <img src="${p}img/${s.foto.img}.webp" width="1000" height="1250" alt="${s.foto.alt}" fetchpriority="high">
  </picture>
  <div class="entrada-veu"></div>
  <div class="wrap entrada-texto eb-entrada">
    <div class="eb-titulo">
      <nav class="sv-trilha" aria-label="Você está em"><a href="${rota(p, 'inicio')}">Início</a><span aria-hidden="true">/</span><span aria-current="page">${s.menu}</span></nav>
      <h1 id="t-entrada">${s.h1}</h1>
      <p>${s.sub}</p>
    </div>
    <nav class="eb-painel" aria-labelledby="t-painel">
      <h2 id="t-painel">${s.pergunta}</h2>
      <p class="eb-painel-sub">Toque e a conversa abre no WhatsApp com a mensagem pronta.</p>
      <ul>
        ${s.linhas.map((l, i) => linha(p, l, i)).join('\n        ')}
      </ul>
      <p class="eb-ligar">Outro serviço? <a href="${wa(MSG.topo)}" ${ext}>Chame no WhatsApp</a></p>
    </nav>
  </div>
</section>

<section class="secao b-vidros sv-tipos" aria-labelledby="t-tipos">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-tipos">${s.tiposTitulo}</h2>
      <p>${s.tiposP}</p>
    </div>
    ${tipos}
  </div>
</section>
${sinais}
<section class="secao b-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <div class="b-cabeca"><h2 id="t-quem">Pra quem <em>limpamos</em></h2></div>
    <div class="b-cartoes-3${quem.length === 4 ? ' sv-quem-4' : ''}">
      ${quem.map((q) => `<article class="b-cartao">
        <span class="b-bolinha">${ico(q.ico)}</span>
        <h3>${q.h}</h3>
        <p>${q.p}</p>${q.r ? `\n        <p class="resolve">${q.r}</p>` : ''}
        <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

${s.seguranca ? seguranca() : ''}${par}${elogios()}<section class="secao b-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <div class="b-cabeca"><h2 id="t-passos">Como <em>funciona</em></h2></div>
    <ol class="b-trilha" data-anima>
      ${meusPassos.map((x, i) => `<li style="--i: ${i}"><span class="b-bolinha b-bolinha-grande">${ico(x.ico)}</span><span class="b-passo">Passo ${i + 1}</span><h3>${x.h}</h3><p>${x.p}</p></li>`).join('\n      ')}
    </ol>
    <div class="b-centro"><a class="botao botao-azul" href="${wa(s.mFoto)}" ${ext}>${s.botaoFoto}${seta}</a></div>
  </div>
</section>
${meusPlanos}
<section class="secao sv-faq" aria-labelledby="t-faq">
  <div class="wrap">
    <div class="b-cabeca"><h2 id="t-faq">Perguntas <em>frequentes</em></h2></div>
    <div class="faq">
      ${s.faq.map((f) => `<details><summary>${f.q}<svg aria-hidden="true"><use href="#i-mais"/></svg></summary><p>${f.r}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao b-tambem" aria-labelledby="t-tambem">
  <div class="wrap">
    <div class="b-cabeca"><h2 id="t-tambem">Também <em>limpamos</em></h2></div>
    <ul class="b-cartoes-3">
      ${(vidro ? outros : [{ id: 'vidros', ico: 'i-janela', h: 'Vidros', p: 'Vidros em altura, fachadas de vidro, vitrines, casas e pós-obra.' }, ...outros]).slice(0, 3)
        .map((t) => `<li class="b-cartao b-cartao-link"><a href="${rota(p, t.id)}"><span class="b-bolinha">${ico(t.ico)}</span><h3>${t.h}</h3><p>${t.p}</p><span class="link-seta">Ver o serviço${seta}</span></a></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao b-fecho" aria-labelledby="t-fecho">
  <div class="wrap">
    <div class="b-fecho-painel">
      <figure>${fotoFecho}</figure>
      <div class="b-fecho-texto">
        <h2 id="t-fecho">${s.fecho.h}</h2>
        <p>${s.fecho.p}</p>
        <div class="acoes" data-esconde-barra>
          <a class="botao botao-claro" href="${wa(s.fecho.m)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
          <a class="link-seta" href="${wa(MSG.visita)}" ${ext}>Agendar visita técnica${seta}</a>
        </div>
      </div>
    </div>
  </div>
</section>
</main>
` + rodape(p) + barra(s.fecho.m) + '\n' + scripts(p);
}

/* ---------------------------------------------------------------- contato */
function contato() {
  const p = '../';
  const c = CONTATO;
  const trilhaLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${DOMINIO}/` }, { '@type': 'ListItem', position: 2, name: 'Contato', item: `${DOMINIO}/contato/` }] };
  return cabeca(p, { titulo: c.titulo, descricao: c.descricao, url: '/contato/', classe: 'ct', preload: '', schemas: [trilhaLd] })
    + topo(p, 'contato') + `<main id="conteudo">
<section class="entrada" aria-labelledby="t-entrada">
  <div class="wrap entrada-texto eb-entrada">
    <div class="eb-titulo">
      <nav class="sv-trilha" aria-label="Você está em"><a href="${rota(p, 'inicio')}">Início</a><span aria-hidden="true">/</span><span aria-current="page">Contato</span></nav>
      <h1 id="t-entrada">${c.h1}</h1>
      <p>${c.sub}</p>
    </div>
    <nav class="eb-painel" aria-labelledby="t-painel">
      <h2 id="t-painel">O que você precisa?</h2>
      <p class="eb-painel-sub">Toque e a conversa abre no WhatsApp com a mensagem pronta.</p>
      <ul>
        ${c.linhas.map((l, i) => linha(p, l, i)).join('\n        ')}
      </ul>
      <ul>
        ${c.extras.map((l, i) => linha(p, l, i + 1)).join('\n        ')}
      </ul>
    </nav>
  </div>
</section>

<section class="secao ct-dados" aria-labelledby="t-dados">
  <div class="wrap">
    <div class="b-cabeca"><h2 id="t-dados">Outros <em>jeitos de falar</em></h2></div>
    <div class="b-cartoes-3">
      <article class="b-cartao"><span class="b-bolinha"><svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg></span><h3>WhatsApp</h3><p><a href="${wa(MSG.topo)}" ${ext}>(41) 99779-9646</a></p><p>Atendemos pelo WhatsApp, por mensagem.</p></article>
      <article class="b-cartao"><span class="b-bolinha">${ico('i-email')}</span><h3>E-mail</h3><p><a href="mailto:contato@novoambienteservice.com.br">contato@novoambienteservice.com.br</a></p></article>
      <article class="b-cartao"><span class="b-bolinha">${ico('i-insta')}</span><h3>Instagram</h3><p><a href="https://www.instagram.com/novoambienteservice/" ${ext}>@novoambienteservice</a></p></article>
    </div>
    <div class="b-centro sv-cta"><p class="ct-area">${ico('i-mapa')} Atendemos Curitiba e a Região Metropolitana.</p></div>
  </div>
</section>
</main>
` + rodape(p) + barra(MSG.topo) + '\n' + scripts(p);
}

/* ---------------------------------------------------------------- saída */
function montar(destino, producao) {
  rmSync(destino, { recursive: true, force: true });
  mkdirSync(destino, { recursive: true });
  writeFileSync(join(destino, 'index.html'), home());
  for (const s of SERVICOS) { mkdirSync(join(destino, s.slug), { recursive: true }); writeFileSync(join(destino, s.slug, 'index.html'), servico(s)); }
  mkdirSync(join(destino, 'contato'), { recursive: true });
  writeFileSync(join(destino, 'contato', 'index.html'), contato());
  /* os arquivos de apoio, na mesma estrutura do repositório (os url() dos CSS contam com ela) */
  for (const d of ['img', 'fonts', 'estilos', 'estilos-b', 'site']) mkdirSync(join(destino, d), { recursive: true });
  cpSync(join(raiz, 'fonts'), join(destino, 'fonts'), { recursive: true });
  for (const f of ['estilo.css', 'script.js', 'blindagem.js']) cpSync(join(raiz, f), join(destino, f));
  for (const f of ['comum.css', 'b.css']) cpSync(join(raiz, 'estilos', f), join(destino, 'estilos', f));
  for (const f of ['pagina.css', 'pagina.js']) cpSync(join(raiz, 'estilos-b', f), join(destino, 'estilos-b', f));
  cpSync(join(aqui, 'servico.css'), join(destino, 'site', 'servico.css'));
  /* 18/11: os 5 CSS viram um site.css enxuto na raiz (uma requisição só segurando a primeira pintura no 4G).
     Mesma ordem de antes; os url() de estilos-b/ ("../img/") passam a valer a partir da raiz */
  const css = [join(raiz, 'estilo.css'), join(raiz, 'estilos', 'comum.css'), join(raiz, 'estilos', 'b.css'), join(raiz, 'estilos-b', 'pagina.css'), join(aqui, 'servico.css')]
    .map((f) => readFileSyncUtf(f).replaceAll('url("../img/', 'url("img/')).join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s*/g, '\n').replace(/\n+/g, '\n');
  writeFileSync(join(destino, 'site.css'), css);
  const html = readdirSync(destino, { recursive: true }).filter((f) => String(f).endsWith('.html')).map((f) => String(f));
  const tudo = html.map((f) => readFileSyncUtf(join(destino, f))).join('\n') + readFileSyncUtf(join(raiz, 'estilos-b', 'pagina.css'));
  for (const f of readdirSync(join(raiz, 'img'))) {
    if (f.endsWith('.json')) continue;
    if (tudo.includes(f) || /^(logo|icone|og)/.test(f)) cpSync(join(raiz, 'img', f), join(destino, 'img', f));
  }
  if (producao) {
    const urls = ['/', ...SERVICOS.map((s) => `/${s.slug}/`), '/contato/'];
    writeFileSync(join(destino, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${DOMINIO}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
    writeFileSync(join(destino, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${DOMINIO}/sitemap.xml\n`);
    cpSync(join(aqui, '_redirects'), join(destino, '_redirects'));
  }
}
function readFileSyncUtf(f) { return readFileSync(f, 'utf8'); }

const dist = join(raiz, 'dist');
montar(dist, PRODUCAO);
console.log('Site montado em', dist, PRODUCAO ? '(produção)' : '(prévia, noindex)');
if (process.argv.includes('--aprovar')) {
  if (PRODUCAO) throw new Error('--aprovar é sempre prévia: rode sem --producao');
  /* --pasta=site-v2 monta uma prévia separada pro Vinicius ver antes de trocar o link que o cliente tem */
  const pasta = (process.argv.find((a) => a.startsWith('--pasta=')) || '--pasta=site').slice(8);
  const destino = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente', pasta);
  rmSync(destino, { recursive: true, force: true });
  cpSync(dist, destino, { recursive: true });
  console.log('Publicável em', destino);
}
