import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[1200px] flex-col px-6 py-8 md:px-10 md:py-10">
      {/* 顶部只保留品牌名和站内锚点，避免额外交互影响稳定性。 */}
      <header className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-smoke">
            {siteConfig.hero.kicker}
          </p>
          <h1 className="mt-4 font-serif text-5xl text-ivory md:text-7xl">
            {siteConfig.brand}
          </h1>
        </div>

        <nav className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.28em] text-smoke">
          {siteConfig.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* 首屏用单张主图配合品牌说明，保持页面结构尽量静态。 */}
      <section className="grid gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-6">
          <h2 className="max-w-3xl font-serif text-4xl leading-tight text-ivory md:text-6xl">
            {siteConfig.hero.title}
          </h2>
          <p className="max-w-xl text-base leading-8 text-smoke">
            {siteConfig.hero.description}
          </p>
          <p className="max-w-lg border-l border-line pl-4 text-sm leading-7 text-smoke">
            {siteConfig.hero.note}
          </p>
        </div>

        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-panel">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.image}
            alt={siteConfig.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* 下面三个 section 分别承载品牌介绍、当前系列说明和补充说明。 */}
      <section
        id="about"
        className="grid gap-8 border-t border-line py-10 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-smoke">About</p>
          <h2 className="font-serif text-3xl leading-tight text-ivory md:text-5xl">
            {siteConfig.about.title}
          </h2>
          <p className="max-w-md text-base leading-8 text-smoke">
            {siteConfig.about.body}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {siteConfig.principles.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.25rem] border border-line bg-panel px-5 py-6"
            >
              <h3 className="font-serif text-2xl text-ivory">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-smoke">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="edition"
        className="grid gap-8 border-t border-line py-10 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="overflow-hidden rounded-[1.75rem] border border-line bg-panel">
          <div
            aria-hidden
            className="min-h-[340px] w-full bg-cover bg-center md:min-h-[460px]"
            style={{ backgroundImage: `url(${siteConfig.image})` }}
          />
        </div>

        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-smoke">
            Edition 01
          </p>
          <h2 className="font-serif text-3xl leading-tight text-ivory md:text-5xl">
            {siteConfig.edition.title}
          </h2>
          <p className="max-w-xl text-base leading-8 text-smoke">
            {siteConfig.edition.body}
          </p>

          <ul className="space-y-3 border-t border-line pt-6 text-sm leading-7 text-smoke">
            {siteConfig.edition.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="notes"
        className="grid gap-8 border-t border-line py-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-smoke">Notes</p>
          <blockquote className="font-serif text-3xl leading-tight text-ivory md:text-4xl">
            {siteConfig.about.quote}
          </blockquote>
        </div>

        <div className="space-y-4">
          {siteConfig.notes.map((item) => (
            <p
              key={item}
              className="rounded-[1.25rem] border border-line bg-panel px-5 py-5 text-sm leading-7 text-smoke"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <footer className="border-t border-line pt-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl text-ivory">{siteConfig.brand}</p>
            <p className="mt-2 text-sm leading-7 text-smoke">
              {siteConfig.footerNote}
            </p>
          </div>

          <p className="text-xs uppercase tracking-[0.28em] text-smoke">
            Stable static presentation
          </p>
        </div>
      </footer>
    </main>
  );
}
