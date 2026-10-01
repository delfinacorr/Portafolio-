import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-[#05010a] text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>
          {site.name} · {site.role}
        </p>
        <p>{site.location}</p>
      </div>
    </footer>
  );
}
