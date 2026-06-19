/* ===========================================================
   LIMA STUDIO WEB - Internacionalização (PT / EN / ES)
   - Cada texto traduzível no HTML tem data-i18n="chave"
     (ou data-i18n-html="chave" quando o conteúdo tem HTML).
   - O idioma escolhido fica salvo no navegador (localStorage).
   - Na primeira visita, tenta detectar o idioma do navegador.
   =========================================================== */

const I18N = {
  /* ---------------- PORTUGUÊS ---------------- */
  pt: {
    _title: "Lima Studio Web · Sites que atraem clientes",
    _htmllang: "pt-BR",

    nav_serv: "Serviços",
    nav_dif: "Diferenciais",
    nav_proc: "Processo",
    nav_proj: "Projetos",
    nav_sobre: "Sobre",
    nav_port: "Portfólio ↗",
    nav_portf: "Portfólio",
    nav_cta: "Falar comigo",

    hero_eyebrow: "Lima Studio Web · Desenvolvimento web sob medida",
    hero_h1: 'Seu próximo cliente está te procurando no Google. <span class="hl">Faça ele te encontrar.</span>',
    hero_lead: "Crio sites modernos, rápidos e fáceis de achar no Google — sob medida para o seu negócio atrair mais clientes e transmitir credibilidade já no primeiro clique.",
    hero_cta1: "Quero meu site →",
    hero_cta2: "Ver projetos",
    stat1n: "100%", stat1l: "sob medida",
    stat2n: "Mobile", stat2l: "perfeito no celular",
    stat3n: "Google", stat3l: "otimizado pra ser achado",
    stat4n: "Direto", stat4l: "você fala comigo",

    serv_eyebrow: "O que fazemos",
    serv_h2: "Tudo para o seu negócio brilhar online",
    serv_p: "Da primeira ideia ao site no ar, cuido de cada detalhe para você só se preocupar em atender os novos clientes.",
    c1h: "Sites institucionais",
    c1p: "Sua vitrine digital aberta 24h: passa confiança e aparece no Google bem na hora em que procuram pelo seu serviço.",
    c2h: "Lojas online",
    c2p: "Venda até dormindo: catálogo, carrinho e pagamento integrado, tudo funcionando sozinho.",
    c3h: "Landing pages",
    c3p: "Páginas afiadas para anúncios e lançamentos, feitas para uma coisa só: converter.",
    c4h: "Sistemas sob medida",
    c4p: "Agendamentos, painéis e automações que tiram o trabalho repetitivo das suas costas.",
    c5h: "Dados & automação",
    c5p: "Dashboards e integrações que mostram, em números, o que está dando certo no seu negócio.",
    c6h: "Manutenção & suporte",
    c6p: "Site sempre no ar, atualizado e seguro, com alguém de verdade pra te responder.",

    why_eyebrow: "Por que a Lima Studio Web",
    why_h2: "Tecnologia de gente grande, atenção de quem se importa",
    wi1h: "Atendimento direto e humano",
    wi1p: "Você fala comigo, não com um robô. Entendo o seu negócio antes de escrever a primeira linha de código.",
    wi2h: "Feito para ser rápido",
    wi2p: "Sites leves que carregam num piscar de olhos. Cliente não espera, e o Google também não.",
    wi3h: "Pensado em resultado",
    wi3p: "Sou desenvolvedora e engenheira de dados: seu site nasce medindo o que importa para crescer.",
    wi4h: "Sem letras miúdas",
    wi4p: "Prazo, escopo e preço combinados desde o começo. Sem surpresa lá na frente.",
    code_com1: "// o que você leva pra casa",
    code_v1: " 'relâmpago'",
    code_v2: " 'sob medida'",
    code_v3: " 'humano'",
    code_v4: " 'mais clientes'",
    code_com2: "// vamos rodar? 👇",

    proc_eyebrow: "Como funciona",
    proc_h2: "Do papo ao site no ar em 4 passos",
    proc_p: "Simples, transparente e sem complicação técnica do seu lado.",
    s1h: "Conversa",
    s1p: "Entendo seu negócio, seu público e onde você quer chegar.",
    s2h: "Proposta",
    s2p: "Você recebe escopo, prazo e valor, tudo na mesa, sem enrolação.",
    s3h: "Desenvolvimento",
    s3p: "Coloco a mão na massa e te mostro o progresso a cada etapa.",
    s4h: "No ar & suporte",
    s4p: "Site publicado, com treinamento pra você tocar sozinha e suporte sempre que precisar.",

    port_eyebrow: "Projetos",
    port_h2: "Trabalhos recentes",
    work_tag: "Site institucional",
    work_h4: "CORE · Agência de Branding",
    work_p: "Site institucional para agência de branding e marketing digital: identidade marcante, cases e serviços num layout minimalista e responsivo. No ar em coreag.com.br.",
    work2_tag: "Site institucional",
    work2_h4: "Yoshi's · Culinária Japonesa",
    work2_p: "Restaurante japonês tradicional há mais de 30 anos em Sorocaba, interior de SP. Levei a sofisticação do salão para a tela: cardápio, rodízio, reservas e delivery próprio num site elegante e responsivo. No ar em yoshis.com.br.",

    about_eyebrow: "Sobre mim",
    about_h2: "Oi, eu sou a Larissa 👋",
    about_p1: "Sou desenvolvedora fullstack e engenheira de dados, formada em Análise e Desenvolvimento de Sistemas e pós-graduada (MBA USP/Esalq) em Data Science e Analytics. Criei a Lima Studio Web com uma ideia simples: todo negócio merece um site profissional, sem pagar uma fortuna nem se perder em termos técnicos.",
    about_p2: "Cada projeto que entra aqui recebe atenção total, desde a primeira reunião até o site no ar para seus clientes. Bonito por fora, e bem estruturado por dentro.",
    skill_db: "Banco de dados",
    skill_resp: "Responsivo",
    about_cta: "Ver portfólio completo ↗",

    faq_eyebrow: "Dúvidas",
    faq_h2: "Perguntas frequentes",
    faq_q1: "Quanto custa um site?",
    faq_a1: "Depende do que o seu negócio precisa, não existe preço de prateleira. O orçamento é sempre gratuito, quantas vezes você precisar: a gente conversa, eu entendo seu objetivo e te passo um valor justo e transparente, sem surpresas. Você só investe quando decidir colocar o projeto pra rodar; orçar nunca é cobrado, só o desenvolvimento.",
    faq_q2: "Quanto tempo leva para ficar pronto?",
    faq_a2: "Um site institucional simples costuma levar de 1 a 3 semanas. Projetos maiores têm um cronograma combinado logo no início, você sempre sabe quando vai estar pronto.",
    faq_q3: "Eu preciso entender de tecnologia?",
    faq_a3: "Não! Eu cuido de toda a parte técnica e explico tudo em linguagem simples. Você só foca no que faz de melhor: o seu negócio.",
    faq_q4: "O site funciona no celular?",
    faq_a4: "Sempre. Todos os sites são responsivos e otimizados para celular, que é onde a maioria dos seus clientes vai te encontrar.",
    faq_q5: "E depois que o site fica pronto?",
    faq_a5: "Você não fica na mão. Ofereço suporte e planos de manutenção para manter tudo atualizado, seguro e funcionando, além de te ensinar a mexer no básico.",

    cta_h2: "Bora colocar seu negócio no ar?",
    cta_p: "Me chama no WhatsApp. O primeiro papo e o orçamento são gratuitos e sem compromisso, você não tem nada a perder.",
    cta_btn1: "Falar no WhatsApp →",
    cta_btn2: "Enviar e-mail",
    cta_social: "Me acompanhe nas redes:",

    foot_p: "Sites profissionais que colocam o seu negócio no mapa, na frente da concorrência.",
    foot_nav: "Navegação",
    foot_contato: "Contato",
    foot_email: "E-mail",
    copy_rights: "Todos os direitos reservados.",
    copy_made: "Feito com ☕ + 💜 e código."
  },

  /* ---------------- ENGLISH ---------------- */
  en: {
    _title: "Lima Studio Web · Websites that attract customers",
    _htmllang: "en",

    nav_serv: "Services",
    nav_dif: "Why us",
    nav_proc: "Process",
    nav_proj: "Projects",
    nav_sobre: "About",
    nav_port: "Portfolio ↗",
    nav_portf: "Portfolio",
    nav_cta: "Let's talk",

    hero_eyebrow: "Lima Studio Web · Custom web development",
    hero_h1: 'Your next customer is searching for you on Google. <span class="hl">Make sure they find you.</span>',
    hero_lead: "I build modern, fast websites that are easy to find on Google — made to measure so your business attracts more customers and earns trust from the very first click.",
    hero_cta1: "I want my website →",
    hero_cta2: "View projects",
    stat1n: "100%", stat1l: "tailor-made",
    stat2n: "Mobile", stat2l: "perfect on phones",
    stat3n: "Google", stat3l: "optimized to be found",
    stat4n: "Direct", stat4l: "you talk to me",

    serv_eyebrow: "What we do",
    serv_h2: "Everything your business needs to shine online",
    serv_p: "From the first idea to launch, I handle every detail so you can focus on serving your new customers.",
    c1h: "Business websites",
    c1p: "Your digital storefront open 24/7: it builds trust and shows up on Google right when people search for your service.",
    c2h: "Online stores",
    c2p: "Sell even while you sleep: catalog, cart and integrated checkout, all running on their own.",
    c3h: "Landing pages",
    c3p: "Sharp pages for ads and launches, built for one thing only: converting.",
    c4h: "Custom systems",
    c4p: "Scheduling, dashboards and automations that take repetitive work off your shoulders.",
    c5h: "Data & automation",
    c5p: "Dashboards and integrations that show, in numbers, what's working in your business.",
    c6h: "Maintenance & support",
    c6p: "A site that's always up, updated and secure, with a real person to answer you.",

    why_eyebrow: "Why Lima Studio Web",
    why_h2: "Enterprise-grade tech, with the care you deserve",
    wi1h: "Direct, human service",
    wi1p: "You talk to me, not a bot. I understand your business before writing the first line of code.",
    wi2h: "Built to be fast",
    wi2p: "Lightweight sites that load in a blink. Customers don't wait, and neither does Google.",
    wi3h: "Focused on results",
    wi3p: "I'm a developer and data engineer: your site is born measuring what matters to grow.",
    wi4h: "No fine print",
    wi4p: "Timeline, scope and price agreed from the start. No surprises down the road.",
    code_com1: "// what you take home",
    code_v1: " 'lightning'",
    code_v2: " 'tailor-made'",
    code_v3: " 'human'",
    code_v4: " 'more customers'",
    code_com2: "// shall we run it? 👇",

    proc_eyebrow: "How it works",
    proc_h2: "From chat to launch in 4 steps",
    proc_p: "Simple, transparent and with no technical hassle on your end.",
    s1h: "Chat",
    s1p: "I understand your business, your audience and where you want to go.",
    s2h: "Proposal",
    s2p: "You get scope, timeline and price, all on the table, no runaround.",
    s3h: "Development",
    s3p: "I roll up my sleeves and show you progress at every stage.",
    s4h: "Live & support",
    s4p: "Site published, with training so you can run it yourself and support whenever you need.",

    port_eyebrow: "Projects",
    port_h2: "Recent work",
    work_tag: "Business website",
    work_h4: "CORE · Branding Agency",
    work_p: "Business website for a branding and digital marketing agency: striking identity, cases and services in a minimalist, responsive layout. Live at coreag.com.br.",
    work2_tag: "Business website",
    work2_h4: "Yoshi's · Japanese Cuisine",
    work2_p: "A traditional Japanese restaurant for over 30 years in Sorocaba, in the countryside of São Paulo. I brought the dining-room sophistication to the screen: menu, all-you-can-eat, reservations and in-house delivery in an elegant, responsive site. Live at yoshis.com.br.",

    about_eyebrow: "About me",
    about_h2: "Hi, I'm Larissa 👋",
    about_p1: "I'm a fullstack developer and data engineer, with a degree in Systems Analysis and Development and a postgraduate MBA (USP/Esalq) in Data Science and Analytics. I created Lima Studio Web with a simple idea: every business deserves a professional website, without paying a fortune or getting lost in technical jargon.",
    about_p2: "Every project here gets full attention, from the very first meeting to the site live for your customers. Beautiful on the outside, and well-built on the inside.",
    skill_db: "Databases",
    skill_resp: "Responsive",
    about_cta: "See full portfolio ↗",

    faq_eyebrow: "FAQ",
    faq_h2: "Frequently asked questions",
    faq_q1: "How much does a website cost?",
    faq_a1: "It depends on what your business needs, there's no off-the-shelf price. The quote is always free, as many times as you need: we talk, I understand your goal and give you a fair, transparent price, no surprises. You only invest when you decide to get the project going; quoting is never charged, only the development.",
    faq_q2: "How long does it take to be ready?",
    faq_a2: "A simple business website usually takes 1 to 3 weeks. Larger projects have a schedule agreed right at the start, so you always know when it'll be ready.",
    faq_q3: "Do I need to understand technology?",
    faq_a3: "No! I handle all the technical side and explain everything in plain language. You just focus on what you do best: your business.",
    faq_q4: "Does the site work on mobile?",
    faq_a4: "Always. Every site is responsive and optimized for mobile, which is where most of your customers will find you.",
    faq_q5: "And after the site is ready?",
    faq_a5: "You're not left on your own. I offer support and maintenance plans to keep everything updated, secure and running, plus I teach you the basics.",

    cta_h2: "Ready to put your business online?",
    cta_p: "Message me on WhatsApp. The first chat and the quote are free and with no obligation, you have nothing to lose.",
    cta_btn1: "Message on WhatsApp →",
    cta_btn2: "Send e-mail",
    cta_social: "Follow me on social:",

    foot_p: "Professional websites that put your business on the map, ahead of the competition.",
    foot_nav: "Navigation",
    foot_contato: "Contact",
    foot_email: "E-mail",
    copy_rights: "All rights reserved.",
    copy_made: "Made with ☕ + 💜 and code."
  },

  /* ---------------- ESPAÑOL ---------------- */
  es: {
    _title: "Lima Studio Web · Sitios que atraen clientes",
    _htmllang: "es",

    nav_serv: "Servicios",
    nav_dif: "Diferenciales",
    nav_proc: "Proceso",
    nav_proj: "Proyectos",
    nav_sobre: "Sobre mí",
    nav_port: "Portafolio ↗",
    nav_portf: "Portafolio",
    nav_cta: "Hablemos",

    hero_eyebrow: "Lima Studio Web · Desarrollo web a medida",
    hero_h1: 'Tu próximo cliente te está buscando en Google. <span class="hl">Haz que te encuentre.</span>',
    hero_lead: "Creo sitios web modernos, rápidos y fáciles de encontrar en Google — hechos a medida para que tu negocio atraiga más clientes y transmita credibilidad desde el primer clic.",
    hero_cta1: "Quiero mi sitio →",
    hero_cta2: "Ver proyectos",
    stat1n: "100%", stat1l: "a medida",
    stat2n: "Mobile", stat2l: "perfecto en el móvil",
    stat3n: "Google", stat3l: "optimizado para que te encuentren",
    stat4n: "Directo", stat4l: "hablas conmigo",

    serv_eyebrow: "Lo que hacemos",
    serv_h2: "Todo para que tu negocio brille online",
    serv_p: "De la primera idea al sitio publicado, cuido cada detalle para que solo te preocupes por atender a tus nuevos clientes.",
    c1h: "Sitios institucionales",
    c1p: "Tu vitrina digital abierta 24h: transmite confianza y aparece en Google justo cuando buscan tu servicio.",
    c2h: "Tiendas online",
    c2p: "Vende hasta mientras duermes: catálogo, carrito y pago integrado, todo funcionando solo.",
    c3h: "Landing pages",
    c3p: "Páginas afiladas para anuncios y lanzamientos, hechas para una sola cosa: convertir.",
    c4h: "Sistemas a medida",
    c4p: "Agendas, paneles y automatizaciones que te quitan el trabajo repetitivo de encima.",
    c5h: "Datos & automatización",
    c5p: "Dashboards e integraciones que muestran, en números, lo que funciona en tu negocio.",
    c6h: "Mantenimiento & soporte",
    c6p: "Un sitio siempre activo, actualizado y seguro, con una persona real para responderte.",

    why_eyebrow: "Por qué Lima Studio Web",
    why_h2: "Tecnología de primer nivel, con la atención que mereces",
    wi1h: "Atención directa y humana",
    wi1p: "Hablas conmigo, no con un robot. Entiendo tu negocio antes de escribir la primera línea de código.",
    wi2h: "Hecho para ser rápido",
    wi2p: "Sitios ligeros que cargan en un parpadeo. El cliente no espera, y Google tampoco.",
    wi3h: "Pensado en resultados",
    wi3p: "Soy desarrolladora e ingeniera de datos: tu sitio nace midiendo lo que importa para crecer.",
    wi4h: "Sin letra pequeña",
    wi4p: "Plazo, alcance y precio acordados desde el inicio. Sin sorpresas más adelante.",
    code_com1: "// lo que te llevas a casa",
    code_v1: " 'relámpago'",
    code_v2: " 'a medida'",
    code_v3: " 'humano'",
    code_v4: " 'más clientes'",
    code_com2: "// ¿lo ejecutamos? 👇",

    proc_eyebrow: "Cómo funciona",
    proc_h2: "De la charla al sitio publicado en 4 pasos",
    proc_p: "Simple, transparente y sin complicaciones técnicas de tu lado.",
    s1h: "Charla",
    s1p: "Entiendo tu negocio, tu público y a dónde quieres llegar.",
    s2h: "Propuesta",
    s2p: "Recibes alcance, plazo y precio, todo sobre la mesa, sin rodeos.",
    s3h: "Desarrollo",
    s3p: "Me pongo manos a la obra y te muestro el avance en cada etapa.",
    s4h: "En línea & soporte",
    s4p: "Sitio publicado, con capacitación para que lo manejes tú misma y soporte siempre que lo necesites.",

    port_eyebrow: "Proyectos",
    port_h2: "Trabajos recientes",
    work_tag: "Sitio institucional",
    work_h4: "CORE · Agencia de Branding",
    work_p: "Sitio institucional para una agencia de branding y marketing digital: identidad marcante, casos y servicios en un diseño minimalista y responsivo. En línea en coreag.com.br.",
    work2_tag: "Sitio institucional",
    work2_h4: "Yoshi's · Cocina Japonesa",
    work2_p: "Restaurante japonés tradicional desde hace más de 30 años en Sorocaba, interior de São Paulo. Llevé la sofisticación del salón a la pantalla: menú, tenedor libre, reservas y delivery propio en un sitio elegante y responsivo. En línea en yoshis.com.br.",

    about_eyebrow: "Sobre mí",
    about_h2: "Hola, soy Larissa 👋",
    about_p1: "Soy desarrolladora fullstack e ingeniera de datos, graduada en Análisis y Desarrollo de Sistemas y posgraduada (MBA USP/Esalq) en Data Science y Analytics. Creé Lima Studio Web con una idea simple: todo negocio merece un sitio profesional, sin pagar una fortuna ni perderse en términos técnicos.",
    about_p2: "Cada proyecto que llega aquí recibe atención total, desde la primera reunión hasta el sitio en línea para tus clientes. Bonito por fuera, y bien estructurado por dentro.",
    skill_db: "Bases de datos",
    skill_resp: "Responsivo",
    about_cta: "Ver portafolio completo ↗",

    faq_eyebrow: "Dudas",
    faq_h2: "Preguntas frecuentes",
    faq_q1: "¿Cuánto cuesta un sitio web?",
    faq_a1: "Depende de lo que tu negocio necesite, no existe un precio de estantería. El presupuesto es siempre gratuito, cuantas veces lo necesites: conversamos, entiendo tu objetivo y te paso un valor justo y transparente, sin sorpresas. Solo inviertes cuando decides poner el proyecto en marcha; presupuestar nunca se cobra, solo el desarrollo.",
    faq_q2: "¿Cuánto tarda en estar listo?",
    faq_a2: "Un sitio institucional simple suele tardar de 1 a 3 semanas. Los proyectos más grandes tienen un cronograma acordado desde el inicio, siempre sabes cuándo estará listo.",
    faq_q3: "¿Necesito saber de tecnología?",
    faq_a3: "¡No! Yo me encargo de toda la parte técnica y explico todo en lenguaje simple. Tú solo te enfocas en lo que haces mejor: tu negocio.",
    faq_q4: "¿El sitio funciona en el móvil?",
    faq_a4: "Siempre. Todos los sitios son responsivos y optimizados para el móvil, que es donde la mayoría de tus clientes te encontrará.",
    faq_q5: "¿Y después de que el sitio esté listo?",
    faq_a5: "No te quedas sola. Ofrezco soporte y planes de mantenimiento para mantener todo actualizado, seguro y funcionando, además de enseñarte lo básico.",

    cta_h2: "¿Listo para poner tu negocio en línea?",
    cta_p: "Escríbeme por WhatsApp. La primera charla y el presupuesto son gratuitos y sin compromiso, no tienes nada que perder.",
    cta_btn1: "Hablar por WhatsApp →",
    cta_btn2: "Enviar correo",
    cta_social: "Sígueme en redes:",

    foot_p: "Sitios profesionales que ponen tu negocio en el mapa, por delante de la competencia.",
    foot_nav: "Navegación",
    foot_contato: "Contacto",
    foot_email: "Correo",
    copy_rights: "Todos los derechos reservados.",
    copy_made: "Hecho con ☕ + 💜 y código."
  }
};

/* ----------------------------------------------------------- */
const LANG_KEY = "lsw_lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.pt;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.textContent = dict[k];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const k = el.getAttribute("data-i18n-html");
    if (dict[k] != null) el.innerHTML = dict[k];
  });

  document.documentElement.lang = dict._htmllang || lang;
  if (dict._title) document.title = dict._title;

  const cur = document.getElementById("langCur");
  if (cur) cur.textContent = lang.toUpperCase();

  document.querySelectorAll(".lang-menu button").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
}

function detectLang() {
  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (saved && I18N[saved]) return saved;

  const nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
  if (I18N[nav]) return nav;
  return "pt";
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(detectLang());

  const sw = document.getElementById("langSwitch");
  const btn = document.getElementById("langBtn");

  if (btn && sw) {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const open = sw.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    sw.querySelectorAll(".lang-menu button").forEach(b => {
      b.addEventListener("click", () => {
        applyLang(b.dataset.lang);
        sw.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener("click", e => {
      if (!sw.contains(e.target)) {
        sw.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
