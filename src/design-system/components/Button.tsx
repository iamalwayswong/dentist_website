import type { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cx } from '../utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantMap: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-fg hover:bg-primary-hover shadow-sm',
  secondary:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary/10',
  ghost:
    'bg-transparent text-fg border-2 border-fg hover:bg-fg/5',
};

const sizeMap: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-base',
  lg: 'px-8 py-4 text-xl',
};

const base =
  'inline-flex items-center justify-center font-semibold rounded-lg ' +
  'transition-colors duration-base ease-standard ' +
  'disabled:opacity-50 disabled:pointer-events-none';

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', size = 'md', className } = props;
  const classes = cx(base, variantMap[variant], sizeMap[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
