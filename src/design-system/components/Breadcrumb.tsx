import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, type Crumb } from '@/lib/schemas';
import { Container } from './Container';

type BreadcrumbProps = {
  crumbs: Crumb[];
};

export function Breadcrumb({ crumbs }: BreadcrumbProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb" className="bg-bg-muted py-3">
        <Container>
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <li key={c.href} className="flex items-center gap-2">
                  {isLast ? (
                    <span
                      aria-current="page"
                      className="text-fg-muted font-medium"
                    >
                      {c.label}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={c.href}
                        className="text-accent hover:text-fg transition-colors"
                      >
                        {c.label}
                      </Link>
                      <span aria-hidden="true" className="text-fg-subtle">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </Container>
      </nav>
    </>
  );
}
