import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink/90">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-5 md:px-12">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.35em] text-paper"
        >
          {siteConfig.brand}
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.25em] text-paper/70 hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#featured"
          className="hidden text-[11px] font-medium uppercase tracking-[0.25em] text-paper border border-paper/30 px-5 py-2 hover:bg-paper hover:text-ink md:block"
        >
          Shop
        </a>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-paper [&::-webkit-details-marker]:hidden">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 7h14M4 12h14M4 17h14" />
            </svg>
          </summary>
          <nav className="absolute right-0 top-full mt-3 min-w-[140px] border border-paper/20 bg-ink py-2">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-paper/70 hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
