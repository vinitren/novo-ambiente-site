// O corpo da página principal em três jeitos (12/11/2026), tudo com o mesmo texto do conteudo.mjs.
// A entrada e a cor se escolhem à parte; aqui é só o que vem depois da entrada.
//  A · Cartões: a B como ela aprovou (cada coisa no seu quadro branco, ícone no círculo)
//  B · Fotos: os serviços viram fotos grandes, o antes e depois se arrasta com o rodo, o fim é foto inteira.
//     Pro Lucas: mais imagem, quem passa o olho vê tudo o que eles limpam
//  C · Guia: tudo arrumado em abas, um serviço por vez, os oito juntos. Pra ela: "tudo organizado"
import { FONE, wa, seta, ico, ext, publicos, servicos, passos, tambem, T, MSG, planos, imgServ, parFotos, fotoRodo, acoesFecho } from '../estilos/conteudo.mjs';

/* ícones que só existem nesta prévia: o mesmo traço dos outros */
export const iconesNovos = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="i-janela" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M4.5 3.5h15v17h-15zM12 3.5v17M4.5 12h15"/><path d="m7 9.5 2.5-2.5M14.5 17l2.5-2.5"/></g></symbol>
  <symbol id="i-altura" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M14 21V3h7v18M2.5 21h19M16.5 6.5h2M16.5 10h2M16.5 13.5h2"/><path d="M9 3v8.5"/><circle cx="9" cy="13.2" r="1.6"/><path d="M9 14.8v3.4l-1.8 2.3M9 16.2l2.6-1.3M9 18.2l1.6 2.3"/></g></symbol>
  <symbol id="i-posobra" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3.5 4h11v4.5h-11zM14.5 6.2H18v5.3h-8.5V14"/><path d="M8.5 14h2v6.5h-2z"/></g></symbol>
  <symbol id="i-arrasta" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M9 7 4 12l5 5M15 7l5 5-5 5"/></symbol>
</svg>`;

/* as fotos dos três "também limpamos" (as mesmas do painel da entrada A) */
const fotoTambem = {
  fachada: { img: 'servico-fachada-acm', pos: '50% 40%', alt: 'Técnico limpando a fachada de ACM de um prédio comercial' },
  'placa-solar': { img: 'servico-placa-solar', pos: '50% 55%', alt: 'Técnico limpando placas solares no telhado de uma casa' },
  piso: { img: 'servico-piso', pos: '50% 60%', alt: 'Técnico lavando piso de pedra na área externa de um condomínio' },
};

/* ---------------------------------------------------------------- A · Cartões */
const corpoCartoes = (p) => `<section class="secao b-quem" aria-labelledby="t-quem">
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
        <figure>${imgServ(s, p)}</figure>
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
`;

/* ---------------------------------------------------------------- B · Fotos */
const corpoFotos = (p) => {
  const [antes, depois] = parFotos(p);
  return `<section class="secao f-quem" aria-labelledby="t-quem">
  <div class="wrap">
    <h2 id="t-quem" class="f-titulo">${T.quem}</h2>
    <ul class="f-quem-lista">
      ${publicos.map((q) => `<li>
        <span class="b-bolinha">${ico(q.ico)}</span>
        <h3>${q.h}</h3>
        <p>${q.p}</p>
        <p class="resolve">${q.r}</p>
        <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao f-vidros" id="vidros" aria-labelledby="t-vidros">
  <div class="wrap">
    <div class="cabeca">
      <h2 id="t-vidros">${T.vidros}</h2>
      <p>${T.vidrosP}</p>
    </div>
    <ul class="f-mosaico" data-anima>
      ${servicos.map((s, i) => `<li class="f-foto${i === 0 ? ' f-foto-grande' : ''}" style="--i: ${i}">
        <a href="${wa(s.m)}" ${ext}>
          ${imgServ(s, p)}
          <span class="f-foto-texto"><h3>${s.h}</h3><span class="f-p">${s.p}</span><span class="f-termos">${s.t}</span><span class="f-pedir">${s.l}${seta}</span></span>
        </a>
      </li>`).join('\n      ')}
    </ul>
    <p class="f-arraste">${ico('i-arrasta')}Arraste pro lado pra ver os cinco</p>
  </div>
</section>

<section class="secao f-par" aria-labelledby="t-ba">
  <div class="wrap">
    <div class="cabeca">
      <h2 id="t-ba">${T.ba}</h2>
      <p>${T.baP}</p>
    </div>
    <div class="f-comparar" data-ba style="--pos: 50%">
      <figure class="f-depois">${depois.img}</figure>
      <figure class="f-antes">${antes.img}</figure>
      <span class="f-rotulo f-rotulo-antes" aria-hidden="true">Antes</span>
      <span class="f-rotulo f-rotulo-depois" aria-hidden="true">Depois</span>
      <input type="range" min="0" max="100" value="50" step="1" aria-label="Passe o rodo: arraste pra comparar o vidro antes e depois da limpeza">
      <span class="f-alca" aria-hidden="true"><span>${ico('i-arrasta')}</span></span>
    </div>
    <p class="f-dica">Arraste o rodo pro lado</p>
  </div>
</section>

<section class="secao f-passos" aria-labelledby="t-passos">
  <div class="wrap">
    <h2 id="t-passos" class="f-titulo">${T.passos}</h2>
    <ol class="f-passos-lista" data-anima>
      ${passos.map((s, i) => `<li style="--i: ${i}"><span class="f-num">${i + 1}</span><span class="b-bolinha">${ico(s.ico)}</span><h3>${s.h}</h3><p>${s.p}</p></li>`).join('\n      ')}
    </ol>
    <a class="botao botao-azul" data-esconde-barra href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a>
  </div>
</section>
${planos.replace('<div class="ano">', '<div class="ano" data-anima>')}
<section class="secao f-tambem" aria-labelledby="t-tambem">
  <div class="wrap">
    <h2 id="t-tambem" class="f-titulo">${T.tambem}</h2>
    <ul class="f-tambem-lista">
      ${tambem.map((s) => { const f = fotoTambem[s.id]; return `<li id="${s.id}"><a href="${wa(s.m)}" ${ext}>
        <figure><img src="${p}img/${f.img}.webp" alt="${f.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${f.pos}"></figure>
        <span class="b-bolinha">${ico(s.ico)}</span>
        <h3>${s.h}</h3>
        <p>${s.p}</p>
        <span class="link-seta">Pedir orçamento${seta}</span>
      </a></li>`; }).join('\n      ')}
    </ul>
  </div>
</section>

<section class="f-fecho" aria-labelledby="t-fecho">
  ${fotoRodo(p, '100vw')}
  <div class="wrap f-fecho-texto">
    <h2 id="t-fecho">${T.fecho}</h2>
    <p>${T.fechoP}</p>
    ${acoesFecho('botao-claro')}
  </div>
</section>
`;
};

/* ---------------------------------------------------------------- C · Guia */
/* os oito serviços juntos, com um nome curto pra aba */
const guia = [
  ...servicos.map((s, i) => ({ ...s, grupo: 'Vidros', ico: ['i-altura', 'i-predio', 'i-loja', 'i-casa', 'i-posobra'][i],
    aba: ['Altura e rapel', 'Fachadas de vidro', 'Vitrines e lojas', 'Casas e sacadas', 'Pós-obra'][i] })),
  ...tambem.map((s) => ({ ...s, ...fotoTambem[s.id], grupo: 'Também limpamos', aba: s.h, l: 'Pedir orçamento', t: '' })),
];
const corpoGuia = (p) => {
  const [antes, depois] = parFotos(p);
  return `<section class="secao g-quem" aria-labelledby="t-quem">
  <div class="wrap g-duas">
    <div class="g-lado"><h2 id="t-quem">${T.quem}</h2><p>Toque no seu caso e a conversa abre no WhatsApp com a mensagem pronta.</p></div>
    <ul class="g-lista">
      ${publicos.map((q) => `<li>
        <span class="b-bolinha">${ico(q.ico)}</span>
        <div>
          <h3>${q.h}</h3>
          <p>${q.p}</p>
          <p class="resolve">${q.r}</p>
          <a class="link-seta" href="${wa(q.m)}" ${ext}>${q.l}${seta}</a>
        </div>
      </li>`).join('\n      ')}
    </ul>
  </div>
</section>

<section class="secao g-servicos" id="vidros" aria-labelledby="t-vidros">
  <div class="wrap">
    <div class="b-cabeca">
      <h2 id="t-vidros">${T.vidros}</h2>
      <p>${T.vidrosP}</p>
    </div>
    <div class="g-abas">
      <nav class="g-menu" aria-label="Serviços">
        ${guia.map((s, i) => `${i === 0 || guia[i - 1].grupo !== s.grupo ? `<p class="g-grupo">${s.grupo}</p>` : ''}<a class="g-aba" href="#${s.id}" data-aba="${s.id}"><span class="b-bolinha">${ico(s.ico)}</span>${s.aba}</a>`).join('\n        ')}
      </nav>
      <div class="g-paineis">
        ${guia.map((s, i) => `<article class="g-painel${i === 0 ? ' ativa' : ''}" id="${s.id}" aria-labelledby="t-${s.id}">
          <figure><img src="${p}img/${s.img}.webp" alt="${s.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${s.pos}"></figure>
          <div class="g-painel-texto">
            <span class="g-painel-grupo">${s.grupo}</span>
            <h3 id="t-${s.id}">${s.h}</h3>
            <p>${s.p}</p>
            ${s.t ? `<p class="termos">${s.t}</p>` : ''}
            <a class="botao botao-azul" href="${wa(s.m)}" ${ext}>${s.l}${seta}</a>
          </div>
        </article>`).join('\n        ')}
      </div>
    </div>
  </div>
</section>

<section class="secao g-par" aria-labelledby="t-ba">
  <div class="wrap g-duas">
    <div class="g-lado">
      <h2 id="t-ba">${T.ba}</h2>
      <p>${T.baP}</p>
      <div class="g-troca" role="group" aria-label="Ver o vidro">
        <button type="button" data-ver="antes" aria-pressed="true">Antes</button><button type="button" data-ver="depois" aria-pressed="false">Depois</button>
      </div>
    </div>
    <div class="g-fotos" data-ba data-ver="antes">
      <figure class="g-antes">${antes.img}<figcaption>Antes</figcaption></figure>
      <figure class="g-depois">${depois.img}<figcaption>Depois</figcaption></figure>
    </div>
  </div>
</section>

<section class="secao g-passos" aria-labelledby="t-passos">
  <div class="wrap g-duas">
    <div class="g-lado"><h2 id="t-passos">${T.passos}</h2></div>
    <ol class="g-trilha" data-anima>
      ${passos.map((s, i) => `<li style="--i: ${i}"><span class="b-bolinha">${ico(s.ico)}</span><div><span class="b-passo">Passo ${i + 1}</span><h3>${s.h}</h3><p>${s.p}</p></div></li>`).join('\n      ')}
    </ol>
    <div class="g-passos-botao"><a class="botao botao-azul" data-esconde-barra href="${wa(MSG.foto)}" ${ext}>Mandar foto do vidro${seta}</a></div>
  </div>
</section>
${planos.replace('<div class="ano">', '<div class="ano" data-anima>')}
<section class="secao g-fecho" aria-labelledby="t-fecho">
  <div class="wrap">
    <div class="g-fecho-topo">
      <h2 id="t-fecho">${T.fecho}</h2>
      <p>${T.fechoP}</p>
    </div>
    <ul class="g-jeitos" data-esconde-barra>
      <li><a href="${wa(MSG.geral)}" ${ext}><span class="b-bolinha"><svg class="ico" aria-hidden="true"><use href="#i-wa"/></svg></span><span><strong>Pedir orçamento</strong><small>Pelo WhatsApp, com uma foto do vidro</small></span>${seta}</a></li>
      <li><a href="${wa(MSG.visita)}" ${ext}><span class="b-bolinha">${ico('i-agenda')}</span><span><strong>Agendar visita técnica</strong><small>Pra avaliar o vidro com você</small></span>${seta}</a></li>
      <li><a href="tel:+${FONE}"><span class="b-bolinha">${ico('i-fone')}</span><span><strong>Ligar</strong><small>(41) 99779-9646</small></span>${seta}</a></li>
    </ul>
  </div>
</section>
`;
};

export const CORPOS = [
  { id: 'a', nome: 'Cartões', classe: 'cc', corpo: corpoCartoes },
  { id: 'b', nome: 'Fotos', classe: 'cf', corpo: corpoFotos },
  { id: 'c', nome: 'Guia', classe: 'cg', corpo: corpoGuia },
];
