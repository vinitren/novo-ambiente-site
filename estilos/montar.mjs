// Prévia de estilos do corpo (11/11/2026). Mesmo texto e mesmas fotos, três visuais.
// A entrada e a régua dos planos estão travadas (a cliente aprovou); o resto muda.
// Uso: node estilos/montar.mjs            → estilos/a|b|c/index.html (abre local)
//      node estilos/montar.mjs --aprovar  → também em aprovar/public/novo-ambiente/estilos/
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, '..');
const FONE = '5541997799646';
const wa = (t) => `https://wa.me/${FONE}?text=${encodeURIComponent(t)}`;
const seta = '<svg aria-hidden="true"><use href="#i-seta"/></svg>';
const ico = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
const ext = 'target="_blank" rel="noopener"';

/* ---------------- o conteúdo (igual nos três) ---------------- */
const publicos = [
  { id: 'predio', ico: 'i-predio', h: 'Condomínio e prédio comercial',
    p: 'Fachada de vidro e vidro alto que ninguém do prédio alcança, e se alguém se machucar lá em cima quem responde é o síndico.',
    r: 'Equipe de altura, visita técnica e data marcada com a administração do prédio.',
    l: 'Orçamento pro condomínio', m: 'Olá! Vim pelo site. Sou síndico/administradora e quero um orçamento de limpeza de vidros pro condomínio.' },
  { id: 'comercio', ico: 'i-loja', h: 'Loja, clínica ou escritório',
    p: 'Vitrine com marca de dedo toda semana, e funcionário parando o atendimento pra passar pano.',
    r: 'Vidro sempre limpo, com plano recorrente e horário combinado.',
    l: 'Orçamento pra empresa', m: 'Olá! Vim pelo site. Tenho uma empresa e quero um orçamento de limpeza de vidros.' },
  { id: 'casa', ico: 'i-casa', h: 'Casa',
    p: 'Janela alta, pé-direito alto e vidro de sacada que você não alcança sem se arriscar.',
    r: 'Vidro transparente de novo, sem escada pra ninguém da família.',
    l: 'Orçamento pra casa', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de vidros pra minha casa.' },
];

const servicos = [
  { id: 'altura', img: 'servico-altura', pos: '40% 30%', alt: 'Técnico em rapel limpando a fachada de vidro de uma torre em Curitiba',
    h: 'Vidros em altura e com rapel', p: 'Pra onde escada e haste não chegam: a equipe desce de rapel e limpa o vidro de cima a baixo.',
    t: 'Vidros altos · difícil acesso · pé-direito alto e átrios · elevadores panorâmicos',
    l: 'Orçamento de vidro em altura', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de vidros em altura.' },
  { id: 'fachada-de-vidro', img: 'servico-fachada', pos: '60% 40%', alt: 'Técnico na calçada limpando a fachada de vidro de um prédio comercial com haste e rodo',
    h: 'Fachadas de vidro', p: 'Vidros de prédios, edifícios comerciais e condomínios, com limpeza interna e externa, painel a painel.',
    t: 'Pele de vidro (Structural Glazing) · cortina de vidro (Curtain Wall)',
    l: 'Orçamento de fachada de vidro', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de fachada de vidro.' },
  { id: 'vitrine', img: 'servico-vitrine', pos: '40% 50%', alt: 'Rodo limpando a vitrine de uma loja de alto padrão em Curitiba',
    h: 'Vitrines, lojas, clínicas e escritórios', p: 'Vitrine sem marca de dedo, no dia e no horário que não atrapalham o atendimento.',
    t: 'Vidros comerciais · portas e painéis do chão ao teto · muros e painéis de vidro',
    l: 'Orçamento de vitrine', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de vitrine e vidros comerciais.' },
  { id: 'casa-e-sacada', img: 'servico-sacada', pos: '50% 45%', alt: 'Rodo limpando o envidraçamento de sacada de um apartamento alto em Curitiba',
    h: 'Casas e sacadas', p: 'Vidro alto e de sacada transparente de novo, sem ninguém da família subir em escada.',
    t: 'Vidros residenciais · janelas e esquadrias · envidraçamento de sacada · guarda-corpos',
    l: 'Orçamento pra casa ou sacada', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de vidros pra minha casa.' },
  { id: 'pos-obra', img: 'servico-posobra', pos: '55% 40%', alt: 'Técnico com raspador tirando respingos de tinta do vidro de uma sala comercial recém-terminada',
    h: 'Pós-obra de vidros', p: 'Resto de tinta, cimento e poeira de obra saem do vidro novo, com cuidado pra não riscar.',
    t: 'Limpeza pós-obra de vidros · salas e lojas recém-entregues',
    l: 'Orçamento de pós-obra', m: 'Olá! Vim pelo site e quero um orçamento de limpeza pós-obra de vidros.' },
];

const passos = [
  { ico: 'i-foto', h: 'Mande uma foto ou peça uma visita', p: 'Uma foto do vidro e o endereço pelo WhatsApp já bastam pra começar. Se preferir, fazemos uma visita técnica presencial pra avaliar o serviço.' },
  { ico: 'i-proposta', h: 'Receba a proposta', p: 'Orçamento sem compromisso e proposta personalizada, pra uma limpeza só ou com plano recorrente.' },
  { ico: 'i-agenda', h: 'Limpamos na data marcada', p: 'A equipe chega no dia combinado, com o acesso certo pra cada tipo de vidro.' },
];

const tambem = [
  { id: 'fachada', ico: 'i-fachada', h: 'Fachada', p: 'ACM, pastilha, textura e pedra em prédios e empresas.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de fachada.' },
  { id: 'placa-solar', ico: 'i-solar', h: 'Placa solar', p: 'Placas de casas, comércios e indústrias, sem riscar o vidro.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de placa solar.' },
  { id: 'piso', ico: 'i-piso', h: 'Piso', p: 'Pisos, pedras e áreas externas de condomínios, empresas e casas.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de piso.' },
];

const T = {
  quem: 'Pra quem <em>limpamos</em>',
  vidros: 'Limpeza de vidros: cada vidro pede <em>um jeito de chegar e um jeito de limpar</em>',
  vidrosP: 'Da sacada à pele de vidro de um prédio comercial, a Novo Ambiente limpa vidros em Curitiba e na Região Metropolitana. Orçamento por foto ou com visita técnica presencial.',
  ba: 'O mesmo vidro, <em>antes e depois</em>',
  baP: 'Poeira, resto de obra e marca de dedo saem. A fachada volta a refletir o céu, e quem está dentro volta a ver a cidade.',
  passos: 'Como <em>funciona</em>',
  tambem: 'Também <em>limpamos</em>',
  fecho: 'Seu vidro, <em>transparente de novo</em>',
  fechoP: 'Mande uma foto do vidro pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.',
};
const MSG = {
  geral: 'Olá! Vim pelo site e quero um orçamento de limpeza de vidros.',
  foto: 'Olá! Vim pelo site. Vou mandar uma foto do vidro pra vocês me passarem o orçamento.',
  plano: 'Olá! Vim pelo site e quero saber dos planos de limpeza recorrente.',
  visita: 'Olá! Vim pelo site e quero agendar uma visita técnica.',
};

const ESTILOS = {
  a: { nome: 'Claro', frase: 'Branco, fotos grandes e bastante espaço' },
  b: { nome: 'Cartões', frase: 'Tudo em quadros organizados, com ícones' },
  c: { nome: 'Arcos', frase: 'Fotos em formato de janela, mais delicado' },
};

/* ---------------- peças travadas: menu, entrada, planos, rodapé ---------------- */
const icones = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-wa" viewBox="0 0 24 24"><path fill="currentColor" d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.5 0 .2 5.3.2 11.8c0 2.1.5 4.1 1.6 5.9L0 24l6.5-1.7a11.8 11.8 0 0 0 5.5 1.4c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.3-8.4zM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 1 1 8.4 4.7zm5.4-7.3c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></symbol>
  <symbol id="i-seta" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" d="M6 18 18 6M8 6h10v10"/></symbol>
  <symbol id="i-predio" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5 21V3.5h14V21M2.5 21h19"/><path d="M8.5 7h2M13.5 7h2M8.5 10.5h2M13.5 10.5h2M8.5 14h2M13.5 14h2M10.5 21v-3.5h3V21"/></g></symbol>
  <symbol id="i-loja" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4.5 3.5h15l1.5 5H3z"/><path d="M3 8.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M5 11.5V21h14v-9.5M10 21v-5h4v5"/></g></symbol>
  <symbol id="i-casa" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3 11 12 3.5l9 7.5"/><path d="M5.5 9V21h13V9M10 21v-5.5h4V21"/></g></symbol>
  <symbol id="i-foto" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3.5 7.5h3.5l1.8-2.5h6.4L17 7.5h3.5V19h-17z"/><circle cx="12" cy="13" r="3.4"/></g></symbol>
  <symbol id="i-proposta" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M6 3h8.5L19 7.5V21H6z"/><path d="M14 3v5h5M9 12h7M9 15.5h7M9 19h4"/></g></symbol>
  <symbol id="i-agenda" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3.5 5.5h17V21h-17zM3.5 10h17M8 3v4.5M16 3v4.5"/><path d="m8.5 15.5 2.2 2.2 4.8-4.7"/></g></symbol>
  <symbol id="i-fachada" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4 21V3.5h16V21M2.5 21h19M4 9.5h16M4 15.5h16M9.5 3.5v17.5M14.5 3.5v17.5"/></g></symbol>
  <symbol id="i-solar" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M5.5 6h13l2.5 11H3z"/><path d="M4.3 11.5h15.4M9.3 6l-1 11M14.7 6l1 11M12 17v3.5M8 20.5h8"/></g></symbol>
  <symbol id="i-piso" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M12 4 21 9l-9 5-9-5z"/><path d="m3 13.5 9 5 9-5M7.5 6.5l9 5M16.5 6.5l-9 5"/></g></symbol>
</svg>`;

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

const planos = `
<section class="secao planos" id="planos" aria-labelledby="t-planos">
  <div class="wrap">
    <div class="cabeca">
      <h2 id="t-planos">Uma limpeza só, ou o vidro <em>sempre em dia</em></h2>
      <p>Trabalhamos com serviço pontual e com contrato periódico. O plano é montado conforme a necessidade de cada cliente, e na visita técnica avaliamos o vidro com você.</p>
    </div>
    <div class="ano">
      <div class="ano-meses" aria-hidden="true"><span>jan</span><span>fev</span><span>mar</span><span>abr</span><span>mai</span><span>jun</span><span>jul</span><span>ago</span><span>set</span><span>out</span><span>nov</span><span>dez</span></div>
      <ul class="ano-lista">
        <li><h3>Semanal</h3><span class="trilho" style="--n: 52" aria-hidden="true"></span><p>toda semana, 52 no ano</p></li>
        <li><h3>Quinzenal</h3><span class="trilho" style="--n: 24" aria-hidden="true"></span><p>a cada 15 dias, 24 no ano</p></li>
        <li><h3>Mensal</h3><span class="trilho" style="--n: 12" aria-hidden="true"></span><p>todo mês, 12 no ano</p></li>
        <li><h3>Trimestral</h3><span class="trilho" style="--n: 4" aria-hidden="true"></span><p>a cada 3 meses, 4 no ano</p></li>
        <li><h3>Semestral</h3><span class="trilho" style="--n: 2" aria-hidden="true"></span><p>a cada 6 meses, 2 no ano</p></li>
        <li class="pontual"><h3>Pontual</h3><span class="trilho" style="--n: 1" aria-hidden="true"></span><p>uma vez, quando você precisar</p></li>
      </ul>
    </div>
    <a class="botao botao-azul" data-esconde-barra href="${wa(MSG.plano)}" ${ext}>Montar um plano no WhatsApp${seta}</a>
  </div>
</section>
`;

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

/* pedaços que se repetem dentro dos estilos */
const imgServ = (s, p, sizes, cls = '') => `<img${cls ? ` class="${cls}"` : ''} src="${p}img/${s.img}.webp" alt="${s.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${s.pos}">`;
const parFotos = (p) => [
  { src: 'vidro-sujo', alt: 'Fachada de vidro sem brilho, com poeira e manchas, antes da limpeza', cap: 'Antes' },
  { src: 'vidro-limpo', alt: 'A mesma fachada de vidro depois da limpeza, refletindo o céu e as araucárias', cap: 'Depois' },
].map((f) => ({ ...f, img: `<img src="${p}img/${f.src}-1920.webp" srcset="${p}img/${f.src}-1000.webp 1000w, ${p}img/${f.src}-1920.webp 1920w" sizes="(min-width: 48rem) 50vw, 100vw" width="1920" height="1080" alt="${f.alt}" loading="lazy" decoding="async">` }));
const fotoRodo = (p, sizes) => `<img src="${p}img/entrada-janela-1600.webp" srcset="${p}img/entrada-janela-800.webp 800w, ${p}img/entrada-janela-1600.webp 1600w" sizes="${sizes}" width="1600" height="900" alt="Rodo abrindo uma faixa de vidro limpo numa fachada, com uma araucária refletida" loading="lazy" decoding="async">`;
const acoesFecho = (cls = 'botao-azul') => `<div class="acoes" data-esconde-barra>
      <a class="botao ${cls}" href="${wa(MSG.geral)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
      <a class="link-seta" href="${wa(MSG.visita)}" ${ext}>Agendar visita técnica${seta}</a>
      <a class="link-seta" href="tel:+${FONE}">Ligar: (41) 99779-9646${seta}</a>
    </div>`;

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
