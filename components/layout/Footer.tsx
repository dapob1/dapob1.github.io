import Link from "next/link";
import { site, navLinks } from "@/lib/content";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-tertiary/10 bg-neutral-900 text-tertiary">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 md:px-8 md:py-24">
        <div>
          <Link href="/" aria-label="ADWA Studio home" className="inline-block">
            <Logo className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-tertiary/70">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-tertiary/50">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-tertiary/80 transition-colors hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-tertiary/50">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-tertiary/80">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-secondary"
              >
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-4">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-tertiary/60 transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-tertiary/10 px-6 py-6 text-sm text-tertiary/50 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} ADWA Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/#contact" className="hover:text-secondary">
            Privacy
          </Link>
          <Link href="/#contact" className="hover:text-secondary">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
