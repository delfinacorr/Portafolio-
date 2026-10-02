"use client";

import { englishPieces } from "@/content/english";
import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import { useEffect, useState } from "react";

function offsetOf(index: number, active: number, count: number) {
  let delta = index - active;
  if (delta > count / 2) delta -= count;
  if (delta < -count / 2) delta += count;
  return delta;
}

export function ProjectCarousel() {
  const { lang } = useLang();
  const copy = ui[lang];
  const pieces = site.pieces.map((piece, index) => ({
    ...piece,
    summary: lang === "en" ? englishPieces[index] : piece.summary,
  }));
  const count = pieces.length;
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!motion || paused) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 1600);
    return () => window.clearInterval(id);
  }, [motion, paused, count]);

  function go(step: number) {
    setActive((current) => (current + step + count) % count);
  }

  return (
    <section
      id="proyectos"
      aria-roledescription="carrusel"
      aria-label={copy.projectsTitle}
      className="relative overflow-hidden bg-[#05010a] px-5 py-24 text-white sm:px-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-[-20%] left-[20%] h-[70%] w-[80%] blur-3xl"
          style={{
            transform: "rotate(-18deg)",
            background:
              "linear-gradient(90deg, transparent 10%, rgb(124 58 237 / 0.35) 34%, rgb(225 29 138 / 0.28) 52%, rgb(234 88 12 / 0.4) 72%, transparent 92%)",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div className="rise">
            <p className="text-xs font-medium tracking-[0.28em] text-white/60 uppercase">
              {copy.projectsKicker}
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-white via-fuchsia-200 to-orange-300 bg-clip-text font-serif text-5xl text-transparent sm:text-6xl">
              {copy.projectsTitle}
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              aria-label={copy.projectPrev}
              onClick={() => go(-1)}
              className="grid size-12 place-items-center rounded-full border border-white/25 transition-colors hover:bg-white hover:text-[#05010a]"
            >
              <span aria-hidden className="text-xl">
                ←
              </span>
            </button>
            <button
              type="button"
              aria-label={copy.projectNext}
              onClick={() => go(1)}
              className="grid size-12 place-items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white transition-transform hover:scale-105"
            >
              <span aria-hidden className="text-xl">
                →
              </span>
            </button>
          </div>
        </div>

        {motion ? (
          <div className="relative mt-12 h-[340px] [mask-image:linear-gradient(90deg,transparent,#000_4%,#000_96%,transparent)] sm:h-[320px]">
            {pieces.map((piece, index) => {
              const delta = offsetOf(index, active, count);
              const hidden = Math.abs(delta) > 1;
              return (
                <article
                  key={piece.href}
                  aria-hidden={delta !== 0}
                  className="absolute top-0 left-1/2 w-[min(86vw,34rem)] transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-50% + ${delta * 78}%)) scale(${delta === 0 ? 1 : 0.86})`,
                    opacity: hidden ? 0 : delta === 0 ? 1 : 0.28,
                    zIndex: 10 - Math.abs(delta),
                    pointerEvents: hidden ? "none" : "auto",
                  }}
                >
                  <div
                    className="cursor-pointer rounded-[28px] border border-white/15 bg-[#140a18] p-7 text-left shadow-[0_30px_80px_rgb(0_0_0_/_0.45)] sm:p-9"
                    onClick={() => setActive(index)}
                  >
                    <p className="text-xs tracking-[0.22em] text-white/50">
                      {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
                    </p>
                    <h3 className="tone mt-4 font-serif text-4xl sm:text-5xl">{piece.title}</h3>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-white/80">{piece.summary}</p>
                    <div className="mt-8 flex items-center justify-between gap-4">
                      <p className="text-sm text-white/55">{piece.stack}</p>
                      <a
                        href={piece.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-orange-200 underline decoration-orange-200/40 underline-offset-4 hover:decoration-orange-200"
                        onClick={(event) => event.stopPropagation()}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <ul className="mt-12 grid gap-4">
            {pieces.map((piece, index) => (
              <li key={piece.href} className="rounded-[28px] border border-white/15 p-7">
                <p className="text-xs tracking-[0.22em] text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="tone mt-3 font-serif text-4xl">{piece.title}</h3>
                <p className="mt-3 text-white/80">{piece.summary}</p>
                <a
                  href={piece.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-orange-200 underline underline-offset-4"
                >
                  GitHub
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex justify-center gap-2" role="tablist" aria-label={copy.projectPick}>
          {pieces.map((piece, index) => (
            <button
              key={piece.href}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={piece.title}
              onClick={() => setActive(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-10 bg-gradient-to-r from-fuchsia-400 to-orange-300" : "w-4 bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
