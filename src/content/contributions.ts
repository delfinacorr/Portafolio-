export type MergedPull = {
  name: string;
  repo: string;
  number: number;
  title: string;
  summary?: string;
  href: string;
};

export const contributions: MergedPull[] = [
  {
    name: "kindfi",
    repo: "kindfi-org/kindfi",
    number: 814,
    title: "Control de acceso al evolucionar y mintear NFTs",
    summary:
      "Impide que un usuario no autorizado cambie el user_id en los endpoints de evolve y mint.",
    href: "https://github.com/kindfi-org/kindfi/pull/814",
  },
  {
    name: "Mercato",
    repo: "mercato-supply-chain/mercato-dapp",
    number: 150,
    title: "Directorio de proveedores separado en lógica, estado e interfaz",
    summary:
      "Refactor del directorio para desacoplar la lógica de negocio, el estado y los componentes de UI.",
    href: "https://github.com/mercato-supply-chain/mercato-dapp/pull/150",
  },
  {
    name: "Offer Hub",
    repo: "OFFER-HUB/offer-hub-monorepo",
    number: 1507,
    title: "Layout mobile y objetivos táctiles",
    summary:
      "Corrige el desborde horizontal en pantallas chicas y el tamaño mínimo de los controles táctiles.",
    href: "https://github.com/OFFER-HUB/offer-hub-monorepo/pull/1507",
  },
  {
    name: "kindfi",
    repo: "kindfi-org/kindfi",
    number: 779,
    title: "Mapeo centralizado del estado KYC de Didit",
    summary: "La conversión de estados del proveedor de identidad queda en un solo lugar.",
    href: "https://github.com/kindfi-org/kindfi/pull/779",
  },
  {
    name: "SafeTrust",
    repo: "safetrustcr/dApp-SafeTrust",
    number: 327,
    title: "Firma de escrow con la wallet activa",
    summary: "Unifica la firma de las operaciones de escrow con el hook de la wallet activa.",
    href: "https://github.com/safetrustcr/dApp-SafeTrust/pull/327",
  },
  {
    name: "Swarm Memory",
    repo: "JuanWimmin/swarm-memory",
    number: 1,
    title: "Backend B2",
    href: "https://github.com/JuanWimmin/swarm-memory/pull/1",
  },
  {
    name: "Akkuea",
    repo: "akkuea/akkuea",
    number: 1038,
    title: "Tests de error del token de tierras",
    summary: "Cubre mint, transfer, approve e initialize cuando el contrato rechaza la operación.",
    href: "https://github.com/akkuea/akkuea/pull/1038",
  },
  {
    name: "Tansu",
    repo: "tupui/soroban-versioning",
    number: 419,
    title: "Espacio de discusión y configuración del proyecto",
    href: "https://github.com/tupui/soroban-versioning/pull/419",
  },
  {
    name: "Predictify",
    repo: "Predictify-org/predictify-contracts",
    number: 380,
    title: "Lista blanca y lista negra de usuarios",
    summary: "Restringe quién participa con un sistema de entidades y componentes.",
    href: "https://github.com/Predictify-org/predictify-contracts/pull/380",
  },
  {
    name: "Stellar Stream",
    repo: "ritik4ever/stellar-stream",
    number: 47,
    title: "Webhooks cuando cambia un stream",
    summary: "Avisa el cambio de estado con reintentos de espera creciente.",
    href: "https://github.com/ritik4ever/stellar-stream/pull/47",
  },
  {
    name: "Be Energy",
    repo: "BuenDia-Builders/be-energy",
    number: 28,
    title: "La wallet pasa al paquete compartido",
    href: "https://github.com/BuenDia-Builders/be-energy/pull/28",
  },
  {
    name: "Rebalancer",
    repo: "ritik4ever/stellar-portfolio-rebalancer",
    number: 90,
    title: "Protocolo WebSocket con heartbeat",
    href: "https://github.com/ritik4ever/stellar-portfolio-rebalancer/pull/90",
  },
  {
    name: "QuickEx",
    repo: "Pulsefy/QiuckEx",
    number: 121,
    title: "Logs estructurados y traza de cada request",
    href: "https://github.com/Pulsefy/QiuckEx/pull/121",
  },
  {
    name: "Stellar Insured",
    repo: "steller-secure/Stellar-Insured-Backend",
    number: 190,
    title: "Trazabilidad de requests en el backend",
    href: "https://github.com/steller-secure/Stellar-Insured-Backend/pull/190",
  },
  {
    name: "Stellar Insured",
    repo: "steller-secure/Stellar-Insured-Backend",
    number: 115,
    title: "Errores centralizados",
    href: "https://github.com/steller-secure/Stellar-Insured-Backend/pull/115",
  },
  {
    name: "Grainlify",
    repo: "Jagadeeshftw/grainlify",
    number: 406,
    title: "Tests de borde en la votación de gobernanza",
    href: "https://github.com/Jagadeeshftw/grainlify/pull/406",
  },
  {
    name: "Grainlify",
    repo: "Jagadeeshftw/grainlify",
    number: 63,
    title: "El modal de repositorios marca todos por defecto",
    href: "https://github.com/Jagadeeshftw/grainlify/pull/63",
  },
  {
    name: "Stellar K8s",
    repo: "OtowoOrg/Stellar-K8s",
    number: 80,
    title: "topologySpreadConstraints en el nodo Stellar",
    href: "https://github.com/OtowoOrg/Stellar-K8s/pull/80",
  },
  {
    name: "Renaissance",
    repo: "Exquisitech/Renaissance-api",
    number: 40,
    title: "DataSource de TypeORM y nombres de migraciones",
    href: "https://github.com/Exquisitech/Renaissance-api/pull/40",
  },
  {
    name: "Chioma",
    repo: "chioma-housing-protocol-I/chioma",
    number: 41,
    title: "TypeORM, entidades y Docker",
    href: "https://github.com/chioma-housing-protocol-I/chioma/pull/41",
  },
  {
    name: "Stellara",
    repo: "stellara-network/Stellara_Contracts",
    number: 43,
    title: "Migraciones de Postgres en Docker",
    href: "https://github.com/stellara-network/Stellara_Contracts/pull/43",
  },
  {
    name: "NFTopia",
    repo: "NFTopia-Foundation/nftopia-stellar",
    number: 27,
    title: "Validación global y filtro de excepciones",
    href: "https://github.com/NFTopia-Foundation/nftopia-stellar/pull/27",
  },
  {
    name: "PetChain",
    repo: "DogStark/PetChain-Contracts",
    number: 58,
    title: "Contacto de emergencia y alertas médicas",
    href: "https://github.com/DogStark/PetChain-Contracts/pull/58",
  },
  {
    name: "Vatix",
    repo: "Vatix-Protocol/vatix-contract",
    number: 11,
    title: "Tipos de mercado y de posición",
    href: "https://github.com/Vatix-Protocol/vatix-contract/pull/11",
  },
  {
    name: "Mux",
    repo: "mux-labs/mux-backend",
    number: 11,
    title: "Módulos iniciales de la wallet invisible",
    href: "https://github.com/mux-labs/mux-backend/pull/11",
  },
];
