export type SocialIcon = "github" | "linkedin" | "x" | "telegram";

export type Chapter = {
  when: string;
  title: string;
  role: string;
  text: string;
};

export type Piece = {
  title: string;
  summary: string;
  stack: string;
  href: string;
};

export const site = {
  name: "Delfina Corradini",
  role: "Desarrolladora Full Stack",
  focus: "Web2 y Web3",
  email: "delfinacorradini073@gmail.com",
  phone: "+54 11 2227 7589",
  phoneHref: "tel:+541122277589",
  location: "Buenos Aires",
  availability: "Abierta a roles de desarrollo de software",
  portrait: "/delfina.png",
  description:
    "Delfina Corradini, desarrolladora full stack en Buenos Aires. De la operación en Aconcagua Energía a contratos y dApps en Stellar.",
  socials: [
    { label: "GitHub", href: "https://github.com/delfinacorr", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/delfina-luna-corradini-668795224",
      icon: "linkedin",
    },
    { label: "X", href: "https://x.com/Delfiicorradini", icon: "x" },
    { label: "Telegram", href: "https://t.me/Delfiicorradini", icon: "telegram" },
  ] satisfies { label: string; href: string; icon: SocialIcon }[],
  nav: [
    { href: "#recorrido", label: "Recorrido" },
    { href: "#piezas", label: "Piezas" },
    { href: "#contacto", label: "Contacto" },
  ],
  hero: {
    line1: "FULL STACK",
    line2: "DEVELOPER",
    cta: "Colaboremos",
  },
  techTags: [
    "TypeScript",
    "JavaScript",
    "React",
    "Python",
    "Rust",
    "Stellar",
    "Soroban",
    "Node.js",
    "Tailwind CSS",
    "Dart",
    "MySQL",
    "Oracle APEX",
    "HTML",
    "CSS",
  ],
  purpose:
    "El código tiene que servirle a alguien. Aprendí eso manteniendo páginas, automatizando correo y armando bases en una energética. Después lo llevé a Stellar.",
  chapters: [
    {
      when: "2022 — 2026",
      title: "El oficio",
      role: "Ingeniería en Sistemas · UAI",
      text: "Estudio Ingeniería en Sistemas en la Universidad Abierta Interamericana. El recorrido arranca cuidando las webs de AMC Networks, pasa por el correo de la universidad y sigue en contratos que otras personas pueden auditar.",
    },
    {
      when: "oct. 2022 — abr. 2024",
      title: "AMC Networks",
      role: "Production Operation Intern",
      text: "El primer trabajo fue que lo publicado siguiera en pie. Corregía errores en las webs de la compañía, revisaba maquetas y actualizaba el contenido de las plataformas internas.",
    },
    {
      when: "2022",
      title: "Santander + ITBA",
      role: "Beca Full Stack Developer",
      text: "El mismo año en que entré a AMC, la beca le puso nombre al oficio. Full stack dejó de ser una materia y pasó a ser la forma de tomar un problema de punta a punta.",
    },
    {
      when: "jun. 2024 — ago. 2024",
      title: "La universidad",
      role: "Pasante · Correo corporativo",
      text: "En la UAI automaticé el filtrado de campañas masivas. El correo tenía que llegar a quien correspondía, y el área tenía que dejar de armarlo a mano.",
    },
    {
      when: "ago. 2024 — mar. 2025",
      title: "Aconcagua",
      role: "Pasante de Sistemas",
      text: "En Aconcagua Energía diseñé bases con Oracle SQL y PL/SQL, aplicaciones en APEX y servicios REST. También el seguimiento de tareas y el soporte para que la operación no se corte.",
    },
    {
      when: "2025 — 2026",
      title: "Stellar",
      role: "Contratos, dApps y comunidad",
      text: "En GitHub el trabajo nuevo está en Rust y TypeScript: un contrato Soroban, TrustBid, pagos condicionales para agentes y la maqueta del chat de Senda. Maintainer de Stellar Drips en Buen día Builders. Cuatro meses después de entrar a Web3, la beca Impact Studio G.I.V.E. me llevó a Medellín.",
    },
  ] satisfies Chapter[],
  marks: [
    { title: "1° puesto", detail: "Hackathon Vendimia Tech", year: "2026" },
    { title: "2° puesto nacional", detail: "Huawei ICT", year: "2025" },
    { title: "Beca", detail: "Impact Studio G.I.V.E. · Medellín", year: "2026" },
    { title: "Beca", detail: "Mérito académico CACIC", year: "2024" },
  ],
  pieces: [
    {
      title: "TrustBid",
      summary:
        "dApp en TypeScript, con lógica en Python y contratos en Rust. La pieza grande del perfil público.",
      stack: "TypeScript · Python · Rust",
      href: "https://github.com/delfinacorr/TrustBid-dapp-v1",
    },
    {
      title: "Intent layer",
      summary: "Pagos condicionales para agentes de IA sobre Stellar.",
      stack: "TypeScript · Rust · Stellar",
      href: "https://github.com/delfinacorr/intent-governance-layer",
    },
    {
      title: "Hello Tiburona",
      summary: "Contrato Soroban con estado. El hola en cadena, escrito en Rust.",
      stack: "Rust · Soroban",
      href: "https://github.com/delfinacorr/hello-tiburona",
    },
    {
      title: "Senda Chat",
      summary: "Maqueta en Flutter del chat de finanzas de Senda. Sin backend: la interfaz primero.",
      stack: "Dart · Flutter",
      href: "https://github.com/delfinacorr/senda_chat",
    },
    {
      title: "TrustBid, primera capa",
      summary: "La versión en JavaScript, antes de pasar el dApp a TypeScript.",
      stack: "JavaScript · CSS",
      href: "https://github.com/delfinacorr/TrustBid",
    },
  ] satisfies Piece[],
};
