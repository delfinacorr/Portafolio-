import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bodoni_Moda, Caveat, Outfit } from "next/font/google";
import { site } from "@/content/site";
import { LanguageProvider } from "@/i18n/language";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-bodoni",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · Full Stack Web2 y Web3`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · Full Stack Web2 y Web3`,
    description: site.description,
    locale: "es",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${bodoni.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
