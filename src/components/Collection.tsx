import StaticImage from "@/components/StaticImage";
import { siteConfig } from "@/config/site";

const spanClass = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-2",
  small: "",
} as const;

export default function Collection() {
  return (
    <section id="collection" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-taupe">
              Collection
            </span>
            <h2 className="mt-3 font-serif text-4xl font-medium italic md:text-5xl">
              全系列
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            四款核心单品，构成 VEARA 的日常衣橱。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          {siteConfig.products.map((product) => (
            <article
              key={product.id}
              className={`relative overflow-hidden bg-sand ${spanClass[product.span]}`}
            >
              <div
                className={`relative w-full ${
                  product.span === "large"
                    ? "aspect-[3/4] md:aspect-auto md:h-full md:min-h-[520px]"
                    : "aspect-[4/5]"
                }`}
              >
                <StaticImage
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 md:p-10"
                />

                {product.tag && (
                  <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.25em] text-taupe">
                    {product.tag}
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-ink/90 px-5 py-4">
                  <div className="flex items-center justify-between text-paper">
                    <span className="text-sm">{product.name}</span>
                    <span className="text-sm font-light">¥{product.price}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
