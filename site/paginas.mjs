// O conteúdo das páginas de serviço e da página de contato (15/11/2026).
// Só entra o que é afirmável hoje (PRODUCT.md, "Evidence on Hand"). Desde 17/11: NR-35, IRATA (dos parceiros do rapel),
// PGR, PCMSO, LTCAT, pagamento, nota fiscal e a nota do Google. Nunca: seguro, ART, tempo de mercado, número de obras ou clientes. Termos proibidos (cobertura, teto e telhado de vidro,
// pergolado, toldo, claraboia) em lugar nenhum, nem no texto alternativo.
// Os endereços são os mesmos do site antigo, pra não perder o que já está no Google.

const msg = (s) => `Olá! Vim pelo site da Novo Ambiente e quero um orçamento de ${s}.`;

/* as perguntas que valem pra qualquer serviço */
const faqOrcamento = (o) => ({ q: `Como peço um orçamento de ${o}?`, r: 'Pelo WhatsApp (41) 99779-9646. Uma foto e o endereço já bastam pra começar, e o orçamento é sem compromisso. Se preferir, marcamos uma visita técnica presencial.' });
const faqRegiao = { q: 'Vocês atendem fora de Curitiba?', r: 'Sim. Atendemos Curitiba e a Região Metropolitana. Mande o endereço pelo WhatsApp e confirmamos.' };
const faqVisita = { q: 'Vocês fazem visita técnica?', r: 'Sim. Fazemos visita técnica presencial pra avaliar o serviço e montar uma proposta personalizada.' };
/* 17/11, pedido dela: "Vocês fazem limpezas periódicas de ..." no lugar de "... com contrato" */
const faqPlano = (o) => ({ q: `Vocês fazem limpezas periódicas de ${o}?`, r: 'Sim. Fazemos a limpeza pontual ou periódica: semanal, quinzenal, mensal, trimestral ou semestral, com o plano montado conforme a necessidade de cada cliente.' });
/* 17/11: o que o cliente sempre pergunta antes de fechar (resposta dela à pergunta 1) */
const faqFechar = [
  { q: 'Quais são as formas de pagamento?', r: 'Pix, dinheiro, cartão de débito, cartão de crédito à vista ou parcelado e boleto (só pra empresas). O pagamento com cartão é feito por link e tem taxa; no crédito parcelado, também juros.' },
  { q: 'Vocês atendem fora do horário comercial e no fim de semana?', r: 'Sim, com agendamento antecipado.' },
  { q: 'Vocês emitem nota fiscal?', r: 'Sim, emitimos nota fiscal.' },
];

/* 17/11: o bloco de segurança (resposta dela à pergunta 3). O rapel é feito por parceiros: o texto não diz
   "nossa equipe tem IRATA". Seguro e ART eles não têm, e não aparecem em lugar nenhum */
export const SEGURANCA = {
  h: 'Trabalho em altura <em>com segurança</em>',
  p: 'Treinamento, certificação e documentação de quem trabalha em altura.',
  itens: [
    { ico: 'i-altura', h: 'NR-35', p: 'O Lucas tem o treinamento da NR-35, a norma de trabalho em altura, e os parceiros que fazem o rapel também.' },
    { ico: 'i-corda', h: 'Rapel com IRATA', p: 'Nos serviços de rapel, os técnicos têm certificação IRATA (nível 1 ou 2) e NR-35.' },
    { ico: 'i-proposta', h: 'Documentação', p: 'A empresa tem PGR, PCMSO e LTCAT. Quando o serviço pede, fazemos a APR (análise preliminar de risco) e a OS (ordem de serviço) do cliente, com valor à parte.' },
  ],
};

/* 17/11: os elogios (resposta dela à pergunta 2). 18/11: as avaliações reais do perfil, com nome abreviado e o texto
   como está no Google (trentini/clientes/Novo-Ambiente-Service/dados/avaliacoes-google-18-11.md). Só positivas; as de
   telhado e cobertura ficam fora (termos que não entram no site). Os 3 primeiros são os que já estavam */
export const ELOGIOS = {
  h: 'O que dizem <em>os clientes</em>',
  p: 'Capricho, pontualidade e atenção do técnico são o que os clientes mais elogiam.',
  nota: '4,8', total: 16,
  perfil: 'https://www.google.com/maps?cid=16360888106714828583',
  itens: [
    { n: 'Lisye D.', t: 'Nossa, atendimento incrível! Meus vidros ficaram irreconhecíveis! Obrigada 🙏🏼' },
    { n: 'Flavia F.', t: 'Excelente!!! Pontuais e eficientes.' },
    { n: 'Jose Miguel R.', t: 'Serviço 5 estrelas, os moços que vieram aqui são muito competentes e atenciosos.' },
    { n: 'Maykon B.', cargo: 'Síndico profissional', t: 'Ótima empresa, me atenderam super bem. Pessoal e equipamentos qualificados. Super recomendo.' },
    { n: 'Carlos O.', t: 'Excelentes profissionais com preço justo!' },
    { n: 'Mariana B.', t: 'Cuidadosos e profissionais.' },
    { n: 'Rogério F.', t: 'Trabalho excelente e impecável!' },
    { n: 'Francielle T.', t: 'Serviço de qualidade e ótimo atendimento!' },
    { n: 'Eloise W.', t: 'Excelentes profissionais!' },
    { n: 'Jessica O.', t: 'Ótimo serviço.' },
  ],
};

export const SERVICOS = [
  {
    id: 'vidros', slug: 'limpeza-de-vidros', menu: 'Vidros',
    titulo: 'Limpeza de vidros em altura e fachadas de vidro em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de vidros altos e de difícil acesso com rapel, fachadas de vidro, pele de vidro, vitrines, sacadas, pé-direito alto e pós-obra em Curitiba e Região. Orçamento pelo WhatsApp.',
    foto: { img: 'servico-vidros-topo', pos: '45% 35%', alt: 'Técnico da Novo Ambiente limpando com haste e rodo a vitrine de uma loja de roupas' }, /* 17/11: a vitrine deles também no topo da página de vidros */
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
      { img: 'servico-altura', pos: '50% 40%', alt: 'Técnico de uniforme e capacete em rapel limpando com rodo a pele de vidro de um prédio, com a cidade ao fundo',
        h: 'Vidros em altura e com rapel', p: 'Onde escada e haste não chegam, a equipe desce de rapel e limpa o vidro de cima a baixo. Serve pra prédio, torre comercial, átrio e casa com pé-direito alto.',
        t: 'Vidros altos · vidros de difícil acesso · pé-direito alto e átrios · elevadores panorâmicos', l: 'Orçamento de vidro em altura', m: msg('limpeza de vidros em altura') },
      { img: 'servico-fachada', pos: '50% 70%', alt: 'Técnico de uniforme na calçada limpando com haste longa os vidros de um prédio comercial',
        h: 'Fachadas de vidro', p: 'Vidros de prédios, edifícios comerciais e condomínios, com limpeza interna e externa. Na pele de vidro, painel por painel, sem marca de rodo.',
        t: 'Pele de vidro (Structural Glazing) · cortina de vidro (Curtain Wall) · vidros prediais', l: 'Orçamento de fachada de vidro', m: msg('limpeza de fachada de vidro') },
      { img: 'servico-vitrine', pos: '50% 50%', alt: 'Técnico de uniforme numa escada limpando o vidro alto da fachada de uma loja',
        h: 'Vitrines, lojas, clínicas e escritórios', p: 'Vitrine sem marca de dedo e porta de vidro limpa, no dia e no horário que não atrapalham o atendimento.',
        t: 'Vidros comerciais · lojas de alto padrão · portas e painéis do chão ao teto · muros e painéis de vidro', l: 'Orçamento de vitrine', m: msg('limpeza de vitrine e vidros comerciais') },
      { img: 'servico-sacada', pos: '50% 50%', alt: 'Técnico de uniforme limpando com haste o vidro alto de uma sala com pé-direito alto',
        h: 'Casas, apartamentos e sacadas', p: 'Janela alta, vidro de sacada e guarda-corpo transparentes de novo, sem ninguém da família subir em escada.',
        t: 'Vidros residenciais · janelas e esquadrias · limpeza de sacada de vidro e de vidros de varanda · guarda-corpos de vidro', l: 'Orçamento pra casa ou sacada', m: msg('limpeza de vidros pra minha casa') },
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
      { q: 'Que tipos de vidro vocês limpam?', r: 'Pele de vidro (Structural Glazing), vitrines, portas e painéis do chão ao teto, muros e painéis de vidro, janelas e esquadrias, sacadas de vidro e vidros de varanda, guarda-corpos de vidro e elevadores panorâmicos.' },
      { q: 'Fazem limpeza pós-obra de vidros?', r: 'Sim. Tiramos resto de tinta, cimento e poeira de obra do vidro novo, com cuidado pra não riscar.' },
      faqPlano('vidros'),
      ...faqFechar, faqVisita, faqRegiao,
    ],
    seguranca: true,
    fecho: { h: 'Seu vidro, <em>transparente de novo</em>', p: 'Mande uma foto do vidro pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de vidros') },
  },
  {
    id: 'fachada', slug: 'limpeza-de-fachada-acm', menu: 'Fachada',
    titulo: 'Limpeza de fachada em Curitiba: ACM, pastilha, textura e pedra | Novo Ambiente Service',
    descricao: 'Limpeza de fachada de ACM, pastilha, textura e pedra, com muro, grade, portão, rufos e calhas, em casas, prédios, condomínios, empresas e indústrias de Curitiba e Região. Orçamento pelo WhatsApp.',
    foto: { img: 'servico-fachada-acm', pos: '50% 40%', alt: 'Técnico de uniforme em rapel lavando com jato a fachada de um prédio' },
    h1: 'Limpeza de fachada <em>em Curitiba</em>',
    sub: 'Poluição, limo e sujeira saem da fachada de ACM, pastilha, textura e pedra, e também do muro, da grade, do portão e das calhas.',
    pergunta: 'Qual fachada você precisa limpar?',
    linhas: [
      { mini: 'f-acm', h: 'Fachada de ACM', p: 'Prédios comerciais, lojas e empresas', m: msg('limpeza de fachada de ACM') },
      { mini: 'f-pastilha', h: 'Pastilha e cerâmica', p: 'Condomínios e prédios residenciais', m: msg('limpeza de fachada de pastilha') },
      { mini: 'f-textura', h: 'Textura e pintura', p: 'Casas, muros e prédios', m: msg('limpeza de fachada de textura') },
      { mini: 'f-pedra', h: 'Pedra e granito', p: 'Fachadas e revestimentos de pedra', m: msg('limpeza de fachada de pedra') },
      { mini: 'f-completa', h: 'Fachada completa', p: 'Muro, grade, portão, rufos e calhas', m: msg('limpeza da fachada completa, com muro, grade, portão e calhas') },
    ],
    tiposTitulo: 'Cada material <em>pede um cuidado</em>',
    tiposP: 'Fachada de vidro tem página própria, a de <a href="../limpeza-de-vidros/">limpeza de vidros</a>. Aqui ficam os outros revestimentos.',
    icones: [
      { ico: 'i-fachada', h: 'ACM', p: 'Painel de alumínio composto de prédio comercial e loja, sem riscar a pintura do painel.' },
      { ico: 'i-predio', h: 'Pastilha e cerâmica', p: 'Rejunte escuro e limo saem da pastilha de condomínio e prédio residencial.' },
      { ico: 'i-casa', h: 'Textura e pintura', p: 'Sujeira e fuligem saem da textura de casa, muro e prédio.' },
      { ico: 'i-pedra', h: 'Pedra e granito', p: 'Revestimento de pedra de fachada e de entrada de prédio.' },
    ],
    /* 17/11, pedido dela: a fachada inteira, não só a alvenaria */
    completa: { img: 'servico-fachada-casa', pos: '50% 45%', alt: 'Técnico de uniforme lavando com haste e jato a fachada de uma casa, ao lado do portão da garagem',
      h: 'A fachada inteira, não só a parede', p: 'Quando precisa, lavamos a fachada completa: além do revestimento, o muro, a grade, o portão, os rufos e as calhas. A casa ou o prédio fica limpo por inteiro, e não só a parte de alvenaria.',
      t: 'Muro · grade · portão · rufos e calhas', l: 'Orçamento da fachada completa', m: msg('limpeza da fachada completa, com muro, grade, portão e calhas') },
    publicosEspecificos: [
      { ico: 'i-predio', h: 'Condomínio', p: 'Fachada limpa valoriza o prédio e é o que o morador e quem passa na rua veem primeiro.', l: 'Orçamento pro condomínio', m: msg('limpeza da fachada do condomínio') },
      { ico: 'i-loja', h: 'Empresa e comércio', p: 'A fachada é a primeira impressão do seu negócio, antes de o cliente entrar.', l: 'Orçamento pra empresa', m: msg('limpeza da fachada da minha empresa') },
      { ico: 'i-industria', h: 'Indústria', p: 'Fachada de galpão, barracão e prédio industrial, com acesso planejado e data combinada.', l: 'Orçamento pra indústria', m: msg('limpeza da fachada da indústria') },
      { ico: 'i-casa', h: 'Casa', p: 'Muro, portão e fachada de textura ou pedra com a cor de volta.', l: 'Orçamento pra casa', m: msg('limpeza da fachada da minha casa') },
    ],
    par: { a: 'fachada-acm-suja', d: 'fachada-acm-limpa', larguras: [1000, 1600], alts: ['Fachada de ACM com poluição e limo nas juntas, antes da limpeza', 'A mesma fachada de ACM depois da limpeza'],
      h: 'A mesma fachada, <em>antes e depois</em>', p: 'Poluição e limo saem das juntas e do painel, e a fachada volta a ter a cor de quando foi entregue.' },
    botaoFoto: 'Mandar foto da fachada', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto da fachada pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de fachada'),
      { q: 'Que tipos de fachada vocês limpam?', r: 'ACM, pastilha e cerâmica, textura e pintura, pedra e granito. Fachada de vidro e pele de vidro estão na página de limpeza de vidros.' },
      { q: 'Vocês lavam muro, grade, portão e calhas?', r: 'Sim. Quando precisa, lavamos a fachada completa: muro, grade, portão, rufos e calhas, além do revestimento.' },
      faqPlano('fachada'),
      ...faqFechar, faqVisita, faqRegiao,
    ],
    seguranca: true,
    fecho: { h: 'Sua fachada, <em>com a cor de volta</em>', p: 'Mande uma foto da fachada pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de fachada') },
  },
  {
    id: 'placa-solar', slug: 'limpeza-de-placa-solar', menu: 'Placa solar',
    titulo: 'Limpeza de placa solar em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de placa solar e painel solar em casas, comércios e indústrias de Curitiba e Região, sem riscar o vidro. Pontual ou com plano. Orçamento pelo WhatsApp.',
    foto: { img: 'servico-placa-solar', pos: '45% 50%', alt: 'Técnico de uniforme, capacete e cinto limpando com rodo as placas solares no telhado de um galpão' },
    iguais: true, /* 17/11, pedido dela: os dois cartões com botão e texto do mesmo tamanho */
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
        h: 'Casas e sobrados', p: 'Placas no telhado de casa e sobrado, limpas sem riscar o vidro. Você não precisa subir no telhado: mande uma foto das placas e combinamos o dia.',
        t: 'Placa solar residencial · painel solar em telhado', l: 'Orçamento pra casa', m: msg('limpeza de placa solar pra minha casa') },
      { img: 'solar-galpao-1000', pos: '50% 50%', alt: 'Técnico de uniforme limpando com rodo as placas solares no telhado de um galpão', wide: true,
        h: 'Comércios, condomínios e indústrias', p: 'Telhados grandes, com muitas placas, em empresas, condomínios e galpões. Quanto mais placas, mais energia a sujeira tira todo mês. Dia e acesso são combinados com a administração.',
        t: 'Placa solar comercial · painel solar industrial · galpões', l: 'Orçamento pra empresa ou indústria', m: msg('limpeza de placa solar pra minha empresa') },
    ],
    /* 18/11: a dor de quem tem placa suja (pedido do Vinicius: a página dava pouco contexto). Só o que é observável
       pelo dono e o que eles já afirmaram (sem riscar o vidro, perto de estrada, árvore, obra ou indústria); nenhum número */
    sinais: {
      h: 'Sinais de que a placa <em>precisa de limpeza</em>',
      p: 'Como a placa fica no telhado, a sujeira passa despercebida. Estes são os sinais mais comuns.',
      itens: [
        { h: 'A conta de luz voltou a subir', p: 'Sem você ter passado a gastar mais energia em casa ou na empresa.' },
        { h: 'O aplicativo mostra menos geração', p: 'O app do inversor marca menos energia do que antes, em dias de sol parecidos.' },
        { h: 'Dá para ver a sujeira', p: 'Poeira, barro, folha ou sujeira de pássaro em cima do vidro das placas.' },
        { h: 'Tem poeira por perto', p: 'Estrada de terra, árvore, obra ou indústria perto da casa fazem a placa sujar mais rápido.' },
      ],
      sozinho: { h: 'Por que não limpar sozinho', p: 'Subir no telhado sem equipamento é arriscado, e escova ou produto errado pode riscar o vidro da placa. Nós subimos com equipamento de segurança e limpamos com cuidado para não riscar.' },
    },
    par: { a: 'solar-residencial-sujo', d: 'solar-residencial-limpo', larguras: [1000, 1600], alts: ['Placas solares de uma casa com poeira, barro e sujeira de pássaro, antes da limpeza', 'As mesmas placas solares depois da limpeza'],
      h: 'A mesma placa, <em>antes e depois</em>', p: 'Poeira, barro e sujeira de pássaro saem, e o vidro da placa volta a receber o sol inteiro.' },
    publicosEspecificos: [
      { ico: 'i-casa', h: 'Casa', p: 'Quem investiu na placa quer que ela gere o que prometeu na conta de luz.', r: 'Placa limpa sem ninguém da família subir no telhado.', l: 'Orçamento pra casa', m: msg('limpeza de placa solar pra minha casa') },
      { ico: 'i-loja', h: 'Comércio e condomínio', p: 'Placas em loja, escritório e prédio, limpas no dia combinado.', r: 'Limpeza pontual ou com plano, no dia e no horário que não atrapalham.', l: 'Orçamento pra empresa', m: msg('limpeza de placa solar pra minha empresa') },
      { ico: 'i-predio', h: 'Indústria e galpão', p: 'Telhados grandes, com muitas placas e acesso planejado.', r: 'Data combinada e, quando o serviço pede, APR e OS feitas por nós.', l: 'Orçamento pra indústria', m: msg('limpeza de placa solar em indústria ou galpão') },
    ],
    seguranca: true, /* 18/11: placa fica no telhado, é trabalho em altura; o bloco é o mesmo da página de vidros */
    planos: { m: 'Olá! Vim pelo site da Novo Ambiente e quero saber dos planos de limpeza de placa solar.' },
    botaoFoto: 'Mandar foto das placas', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto das placas solares pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de placa solar'),
      { q: 'De quanto em quanto tempo devo limpar a placa solar?', r: 'Depende do lugar: perto de estrada de terra, árvore, obra ou indústria, a placa suja mais rápido. Na visita técnica avaliamos e indicamos a frequência certa pras suas placas.' },
      { q: 'A limpeza risca a placa?', r: 'Não. A limpeza é feita com cuidado pra não riscar o vidro da placa.' },
      { q: 'Por que limpar a placa solar?', r: 'Porque a sujeira em cima do vidro tira luz da placa, e placa com menos luz gera menos energia. Limpa, ela volta a receber o sol inteiro.' },
      { q: 'A chuva não limpa a placa?', r: 'Ajuda, mas não resolve sozinha: barro e sujeira de pássaro ficam grudados no vidro, e a poeira volta a assentar depois que seca.' },
      { q: 'Vocês limpam placas em galpão e indústria?', r: 'Sim. Telhados grandes, com muitas placas, com acesso planejado e data combinada. Quando o serviço pede, fazemos a APR e a OS, com valor à parte.' },
      faqPlano('placa solar'),
      ...faqFechar, faqVisita, faqRegiao,
    ],
    fecho: { h: 'Sua placa, <em>recebendo o sol inteiro</em>', p: 'Mande uma foto das placas pelo WhatsApp ou peça uma visita técnica, e receba a proposta sem compromisso.', m: msg('limpeza de placa solar') },
  },
  {
    id: 'piso', slug: 'limpeza-de-piso', menu: 'Piso',
    titulo: 'Limpeza de piso e pedras em Curitiba | Novo Ambiente Service',
    descricao: 'Limpeza de pisos, pedras e áreas externas de condomínios, empresas e casas em Curitiba e Região. Orçamento por foto no WhatsApp ou com visita técnica.',
    foto: { img: 'servico-piso', pos: '50% 50%', alt: 'Técnico de uniforme limpando com enceradeira o piso de pedra da área externa de um condomínio' },
    h1: 'Limpeza de piso <em>em Curitiba</em>',
    sub: 'Pisos, pedras e áreas externas de condomínios, empresas e casas, com o encardido e o limo fora.',
    pergunta: 'Que piso você precisa limpar?',
    linhas: [
      { mini: 'p-externa', h: 'Áreas externas', p: 'Calçadas, pátios e entradas', m: msg('limpeza de piso de área externa') },
      { mini: 'p-pedra', h: 'Pedras', p: 'Pisos e revestimentos de pedra', m: msg('limpeza de piso de pedra') },
      { mini: 'p-condominio', h: 'Condomínio', p: 'Áreas comuns, garagem e entrada', m: msg('limpeza de piso pro condomínio') },
      { mini: 'p-loja', h: 'Empresa e loja', p: 'Pisos de comércio e escritório', m: msg('limpeza de piso pra minha empresa') },
    ],
    tiposTitulo: 'Onde o piso <em>mais encarde</em>',
    tiposP: 'Pedra e área externa pegam limo, barro e mancha. Avaliamos o piso antes de escolher como limpar.',
    icones: [
      { ico: 'i-piso', h: 'Áreas externas', p: 'Calçada, pátio, entrada e área de lazer, com o limo e o encardido fora.' },
      { ico: 'i-pedra', h: 'Pedras', p: 'Pisos e revestimentos de pedra, com o cuidado que cada pedra pede.' },
      { ico: 'i-predio', h: 'Áreas comuns de condomínio', p: 'Entrada, garagem, salão e área de lazer do prédio.' },
      { ico: 'i-loja', h: 'Empresas e lojas', p: 'Piso de comércio e escritório, no horário que não atrapalha o atendimento.' },
    ],
    /* 18/11: a dor de quem tem piso encardido, no mesmo molde da placa solar. Só o observável e o que eles afirmam */
    sinais: {
      h: 'Sinais de que o piso <em>precisa de limpeza</em>',
      p: 'O encardido aparece aos poucos, até o dia em que a vassoura e a mangueira já não resolvem.',
      itens: [
        { h: 'Limo na área externa', p: 'Calçada, pátio e entrada com limo ficam escorregadios, principalmente em dia de chuva.' },
        { h: 'Encardido que não sai', p: 'Mancha escura de barro e sujeira que a limpeza do dia a dia não tira.' },
        { h: 'Pedra sem a cor de antes', p: 'A pedra fica escura e opaca, longe da cor de quando foi colocada.' },
      ],
      sozinho: { h: 'Por que chamar quem faz', p: 'Produto errado pode manchar a pedra, e lavar sem o equipamento certo só espalha a sujeira. Avaliamos o piso antes de escolher como limpar.' },
    },
    publicosEspecificos: [
      { ico: 'i-predio', h: 'Condomínio', p: 'Área comum limpa é o que o morador percebe todo dia.', r: 'Data combinada com a administração, pontual ou com plano.', l: 'Orçamento pro condomínio', m: msg('limpeza de piso pro condomínio') },
      { ico: 'i-loja', h: 'Empresa e comércio', p: 'Piso limpo na entrada é a primeira coisa que o cliente pisa.', r: 'Limpeza no horário que não atrapalha o atendimento.', l: 'Orçamento pra empresa', m: msg('limpeza de piso pra minha empresa') },
      { ico: 'i-casa', h: 'Casa', p: 'Quintal, garagem e área de churrasqueira como novos.', r: 'Orçamento por foto, sem compromisso.', l: 'Orçamento pra casa', m: msg('limpeza de piso pra minha casa') },
    ],
    botaoFoto: 'Mandar foto do piso', mFoto: 'Olá! Vim pelo site da Novo Ambiente. Vou mandar uma foto do piso pra vocês me passarem o orçamento.',
    faq: [
      faqOrcamento('limpeza de piso'),
      { q: 'Que tipos de piso vocês limpam?', r: 'Pisos e pedras de áreas externas, áreas comuns de condomínio, empresas, lojas e casas. Mande uma foto que confirmamos.' },
      { q: 'Vocês limpam piso de pedra?', r: 'Sim. Pisos e revestimentos de pedra, com o cuidado que cada pedra pede. Avaliamos o piso antes de escolher como limpar.' },
      { q: 'Dá para limpar fora do horário de funcionamento?', r: 'Sim. Com agendamento antecipado, atendemos fora do horário comercial e no fim de semana, para não atrapalhar o movimento.' },
      faqPlano('piso'),
      ...faqFechar, faqVisita, faqRegiao,
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
