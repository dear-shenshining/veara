import { siteConfig } from "@/config/site";

export default function Statement() {
  return (
    <section className="border-b border-line bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <p className="font-serif text-center text-[clamp(1.8rem,4vw,3rem)] font-medium italic leading-snug text-ink/80">
          &ldquo;{siteConfig.statement}&rdquo;
        </p>
        <p className="mt-6 text-center text-[11px] uppercase tracking-[0.35em] text-muted">
          — {siteConfig.brand}
        </p>
      </div>
    </section>
  );
}
