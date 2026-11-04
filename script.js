/* Novo Ambiente · prévia da página principal
   Entrada como no hola.design: a logo grande no centro, sobre o vídeo; rolando,
   ela encolhe e sobe pro lugar dela no menu, e o título assenta embaixo.
   Sem GSAP (bloqueado ou fora do ar) ou com "reduzir movimento", a entrada
   aparece pronta, numa tela só. */
(function () {
  var raiz = document.documentElement;
  var temGsap = !!window.gsap;
  var calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var celular = window.matchMedia('(max-width: 47.99rem)').matches;
  var chegam = document.querySelectorAll('[data-chega]');

  function mostrarTudo() {
    chegam.forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
  }
  if (!temGsap || calmo) { raiz.classList.add('estatico'); mostrarTudo(); }

  /* ---------- rolagem suave ---------- */
  var lenis = null;
  if (temGsap && window.Lenis && !calmo) {
    gsap.registerPlugin(ScrollTrigger);
    lenis = new Lenis({ lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  } else if (temGsap) {
    gsap.registerPlugin(ScrollTrigger);
  }

  var filme = document.querySelector('.filme');
  var entrada = document.querySelector('.entrada');

  /* ---------- a logo sobe pro menu ---------- */
  if (temGsap && !calmo) {
    var palco = entrada.querySelector('.palco');
    var grande = entrada.querySelector('.marca-centro img');
    var pequena = entrada.querySelector('.marca-topo img');
    var linha = entrada.querySelector('.linha-marca');
    var rolar = entrada.querySelector('.rolar');

    // quanto a logo grande precisa andar e encolher pra cair em cima da do menu
    function destino() {
      var g = grande.getBoundingClientRect(), m = pequena.getBoundingClientRect();
      return {
        x: (m.left + m.width / 2) - (g.left + g.width / 2),
        y: (m.top + m.height / 2) - (g.top + g.height / 2),
        s: m.height / g.height
      };
    }

    var tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: entrada, start: 'top top', end: 'bottom bottom', scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: function (st) { raiz.classList.toggle('no-menu', st.progress > 0.52); }
      }
    });
    tl.to(rolar, { opacity: 0, duration: 0.12 }, 0)
      .to(linha, { opacity: 0, y: -12, duration: 0.2 }, 0)
      .to(grande, {
        x: function () { return destino().x; },
        y: function () { return destino().y; },
        scale: function () { return destino().s; },
        duration: 0.55, ease: 'power2.inOut'
      }, 0)
      .to(grande, { opacity: 0, duration: 0.04 }, 0.53)
      .to(palco, { '--inicio': 0, duration: 0.45 }, 0.05)
      .fromTo(filme.parentNode, { scale: 1.1 }, { scale: 1, duration: 0.7 }, 0)
      .to(chegam, { opacity: 1, y: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' }, 0.5);
  }

  if (!temGsap) return;

  /* ---------- manifesto: as palavras acendem com a rolagem ---------- */
  document.querySelectorAll('[data-palavras]').forEach(function (p) {
    var palavras = p.textContent.trim().split(/\s+/);
    p.innerHTML = palavras.map(function (w) { return '<span class="p">' + w + '</span>'; }).join(' ');
    var spans = p.querySelectorAll('.p');
    if (calmo) { spans.forEach(function (s) { s.classList.add('aceso'); }); return; }
    ScrollTrigger.create({
      trigger: p, start: 'top 80%', end: 'bottom 45%',
      onUpdate: function (st) {
        var n = Math.round(st.progress * spans.length);
        spans.forEach(function (s, i) { s.classList.toggle('aceso', i < n); });
      }
    });
  });

  /* ---------- antes e depois: abre sozinho ao chegar na tela ---------- */
  document.querySelectorAll('[data-ba]').forEach(function (ba) {
    var r = ba.querySelector('input');
    function por(v) { ba.style.setProperty('--pos', v + '%'); r.value = v; }
    r.addEventListener('input', function () { por(r.value); });
    por(calmo ? 50 : 94);
    if (!calmo) {
      ScrollTrigger.create({
        trigger: ba, start: 'top 70%', once: true,
        onEnter: function () { var o = { v: 94 }; gsap.to(o, { v: 50, duration: 1.8, ease: 'expo.out', onUpdate: function () { por(o.v); } }); }
      });
    }
  });

  /* ---------- índice de serviços: a foto acompanha o mouse ---------- */
  var flutua = document.querySelector('.flutua');
  var lista = document.querySelector('[data-indice]');
  if (flutua && lista && window.matchMedia('(hover: hover) and (min-width: 62rem)').matches) {
    var fotos = flutua.querySelectorAll('img');
    var qx = gsap.quickTo(flutua, 'x', { duration: 0.5, ease: 'power3.out' });
    var qy = gsap.quickTo(flutua, 'y', { duration: 0.5, ease: 'power3.out' });
    lista.addEventListener('mousemove', function (e) { qx(e.clientX + 28); qy(e.clientY - 150); });
    lista.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('mouseenter', function () {
        var i = a.dataset.foto;
        fotos.forEach(function (f, k) { f.classList.toggle('vis', String(k) === i); });
        flutua.classList.toggle('vis', i !== undefined);
        gsap.to(flutua, { scale: i !== undefined ? 1 : 0.85, duration: 0.4, ease: 'power3.out' });
      });
    });
    lista.addEventListener('mouseleave', function () { flutua.classList.remove('vis'); gsap.to(flutua, { scale: 0.85, duration: 0.3 }); });
  }
  if (!calmo) {
    gsap.from('[data-indice] li', {
      opacity: 0, y: 28, duration: 0.9, ease: 'expo.out', stagger: 0.07,
      scrollTrigger: { trigger: '[data-indice]', start: 'top 80%', once: true }
    });
  }

  /* ---------- barra do WhatsApp no celular ---------- */
  var barra = document.querySelector('.barra-wa');
  if (barra && 'IntersectionObserver' in window) {
    var vistos = new Set();
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.isIntersecting ? vistos.add(e.target) : vistos.delete(e.target); });
      barra.classList.toggle('vis', vistos.size === 0);
    });
    document.querySelectorAll('[data-esconde-barra], .entrada').forEach(function (a) { io.observe(a); });
  }
})();
