export const englishJobs = [
  {
    role: "Systems Intern",
    when: "Aug. 2024 – Mar. 2025",
    points: [
      "Designed and managed relational databases with Oracle SQL and PL/SQL.",
      "Built interactive web apps and REST services with Oracle APEX.",
      "Set up task tracking and organization for internal projects.",
      "Technical support and incident resolution to keep operations running.",
      "Collaborated on frontend development (HTML, CSS, JavaScript).",
    ],
  },
  {
    role: "Intern – Corporate Email",
    when: "Jun. 2024 – Aug. 2024",
    points: [
      "Automated data management and filtering for mass email campaigns.",
      "Optimized how communications were sent, improving the team's efficiency.",
      "Improved internal tools through data processing and organization.",
    ],
  },
  {
    role: "Production Operation Intern",
    when: "Oct. 2022 – Apr. 2024",
    points: [
      "Technical support and bug fixes on the company's websites.",
      "Reviewed mockups to keep quality and usability in check.",
      "Maintained and updated digital content on internal platforms.",
    ],
  },
];

export const englishPieces = [
  "Flutter mockup of Senda's finance chat. No backend: the interface first.",
  "A TypeScript dApp, with logic in Python and contracts in Rust. The largest piece of the public profile.",
  "An educational DeFi platform on Stellar. Finishing a module mints a badge and XP tokens on testnet.",
];

export const contributionEn: Record<string, { title: string; summary?: string }> = {
  "https://github.com/kindfi-org/kindfi/pull/814": {
    title: "Access control for evolving and minting NFTs",
    summary: "Stops an unauthorized user from changing user_id on the evolve and mint endpoints.",
  },
  "https://github.com/mercato-supply-chain/mercato-dapp/pull/150": {
    title: "Supplier directory split into logic, state, and interface",
    summary: "Refactor of the directory to separate business logic, state, and UI components.",
  },
  "https://github.com/OFFER-HUB/offer-hub-monorepo/pull/1507": {
    title: "Mobile layout and touch targets",
    summary: "Fixes horizontal overflow on small screens and the minimum size of touch controls.",
  },
  "https://github.com/kindfi-org/kindfi/pull/779": {
    title: "Centralized mapping of Didit KYC status",
    summary: "The identity provider's status conversion lives in one place.",
  },
  "https://github.com/safetrustcr/dApp-SafeTrust/pull/327": {
    title: "Escrow signing with the active wallet",
    summary: "Unifies escrow signing with the active-wallet hook.",
  },
  "https://github.com/JuanWimmin/swarm-memory/pull/1": {
    title: "B2 backend",
  },
  "https://github.com/akkuea/akkuea/pull/1038": {
    title: "Error tests for the land token",
    summary: "Covers mint, transfer, approve, and initialize when the contract rejects the operation.",
  },
  "https://github.com/tupui/soroban-versioning/pull/419": {
    title: "Project discussion space and configuration",
  },
  "https://github.com/Predictify-org/predictify-contracts/pull/380": {
    title: "User allowlist and blocklist",
    summary: "Restricts who can take part with an entity and component system.",
  },
  "https://github.com/ritik4ever/stellar-stream/pull/47": {
    title: "Webhooks when a stream changes",
    summary: "Reports the status change with growing wait retries.",
  },
  "https://github.com/BuenDia-Builders/be-energy/pull/28": {
    title: "The wallet moves to the shared package",
  },
  "https://github.com/ritik4ever/stellar-portfolio-rebalancer/pull/90": {
    title: "WebSocket protocol with heartbeat",
  },
  "https://github.com/Pulsefy/QiuckEx/pull/121": {
    title: "Structured logs and a trace for each request",
  },
  "https://github.com/steller-secure/Stellar-Insured-Backend/pull/190": {
    title: "Request tracing in the backend",
  },
  "https://github.com/steller-secure/Stellar-Insured-Backend/pull/115": {
    title: "Centralized errors",
  },
  "https://github.com/Jagadeeshftw/grainlify/pull/406": {
    title: "Edge-case tests for governance voting",
  },
  "https://github.com/Jagadeeshftw/grainlify/pull/63": {
    title: "The repository modal selects all by default",
  },
  "https://github.com/OtowoOrg/Stellar-K8s/pull/80": {
    title: "topologySpreadConstraints on the Stellar node",
  },
  "https://github.com/Exquisitech/Renaissance-api/pull/40": {
    title: "TypeORM DataSource and migration names",
  },
  "https://github.com/chioma-housing-protocol-I/chioma/pull/41": {
    title: "TypeORM, entities, and Docker",
  },
  "https://github.com/stellara-network/Stellara_Contracts/pull/43": {
    title: "Postgres migrations in Docker",
  },
  "https://github.com/NFTopia-Foundation/nftopia-stellar/pull/27": {
    title: "Global validation and exception filter",
  },
  "https://github.com/DogStark/PetChain-Contracts/pull/58": {
    title: "Emergency contact and medical alerts",
  },
  "https://github.com/Vatix-Protocol/vatix-contract/pull/11": {
    title: "Market and position types",
  },
  "https://github.com/mux-labs/mux-backend/pull/11": {
    title: "Initial modules for the invisible wallet",
  },
};
