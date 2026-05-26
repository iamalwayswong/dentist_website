'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from './Nav';
import { cx } from '../utils';

type NavDropdownProps = {
  link: NavLink;
};

const triggerClass =
  'text-base font-semibold text-fg uppercase tracking-wide hover:text-accent transition-colors duration-base ease-standard whitespace-nowrap inline-flex items-center gap-1';

export function NavDropdown({ link }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click and Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={link.href}
        className={triggerClass}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(false)}
        onFocus={() => setOpen(true)}
      >
        {link.label}
        <span aria-hidden="true" className="text-xs">
          ▾
        </span>
      </Link>
      <div
        className={cx(
          'absolute left-0 top-full pt-2 z-dropdown transition-opacity duration-base ease-standard',
          open
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none',
        )}
      >
        <ul className="bg-surface border-2 border-border rounded-xl py-3 min-w-[240px] shadow-md">
          {link.children!.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
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
