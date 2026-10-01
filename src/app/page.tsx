import { Hero } from "@/components/hero";
import { Recorrido } from "@/components/recorrido";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gradient-to-r focus:from-fuchsia-500 focus:to-orange-400 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <Recorrido />
      </main>
      <SiteFooter />
    </>
  );
}
