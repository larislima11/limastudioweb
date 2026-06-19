/* ===========================================================
   LIMA STUDIO WEB — JavaScript
   1. Animação da galáxia (Milky Way) no <canvas>
   2. Interface (header ao rolar, menu mobile, reveal, cards, ano)
   =========================================================== */

/* ===========================================================
   1. MILKY WAY — galáxia que se constrói
   As partículas nascem no núcleo e se espalham formando os
   braços espirais; gira rápido no início e vai desacelerando.

   Parâmetros para ajustar (procure no código):
   - BUILD  → tempo de construção (segundos), na função draw()
   - arms   → número de braços espirais, em buildGalaxy()
   - TILT   → achatamento do disco (0.5 inclinado, 1 de frente)
   - galaxy.cx / cy → posição da galáxia na tela, em buildGalaxy()
   =========================================================== */
const cv = document.getElementById('stars');
const ctx = cv.getContext('2d');
let W, H, bgStars = [], gxStars = [], shooters = [], t0 = null;
const TILT = 0.5;          // achatamento do disco (visto de cima/ângulo)
const galaxy = { cx: 0, cy: 0, rot: 0 };

// Parallax: o cursor desloca levemente as camadas (profundidade)
let pxT = 0, pyT = 0, px = 0, py = 0;

const rnd = (a, b) => a + Math.random() * (b - a);

function makeStar(r, ang, maxR, core) {
  const rn = r / maxR;
  let cr, cg, cb;
  if (core) { cr = 255; cg = 244; cb = 252; }
  else {
    cr = Math.round(232 - rn * 60 + (Math.random() * 18 - 9));
    cg = Math.round(180 - rn * 86);
    cb = Math.round(255 - rn * 26);
  }
  return {
    r, ang,
    size: core ? rnd(0.7, 1.7) : rnd(0.5, 1.35),
    bright: core ? rnd(0.85, 1) : rnd(0.25, 0.85) * (1 - rn * 0.35),
    delay: core ? rnd(0, 0.12) : 0.10 + rn * 0.72 + Math.random() * 0.1, // núcleo primeiro, braços por último
    col: cr + ',' + cg + ',' + cb,
    tw: Math.random() * Math.PI * 2,
    twsp: rnd(0.01, 0.04)
  };
}

function buildGalaxy() {
  const mobile = W < 700;
  galaxy.cx = W * (mobile ? 0.5 : 0.68);
  galaxy.cy = H * (mobile ? 0.30 : 0.46);
  const maxR = Math.min(W, H) * (mobile ? 0.46 : 0.54);
  const arms = 3;
  const count = Math.min(2600, Math.floor(W * H / (mobile ? 1400 : 760)));
  const coreN = Math.floor(count * 0.22);
  gxStars = [];
  // núcleo
  for (let i = 0; i < coreN; i++) {
    const r = Math.pow(Math.random(), 2) * maxR * 0.16;
    gxStars.push(makeStar(r, Math.random() * Math.PI * 2, maxR, true));
  }
  // braços espirais
  for (let i = 0; i < count - coreN; i++) {
    const arm = i % arms;
    const rr = Math.pow(Math.random(), 0.62);
    const r = maxR * (0.06 + rr * 0.94);
    const base = arm * (Math.PI * 2 / arms);
    const spiral = (r / maxR) * 4.3;                 // quão "fechada" é a espiral
    const scatter = (Math.random() - 0.5) * 0.6;     // dispersão dos braços
    const ang = base + spiral + scatter;
    gxStars.push(makeStar(r, ang, maxR, false));
  }
}

function buildBg() {
  const n = Math.min(280, Math.floor(W * H / 8200));
  bgStars = [];
  for (let i = 0; i < n; i++) {
    const d = rnd(0.25, 1);                 // profundidade: longe (.25) → perto (1)
    const big = Math.random() < 0.07;       // poucas estrelas grandes/brilhantes
    // paleta realista: maioria branca, algumas roxas/azuis e raras âmbar
    const p = Math.random();
    let tint;
    if (p < 0.6) tint = '255,255,255';
    else if (p < 0.78) tint = '201,166,255';
    else if (p < 0.9) tint = '176,210,255';
    else tint = '255,219,186';
    bgStars.push({
      bx: Math.random() * W, by: Math.random() * H,
      r: (big ? rnd(1.3, 2.1) : rnd(0.4, 1.15)) * (0.5 + d * 0.5) + 0.2,
      a: Math.random() * Math.PI * 2, sp: rnd(0.004, 0.022),
      d, tint, glow: big
    });
  }
}

function resize() {
  W = cv.width = innerWidth;
  H = cv.height = innerHeight;
  buildBg();
  buildGalaxy();
}

function spawnShooter() {
  shooters.push({
    x: Math.random() * W * 0.8, y: -20 - Math.random() * 60,
    len: rnd(80, 200), sp: rnd(5, 11), ang: Math.PI / 4, life: 0, max: 70
  });
}

function draw(ts) {
  if (t0 === null) t0 = ts;
  const elapsed = (ts - t0) / 1000;
  const BUILD = 4.5;
  const p = Math.min(1, elapsed / BUILD);          // progresso global da construção
  ctx.clearRect(0, 0, W, H);

  // parallax suave: aproxima o alvo do cursor a cada quadro
  px += (pxT - px) * 0.045;
  py += (pyT - py) * 0.045;
  const ox = px * 46, oy = py * 46;                 // deslocamento base das camadas

  // estrelas de fundo (camadas com profundidade + brilho nas maiores)
  const fade = Math.min(1, elapsed * 0.6);
  for (const s of bgStars) {
    s.a += s.sp;
    const al = (0.22 + Math.abs(Math.sin(s.a)) * 0.62) * fade * (0.45 + s.d * 0.55);
    if (al <= 0.02) continue;
    const x = s.bx + ox * s.d, y = s.by + oy * s.d; // camadas próximas se movem mais
    if (s.glow) {                                   // halo suave nas estrelas brilhantes
      const g = ctx.createRadialGradient(x, y, 0, x, y, s.r * 4.5);
      g.addColorStop(0, 'rgba(' + s.tint + ',' + (al * 0.5) + ')');
      g.addColorStop(1, 'rgba(' + s.tint + ',0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, s.r * 4.5, 0, 7); ctx.fill();
    }
    ctx.fillStyle = 'rgba(' + s.tint + ',' + al + ')';
    ctx.beginPath(); ctx.arc(x, y, s.r, 0, 7); ctx.fill();
  }

  // a galáxia fica num plano mais distante (parallax menor)
  const gOx = ox * 0.35, gOy = oy * 0.35;
  const gcx = galaxy.cx + gOx, gcy = galaxy.cy + gOy;

  // brilho do núcleo (mais sutil que antes)
  const gA = Math.min(1, p * 1.4);
  const R = Math.min(W, H) * 0.2;
  const grd = ctx.createRadialGradient(gcx, gcy, 0, gcx, gcy, R);
  grd.addColorStop(0, 'rgba(228,205,255,' + (0.42 * gA) + ')');
  grd.addColorStop(0.4, 'rgba(150,110,230,' + (0.12 * gA) + ')');
  grd.addColorStop(1, 'rgba(120,80,200,0)');
  ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(gcx, gcy, R, 0, 7); ctx.fill();

  // rotação: rápida durante a construção, lenta depois
  galaxy.rot += (p < 1 ? 0.014 * (1 - p) + 0.0006 : 0.0006);

  for (const st of gxStars) {
    let lp = (p - st.delay) / 0.22;
    lp = lp < 0 ? 0 : lp > 1 ? 1 : lp;
    const ease = 1 - Math.pow(1 - lp, 3);            // easeOutCubic (voa do centro pra fora)
    const cr = st.r * ease;
    const a = st.ang + galaxy.rot;
    const x = gcx + Math.cos(a) * cr;
    const y = gcy + Math.sin(a) * cr * TILT;
    st.tw += st.twsp;
    const tw = 0.7 + Math.abs(Math.sin(st.tw)) * 0.3;
    const alpha = st.bright * ease * tw * 0.92;
    if (alpha <= 0.02) continue;
    ctx.fillStyle = 'rgba(' + st.col + ',' + alpha + ')';
    ctx.beginPath(); ctx.arc(x, y, st.size, 0, 7); ctx.fill();
  }

  // estrelas cadentes
  for (let i = shooters.length - 1; i >= 0; i--) {
    const sh = shooters[i]; sh.life++;
    sh.x += Math.cos(sh.ang) * sh.sp; sh.y += Math.sin(sh.ang) * sh.sp;
    const tx = sh.x - Math.cos(sh.ang) * sh.len, ty = sh.y - Math.sin(sh.ang) * sh.len;
    const g = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
    g.addColorStop(0, 'rgba(224,196,255,.9)'); g.addColorStop(1, 'rgba(224,196,255,0)');
    ctx.strokeStyle = g; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(sh.x, sh.y); ctx.lineTo(tx, ty); ctx.stroke();
    if (sh.life > sh.max || sh.x > W + 200 || sh.y > H + 200) shooters.splice(i, 1);
  }

  requestAnimationFrame(draw);
}

// Só roda a galáxia se o usuário não pediu menos movimento
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  addEventListener('resize', resize);
  // cursor controla o parallax (desktop)
  addEventListener('pointermove', e => {
    pxT = (e.clientX / W - 0.5) * 2;
    pyT = (e.clientY / H - 0.5) * 2;
  }, { passive: true });
  resize();
  requestAnimationFrame(draw);
  // começa a soltar estrelas cadentes só depois da galáxia montar
  setTimeout(() => setInterval(() => { if (Math.random() < 0.6 && shooters.length < 2) spawnShooter(); }, 2800), 4500);
}

/* ===========================================================
   2. INTERFACE
   =========================================================== */

// Header ganha borda/fundo ao rolar
const hdr = document.getElementById('hdr');
addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 20));

// Menu mobile abre/fecha
const mb = document.getElementById('menuBtn'), mm = document.getElementById('mobileMenu');
mb.addEventListener('click', () => mm.classList.toggle('open'));
mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mm.classList.remove('open')));

// Elementos surgem ao entrar na tela (.reveal -> .in)
const io = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 6 * 0.06) + 's'; io.observe(el); });

// Brilho que segue o mouse nos cards de serviço
document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

// Ano atual no rodapé
document.getElementById('year').textContent = new Date().getFullYear();
