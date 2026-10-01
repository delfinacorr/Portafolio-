"use client";

import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import Image from "next/image";

export function SiteFooter() {
  const { lang } = useLang();
  const copy = ui[lang];

  return (
    <footer id="contacto" className="bg-[#f6d3e6] px-5 py-16 text-ink sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-14">
        <div>
          <h2 className="max-w-3xl text-[clamp(2.8rem,7vw,5.6rem)] leading-[0.9] font-extrabold tracking-tight">
            {copy.footerLine1}
            <br />
            {copy.footerLine2}
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-ink/90"
            >
              {copy.contact}
            </a>
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(copy.quoteSubject)}`}
              className="inline-flex h-11 items-center rounded-full border border-ink/15 bg-white/75 px-5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              {copy.quote}
            </a>
          </div>
          <p className="mt-12 text-xs text-ink/45">© 2026 {site.name}</p>
        </div>
        <Image
          src="/delfina-footer-comp.jpg"
          alt="Delfina Corradini, con una computadora detrás"
          width={473}
          height={400}
          className="w-full justify-self-center rounded-[28px] shadow-[0_24px_60px_rgb(36_20_40_/_0.16)]"
        />
      </div>
    </footer>
  );
}
