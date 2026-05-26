import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { TreatmentPage } from '../_components/TreatmentPage';
import { treatments } from '@/site.config';

/* TODO: Replace with practice-specific copy */

const treatment = treatments.find((t) => t.slug === 'teen-orthodontics')!;

const PAGE_TITLE = treatment.name;
const PAGE_DESCRIPTION = treatment.shortDescription;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: `/treatments/${treatment.slug}`,
});

export default function TeenOrthodonticsPage() {
  return (
    <TreatmentPage
      data={{
        ...treatment,
        intro:
          "Teens lead busy lives — school, sports, social, screens. Our teen-specific treatment plans are designed around that reality, with options that fit any lifestyle.",
        steps: [
          {
            title: 'Family consultation',
            description:
              "Parents and teens meet with the orthodontist together. We discuss timeline, cost, and options — braces, Invisalign Teen, or a combination.",
          },
          {
            title: 'Personalized plan',
            description:
              'Treatment is calibrated to growth stage. Catching alignment issues early often means shorter treatment and better long-term outcomes.',
          },
          {
            title: 'Flexible check-ins',
            description:
              "Appointments scheduled around school, sports practice, and family schedules. After-school and Saturday slots available.",
          },
        ],
        bestFor: [
          'Teens with crowding, spacing, or bite issues',
          'Active athletes who need protective options',
          'Families balancing school and extracurriculars',
          'Self-conscious teens who want discreet options',
        ],
        benefits: [
          {
            title: 'Lifestyle-friendly',
            description: 'Options for sports, music, and busy after-school schedules.',
          },
          {
            title: 'Compliance tracking',
            description: 'Invisalign Teen includes indicators so parents can confirm wear time.',
          },
          {
            title: 'Confidence boost',
            description: 'A great smile during the most photographed years of life.',
          },
          {
            title: 'Better long-term outcomes',
            description: 'Early treatment can prevent more complex issues later.',
          },
        ],
        faqs: [
          {
            question: 'What is the ideal age for a first orthodontic visit?',
            answer:
              'The American Association of Orthodontists recommends a first evaluation by age 7. Treatment typically begins between ages 9–14, but every case is different. Free consultations are available at any age.',
          },
          {
            question: 'Can my teen play sports with braces?',
            answer:
              'Yes — we provide custom mouthguards that fit comfortably over braces. Most teens continue all sports throughout treatment.',
          },
          {
            question: 'Are braces or Invisalign better for teens?',
            answer:
              "It depends on the case and the teen. Braces require no compliance, while Invisalign Teen offers discreet appearance but needs 20–22 hours of daily wear. We'll recommend the right option after a free consultation.",
          },
          {
            question: 'How do you handle teen orthodontic emergencies?',
            answer:
              'We offer urgent appointments for broken brackets, lost retainers, or discomfort. Most issues can be resolved same-day.',
          },
        ],
      }}
    />
  );
}
