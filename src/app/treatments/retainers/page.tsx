import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { TreatmentPage } from '../_components/TreatmentPage';
import { treatments } from '@/site.config';

/* TODO: Replace with practice-specific copy */

const treatment = treatments.find((t) => t.slug === 'retainers')!;

const PAGE_TITLE = treatment.name;
const PAGE_DESCRIPTION = treatment.shortDescription;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: `/treatments/${treatment.slug}`,
});

export default function RetainersPage() {
  return (
    <TreatmentPage
      data={{
        ...treatment,
        intro:
          "Retainers keep your teeth in their new positions after orthodontic treatment. We make custom-fit retainers in-office so your smile stays beautiful for years to come.",
        steps: [
          {
            title: 'Final scan',
            description:
              'After your braces or aligners come off, we take a final digital scan to capture your new bite.',
          },
          {
            title: 'Custom fabrication',
            description:
              'Your retainers are crafted to fit your exact teeth — either clear (Essix) or traditional (Hawley) style based on your preference.',
          },
          {
            title: 'Long-term wear',
            description:
              'Wear nightly for life to maintain results. We offer free check-ins to confirm fit and refit if anything changes.',
          },
        ],
        bestFor: [
          'Patients finishing orthodontic treatment',
          'Anyone with previous orthodontic work whose retainers are worn or lost',
          'Patients wanting to preserve a naturally beautiful smile',
        ],
        benefits: [
          {
            title: 'Custom fit',
            description: 'Made from a precise digital scan of your final bite.',
          },
          {
            title: 'Discreet',
            description: 'Clear options are practically invisible.',
          },
          {
            title: 'Durable',
            description: 'Most retainers last 5–10 years with proper care.',
          },
          {
            title: 'Comfortable',
            description: 'Designed to be worn while you sleep.',
          },
        ],
        faqs: [
          {
            question: 'How often do I need to wear my retainer?',
            answer:
              "For the first few months after treatment, full-time wear (except eating and brushing). After that, nightly wear is sufficient — for life. Teeth naturally shift over time without retention.",
          },
          {
            question: 'What if I lose my retainer?',
            answer:
              "Contact us right away. The longer you go without a retainer, the more your teeth can shift. We can usually make a replacement quickly if we have a recent scan on file.",
          },
          {
            question: 'How do I clean my retainer?',
            answer:
              'Rinse with cool water after each wear. Brush gently with a soft toothbrush and mild soap. Avoid hot water (it can warp the plastic) and harsh toothpaste.',
          },
          {
            question: 'Clear or traditional — which is better?',
            answer:
              "It's a personal preference. Clear retainers are nearly invisible but slightly less durable. Traditional Hawley retainers are more durable and adjustable but more visible. We'll help you decide.",
          },
        ],
      }}
    />
  );
}
