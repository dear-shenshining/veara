import StaticImage from "@/components/StaticImage";
import { siteConfig } from "@/config/site";

export default function Featured() {
  const p = siteConfig.heroProduct;

  return (
    <section id="featured" className="bg-sand">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 lg:px-12 lg:py-28">
          <span className="text-[11px] uppercase tracking-[0.3em] text-taupe">
            Featured · {p.code}
          </span>
          <h2 className="mt-4 font-serif text-5xl font-medium italic md:text-6xl">
            {p.name}
          </h2>
          <p className="mt-4 text-sm text-muted">{p.subtitle}</p>

          <div className="mt-10 space-y-4 border-t border-line pt-8 text-sm">
            <div className="flex justify-between">
              <span className="text-muted">Fabric</span>
              <span>320g 纯棉</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Fit</span>
              <span>Box / 落肩</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Color</span>
              <span>Black</span>
            </div>
            <div className="flex justify-between font-medium">
              <span className="text-muted">Price</span>
              <span>¥{p.price}</span>
            </div>
          </div>

          <a
            href="#collection"
            className="mt-10 inline-flex w-fit items-center gap-3 bg-ink px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] text-paper hover:opacity-80"
          >
            浏览全系列 →
          </a>
        </div>

        <div className="relative min-h-[60vh] bg-paper lg:min-h-[80vh]">
          <StaticImage
            src={siteConfig.heroImage}
            alt={p.name}
            fill
            className="object-contain p-10 md:p-20"
          />
          <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between md:bottom-12 md:left-12 md:right-12">
            <span className="font-serif text-8xl font-medium italic text-ink/[0.04] md:text-9xl">
              {p.code}
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
              {p.season}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
