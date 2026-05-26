import { JsonLd } from '@/components/JsonLd';
import { faqSchema, type FAQItem } from '@/lib/schemas';
import { Heading } from './Heading';

type FAQProps = {
  items: FAQItem[];
  title?: string;
};

export function FAQ({ items, title = 'Frequently Asked Questions' }: FAQProps) {
  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <div className="flex flex-col gap-8">
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group border-2 border-border rounded-xl p-6 open:bg-bg-muted/40 transition-colors"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-xl text-fg">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="text-accent text-3xl leading-none transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-lg text-fg-muted leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </>
  );
}
