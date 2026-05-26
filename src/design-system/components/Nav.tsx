import Link from 'next/link';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';

export type NavLink = {
  label: string;
  href: string;
  children?: NavLink[];
};

type NavProps = {
  brand?: ReactNode;
  links?: NavLink[];
  cta?: ReactNode;
  logoSrc?: string;
};

export function Nav({ links = [], logoSrc }: NavProps) {
  return (
    <header className="bg-bg-accent">
      <Container>
        <div className="flex items-center justify-between gap-8 py-4 lg:py-8">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {logoSrc ? (
              <Image
                src={logoSrc}
                alt="Main Street Orthodontics logo"
                width={329}
                height={100}
                className="h-[60px] sm:h-[80px] lg:h-[100px] w-auto"
                priority
              />
            ) : null}
          </Link>

          {links.length > 0 && (
            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-6"
            >
              {links.map((link) => (
                <NavItem key={link.href + link.label} link={link} />
              ))}
            </nav>
          )}

          <MobileMenu links={links} />
        </div>
      </Container>
    </header>
  );
}

function NavItem({ link }: { link: NavLink }) {
  const hasChildren = link.children && link.children.length > 0;
  const baseLinkClass =
    'text-base font-semibold text-fg uppercase tracking-wide hover:text-accent transition-colors duration-base ease-standard whitespace-nowrap';

  if (!hasChildren) {
    return (
      <Link href={link.href} className={baseLinkClass}>
        {link.label}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <Link
        href={link.href}
        className={`${baseLinkClass} inline-flex items-center gap-1`}
        aria-haspopup="true"
      >
        {link.label}
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </Link>
      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-opacity duration-base ease-standard z-dropdown">
        <ul className="bg-surface border-2 border-border rounded-xl py-3 min-w-[240px] shadow-md">
          {link.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block px-5 py-2 text-base font-medium text-fg hover:bg-bg-muted hover:text-accent transition-colors whitespace-nowrap"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
