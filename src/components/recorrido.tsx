"use client";

import { site } from "@/content/site";
import { SocialIcons } from "@/components/social-icons";
import { useEffect, useRef, useState, type RefObject } from "react";

function useScrollSpan(ref: RefObject<HTMLElement | null>, active: boolean) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;

    function measure() {
      const el = ref.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-el.getBoundingClientRect().top, 0), Math.max(total, 0));
      setProgress(total > 0 ? scrolled / total : 0);
    }

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [active, ref]);

  return progress;
}

export function Recorrido() {
  const storyRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [motion, setMotion] = useState(true);
  const [shift, setShift] = useState(0);
  const story = useScrollSpan(storyRef, motion);
  const rail = useScrollSpan(railRef, motion);
  const count = site.chapters.length;
  const cursor = story * count;
  const active = Math.min(count - 1, Math.floor(cursor));
  const chapter = site.chapters[active];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function measure() {
      setShift(Math.max(0, track.scrollWidth - window.innerWidth + 48));
    }

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [motion]);

  return (
    <>
      <section
        id="recorrido"
        ref={storyRef}
        className={motion ? "relative h-[640vh] bg-white" : "bg-white"}
        aria-label="Recorrido"
      >
        <div className={motion ? "sticky top-0 h-svh overflow-hidden" : undefined}>
          {(motion ? [chapter] : site.chapters).map((item) => {
            const step = motion ? active : site.chapters.indexOf(item);
            return (
            <article
              key={item.title}
              className="flex h-svh flex-col justify-between bg-[radial-gradient(ellipse_at_0%_100%,rgb(124_58_237_/_0.07),transparent_46%),radial-gradient(ellipse_at_100%_0%,rgb(251_146_60_/_0.09),transparent_42%)] px-5 pt-24 pb-8 sm:px-10"
            >
              <p className="text-xs font-medium tracking-[0.28em] text-cherry uppercase">
                {String(step + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </p>
              <div className="story-in max-w-4xl" key={motion ? item.title : undefined}>
                <p className="text-sm tracking-wide text-muted">{item.when}</p>
                <h2 className="tone mt-3 font-serif text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.88]">
                  {item.title}
                </h2>
                <p className="mt-4 text-xs font-medium tracking-[0.18em] text-cherry-deep uppercase">
                  {item.role}
                </p>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink">{item.text}</p>
              </div>
              <div>
                <p className="mb-4 max-w-md text-sm text-muted">{site.purpose}</p>
                <div className="h-px bg-line" aria-hidden>
                  <div
                    className="h-px bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400 transition-[width] duration-500"
                    style={{ width: `${((step + 1) / count) * 100}%` }}
                  />
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </section>

      <section id="marcas" className="border-t border-line bg-blush px-5 py-24 sm:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <h2 className="tone font-serif text-5xl leading-none sm:text-6xl">
            Lo que quedó marcado
          </h2>
          <ol className="divide-y divide-line border-y border-line">
            {site.marks.map((mark) => (
              <li key={`${mark.detail}-${mark.year}`} className="flex items-baseline justify-between gap-6 py-5">
                <div>
                  <p className="tone font-serif text-3xl">{mark.title}</p>
                  <p className="mt-1 text-sm text-muted">{mark.detail}</p>
                </div>
                <p className="shrink-0 text-sm tracking-[0.16em] text-cherry-deep">{mark.year}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="piezas"
        ref={railRef}
        className={motion ? "relative h-[280vh] bg-white" : "bg-white"}
        aria-label="Piezas en GitHub"
      >
        <div className={motion ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden" : "overflow-hidden py-24"}>
          <div className="mb-8 flex items-end justify-between px-5 sm:px-10">
            <h2 className="tone font-serif text-5xl sm:text-6xl">En público</h2>
            <p className="hidden max-w-xs text-right text-sm text-muted sm:block">
              Repositorios propios. El resto del perfil son contribuciones al ecosistema Stellar.
            </p>
          </div>
          <ul
            ref={trackRef}
            className={`flex gap-6 px-5 sm:px-10 ${motion ? "w-max will-change-transform" : "flex-wrap"}`}
            style={motion ? { transform: `translateX(-${rail * shift}px)` } : undefined}
          >
            {site.pieces.map((piece, index) => (
              <li
                key={piece.href}
                className="flex w-[min(78vw,28rem)] shrink-0 flex-col justify-between border border-line bg-white p-7"
              >
                <div>
                  <p className="text-xs tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="tone mt-4 font-serif text-4xl">{piece.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-ink">{piece.summary}</p>
                </div>
                <div className="mt-8 flex items-center justify-between gap-4">
                  <p className="text-sm text-muted">{piece.stack}</p>
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-fuchsia-600 underline decoration-fuchsia-400/40 underline-offset-4 hover:decoration-orange-400"
                  >
                    GitHub
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden bg-[#05010a] px-5 py-28 text-white sm:px-10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-[-30%] left-[-10%] h-[80%] w-[130%] blur-3xl"
            style={{
              transform: "rotate(-24deg)",
              background:
                "linear-gradient(90deg, transparent 8%, rgb(72 28 150 / 0.35) 28%, rgb(214 150 255 / 0.45) 46%, rgb(255 86 48 / 0.55) 66%, transparent 90%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05010a] via-transparent to-[#05010a]" />
        </div>
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-between">
          <p className="text-xs font-medium tracking-[0.28em] text-white/70 uppercase">
            {site.location} · {site.availability}
          </p>
          <div>
            <h2 className="max-w-4xl bg-gradient-to-r from-white via-fuchsia-200 to-orange-300 bg-clip-text font-serif text-[clamp(3rem,8vw,6.5rem)] leading-[0.9] text-transparent">
              Si el producto tiene que usarse de verdad, escribime.
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-8 inline-block text-xl underline decoration-white/40 underline-offset-8 hover:decoration-white sm:text-3xl"
            >
              {site.email}
            </a>
            <a href={site.phoneHref} className="mt-4 block text-lg text-white/80 hover:text-white">
              {site.phone}
            </a>
          </div>
          <SocialIcons tone="on-dark" />
        </div>
      </section>
    </>
  );
}
