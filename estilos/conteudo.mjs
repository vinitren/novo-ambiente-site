// O conteúdo da página principal: texto, mensagens do WhatsApp, ícones e peças que se repetem.
// Usado pela rodada de estilos (estilos/montar.mjs) e pela B nova (estilos-b/montar.mjs).
// Mexeu no texto aqui, roda os dois montadores.

export const FONE = '5541997799646';
export const wa = (t) => `https://wa.me/${FONE}?text=${encodeURIComponent(t)}`;
export const seta = '<svg aria-hidden="true"><use href="#i-seta"/></svg>';
export const ico = (id, cls = 'ico') => `<svg class="${cls}" aria-hidden="true"><use href="#${id}"/></svg>`;
export const ext = 'target="_blank" rel="noopener"';

/* ---------------- o conteúdo (igual nos três) ---------------- */
export const publicos = [
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

export const servicos = [
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

export const passos = [
  { ico: 'i-foto', h: 'Mande uma foto ou peça uma visita', p: 'Uma foto do vidro e o endereço pelo WhatsApp já bastam pra começar. Se preferir, fazemos uma visita técnica presencial pra avaliar o serviço.' },
  { ico: 'i-proposta', h: 'Receba a proposta', p: 'Orçamento sem compromisso e proposta personalizada, pra uma limpeza só ou com plano recorrente.' },
  { ico: 'i-agenda', h: 'Limpamos na data marcada', p: 'A equipe chega no dia combinado, com o acesso certo pra cada tipo de vidro.' },
];

export const tambem = [
  { id: 'fachada', ico: 'i-fachada', h: 'Fachada', p: 'ACM, pastilha, textura e pedra em prédios e empresas.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de fachada.' },
  { id: 'placa-solar', ico: 'i-solar', h: 'Placa solar', p: 'Placas de casas, comércios e indústrias, sem riscar o vidro.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de placa solar.' },
  { id: 'piso', ico: 'i-piso', h: 'Piso', p: 'Pisos, pedras e áreas externas de condomínios, empresas e casas.', m: 'Olá! Vim pelo site e quero um orçamento de limpeza de piso.' },
];

export const T = {
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
export const MSG = {
  geral: 'Olá! Vim pelo site e quero um orçamento de limpeza de vidros.',
  foto: 'Olá! Vim pelo site. Vou mandar uma foto do vidro pra vocês me passarem o orçamento.',
  plano: 'Olá! Vim pelo site e quero saber dos planos de limpeza recorrente.',
  visita: 'Olá! Vim pelo site e quero agendar uma visita técnica.',
};

export const icones = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
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
  <symbol id="i-fone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="M8.2 3.5 5 3.6c-.9 0-1.6.8-1.5 1.7.6 8 6.9 14.4 14.9 15 .9.1 1.7-.6 1.7-1.5l.1-3.2c0-.6-.4-1.2-1-1.4l-3.2-1c-.5-.2-1.1 0-1.5.4l-1.3 1.4a12.6 12.6 0 0 1-5.4-5.4l1.4-1.3c.4-.4.6-1 .4-1.5l-1-3.2c-.2-.6-.8-1-1.4-1z"/></symbol>
</svg>`;

export const planos = `
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

/* pedaços que se repetem dentro dos estilos */
export const imgServ = (s, p, sizes, cls = '') => `<img${cls ? ` class="${cls}"` : ''} src="${p}img/${s.img}.webp" alt="${s.alt}" width="1000" height="1250" loading="lazy" decoding="async" style="object-position: ${s.pos}">`;
export const parFotos = (p) => [
  { src: 'vidro-sujo', alt: 'Fachada de vidro sem brilho, com poeira e manchas, antes da limpeza', cap: 'Antes' },
  { src: 'vidro-limpo', alt: 'A mesma fachada de vidro depois da limpeza, refletindo o céu e as araucárias', cap: 'Depois' },
].map((f) => ({ ...f, img: `<img src="${p}img/${f.src}-1920.webp" srcset="${p}img/${f.src}-1000.webp 1000w, ${p}img/${f.src}-1920.webp 1920w" sizes="(min-width: 48rem) 50vw, 100vw" width="1920" height="1080" alt="${f.alt}" loading="lazy" decoding="async">` }));
export const fotoRodo = (p, sizes) => `<img src="${p}img/entrada-janela-1600.webp" srcset="${p}img/entrada-janela-800.webp 800w, ${p}img/entrada-janela-1600.webp 1600w" sizes="${sizes}" width="1600" height="900" alt="Rodo abrindo uma faixa de vidro limpo numa fachada, com uma araucária refletida" loading="lazy" decoding="async">`;
export const acoesFecho = (cls = 'botao-azul') => `<div class="acoes" data-esconde-barra>
      <a class="botao ${cls}" href="${wa(MSG.geral)}" ${ext}>Pedir orçamento no WhatsApp${seta}</a>
      <a class="link-seta" href="${wa(MSG.visita)}" ${ext}>Agendar visita técnica${seta}</a>
      <a class="link-seta" href="tel:+${FONE}">Ligar: (41) 99779-9646${seta}</a>
    </div>`;
