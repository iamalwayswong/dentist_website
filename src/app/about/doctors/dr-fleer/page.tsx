import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { DoctorPage } from '../_components/DoctorPage';
import { doctors } from '@/site.config';

const doctor = doctors.find((d) => d.slug === 'dr-fleer')!;

export const metadata: Metadata = buildMetadata({
  title: `Meet ${doctor.name}`,
  description: doctor.bio,
  path: `/about/doctors/${doctor.slug}`,
});

export default function DrFleerPage() {
  return <DoctorPage data={doctor} />;
}
