// O conteúdo das páginas de serviço e da página de contato (15/11/2026).
// Só entra o que é afirmável hoje (PRODUCT.md, "Evidence on Hand"): nada de NR-35, seguro, ART,
// tempo de mercado, número de obras ou clientes. Termos proibidos (cobertura, teto e telhado de vidro,
// pergolado, toldo, claraboia) em lugar nenhum, nem no texto alternativo.
// Os endereços são os mesmos do site antigo, pra não perder o que já está no Google.

const msg = (s) => `Olá! Vim pelo site da Novo Ambiente e quero um orçamento de ${s}.`;

/* as perguntas que valem pra qualquer serviço */
const faqOrcamento = (o) => ({ q: `Como peço um orçamento de ${o}?`, r: 'Pelo WhatsApp (41) 99779-9646. Uma foto e o endereço já bastam pra começar, e o orçamento é sem compromisso. Se preferir, marcamos uma visita técnica presencial.' });
const faqRegiao = { q: 'Vocês atendem fora de Curitiba?', r: 'Sim. Atendemos Curitiba e a Região Metropolitana. Mande o endereço pelo WhatsApp e confirmamos.' };
const faqVisita = { q: 'Vocês fazem visita técnica?', r: 'Sim. Fazemos visita técnica presencial pra avaliar o serviço e montar uma proposta personalizada.' };
const faqPlano = (o) => ({ q: `Vocês fazem ${o} com contrato?`, r: 'Sim. Trabalhamos com serviço pontual e com contrato periódico, e o plano é montado conforme a necessidade de cada cliente.' });

export const SERVICOS = [
  {
    id: 'vidros', slug: 'limpeza-de-vidros', menu: 'Vidros',
    titulo: 'Limpeza de vidros em altura e fachadas de vidro em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de vidros altos e de difícil acesso com rapel, fachadas de vidro, pele de vidro, vitrines, sacadas, pé-direito alto e pós-obra em Curitiba e Região. Orçamento pelo WhatsApp.',
    foto: { img: 'servico-fachada', pos: '55% 40%', alt: 'Técnico de uniforme limpando a fachada de vidro de um prédio comercial com haste e rodo' },
    h1: 'Limpeza de vidros <em>em altura, fachadas e vitrines</em>',
    sub: 'Vidros altos e de difícil acesso, pele de vidro de prédios, vitrines, sacadas e vidro novo de obra, em Curitiba e na Região Metropolitana.',
    pergunta: 'Qual vidro você precisa limpar?',
    linhas: [
      { mini: 'altura', h: 'Vidros em altura e rapel', p: 'Prédios, torres, átrios e pé-direito alto', m: msg('limpeza de vidros em altura') },
      { mini: 'fachada', h: 'Fachada de vidro', p: 'Pele de vidro e Curtain Wall, por dentro e por fora', m: msg('limpeza de fachada de vidro') },
      { mini: 'vitrine', h: 'Vitrines e lojas', p: 'Lojas, clínicas e escritórios', m: msg('limpeza de vitrine e vidros comerciais') },
      { mini: 'sacada', h: 'Casas e sacadas', p: 'Janelas, sacadas e guarda-corpos', m: msg('limpeza de vidros pra minha casa') },
      { mini: 'posobra', h: 'Pós-obra', p: 'Tinta, cimento e poeira de obra no vidro', m: msg('limpeza pós-obra de vidros') },
    ],
    tiposTitulo: 'Cada vidro pede <em>um jeito de chegar e um jeito de limpar</em>',
    tiposP: 'Escada, haste ou rapel: o acesso certo é escolhido pra cada vidro, e a limpeza é feita painel a painel.',
    tipos: [
      { img: 'servico-altura', pos: '40% 30%', alt: 'Técnico em rapel limpando a fachada de vidro de uma torre em Curitiba',
        h: 'Vidros em altura e com rapel', p: 'Onde escada e haste não chegam, a equipe desce de rapel e limpa o vidro de cima a baixo. Serve pra prédio, torre comercial, átrio e casa com pé-direito alto.',
        t: 'Vidros altos · vidros de difícil acesso · pé-direito alto e átrios · elevadores panorâmicos', l: 'Orçamento de vidro em altura', m: msg('limpeza de vidros em altura') },
      { img: 'servico-fachada', pos: '60% 40%', alt: 'Técnico na calçada limpando a fachada de vidro de um prédio comercial com haste e rodo',
        h: 'Fachadas de vidro', p: 'Vidros de prédios, edifícios comerciais e condomínios, com limpeza interna e externa. Na pele de vidro, painel por painel, sem marca de rodo.',
        t: 'Pele de vidro (Structural Glazing) · cortina de vidro (Curtain Wall) · vidros prediais', l: 'Orçamento de fachada de vidro', m: msg('limpeza de fachada de vidro') },
      { img: 'servico-vitrine', pos: '40% 50%', alt: 'Rodo limpando a vitrine de uma loja de alto padrão em Curitiba',
        h: 'Vitrines, lojas, clínicas e escritórios', p: 'Vitrine sem marca de dedo e porta de vidro limpa, no dia e no horário que não atrapalham o atendimento.',
        t: 'Vidros comerciais · lojas de alto padrão · portas e painéis do chão ao teto · muros e painéis de vidro', l: 'Orçamento de vitrine', m: msg('limpeza de vitrine e vidros comerciais') },
      { img: 'servico-sacada', pos: '50% 45%', alt: 'Rodo limpando o envidraçamento de sacada de um apartamento alto em Curitiba',
        h: 'Casas, apartamentos e sacadas', p: 'Janela alta, vidro de sacada e guarda-corpo transparentes de novo, sem ninguém da família subir em escada.',
        t: 'Vidros residenciais · janelas e esquadrias · envidraçamento de sacada · guarda-corpos de vidro', l: 'Orçamento pra casa ou sacada', m: msg('limpeza de vidros pra minha casa') },
      { img: 'servico-posobra', pos: '55% 40%', alt: 'Técnico com raspador tirando respingos de tinta do vidro de uma sala comercial recém-terminada',
        h: 'Pós-obra de vidros', p: 'Resto de tinta, cimento e poeira saem do vidro novo antes da entrega, com cuidado pra não riscar.',
        t: 'Limpeza pós-obra de vidros · salas e lojas recém-entregues', l: 'Orçamento de pós-obra', m: msg('limpeza pós-obra de vidros') },
    ],
    publicos: true,
    par: { a: 'vidro-sujo', d: 'vidro-limpo', larguras: [1000, 1920], alts: ['Fachada de vidro sem brilho, com poeira e manchas, antes da limpeza', 'A mesma fachada de vidro depois da limpeza, refletindo o céu e as araucárias'],
      h: 'O mesmo vidro, <em>antes e depois</em>', p: 'Poeira, resto de obra e marca de dedo saem. A fachada volta a refletir o céu, e quem está dentro volta a ver a cidade.' },
    planos: { m: 'Olá! Vim pelo site da Novo Ambiente e quero saber dos planos de limpeza de vidros.' },
    botaoFoto: 'Mandar foto do vidro', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto do vidro pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de vidros'),
      { q: 'Vocês limpam vidros em altura e de difícil acesso?', r: 'Sim. Vidros altos, fachadas de vidro, átrios e vidros de pé-direito alto são limpos com rapel, onde escada e haste não chegam.' },
      { q: 'Que tipos de vidro vocês limpam?', r: 'Pele de vidro (Structural Glazing), vitrines, portas e painéis do chão ao teto, muros e painéis de vidro, janelas e esquadrias, sacadas e envidraçamento de sacada, guarda-corpos de vidro e elevadores panorâmicos.' },
      { q: 'Fazem limpeza pós-obra de vidros?', r: 'Sim. Tiramos resto de tinta, cimento e poeira de obra do vidro novo, com cuidado pra não riscar.' },
      { q: 'Vocês têm planos de limpeza recorrente?', r: 'Sim. Trabalhamos com serviço pontual e com contrato periódico: plano semanal, quinzenal, mensal, trimestral ou semestral, conforme a necessidade de cada cliente.' },
      faqVisita, faqRegiao,
    ],
    fecho: { h: 'Seu vidro, <em>transparente de novo</em>', p: 'Mande uma foto do vidro pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de vidros') },
  },
  {
    id: 'fachada', slug: 'limpeza-de-fachada-acm', menu: 'Fachada',
    titulo: 'Limpeza de fachada em Curitiba: ACM, pastilha, textura e pedra | Novo Ambiente Service',
    descricao: 'Limpeza de fachada de ACM, pastilha, textura e pedra em prédios, condomínios e empresas de Curitiba e Região. Orçamento por foto no WhatsApp ou com visita técnica.',
    foto: { img: 'servico-fachada-acm', pos: '50% 40%', alt: 'Técnico de uniforme limpando a fachada de ACM de um prédio comercial' },
    h1: 'Limpeza de fachada <em>em Curitiba</em>',
    sub: 'Poluição, limo e sujeira saem da fachada de ACM, pastilha, textura e pedra, em prédios, condomínios e empresas.',
    pergunta: 'Qual fachada você precisa limpar?',
    linhas: [
      { ico: 'i-fachada', h: 'Fachada de ACM', p: 'Prédios comerciais, lojas e empresas', m: msg('limpeza de fachada de ACM') },
      { ico: 'i-predio', h: 'Pastilha e cerâmica', p: 'Condomínios e prédios residenciais', m: msg('limpeza de fachada de pastilha') },
      { ico: 'i-casa', h: 'Textura e pintura', p: 'Casas, muros e prédios', m: msg('limpeza de fachada de textura') },
      { ico: 'i-pedra', h: 'Pedra e granito', p: 'Fachadas e revestimentos de pedra', m: msg('limpeza de fachada de pedra') },
    ],
    tiposTitulo: 'Cada material <em>pede um cuidado</em>',
    tiposP: 'Fachada de vidro tem página própria, a de <a href="../limpeza-de-vidros/">limpeza de vidros</a>. Aqui ficam os outros revestimentos.',
    icones: [
      { ico: 'i-fachada', h: 'ACM', p: 'Painel de alumínio composto de prédio comercial e loja, sem riscar a pintura do painel.' },
      { ico: 'i-predio', h: 'Pastilha e cerâmica', p: 'Rejunte escuro e limo saem da pastilha de condomínio e prédio residencial.' },
      { ico: 'i-casa', h: 'Textura e pintura', p: 'Sujeira e fuligem saem da textura de casa, muro e prédio.' },
      { ico: 'i-pedra', h: 'Pedra e granito', p: 'Revestimento de pedra de fachada e de entrada de prédio.' },
    ],
    publicosEspecificos: [
      { ico: 'i-predio', h: 'Condomínio', p: 'Fachada limpa valoriza o prédio e é o que o morador e quem passa na rua veem primeiro.', l: 'Orçamento pro condomínio', m: msg('limpeza da fachada do condomínio') },
      { ico: 'i-loja', h: 'Empresa e comércio', p: 'A fachada é a primeira impressão do seu negócio, antes de o cliente entrar.', l: 'Orçamento pra empresa', m: msg('limpeza da fachada da minha empresa') },
      { ico: 'i-casa', h: 'Casa', p: 'Muro e fachada de textura ou pedra com a cor de volta.', l: 'Orçamento pra casa', m: msg('limpeza da fachada da minha casa') },
    ],
    par: { a: 'fachada-acm-suja', d: 'fachada-acm-limpa', larguras: [1000, 1600], alts: ['Fachada de ACM com poluição e limo nas juntas, antes da limpeza', 'A mesma fachada de ACM depois da limpeza'],
      h: 'A mesma fachada, <em>antes e depois</em>', p: 'Poluição e limo saem das juntas e do painel, e a fachada volta a ter a cor de quando foi entregue.' },
    botaoFoto: 'Mandar foto da fachada', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto da fachada pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de fachada'),
      { q: 'Que tipos de fachada vocês limpam?', r: 'ACM, pastilha e cerâmica, textura e pintura, pedra e granito. Fachada de vidro e pele de vidro estão na página de limpeza de vidros.' },
      faqPlano('limpeza de fachada'),
      faqVisita, faqRegiao,
    ],
    fecho: { h: 'Sua fachada, <em>com a cor de volta</em>', p: 'Mande uma foto da fachada pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de fachada') },
  },
  {
    id: 'placa-solar', slug: 'limpeza-de-placa-solar', menu: 'Placa solar',
    titulo: 'Limpeza de placa solar em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de placa solar e painel solar em casas, comércios e indústrias de Curitiba e Região, sem riscar o vidro. Pontual ou com plano. Orçamento pelo WhatsApp.',
    foto: { img: 'servico-placa-solar', pos: '50% 55%', alt: 'Técnico de uniforme limpando placas solares no telhado de uma casa' },
    h1: 'Limpeza de placa solar <em>em Curitiba</em>',
    sub: 'Poeira, barro e sujeira de pássaro saem da placa de casas, comércios e indústrias, sem riscar o vidro.',
    pergunta: 'Onde ficam as suas placas?',
    linhas: [
      { mini: 'solar-casa', h: 'Casa', p: 'Placas no telhado de casa e sobrado', m: msg('limpeza de placa solar pra minha casa') },
      { mini: 'solar-comercio', h: 'Comércio e empresa', p: 'Lojas, escritórios e condomínios', m: msg('limpeza de placa solar pra minha empresa') },
      { mini: 'solar-industria', h: 'Indústria e galpão', p: 'Telhados grandes e muitas placas', m: msg('limpeza de placa solar em indústria ou galpão') },
    ],
    tiposTitulo: 'Placa suja <em>gera menos</em>',
    tiposP: 'A sujeira em cima do vidro tira luz da placa. Limpa, ela volta a receber o sol inteiro.',
    tipos: [
      { img: 'solar-residencial-limpo-1000', pos: '50% 50%', alt: 'Placas solares limpas no telhado de um sobrado, com araucárias ao fundo', wide: true,
        h: 'Casas e sobrados', p: 'Placas no telhado de casa e sobrado, limpas sem riscar o vidro.',
        t: 'Placa solar residencial · painel solar em telhado', l: 'Orçamento pra casa', m: msg('limpeza de placa solar pra minha casa') },
      { img: 'solar-industrial-limpo-1000', pos: '50% 50%', alt: 'Placas solares limpas no telhado de um galpão industrial', wide: true,
        h: 'Comércios, condomínios e indústrias', p: 'Telhados grandes, com muitas placas, em empresas, condomínios e galpões.',
        t: 'Placa solar comercial · painel solar industrial · galpões', l: 'Orçamento pra empresa ou indústria', m: msg('limpeza de placa solar pra minha empresa') },
    ],
    par: { a: 'solar-residencial-sujo', d: 'solar-residencial-limpo', larguras: [1000, 1600], alts: ['Placas solares de uma casa com poeira, barro e sujeira de pássaro, antes da limpeza', 'As mesmas placas solares depois da limpeza'],
      h: 'A mesma placa, <em>antes e depois</em>', p: 'Poeira, barro e sujeira de pássaro saem, e o vidro da placa volta a receber o sol inteiro.' },
    publicosEspecificos: [
      { ico: 'i-casa', h: 'Casa', p: 'Quem investiu na placa quer que ela gere o que prometeu na conta de luz.', l: 'Orçamento pra casa', m: msg('limpeza de placa solar pra minha casa') },
      { ico: 'i-loja', h: 'Comércio e condomínio', p: 'Placas em loja, escritório e prédio, limpas no dia combinado.', l: 'Orçamento pra empresa', m: msg('limpeza de placa solar pra minha empresa') },
      { ico: 'i-predio', h: 'Indústria e galpão', p: 'Telhados grandes, com muitas placas e acesso planejado.', l: 'Orçamento pra indústria', m: msg('limpeza de placa solar em indústria ou galpão') },
    ],
    planos: { m: 'Olá! Vim pelo site da Novo Ambiente e quero saber dos planos de limpeza de placa solar.' },
    botaoFoto: 'Mandar foto das placas', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto das placas solares pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de placa solar'),
      { q: 'De quanto em quanto tempo devo limpar a placa solar?', r: 'Depende do lugar: perto de estrada de terra, árvore, obra ou indústria, a placa suja mais rápido. Na visita técnica avaliamos e indicamos a frequência certa pras suas placas.' },
      { q: 'A limpeza risca a placa?', r: 'Não. A limpeza é feita com cuidado pra não riscar o vidro da placa.' },
      faqPlano('limpeza de placa solar'),
      faqVisita, faqRegiao,
    ],
    fecho: { h: 'Sua placa, <em>recebendo o sol inteiro</em>', p: 'Mande uma foto das placas pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de placa solar') },
  },
  {
    id: 'piso', slug: 'limpeza-de-piso', menu: 'Piso',
    titulo: 'Limpeza de piso e pedras em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de pisos, pedras e áreas externas de condomínios, empresas e casas em Curitiba e Região. Orçamento por foto no WhatsApp ou com visita técnica.',
    foto: { img: 'servico-piso', pos: '50% 60%', alt: 'Técnico de uniforme lavando o piso de pedra da área externa de um condomínio' },
    h1: 'Limpeza de piso <em>em Curitiba</em>',
    sub: 'Pisos, pedras e áreas externas de condomínios, empresas e casas, com o encardido e o limo fora.',
    pergunta: 'Que piso você precisa limpar?',
    linhas: [
      { ico: 'i-piso', h: 'Áreas externas', p: 'Calçadas, pátios e entradas', m: msg('limpeza de piso de área externa') },
      { ico: 'i-pedra', h: 'Pedras', p: 'Pisos e revestimentos de pedra', m: msg('limpeza de piso de pedra') },
      { ico: 'i-predio', h: 'Condomínio', p: 'Áreas comuns, garagem e entrada', m: msg('limpeza de piso pro condomínio') },
      { ico: 'i-loja', h: 'Empresa e loja', p: 'Pisos de comércio e escritório', m: msg('limpeza de piso pra minha empresa') },
    ],
    tiposTitulo: 'Onde o piso <em>mais encarde</em>',
    tiposP: 'Pedra e área externa pegam limo, barro e mancha. Avaliamos o piso antes de escolher como limpar.',
    icones: [
      { ico: 'i-piso', h: 'Áreas externas', p: 'Calçada, pátio, entrada e área de lazer, com o limo e o encardido fora.' },
      { ico: 'i-pedra', h: 'Pedras', p: 'Pisos e revestimentos de pedra, com o cuidado que cada pedra pede.' },
      { ico: 'i-predio', h: 'Áreas comuns de condomínio', p: 'Entrada, garagem, salão e área de lazer do prédio.' },
      { ico: 'i-loja', h: 'Empresas e lojas', p: 'Piso de comércio e escritório, no horário que não atrapalha o atendimento.' },
    ],
    publicosEspecificos: [
      { ico: 'i-predio', h: 'Condomínio', p: 'Área comum limpa é o que o morador percebe todo dia.', l: 'Orçamento pro condomínio', m: msg('limpeza de piso pro condomínio') },
      { ico: 'i-loja', h: 'Empresa e comércio', p: 'Piso limpo na entrada é a primeira coisa que o cliente pisa.', l: 'Orçamento pra empresa', m: msg('limpeza de piso pra minha empresa') },
      { ico: 'i-casa', h: 'Casa', p: 'Quintal, garagem e área de churrasqueira como novos.', l: 'Orçamento pra casa', m: msg('limpeza de piso pra minha casa') },
    ],
    botaoFoto: 'Mandar foto do piso', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto do piso pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de piso'),
      { q: 'Que tipos de piso vocês limpam?', r: 'Pisos e pedras de áreas externas, áreas comuns de condomínio, empresas, lojas e casas. Mande uma foto que confirmamos.' },
      faqPlano('limpeza de piso'),
      faqVisita, faqRegiao,
    ],
    fecho: { h: 'Seu piso, <em>limpo de novo</em>', p: 'Mande uma foto do piso pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de piso') },
  },
];

/* a página de contato: um botão por serviço, cada um com a sua mensagem */
export const CONTATO = {
  slug: 'contato',
  titulo: 'Contato | Novo Ambiente Service, limpeza de vidros em Curitiba',
  descricao: 'Fale com a Novo Ambiente Service pelo WhatsApp (41) 99779-9646: orçamento de limpeza de vidros, fachada, placa solar e piso em Curitiba e Região Metropolitana.',
  h1: 'Fale com <em>a Novo Ambiente</em>',
  sub: 'Atendemos pelo WhatsApp. Escolha o serviço e a conversa abre com a mensagem pronta.',
  linhas: [
    { mini: 'vitrine', h: 'Vidros e janelas', p: 'Altura, fachada de vidro, vitrine, casa e pós-obra', m: msg('limpeza de vidros') },
    { mini: 'fachada-acm', h: 'Fachada', p: 'ACM, pastilha, textura e pedra', m: msg('limpeza de fachada') },
    { mini: 'placa-solar', h: 'Placa solar', p: 'Casa, comércio e indústria', m: msg('limpeza de placa solar') },
    { mini: 'piso', h: 'Piso', p: 'Pisos, pedras e áreas externas', m: msg('limpeza de piso') },
  ],
  extras: [
    { ico: 'i-agenda', h: 'Agendar visita técnica', p: 'Pra avaliar o serviço com você', m: 'Olá! Vim pelo site da Novo Ambiente e quero agendar uma visita técnica.' },
    { ico: 'i-proposta', h: 'Montar um plano', p: 'Limpeza pontual ou periódica', m: 'Olá! Vim pelo site da Novo Ambiente e quero saber dos planos de limpeza recorrente.' },
  ],
};
