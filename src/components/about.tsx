"use client";

import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";

const profile = [
  { key: "fullStack", value: "true", kind: "bool" },
  { key: "web3", value: "true", kind: "bool" },
  { key: "location", value: "'Argentina'", kind: "string" },
  { key: "goal", value: "'Build a better future'", kind: "string" },
] as const;

export function About() {
  const { lang } = useLang();
  const copy = ui[lang];

  return (
    <section id="sobre-mi" className="bg-blush px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium tracking-[0.22em] text-cherry uppercase">
            {copy.aboutKicker}
          </p>
          <h2 className="mt-5 max-w-xl text-4xl leading-[1.05] font-semibold tracking-tight text-ink sm:text-5xl">
            {site.name}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {site.about.place}
            <span className="mx-2 text-fuchsia-400" aria-hidden>
              ·
            </span>
            {copy.aboutRole}
            <span className="mx-2 text-fuchsia-400" aria-hidden>
              ·
            </span>
            {copy.aboutFocus}
          </p>
          <p className="mt-6 max-w-xl font-script text-3xl leading-snug text-cherry">{copy.aboutQuote}</p>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink">
            {copy.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {copy.services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {service}
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-xl border-t border-fuchsia-300/80 pt-8">
            <p className="font-serif text-[2rem] leading-[1.12] tracking-tight text-ink sm:text-4xl">
              {copy.aboutMark[0]}
            </p>
            <p className="mt-3 font-serif text-[2rem] leading-[1.12] tracking-tight text-cherry sm:text-4xl">
              {copy.aboutMark[1]}
            </p>
          </div>
        </div>
        <div
          className="rounded-[28px] bg-[#0c1220] p-6 text-[0.95rem] leading-relaxed shadow-[0_24px_60px_rgb(36_20_40_/_0.18)] sm:p-8 sm:text-base"
          aria-label="const delfina"
        >
          <div className="mb-8 flex gap-2" aria-hidden>
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <pre className="overflow-x-auto font-mono text-[#c4b5fd]">
            <code>
              <span className="text-[#a78bfa]">const</span> delfina = {"{"}
              {"\n"}
              {profile.map((line) => (
                <span key={line.key}>
                  {"  "}
                  {line.key}:{" "}
                  <span className={line.kind === "string" ? "text-[#86efac]" : "text-[#f0abfc]"}>{line.value}</span>,
                  {"\n"}
                </span>
              ))}
              {"}"};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
