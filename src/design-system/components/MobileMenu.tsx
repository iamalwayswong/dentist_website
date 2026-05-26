'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLink } from './Nav';
import { cx } from '../utils';

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  // Lock body scroll while open.
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

  // Auto-close on route change.
  useEffect(() => {
    setIsOpen(false);
    setExpanded({});
  }, [pathname]);

  const close = () => {
    setIsOpen(false);
    setExpanded({});
  };

  return (
    <div className="lg:hidden">
      {/* Hamburger (visible when menu is closed). */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-label="Open menu"
        className={cx(
          'flex flex-col justify-center items-center w-10 h-10 gap-1.5',
          isOpen && 'invisible',
        )}
      >
        <span className="block h-0.5 w-6 bg-fg" />
        <span className="block h-0.5 w-6 bg-fg" />
        <span className="block h-0.5 w-6 bg-fg" />
      </button>

      {/* Close button: line-style X, fixed-positioned with safe edge padding
          so the rotated lines can't be clipped at the viewport edge. */}
      {isOpen && (
        <button
          type="button"
          onClick={close}
          aria-label="Close menu"
          className="fixed top-6 right-4 z-modal w-10 h-10"
        >
          <span className="absolute top-1/2 left-1/2 h-0.5 w-6 bg-fg -translate-x-1/2 -translate-y-1/2 rotate-45" />
          <span className="absolute top-1/2 left-1/2 h-0.5 w-6 bg-fg -translate-x-1/2 -translate-y-1/2 -rotate-45" />
        </button>
      )}

      {/* Overlay */}
      <div
        className={cx(
          'fixed inset-0 z-overlay bg-bg-accent overflow-y-auto',
          'transition-opacity duration-slow ease-standard',
          isOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none',
        )}
      >
        <div className="px-6 pt-24 pb-12 max-w-md mx-auto">
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isExpanded = expanded[link.label] ?? false;

              if (!hasChildren) {
                return (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      onClick={close}
                      className="block py-3 text-xl font-semibold text-fg uppercase tracking-wide hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={link.href + link.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [link.label]: !prev[link.label],
                      }))
                    }
                    aria-expanded={isExpanded}
                    className="flex items-center justify-between py-3 text-xl font-semibold text-fg uppercase tracking-wide hover:text-accent"
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cx(
                        'text-accent text-2xl transition-transform',
                        isExpanded && 'rotate-45',
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cx(
                      'overflow-hidden transition-all duration-base ease-standard',
                      isExpanded ? 'max-h-[600px]' : 'max-h-0',
                    )}
                  >
                    <ul className="flex flex-col gap-1 pl-4 pb-2">
                      <li>
                        <Link
                          href={link.href}
                          onClick={close}
                          className="block py-2 text-base font-medium text-accent"
                        >
                          {link.label} Overview
                        </Link>
                      </li>
                      {link.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={close}
                            className="block py-2 text-base font-medium text-fg-muted hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
