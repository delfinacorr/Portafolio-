"use client";

import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import { useEffect, useRef, useState } from "react";

const profile = [
  { key: "fullStack", value: "true", kind: "bool" },
  { key: "web3", value: "true", kind: "bool" },
  { key: "location", value: "'Argentina'", kind: "string" },
  { key: "goal", value: "'Build a better future'", kind: "string" },
] as const;

const codeTokens = [
  { text: "const", tone: "keyword" },
  { text: " delfina = {\n" },
  ...profile.flatMap((line) => [
    { text: `  ${line.key}: ` },
    { text: line.value, tone: line.kind === "string" ? "string" : "bool" },
    { text: ",\n" },
  ]),
  { text: "};" },
] as const;

const codeSource = codeTokens.map((token) => token.text).join("");

const toneClass = {
  keyword: "text-[#a78bfa]",
  bool: "text-[#f0abfc]",
  string: "text-[#86efac]",
} as const;

function MarkStatement({ lines }: { lines: readonly string[] }) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);
  const [started, setStarted] = useState(false);
  const [shown, setShown] = useState<[string, string]>(["", ""]);
  const [caret, setCaret] = useState<0 | 1 | null>(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const allowed = !media.matches;
      setMotion(allowed);
      if (!allowed) {
        setShown([lines[0], lines[1]]);
        setCaret(null);
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, [lines]);

  useEffect(() => {
    const node = blockRef.current;
    if (!node || !motion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [motion]);

  useEffect(() => {
    if (!motion || !started) return;
    let cancelled = false;
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    async function run() {
      setShown(["", ""]);
      while (!cancelled) {
        for (const index of [0, 1] as const) {
          setCaret(index);
          for (let length = 1; length <= lines[index].length; length += 1) {
            if (cancelled) return;
            const next = lines[index].slice(0, length);
            setShown((current) => (index === 0 ? [next, current[1]] : [current[0], next]));
            await sleep(34);
          }
        }
        await sleep(1400);
        if (cancelled) return;
        for (const index of [1, 0] as const) {
          setCaret(index);
          for (let length = lines[index].length - 1; length >= 0; length -= 1) {
            if (cancelled) return;
            const next = lines[index].slice(0, length);
            setShown((current) => (index === 0 ? [next, current[1]] : [current[0], next]));
            await sleep(16);
          }
        }
        setCaret(0);
        await sleep(420);
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, [motion, started, lines]);

  return (
    <div
      ref={blockRef}
      className="rise mx-auto w-full max-w-4xl text-center"
    >
      <p className="sr-only">
        {lines[0]} {lines[1]}
      </p>
      {lines.map((line, index) => (
        <p
          key={line}
          className={`font-serif text-[2rem] leading-[1.12] tracking-tight sm:text-4xl ${
            index === 0 ? "text-ink" : "mt-3 text-cherry"
          }`}
        >
          <span className="relative block">
            <span className="invisible block" aria-hidden>
              {line}
            </span>
            <span className="absolute inset-0" aria-hidden>
              {shown[index]}
              {motion && caret === index ? (
                <span
                  className="type-caret"
                  style={{ width: "2px", height: "0.82em", background: "currentColor" }}
                />
              ) : null}
            </span>
          </span>
        </p>
      ))}
    </div>
  );
}

function CodeCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const allowed = !media.matches;
      setMotion(allowed);
      if (!allowed) setCount(codeSource.length);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || !motion) return;
    setCount(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStarted(true);
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [motion]);

  useEffect(() => {
    if (!motion || !started || count >= codeSource.length) return;
    const id = window.setTimeout(() => setCount((current) => current + 1), 28);
    return () => window.clearTimeout(id);
  }, [motion, started, count]);

  let left = count;
  const visible = codeTokens.map((token, index) => {
    if (left <= 0) return null;
    const text = token.text.slice(0, left);
    left -= text.length;
    const tone = "tone" in token ? token.tone : undefined;
    const className =
      tone === "keyword" || tone === "bool" || tone === "string" ? toneClass[tone] : undefined;
    return (
      <span key={index} className={className}>
        {text}
      </span>
    );
  });

  return (
    <div
      ref={cardRef}
      className="rise rounded-[28px] bg-[#0c1220] p-6 text-[0.95rem] leading-relaxed shadow-[0_24px_60px_rgb(36_20_40_/_0.18)] sm:p-8 sm:text-base"
      aria-label="const delfina"
    >
      <div className="mb-8 flex gap-2" aria-hidden>
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
      </div>
      <p className="sr-only">{codeSource}</p>
      <pre className="grid overflow-x-auto font-mono text-[#c4b5fd]">
        <code className="invisible col-start-1 row-start-1 whitespace-pre" aria-hidden>
          {codeSource}
        </code>
        <code className="col-start-1 row-start-1 whitespace-pre" aria-hidden>
          {visible}
          {motion && count < codeSource.length ? <span className="type-caret" /> : null}
        </code>
      </pre>
    </div>
  );
}

export function About() {
  const { lang } = useLang();
  const copy = ui[lang];

  return (
    <section id="sobre-mi" className="bg-blush px-5 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className="rise">
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
          </div>
          <p className="rise mt-6 max-w-xl font-script text-3xl leading-snug text-cherry">{copy.aboutQuote}</p>
          <div className="rise mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink">
            {copy.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="rise mt-6 flex flex-wrap gap-2">
            {copy.services.map((service) => (
              <li
                key={service}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}

export function AboutMark() {
  const { lang } = useLang();
  const copy = ui[lang];

  return (
    <section className="bg-blush px-5 py-20 sm:px-10 sm:py-28" aria-label={copy.aboutMark[0]}>
      <MarkStatement lines={copy.aboutMark} />
    </section>
  );
}
