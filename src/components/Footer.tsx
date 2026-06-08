import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 border-t border-line px-5 py-10 md:flex-row md:justify-between md:px-12">
        <span className="text-xs font-semibold tracking-[0.35em]">
          {siteConfig.brand}
        </span>

        <div className="flex gap-8">
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span className="text-[10px] text-muted">
          © 2026 {siteConfig.brand}
        </span>
      </div>
    </footer>
  );
}
