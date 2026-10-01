"use client";

import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const { lang } = useLang();
  const copy = ui[lang];

  useEffect(() => {
    function onScroll() {
      const overDark = ["proyectos"].some((id) => {
        const section = document.getElementById(id);
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top < 80 && rect.bottom > 80;
      });
      setSolid(window.scrollY > window.innerHeight * 0.72 && !overDark);
    }

    onScroll();
    const late = window.setTimeout(onScroll, 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.clearTimeout(late);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onLight = solid;
  const bar = onLight
    ? "border-line bg-white/95 text-ink"
    : open
      ? "border-white/10 bg-[#07060f]/95 text-white"
      : "border-transparent bg-transparent text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md ${bar}`}>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gradient-to-r focus:from-fuchsia-500 focus:to-orange-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        {copy.skip}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#contenido" aria-label={site.name} className="text-3xl leading-none font-semibold tracking-tight">
          DC
        </a>
        <nav
          className={`hidden items-center gap-1 rounded-full border px-2 py-1 md:flex ${
            onLight ? "border-line bg-blush" : "border-white/15 bg-white/5"
          }`}
          aria-label={copy.navLabel}
        >
          {site.nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm transition-colors ${
                onLight ? "text-ink/80 hover:bg-white hover:text-ink" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {copy.nav[index]}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="hidden h-9 items-center rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-4 text-sm font-medium text-white transition-colors hover:brightness-110 md:inline-flex"
        >
          {copy.cta}
        </a>
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
            onLight ? "border-line" : "border-white/40"
          }`}
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? copy.closeMenu : copy.openMenu}</span>
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className={`block h-px w-5 ${onLight ? "bg-ink" : "bg-white"}`} />
            <span className={`block h-px w-5 ${onLight ? "bg-ink" : "bg-white"}`} />
          </span>
        </button>
      </div>
      {open ? (
        <nav
          id="menu-movil"
          aria-label={copy.mobileNav}
          className={`border-t px-5 py-4 md:hidden ${
            onLight ? "border-line bg-white" : "border-white/15 bg-[#07060f]"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {site.nav.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`block rounded-xl px-3 py-3 text-base ${
                    onLight ? "hover:bg-blush" : "hover:bg-white/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {copy.nav[index]}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="mt-2 block rounded-full bg-gradient-to-r from-fuchsia-500 to-orange-400 px-3 py-3 text-center text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {copy.cta}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
