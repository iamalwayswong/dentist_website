import Image from 'next/image';
import { Heading } from './Heading';
import { Text } from './Text';

type CaseImage = {
  src: string;
  alt: string;
};

type BeforeAfterCaseProps = {
  patientLabel: string;
  treatment: string;
  treatedBy?: string;
  beforeSmile: CaseImage;
  beforeDetail: CaseImage;
  afterSmile: CaseImage;
  afterDetail: CaseImage;
};

export function BeforeAfterCase({
  patientLabel,
  treatment,
  treatedBy,
  beforeSmile,
  beforeDetail,
  afterSmile,
  afterDetail,
}: BeforeAfterCaseProps) {
  return (
    <article className="border-2 border-border rounded-xl p-6 flex flex-col gap-6">
      <header className="flex flex-col gap-1">
        <Heading as="h3" size="md">
          {patientLabel}
        </Heading>
        <Text size="sm" tone="accent" weight="semibold">
          {treatment}
          {treatedBy && ` · Treated by ${treatedBy}`}
        </Text>
      </header>

      <div className="grid grid-cols-2 gap-4">
        <figure className="flex flex-col gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={beforeSmile.src}
              alt={beforeSmile.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute top-2 left-2 bg-fg text-fg-inverse text-xs font-semibold px-2 py-1 rounded">
              BEFORE
            </span>
          </div>
          <figcaption className="text-xs text-fg-subtle text-center">Smile</figcaption>
        </figure>

        <figure className="flex flex-col gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={afterSmile.src}
              alt={afterSmile.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute top-2 left-2 bg-accent text-fg-inverse text-xs font-semibold px-2 py-1 rounded">
              AFTER
            </span>
          </div>
          <figcaption className="text-xs text-fg-subtle text-center">Smile</figcaption>
        </figure>

        <figure className="flex flex-col gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={beforeDetail.src}
              alt={beforeDetail.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute top-2 left-2 bg-fg text-fg-inverse text-xs font-semibold px-2 py-1 rounded">
              BEFORE
            </span>
          </div>
          <figcaption className="text-xs text-fg-subtle text-center">Detail</figcaption>
        </figure>

        <figure className="flex flex-col gap-2">
          <div className="relative aspect-square rounded-xl overflow-hidden">
            <Image
              src={afterDetail.src}
              alt={afterDetail.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <span className="absolute top-2 left-2 bg-accent text-fg-inverse text-xs font-semibold px-2 py-1 rounded">
              AFTER
            </span>
          </div>
          <figcaption className="text-xs text-fg-subtle text-center">Detail</figcaption>
        </figure>
      </div>
    </article>
  );
}
