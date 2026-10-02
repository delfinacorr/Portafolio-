"use client";

import { site } from "@/content/site";
import { ui } from "@/i18n/copy";
import { useLang } from "@/i18n/language";
import Image from "next/image";

export function SiteFooter() {
  const { lang } = useLang();
  const copy = ui[lang];
  const github = site.socials.find((item) => item.icon === "github");
  const linkedin = site.socials.find((item) => item.icon === "linkedin");

  return (
    <footer id="contacto" className="bg-[#f6d3e6] px-5 py-16 text-ink sm:px-10 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)] lg:gap-14">
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
            </div>
          </div>
          <Image
            src="/delfina-footer-comp.jpg"
            alt="Delfina Corradini, con una computadora detrás"
            width={473}
            height={400}
            className="w-full justify-self-center rounded-[28px] shadow-[0_24px_60px_rgb(36_20_40_/_0.16)]"
          />
        </div>

        <div className="mt-16 border-t border-ink/15 pt-12">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] uppercase">{site.name}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink/70">
                {copy.footerSignRoles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
            <div className="sm:text-right">
              <p className="text-sm font-semibold tracking-[0.18em] uppercase">{copy.footerSignConnect}</p>
              <ul className="mt-3 space-y-1 text-sm">
                {github ? (
                  <li>
                    <a
                      href={github.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-ink"
                    >
                      {github.label}
                    </a>
                  </li>
                ) : null}
                {linkedin ? (
                  <li>
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-ink"
                    >
                      {linkedin.label}
                    </a>
                  </li>
                ) : null}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink/70 underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  >
                    {copy.footerSignEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-ink/15 pt-6 text-xs text-ink/45">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
