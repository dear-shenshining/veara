import StaticImage from "@/components/StaticImage";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="relative min-h-[50vh] lg:min-h-[700px]">
          <StaticImage
            src={siteConfig.heroImage}
            alt={siteConfig.brand}
            fill
            className="object-contain p-12 opacity-80"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-20 lg:px-16 lg:py-0">
          <span className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            About
          </span>
          <h2 className="mt-4 font-serif text-5xl font-medium italic md:text-6xl">
            {siteConfig.brand}
          </h2>
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-paper/50">
            {siteConfig.description}
          </p>

          <div className="mt-14 space-y-0 divide-y divide-paper/10">
            {siteConfig.pillars.map((item) => (
              <div key={item.num} className="flex items-baseline gap-6 py-6">
                <span className="font-serif text-2xl italic text-paper/20">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-sm uppercase tracking-[0.2em]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-light text-paper/40">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
