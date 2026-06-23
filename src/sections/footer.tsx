import type { Locale, NavItem, SiteContent } from "../types/site";

interface FooterProps {
  content: SiteContent["footer"];
  currentLocale: Locale;
  items: NavItem[];
  localeLabel: string;
}

export function Footer({
  content,
  currentLocale,
  items,
  localeLabel,
}: FooterProps) {
  return (
    <footer className="bg-[var(--ink)] text-[var(--surface)]">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:px-12 lg:py-12">
        <div>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-[var(--accent-soft)]">
            MAPBRAIN
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-[color:rgb(247_245_239_/_0.72)] sm:text-lg">
            {content.blurb}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <nav className="flex flex-col gap-3 text-sm text-[color:rgb(247_245_239_/_0.8)]">
            {items.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="space-y-3 text-sm text-[color:rgb(247_245_239_/_0.8)]">
            <p>{content.copyright}</p>
            <p>
              {localeLabel}: {currentLocale.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
