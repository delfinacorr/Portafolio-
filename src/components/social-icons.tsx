import { site, type SocialIcon } from "@/content/site";

const paths: Record<SocialIcon, string> = {
  github:
    "M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z",
  linkedin:
    "M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.93-2.6-1.05 0-1.68.71-1.96 1.4-.1.24-.12.58-.12.92V20H11s.04-9.2 0-10.15h2.5v1.44c.33-.51 1.22-1.64 2.97-1.64 2.17 0 3.53 1.42 3.53 4.47V20Z",
  x: "M4 4h3.2l4.05 5.72L15.7 4H20l-6.15 7.55L20.2 20h-3.2l-4.4-6.2L7.9 20H3.6l6.55-8.05L4 4Z",
  telegram:
    "M21.5 4.4 3.7 11.2c-1.2.48-1.2 1.16-.22 1.46l4.56 1.42 10.6-6.68c.5-.3.96-.14.58.2l-8.58 7.74-.33 4.7c.48 0 .7-.22.96-.48l2.3-2.22 4.78 3.53c.88.48 1.51.24 1.73-.82l3.14-14.8c.32-1.28-.46-1.86-1.32-1.47Z",
};

export function SocialIcons({ tone }: { tone: "on-dark" | "on-light" }) {
  const toneClass =
    tone === "on-dark"
      ? "border-white/30 text-white hover:bg-white hover:text-[#05010a]"
      : "border-line text-cherry hover:bg-cherry hover:text-white";

  return (
    <ul className="flex items-center gap-3">
      {site.socials.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`grid size-11 place-items-center rounded-full border transition-colors ${toneClass}`}
          >
            <svg viewBox="0 0 24 24" className="size-4" aria-hidden>
              <path d={paths[item.icon]} fill="currentColor" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
