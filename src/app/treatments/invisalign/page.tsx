import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { TreatmentPage } from '../_components/TreatmentPage';
import { treatments } from '@/site.config';

/* TODO: Replace with practice-specific copy */

const treatment = treatments.find((t) => t.slug === 'invisalign')!;

const PAGE_TITLE = treatment.name;
const PAGE_DESCRIPTION = treatment.shortDescription;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: `/treatments/${treatment.slug}`,
});

export default function InvisalignPage() {
  return (
    <TreatmentPage
      data={{
        ...treatment,
        intro:
          'Invisalign uses a series of clear, removable aligners to gradually shift your teeth into place. No metal brackets, no wires, no awkward photos — just a confident smile.',
        steps: [
          {
            title: 'Digital scan',
            description:
              "A quick, comfortable 3D scan of your teeth — no goopy impressions. We'll show you a preview of your future smile.",
          },
          {
            title: 'Custom aligners',
            description:
              'You receive a series of aligners, each worn about 1–2 weeks. Pop them in, take them out for meals and brushing.',
          },
          {
            title: 'Check-ins',
            description:
              'Short progress visits every 6–8 weeks. Many patients complete treatment in 6–18 months.',
          },
        ],
        bestFor: [
          'Adults who want a discreet option',
          'Teens with busy schedules',
          'Mild to moderate alignment cases',
          'Anyone with an active lifestyle (sports, performing arts)',
        ],
        benefits: [
          {
            title: 'Virtually invisible',
            description: 'Clear trays are barely noticeable in everyday life.',
          },
          {
            title: 'Removable',
            description: 'Take them out to eat, brush, or for special occasions.',
          },
          {
            title: 'Comfortable',
            description: 'Smooth plastic — no brackets or wires to irritate your mouth.',
          },
          {
            title: 'Fewer visits',
            description: 'Most check-ins are quick, and some can be done virtually.',
          },
        ],
        faqs: [
          {
            question: 'How long do I wear my aligners each day?',
            answer:
              '20–22 hours per day for best results. You only remove them to eat, drink (anything but water), brush, and floss.',
          },
          {
            question: 'Is Invisalign as effective as braces?',
            answer:
              'For most mild-to-moderate cases, yes. Some complex bite issues are still better addressed with braces. Your orthodontist will recommend the best option during your free consultation.',
          },
          {
            question: 'Will Invisalign affect my speech?',
            answer:
              'You may notice a slight lisp for the first few days as your tongue adjusts. It usually disappears within a week.',
          },
          {
            question: 'Can teens use Invisalign?',
            answer:
              'Absolutely. Invisalign Teen includes compliance indicators that change color so parents and orthodontists can confirm aligners are being worn the recommended hours.',
          },
        ],
      }}
    />
  );
}
