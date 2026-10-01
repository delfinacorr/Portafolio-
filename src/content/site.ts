export type SocialIcon = "github" | "linkedin" | "x" | "telegram";

export type Experience = {
  company: string;
  role: string;
  when: string;
  points: string[];
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
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#recorrido", label: "Experiencia" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#aportes", label: "Aportes" },
    { href: "#contacto", label: "Contacto" },
  ],
  about: {
    kicker: "Sobre mí",
    name: "Delfina Corradini",
    place: "Buenos Aires, Argentina",
    focus: "Web3 y blockchain",
    servicesLead:
      "Diseño y desarrollo de soluciones a medida enfocadas en resolver problemas reales, optimizar procesos e impulsar el crecimiento de tu proyecto.",
    services: ["Páginas web", "Automatizaciones", "Sistemas internos"],
  },
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
  experience: [
    {
      company: "Aconcagua Energía",
      role: "Pasante de Sistemas",
      when: "ago. 2024 – mar. 2025",
      points: [
        "Diseño y gestión de bases de datos relacionales con Oracle SQL y PL/SQL.",
        "Desarrollo de aplicaciones web interactivas y servicios REST con Oracle APEX.",
        "Implementación de soluciones de seguimiento y organización de tareas en proyectos internos.",
        "Soporte técnico y resolución de incidencias para garantizar continuidad operativa.",
        "Colaboración en desarrollo frontend (HTML, CSS, JavaScript).",
      ],
    },
    {
      company: "Universidad Abierta Interamericana",
      role: "Pasante – Correo Corporativo",
      when: "jun. 2024 – ago. 2024",
      points: [
        "Automatización de procesos de gestión y filtrado de datos para campañas de correo masivo.",
        "Optimización del envío de comunicaciones, mejorando la eficiencia operativa del área.",
        "Mejora de herramientas internas mediante procesamiento y organización de datos.",
      ],
    },
    {
      company: "AMC Networks International LatAm",
      role: "Production Operation Intern",
      when: "oct. 2022 – abr. 2024",
      points: [
        "Soporte técnico y corrección de errores en páginas web de la compañía.",
        "Participación en revisión de maquetas garantizando calidad y usabilidad.",
        "Mantenimiento y actualización de contenido digital en plataformas internas.",
      ],
    },
  ] satisfies Experience[],
  marks: [
    { title: "Beca", detail: "Santander + ITBA", year: "2022" },
    { title: "Beca", detail: "Mérito académico CACIC", year: "2024" },
    { title: "2° puesto nacional", detail: "Huawei ICT", year: "2025" },
    { title: "Beca", detail: "Código Futura", year: "2025" },
    { title: "Beca", detail: "Impact Studio G.I.V.E. · Medellín", year: "2026" },
    { title: "1° puesto", detail: "Hackathon Vendimia Tech", year: "2026" },
    { title: "Beca", detail: "São Paulo", year: "2026" },
  ],
  pieces: [
    {
      title: "Senda",
      summary: "La app de Senda, en la organización SendaLabs.",
      stack: "JavaScript · Next.js",
      href: "https://github.com/SendaLabs/Senda.App",
    },
    {
      title: "TrustBid",
      summary:
        "Monorepo platform: la dApp, la API y los paquetes. Plataforma de transparencia para ONGs en Stellar.",
      stack: "TypeScript · Turborepo · Stellar",
      href: "https://github.com/TrustBid/platform",
    },
    {
      title: "DeFiWise",
      summary:
        "Plataforma educativa de DeFi en Stellar. Al terminar un módulo se mintea un badge y tokens de XP en testnet.",
      stack: "Next.js · Soroban · Stellar",
      href: "https://github.com/BuenDia-Builders/defiwise-stellar",
    },
  ] satisfies Piece[],
};
