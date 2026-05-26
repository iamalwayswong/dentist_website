import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { TreatmentPage } from '../_components/TreatmentPage';
import { treatments } from '@/site.config';

/* TODO: Replace with practice-specific copy */

const treatment = treatments.find((t) => t.slug === 'traditional-braces')!;

const PAGE_TITLE = treatment.name;
const PAGE_DESCRIPTION = treatment.shortDescription;

export const metadata: Metadata = buildMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: `/treatments/${treatment.slug}`,
});

export default function TraditionalBracesPage() {
  return (
    <TreatmentPage
      data={{
        ...treatment,
        intro:
          'Traditional metal and ceramic braces remain one of the most reliable, effective ways to correct a wide range of orthodontic issues. Modern brackets are smaller and more comfortable than ever.',
        steps: [
          {
            title: 'Consultation',
            description:
              'Free in-office exam, digital scans, and a custom treatment plan tailored to your bite, budget, and timeline.',
          },
          {
            title: 'Placement',
            description:
              'Brackets are bonded to each tooth in a single visit and connected with a flexible archwire that begins shifting teeth into alignment.',
          },
          {
            title: 'Adjustments',
            description:
              'Brief check-ins every 6–8 weeks to update wires and track progress. Most treatments are complete within 12–24 months.',
          },
        ],
        bestFor: [
          'Complex bite issues that require precise control',
          'Patients of all ages — kids, teens, adults',
          'Budget-conscious families looking for predictable results',
          'Cases where compliance with removable trays may be difficult',
        ],
        benefits: [
          {
            title: 'Proven results',
            description: 'Decades of clinical research and predictable outcomes.',
          },
          {
            title: 'Affordable',
            description: 'Often the lowest-cost option with flexible financing.',
          },
          {
            title: 'Ceramic option',
            description: 'Tooth-colored brackets that blend in for a discreet look.',
          },
          {
            title: 'No compliance worries',
            description: "They're on 24/7 — you can't lose or forget to wear them.",
          },
        ],
        faqs: [
          {
            question: 'How long does treatment with braces typically take?',
            answer:
              'Most patients complete treatment in 12–24 months, depending on the complexity of the case. Your orthodontist will give you a more precise estimate during your free consultation.',
          },
          {
            question: 'Do braces hurt?',
            answer:
              "You may feel mild soreness for a few days after the braces are placed or after adjustments. Over-the-counter pain relievers and soft foods help. Most patients adjust within a week.",
          },
          {
            question: 'Are there foods I need to avoid?',
            answer:
              'Yes — hard, sticky, and chewy foods (like popcorn kernels, hard candy, gum, and ice) can damage brackets and wires. We provide a complete list at your first appointment.',
          },
          {
            question: 'How much do braces cost?',
            answer:
              "Costs vary based on case complexity, but we offer transparent pricing, payment plans, and accept most insurance. We'll review all costs and options during your free consultation.",
          },
        ],
      }}
    />
  );
}
