"use client";

import { contributions, type MergedPull } from "@/content/contributions";
import { contributionEn } from "@/content/english";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import { useEffect, useState } from "react";

const ROWS = 2;

const statValues = [
  contributions.length,
  contributions.length,
  new Set(contributions.map((item) => item.repo)).size,
];

function useColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1280px)");
    const mid = window.matchMedia("(min-width: 768px)");

    function apply() {
      if (wide.matches) setColumns(3);
      else if (mid.matches) setColumns(2);
      else setColumns(1);
    }

    apply();
    wide.addEventListener("change", apply);
    mid.addEventListener("change", apply);
    return () => {
      wide.removeEventListener("change", apply);
      mid.removeEventListener("change", apply);
    };
  }, []);

  return columns;
}

function pagesOf(items: MergedPull[], size: number) {
  const pages: MergedPull[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages;
}

function Card({
  pull,
  featured,
  english,
  viewPr,
}: {
  pull: MergedPull;
  featured: boolean;
  english: boolean;
  viewPr: string;
}) {
  const text = english ? contributionEn[pull.href] : undefined;
  const title = text?.title ?? pull.title;
  const summary = text ? text.summary : pull.summary;
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_12px_40px_rgb(36_20_40_/_0.06)] ${
        featured ? "border-fuchsia-400" : "border-line"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="flex items-center gap-2 font-semibold text-ink">
            <span aria-hidden className="text-fuchsia-500">
              ⌘
            </span>
            {pull.name}
          </p>
          <p className="mt-1 truncate text-xs text-muted">{pull.repo}</p>
        </div>
        <span className="shrink-0 rounded-full bg-fuchsia-500/10 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-fuchsia-700 uppercase">
          merged
        </span>
      </div>
      <h3 className="mt-5 text-lg leading-snug font-semibold text-ink">{title}</h3>
      {summary ? (
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{summary}</p>
      ) : (
        <span className="mt-2 flex-1" />
      )}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted">#{pull.number}</p>
        <a
          href={pull.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-fuchsia-400 hover:text-fuchsia-700"
        >
          {viewPr}
          <span aria-hidden>↗</span>
        </a>
      </div>
    </article>
  );
}

export function Contributions() {
  const { lang } = useLang();
  const copy = ui[lang];
  const english = lang === "en";
  const columns = useColumns();
  const pageSize = columns * ROWS;
  const pages = pagesOf(contributions, pageSize);
  const [page, setPage] = useState(0);
  const [motion, setMotion] = useState(true);
  const [paused, setPaused] = useState(false);
  const safePage = Math.min(page, pages.length - 1);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotion(!media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!motion || paused || pages.length < 2) return;
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pages.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [motion, paused, pages.length]);

  function go(step: number) {
    setPage((current) => (current + step + pages.length) % pages.length);
  }

  return (
    <section
      id="aportes"
      aria-roledescription="carrusel"
      aria-label={copy.contributionsLabel}
      className="bg-white px-5 py-24 text-ink sm:px-10"
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
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6">
          <div className="mx-auto max-w-xl text-center sm:mx-0 sm:text-left">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">{copy.contributionsLabel}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {copy.contributionsLead}
            </p>
          </div>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              aria-label={copy.pagePrev}
              onClick={() => go(-1)}
              className="grid size-12 place-items-center rounded-full border border-line text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              aria-label={copy.pageNext}
              onClick={() => go(1)}
              className="grid size-12 place-items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 text-white transition-transform hover:scale-105"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {statValues.map((value, index) => (
            <li key={copy.stats[index]} className="rounded-2xl border border-line bg-blush px-6 py-8 text-center">
              <p className={`text-4xl font-semibold tracking-tight ${index === 1 ? "text-fuchsia-600" : "text-ink"}`}>
                {value}
              </p>
              <p className="mt-2 text-sm text-muted">{copy.stats[index]}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 overflow-hidden">
          <div
            className={motion ? "flex transition-transform duration-700 ease-out" : "flex"}
            style={{ transform: `translateX(-${safePage * 100}%)` }}
          >
            {pages.map((items, pageIndex) => (
              <ul
                key={items.map((item) => item.href).join("-")}
                className="grid w-full shrink-0 grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 xl:grid-cols-3"
                aria-hidden={pageIndex !== safePage}
              >
                {items.map((pull) => (
                  <li key={pull.href} className="min-h-0">
                    <Card
                      pull={pull}
                      featured={pageIndex === 0 && pull.href === contributions[0].href}
                      english={english}
                      viewPr={copy.viewPr}
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex gap-3 sm:hidden">
            <button
              type="button"
              aria-label={copy.pagePrev}
              onClick={() => go(-1)}
              className="grid size-11 place-items-center rounded-full border border-line text-ink"
            >
              <span aria-hidden>←</span>
            </button>
            <button
              type="button"
              aria-label={copy.pageNext}
              onClick={() => go(1)}
              className="grid size-11 place-items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400"
            >
              <span aria-hidden>→</span>
            </button>
          </div>
          <div className="flex flex-1 justify-center gap-2" role="tablist" aria-label={copy.pages}>
            {pages.map((items, index) => (
              <button
                key={items[0]?.href ?? index}
                type="button"
                role="tab"
                aria-selected={index === safePage}
                aria-label={`${copy.page} ${index + 1}`}
                onClick={() => setPage(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === safePage ? "w-10 bg-gradient-to-r from-fuchsia-500 to-orange-400" : "w-4 bg-ink/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
