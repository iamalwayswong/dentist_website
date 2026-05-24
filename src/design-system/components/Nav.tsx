import Link from 'next/link';
import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { MobileMenu } from './MobileMenu';

export type NavLink = { label: string; href: string };

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
            <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className="text-base font-semibold text-fg uppercase tracking-wide hover:text-accent transition-colors duration-base ease-standard whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <MobileMenu links={links} />
        </div>
      </Container>
    </header>
  );
}
