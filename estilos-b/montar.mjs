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

function pagina(p, css) {
  return `<!doctype html>
<html lang="pt-BR" class="sem-js estilo-b eb" data-entrada="rapel" data-paleta="1">
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
<script>
document.documentElement.classList.replace('sem-js', 'js');
(function () { var c = new URLSearchParams(location.search).get('cor'); try { c = c || localStorage.getItem('na-cor'); } catch (e) {} if (/^[123]$/.test(c || '')) document.documentElement.dataset.paleta = c; })();
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
<section class="entrada" aria-labelledby="t-entrada">
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
</section>

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

<div class="barra-fixa">
  <a class="bf-ligar" href="tel:+${FONE}" data-servico="ligar">${ico('i-fone')}Ligar</a>
  <a class="bf-wa" href="${wa(MSG.geral)}" ${ext}><svg class="wa" aria-hidden="true"><use href="#i-wa"/></svg>Orçamento no WhatsApp</a>
</div>

<div class="eb-cor" role="group" aria-label="Escolher a cor do site">
  <span class="eb-cor-rotulo">Cor do site</span>
  ${CORES.map((c) => `<button type="button" data-cor="${c.n}" aria-pressed="false" title="${c.nome}: ${c.frase}"><span class="so-leitor">Cor </span>${c.n}</button>`).join('')}
  <a class="eb-cor-responder" href="#" data-vinicius="${VINICIUS}" ${ext}>Escolher<span class="eb-cor-nome"></span></a>
</div>
<script>window.EB_CORES = ${JSON.stringify(CORES.map(({ n, nome }) => ({ n, nome })))};</script>

<script src="${p}blindagem.js" defer></script>
<script src="${p}script.js" defer></script>
<script src="${css}estilos-b/pagina.js" defer></script>
</body>
</html>
`;
}

writeFileSync(join(aqui, 'index.html'), pagina('../', '../'));
console.log('Montada em', join(aqui, 'index.html'));

if (process.argv.includes('--aprovar')) {
  const destino = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente', 'estilos-b');
  rmSync(destino, { recursive: true, force: true });
  for (const d of ['img', 'estilos', 'estilos-b']) mkdirSync(join(destino, 'assets', d), { recursive: true });
  cpSync(join(raiz, 'fonts'), join(destino, 'assets', 'fonts'), { recursive: true });
  for (const f of ['estilo.css', 'script.js', 'blindagem.js']) cpSync(join(raiz, f), join(destino, 'assets', f));
  for (const f of ['comum.css', 'b.css']) cpSync(join(raiz, 'estilos', f), join(destino, 'assets', 'estilos', f));
  for (const f of ['pagina.css', 'pagina.js']) cpSync(join(aqui, f), join(destino, 'assets', 'estilos-b', f));
  const usadas = /^(entrada-rapel|entrada-janela|servico-|mini-|vidro-|estampa-|logo|icone)/;
  for (const f of readdirSync(join(raiz, 'img'))) {
    if (usadas.test(f) && !f.endsWith('.json')) cpSync(join(raiz, 'img', f), join(destino, 'assets', 'img', f));
  }
  writeFileSync(join(destino, 'index.html'), pagina('assets/', 'assets/'));
  console.log('Publicável em', destino);
}
