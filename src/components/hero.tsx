import { HeroLanyard } from "@/components/hero-lanyard";
import { SocialIcons } from "@/components/social-icons";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[620px] flex-col overflow-hidden bg-[#05010a] text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#05010a]" />
        <div
          className="absolute top-[-22%] left-[-12%] h-[88%] w-[140%] blur-3xl"
          style={{
            transform: "rotate(-24deg)",
            background:
              "linear-gradient(90deg, transparent 6%, rgb(72 28 150 / 0.28) 24%, rgb(150 80 230 / 0.62) 36%, rgb(214 150 255 / 0.78) 44%, rgb(255 140 160 / 0.66) 52%, rgb(255 86 48 / 0.9) 64%, rgb(255 176 130 / 0.62) 76%, transparent 92%)",
          }}
        />
        <div
          className="absolute top-[-6%] left-[6%] h-[46%] w-[120%] blur-md"
          style={{
            transform: "rotate(-24deg)",
            background:
              "linear-gradient(90deg, transparent 34%, rgb(255 236 255 / 0.72) 47%, rgb(255 120 70 / 0.15) 54%, transparent 62%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "repeating-linear-gradient(-26deg, transparent 0 18px, rgb(255 186 150 / 0.2) 21px, transparent 30px 64px, rgb(176 96 255 / 0.22) 68px, transparent 76px 112px)",
            maskImage: "linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 28%, #000 82%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_46%,rgb(255_90_40_/_0.34),transparent_46%)]" />
        <div className="absolute inset-y-0 left-0 w-[42%] bg-gradient-to-r from-[#05010a] via-[#05010a]/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05010a] to-transparent" />
      </div>
      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <h1 className="px-2 pt-16 sm:px-4 lg:pt-20">
          <span className="sr-only">
            {site.name}, {site.role}. {site.focus}.
          </span>
          <svg viewBox="0 0 1000 190" className="w-full overflow-visible font-sans" aria-hidden>
            <defs>
              <linearGradient id="delfina-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="46%" stopColor="#f5d0fe" />
                <stop offset="100%" stopColor="#fdba74" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="168"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#delfina-grad)"
              fontSize="188"
              fontWeight="600"
              style={{ fontFamily: "inherit" }}
            >
              {site.name.split(" ")[0].toUpperCase()}
            </text>
          </svg>
        </h1>
        <div className="mx-auto grid w-full max-w-6xl min-h-0 flex-1 items-center gap-4 px-5 pb-2 min-[520px]:grid-cols-[minmax(0,0.9fr)_minmax(240px,1.1fr)] min-[520px]:items-stretch min-[520px]:gap-2">
        <div className="min-[520px]:self-center">
          <h2 className="mt-1">
            <span
              aria-hidden
              className="block bg-gradient-to-r from-white via-fuchsia-100 to-fuchsia-300 bg-clip-text text-4xl leading-[0.9] font-semibold tracking-[-0.04em] text-transparent min-[520px]:text-[2.35rem] lg:text-7xl"
            >
              {site.hero.line1}
            </span>
            <span aria-hidden className="mt-3 flex items-center gap-3 sm:gap-4">
              <a
                href="#contacto"
                aria-label={site.hero.cta}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 shadow-[0_0_30px_rgb(255_120_80_/_0.45)] transition-transform hover:scale-105 sm:size-16"
              >
                <svg viewBox="0 0 24 24" className="size-6" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <span className="bg-gradient-to-r from-orange-200 via-orange-300 to-fuchsia-300 bg-clip-text text-4xl leading-[0.9] font-semibold tracking-[-0.04em] text-transparent min-[520px]:text-[2.35rem] lg:text-7xl">
                {site.hero.line2}
              </span>
            </span>
          </h2>
          <div className="mt-6">
            <SocialIcons tone="on-dark" />
          </div>
        </div>
        <div className="relative h-[58svh] min-h-[340px] min-[520px]:h-full min-[520px]:min-h-0">
          <div className="absolute inset-x-0 -top-16 bottom-0 min-[520px]:-top-48 lg:-top-56">
            <HeroLanyard />
          </div>
        </div>
      </div>
      <div role="region" aria-label="Tecnologías" className="relative z-20 overflow-hidden bg-white py-4 text-ink">
        <div className="tech-marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {site.techTags.map((tag) => (
                <li key={`${copy}-${tag}`} className="flex items-center text-sm font-medium tracking-wide">
                  <span className="tone px-4">{tag}</span>
                  <span aria-hidden className="text-fuchsia-400/50">
                    ·
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
