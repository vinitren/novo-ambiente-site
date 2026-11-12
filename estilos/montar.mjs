// Prévia de estilos do corpo (11/11/2026). Mesmo texto e mesmas fotos, três visuais.
// A entrada e a régua dos planos estão travadas (a cliente aprovou); o resto muda.
// Uso: node estilos/montar.mjs            → estilos/a|b|c/index.html (abre local)
//      node estilos/montar.mjs --aprovar  → também em aprovar/public/novo-ambiente/estilos/
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');
import { FONE, wa, seta, ico, ext, publicos, servicos, passos, tambem, T, MSG, icones, planos, imgServ, parFotos, fotoRodo, acoesFecho } from './conteudo.mjs';

const ESTILOS = {
  a: { nome: 'Claro', frase: 'Branco, fotos grandes e bastante espaço' },
  b: { nome: 'Cartões', frase: 'Tudo em quadros organizados, com ícones' },
  c: { nome: 'Arcos', frase: 'Fotos em formato de janela, mais delicado' },
};


/* ---------------- peças travadas: menu, entrada, planos, rodapé ---------------- */

function cabecalho(letra, p) {
  const e = ESTILOS[letra];
  return `<!doctype html>
<html lang="pt-BR" class="sem-js estilo-${letra}" data-entrada="rapel">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Estilo ${letra.toUpperCase()} · ${e.nome} | Novo Ambiente Service</title>
<meta name="theme-color" content="#f4f8fa">
<link rel="icon" href="${p}img/icone-48.png" type="image/png">
<link rel="preload" as="image" imagesrcset="${p}img/entrada-rapel-1600.webp 1600w, ${p}img/entrada-rapel-2560.webp 2560w" imagesizes="100vw" media="(min-width: 48rem)" fetchpriority="high">
<link rel="preload" as="image" imagesrcset="${p}img/entrada-rapel-cel-750.webp 750w, ${p}img/entrada-rapel-cel-1080.webp 1080w" imagesizes="100vw" media="(max-width: 47.99rem)" fetchpriority="high">
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/instrument-sans-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="${p}fonts/source-serif-4-latin.woff2" crossorigin>
<link rel="stylesheet" href="${p}estilo.css">
<link rel="stylesheet" href="${p}estilos/comum.css">
<link rel="stylesheet" href="${p}estilos/${letra}.css">
<script>document.documentElement.classList.replace('sem-js', 'js');</script>
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
  <div class="wrap entrada-texto">
    <h1 id="t-entrada">Limpeza de vidros <em>em Curitiba</em></h1>
    <p>Do térreo ao último andar: vidros em altura com rapel, fachadas de vidro, vitrines, casas e pós-obra.</p>
    <a class="botao botao-claro" data-esconde-barra href="${wa(MSG.geral)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
  </div>
</section>
`;
}


function rodape(letra, p, voltar) {
  const e = ESTILOS[letra];
  return `</main>

<footer class="rodape" id="contato">
  <div class="wrap">
    <img src="${p}img/logo-escura.svg" alt="Novo Ambiente Service" width="150" height="76" loading="lazy" decoding="async">
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
    <p class="previa">Prévia de estilo ${letra.toUpperCase()} · ${e.nome}. <a href="${voltar}">Voltar pra escolha</a></p>
  </div>
</footer>

<a class="selo-estilo" href="${voltar}"><b>${letra.toUpperCase()}</b> Estilo ${e.nome}<span>voltar pra escolha</span></a>
<div class="barra-wa"><a class="botao botao-azul" href="${wa(MSG.geral)}" ${ext}><svg class="wa" aria-hidden="true"><use href="#i-wa"/></svg>Pedir orçamento no WhatsApp</a></div>

<script src="${p}blindagem.js" defer></script>
<script src="${p}script.js" defer></script>
</body>
</html>
`;
}


/* ================= A · Claro: branco, foto grande, muito espaço ================= */
function corpoA(p) {
  const [destaque, ...resto] = servicos;
  const par = parFotos(p);
  return `
<section class="secao a-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <h2 id="t-quem">${T.quem}</h2>
    <div class="a-tres">
      ${publicos.map((q) => `<article>
        <h3>${q.h}</h3>
        <p>${q.p}</p>
        <p class="resolve">${q.r}</p>
        <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao a-vidros" id="vidros" aria-labelledby="t-vidros">
  <div class="wrap">
    <div class="cabeca">
      <h2 id="t-vidros">${T.vidros}</h2>
      <p>${T.vidrosP}</p>
    </div>
    <article class="a-destaque">
      <figure>${imgServ(destaque, p, '(min-width: 62rem) 45vw, 100vw')}</figure>
      <div>
        <h3>${destaque.h}</h3>
        <p>${destaque.p}</p>
        <p class="termos">${destaque.t}</p>
        <a class="botao botao-azul" href="${wa(destaque.m)}" ${ext}>${destaque.l}${seta}</a>
      </div>
    </article>
    <ul class="a-grade">
      ${resto.map((s) => `<li>
        <figure>${imgServ(s, p, '(min-width: 62rem) 24vw, (min-width: 48rem) 50vw, 100vw')}</figure>
        <h3>${s.h}</h3>
        <p>${s.p}</p>
        <p class="termos">${s.t}</p>
        <a class="link-seta" href="${wa(s.m)}" ${ext}>${s.l}${seta}</a>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao a-par" aria-labelledby="t-ba">
  <div class="wrap">
    <div class="cabeca">
      <h2 id="t-ba">${T.ba}</h2>
      <p>${T.baP}</p>
    </div>
    <div class="a-fotos" data-ba>
      ${par.map((f) => `<figure>${f.img}<figcaption>${f.cap}</figcaption></figure>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao a-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <div class="a-passos-cabeca">
      <h2 id="t-passos">${T.passos}</h2>
      <a class="botao botao-azul" data-esconde-barra href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a>
    </div>
    <ol class="a-tres">
      ${passos.map((s, i) => `<li><span class="a-num">${i + 1}</span><h3>${s.h}</h3><p>${s.p}</p></li>`).join('\n      ')}
    </ol>
  </div>
</section>
${planos}
<section class="secao a-tambem" aria-labelledby="t-tambem">
  <div class="wrap">
    <h2 id="t-tambem">${T.tambem}</h2>
    <ul class="a-linhas">
      ${tambem.map((s) => `<li id="${s.id}"><a href="${wa(s.m)}" ${ext}><h3>${s.h}</h3><p>${s.p}</p>${seta}</a></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao a-fecho" aria-labelledby="t-fecho">
  <div class="wrap">
    <div class="a-fecho-texto">
      <h2 id="t-fecho">${T.fecho}</h2>
      <p>${T.fechoP}</p>
      ${acoesFecho()}
    </div>
    <figure>${fotoRodo(p, '(min-width: 62rem) 50vw, 100vw')}</figure>
  </div>
</section>
`;
}

/* ================= B · Cartões: quadros brancos, ícones, tudo em grade ================= */
function corpoB(p) {
  const par = parFotos(p);
  return `
<section class="b-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <h2 id="t-quem" class="so-leitor">Pra quem limpamos</h2>
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
    <ul class="b-servicos">
      ${servicos.map((s, i) => `<li class="b-cartao b-servico${i === 0 ? ' b-servico-grande' : ''}">
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
        ${par.map((f) => `<figure>${f.img}<figcaption>${f.cap}</figcaption></figure>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="secao b-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-passos">${T.passos}</h2>
    </div>
    <ol class="b-trilha">
      ${passos.map((s, i) => `<li><span class="b-bolinha b-bolinha-grande">${ico(s.ico)}</span><span class="b-passo">Passo ${i + 1}</span><h3>${s.h}</h3><p>${s.p}</p></li>`).join('\n      ')}
    </ol>
    <div class="b-centro"><a class="botao botao-azul" data-esconde-barra href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a></div>
  </div>
</section>
${planos}
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
`;
}

/* ================= C · Arcos: a foto na forma de uma janela ================= */
function corpoC(p) {
  const par = parFotos(p);
  return `
<section class="secao c-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <h2 id="t-quem" class="c-titulo">${T.quem}</h2>
    <div class="c-tres">
      ${publicos.map((q) => `<article>
        <span class="c-janelinha">${ico(q.ico)}</span>
        <h3>${q.h}</h3>
        <p>${q.p}</p>
        <p class="resolve">${q.r}</p>
        <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
      </article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao c-vidros" id="vidros" aria-labelledby="t-vidros">
  <div class="wrap">
    <div class="c-cabeca">
      <h2 id="t-vidros" class="c-titulo">${T.vidros}</h2>
      <p>${T.vidrosP}</p>
    </div>
    <ul class="c-arcos">
      ${servicos.map((s) => `<li>
        <figure class="c-arco">${imgServ(s, p, '(min-width: 62rem) 18vw, (min-width: 48rem) 30vw, 80vw')}</figure>
        <h3>${s.h}</h3>
        <p>${s.p}</p>
        <a class="link-seta" href="${wa(s.m)}" ${ext}>${s.l}${seta}</a>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao c-par" aria-labelledby="t-ba">
  <div class="wrap">
    <div class="c-cabeca">
      <h2 id="t-ba" class="c-titulo">${T.ba}</h2>
      <p>${T.baP}</p>
    </div>
    <div class="c-fotos" data-ba>
      ${par.map((f) => `<figure><div class="c-arco">${f.img}</div><figcaption>${f.cap}</figcaption></figure>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="secao c-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <figure class="c-arco c-arco-grande">${fotoRodo(p, '(min-width: 62rem) 40vw, 100vw')}</figure>
    <div class="c-passos-texto">
      <h2 id="t-passos" class="c-titulo">${T.passos}</h2>
      <ol>
        ${passos.map((s, i) => `<li><span class="c-num">${i + 1}</span><div><h3>${s.h}</h3><p>${s.p}</p></div></li>`).join('\n        ')}
      </ol>
      <a class="botao botao-azul" data-esconde-barra href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a>
    </div>
  </div>
</section>
${planos}
<section class="secao c-tambem" aria-labelledby="t-tambem">
  <div class="wrap">
    <h2 id="t-tambem" class="c-titulo">${T.tambem}</h2>
    <ul class="c-tres">
      ${tambem.map((s) => `<li id="${s.id}"><a href="${wa(s.m)}" ${ext}><span class="c-janelinha">${ico(s.ico)}</span><h3>${s.h}</h3><p>${s.p}</p><span class="link-seta">Pedir orçamento${seta}</span></a></li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao c-fecho" aria-labelledby="t-fecho">
  <div class="wrap">
    <div class="c-lua">
      <h2 id="t-fecho" class="c-titulo">${T.fecho}</h2>
      <p>${T.fechoP}</p>
      ${acoesFecho()}
    </div>
  </div>
</section>
`;
}

const CORPOS = { a: corpoA, b: corpoB, c: corpoC };
const pagina = (letra, p, voltar) => cabecalho(letra, p) + CORPOS[letra](p) + rodape(letra, p, voltar);

/* ---------------- grava ---------------- */
for (const letra of Object.keys(ESTILOS)) {
  mkdirSync(join(aqui, letra), { recursive: true });
  writeFileSync(join(aqui, letra, 'index.html'), pagina(letra, '../../', '../escolha.html'));
}
const escolha = readFileSync(join(aqui, 'escolha.tpl.html'), 'utf8');
writeFileSync(join(aqui, 'escolha.html'), escolha.replaceAll('{{P}}', '../'));
console.log('Estilos montados em', aqui);

if (process.argv.includes('--aprovar')) {
  const destino = join(raiz, '..', 'aprovar', 'public', 'novo-ambiente', 'estilos');
  rmSync(destino, { recursive: true, force: true });
  mkdirSync(join(destino, 'assets', 'img'), { recursive: true });
  mkdirSync(join(destino, 'assets', 'estilos'), { recursive: true });
  cpSync(join(raiz, 'fonts'), join(destino, 'assets', 'fonts'), { recursive: true });
  for (const f of ['estilo.css', 'script.js', 'blindagem.js']) cpSync(join(raiz, f), join(destino, 'assets', f));
  for (const f of ['comum.css', 'a.css', 'b.css', 'c.css']) cpSync(join(aqui, f), join(destino, 'assets', 'estilos', f));
  for (const f of readdirSync(join(raiz, 'img'))) {
    if (!f.endsWith('.json')) cpSync(join(raiz, 'img', f), join(destino, 'assets', 'img', f));
  }
  cpSync(join(aqui, 'prints'), join(destino, 'prints'), { recursive: true });
  for (const letra of Object.keys(ESTILOS)) {
    mkdirSync(join(destino, letra), { recursive: true });
    writeFileSync(join(destino, letra, 'index.html'), pagina(letra, '../assets/', '../'));
  }
  writeFileSync(join(destino, 'index.html'), escolha.replaceAll('{{P}}', 'assets/'));
  console.log('Publicável em', destino);
}
