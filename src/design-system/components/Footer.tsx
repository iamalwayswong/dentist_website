import type { ReactNode } from 'react';
import Image from 'next/image';
import { Container } from './Container';

export type FooterSection = {
  title: string;
  links: { label: string; href: string }[];
};

type FooterInfoItem = {
  icon: string;
  label: string;
  lines: string[];
};

type FooterProps = {
  brand?: ReactNode;
  tagline?: string;
  sections?: FooterSection[];
  copyright?: string;
  logoBadgeSrc?: string;
  infoItems?: FooterInfoItem[];
};

export function Footer({
  brand,
  copyright,
  logoBadgeSrc,
  infoItems = [],
}: FooterProps) {
  return (
    <footer className="mt-auto">
      <div className="bg-bg py-12 sm:py-16">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Logo badge */}
            {logoBadgeSrc && (
              <div className="shrink-0">
                <Image
                  src={logoBadgeSrc}
                  alt="Main St Orthodontics badge"
                  width={150}
                  height={150}
                />
              </div>
            )}

            {/* Brand title + info items */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <p className="font-semibold text-lg text-fg">
                {brand ?? 'Brand'}
              </p>

              {infoItems.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                  {infoItems.map((item) => (
                    <div key={item.label} className="flex items-start gap-2">
                      <Image
                        src={item.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="mt-0.5"
                      />
                      <div>
                        <p className="font-semibold text-sm text-accent">
                          {item.label}
                        </p>
                        {item.lines.map((line) => (
                          <p
                            key={line}
                            className="font-semibold text-sm text-fg-subtle leading-6"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Dark bar */}
      <div className="bg-fg py-6">
        <Container>
          <p className="text-base sm:text-xl font-semibold text-center text-fg-inverse">
            {copyright}
          </p>
        </Container>
      </div>
    </footer>
  );
}
