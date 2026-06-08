import StaticImage from "@/components/StaticImage";
import { siteConfig } from "@/config/site";

export default function Hero() {
  const p = siteConfig.heroProduct;

  return (
    <section id="home" className="relative flex min-h-screen flex-col bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.04]"
      >
        <span className="font-serif text-[28vw] font-medium leading-none tracking-tight whitespace-nowrap select-none">
          {siteConfig.brand}
        </span>
      </div>

      <div className="relative mx-auto flex flex-1 w-full max-w-[1440px] flex-col justify-end px-5 pb-16 pt-28 md:px-12 md:pb-20 md:justify-center">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-0">
          <div className="lg:col-span-5 lg:pb-8">
            <div className="flex items-center gap-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-taupe">
                {p.season}
              </span>
              <span className="h-px w-12 bg-taupe/50" />
            </div>

            <h1 className="mt-6 font-serif text-[clamp(2.8rem,7vw,4.5rem)] font-medium italic leading-[1.05] tracking-tight">
              {siteConfig.tagline}
            </h1>

            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-paper/50">
              {siteConfig.description}
            </p>

            <a
              href="#featured"
              className="group mt-10 inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-paper/70 hover:text-paper"
            >
              <span className="h-px w-8 bg-paper/40 transition-all group-hover:w-12 group-hover:bg-paper" />
              Discover
            </a>
          </div>

          <div className="relative lg:col-span-7 lg:-mt-16">
            <div className="relative mx-auto aspect-[3/4] max-w-lg lg:max-w-none lg:aspect-[4/5]">
              <StaticImage
                src={siteConfig.heroImage}
                alt={p.name}
                fill
                priority
                className="object-contain object-bottom"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-paper/40 lg:absolute lg:right-0 lg:bottom-4 lg:mt-0 lg:flex-col lg:items-end lg:gap-2">
              <span>{p.code}</span>
              <span>{p.subtitle}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative px-5 pb-6 md:px-12">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-paper/30">
          <span>Scroll to explore</span>
          <span>
            {siteConfig.brand} / {p.season}
          </span>
        </div>
        <div className="mt-3 h-px w-full bg-paper/10">
          <div className="h-full w-1/3 bg-taupe/60" />
        </div>
      </div>
    </section>
  );
}
