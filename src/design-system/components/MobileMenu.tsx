'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { NavLink } from './Nav';
import { cx } from '../utils';

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="relative z-modal flex flex-col justify-center items-center w-10 h-10 gap-1.5"
      >
        <span
          className={cx(
            'block h-0.5 w-6 bg-fg transition-transform duration-base ease-standard',
            isOpen && 'translate-y-[4px] rotate-45',
          )}
        />
        <span
          className={cx(
            'block h-0.5 w-6 bg-fg transition-opacity duration-base ease-standard',
            isOpen && 'opacity-0',
          )}
        />
        <span
          className={cx(
            'block h-0.5 w-6 bg-fg transition-transform duration-base ease-standard',
            isOpen && '-translate-y-[4px] -rotate-45',
          )}
        />
      </button>

      <div
        className={cx(
          'fixed inset-0 z-overlay bg-bg-accent flex flex-col items-center justify-center gap-8',
          'transition-opacity duration-slow ease-standard',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none',
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href + link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-fg uppercase tracking-wide hover:text-accent transition-colors duration-base ease-standard"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
