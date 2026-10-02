import { About, AboutMark } from "@/components/about";
import { Contributions } from "@/components/contributions";
import { Hero } from "@/components/hero";
import { ProjectCarousel } from "@/components/project-carousel";
import { Recorrido } from "@/components/recorrido";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <About />
        <Recorrido />
        <AboutMark />
        <ProjectCarousel />
        <Contributions />
      </main>
      <SiteFooter />
    </>
  );
}
