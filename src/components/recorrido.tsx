"use client";

import { englishJobs } from "@/content/english";
import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import { useEffect, useRef, useState, type RefObject } from "react";

const WAVE = "M 40 168 C 170 170, 230 96, 360 112 C 490 128, 540 200, 660 162 C 780 124, 860 70, 960 108";
const WAVE_BOX = { width: 1000, height: 260 };

function caption(detail: string, english: boolean) {
  if (detail.includes("Santander")) return "Santander + ITBA";
  if (detail.includes("CACIC")) return english ? "CACIC merit" : "Mérito CACIC";
  if (detail.includes("Huawei")) return "Huawei ICT";
  if (detail.includes("Futura")) return "Código Futura";
  if (detail.includes("Medellín")) return "Medellín";
  if (detail.includes("Vendimia")) return "Vendimia Tech";
  if (detail.includes("Paulo")) return "São Paulo";
  return detail;
}

function markTitle(title: string, english: boolean) {
  if (!english) return title;
  if (title === "Beca") return "Scholarship";
  if (title.startsWith("2")) return "2nd place nationwide";
  if (title.startsWith("1")) return "1st place";
  return title;
}

function orderedMarks() {
  return site.marks;
}

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

function Marks({ motion, english }: { motion: boolean; english: boolean }) {
  const stops = orderedMarks();
  const years = stops.map((mark) => Number(mark.year));
  const span = `${Math.min(...years)}—${Math.max(...years)}`;
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const progress = useScrollSpan(sectionRef, motion);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [labelIndex, setLabelIndex] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const marker = markerRef.current;
    if (!path || !marker) return;

    const length = path.getTotalLength();
    const count = stops.length;
    const fractions = stops.map((_, index) => (count === 1 ? 0 : index / (count - 1)));
    setPoints(
      fractions.map((fraction) => {
        const point = path.getPointAtLength(length * fraction);
        return { x: point.x, y: point.y };
      }),
    );

    const distance = Math.min(Math.max(motion ? progress : 0, 0), 1) * length;
    const point = path.getPointAtLength(distance);
    const before = path.getPointAtLength(Math.max(0, distance - 12));
    const after = path.getPointAtLength(Math.min(length, distance + 12));
    const angle = (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI;
    marker.setAttribute("transform", `translate(${point.x} ${point.y}) rotate(${angle})`);

    const label = labelRef.current;
    if (label) {
      const ratio = point.x / WAVE_BOX.width;
      const shift = ratio > 0.74 ? "-100%" : ratio < 0.16 ? "0%" : "-50%";
      label.style.left = `${(point.x / WAVE_BOX.width) * 100}%`;
      label.style.top = `${(point.y / WAVE_BOX.height) * 100}%`;
      label.style.transform = `translate(${shift}, calc(-100% - 28px))`;
    }

    const next = Math.min(count - 1, Math.max(0, Math.round(progress * (count - 1))));
    setLabelIndex((current) => (current === next ? current : next));
  }, [motion, progress, stops.length]);

  return (
    <section
      id="marcas"
      ref={sectionRef}
      className={motion ? "relative h-[300vh] bg-[#f7f4ee]" : "relative bg-[#f7f4ee]"}
    >
      <div
        className={
          motion
            ? "sticky top-0 flex h-svh flex-col justify-center overflow-hidden px-5 sm:px-10"
            : "overflow-hidden px-5 py-20 sm:px-10 sm:py-28"
        }
      >
        <p
          aria-hidden
          className="pointer-events-none absolute top-8 right-4 text-[clamp(3.2rem,13vw,8.75rem)] leading-none font-semibold tracking-tight text-ink/10 sm:top-16 sm:right-10"
        >
          {span}
        </p>
        <div className="relative mx-auto w-full max-w-6xl">
          <h2 className="relative z-10 max-w-[12ch] text-5xl leading-[0.92] font-semibold tracking-tight text-ink sm:text-7xl">
            {english ? "Awards and" : "Logros y"}
            <br />
            {english ? "recognition" : "reconocimientos"}
          </h2>
          <ol className="sr-only">
            {stops.map((mark) => (
              <li key={`${mark.detail}-${mark.year}`}>
                {mark.year}. {markTitle(mark.title, english)}. {mark.detail}
              </li>
            ))}
          </ol>
          <div className="relative mt-16 sm:mt-24" style={{ aspectRatio: `${WAVE_BOX.width} / ${WAVE_BOX.height}` }}>
            <svg viewBox={`0 0 ${WAVE_BOX.width} ${WAVE_BOX.height}`} className="h-full w-full overflow-visible" aria-hidden>
              <path ref={pathRef} d={WAVE} fill="none" stroke="#c9bddc" strokeWidth="2" />
              {points.map((point, index) => (
                <g key={`${stops[index].detail}-${stops[index].year}`}>
                  <circle cx={point.x} cy={point.y} r="4.5" fill="#b7a8d4" />
                  <text
                    x={point.x}
                    y={point.y + 32}
                    textAnchor="middle"
                    fill="#8d7c9c"
                    fontSize="14"
                    fontFamily="inherit"
                  >
                    {stops[index].year}
                  </text>
                </g>
              ))}
              <g ref={markerRef} transform="translate(40 168)">
                <circle r="15" fill="#f7f4ee" stroke="#7c3aed" strokeWidth="1.6" />
                <path
                  d="M-6 0H5M1.5-3.5 5.5 0 1.5 3.5"
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            {motion ? (
              <p
                ref={labelRef}
                className="absolute top-0 left-0 text-xs font-medium whitespace-nowrap text-violet-700 sm:text-sm"
              >
                {caption(stops[labelIndex]?.detail ?? "", english)}
              </p>
            ) : (
              points.map((point, index) => (
                <p
                  key={`${stops[index].detail}-fijo`}
                  className="absolute text-xs font-medium whitespace-nowrap text-violet-700"
                  style={{
                    left: `${(point.x / WAVE_BOX.width) * 100}%`,
                    top: `${(point.y / WAVE_BOX.height) * 100}%`,
                    transform: "translate(-50%, calc(-100% - 28px))",
                  }}
                >
                  {caption(stops[index].detail, english)}
                </p>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Recorrido() {
  const [motion, setMotion] = useState(true);
  const { lang } = useLang();
  const copy = ui[lang];
  const english = lang === "en";

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <>
      <section
        id="recorrido"
        className="experience-stage bg-white px-5 py-24 sm:px-10 sm:py-32"
        aria-label={copy.experienceLabel}
      >
        <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
          <h2 className="text-5xl leading-[0.92] font-semibold tracking-tight text-ink sm:text-6xl lg:sticky lg:top-28">
            <span className="from-side block">
              {copy.experienceTitle[0]}
              <br />
              {copy.experienceTitle[1]}
            </span>
          </h2>
          <ol className="from-side divide-y divide-line">
            {site.experience.map((job, index) => {
              const translated = english ? englishJobs[index] : null;
              const role = translated?.role ?? job.role;
              const when = translated?.when ?? job.when;
              const points = translated?.points ?? job.points;
              return (
              <li key={job.company} className="py-10 first:pt-0 last:pb-0">
                <p className="text-sm tracking-wide text-muted">{when}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">{job.company}</h3>
                <p className="mt-2 text-xs font-medium tracking-[0.16em] text-cherry uppercase">{role}</p>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-base leading-relaxed text-ink">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-fuchsia-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
              );
            })}
          </ol>
        </div>
      </section>

      <Marks motion={motion} english={english} />

    </>
  );
}
