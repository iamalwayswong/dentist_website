import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Section } from './Section';
import { Text } from './Text';

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  tone?: 'default' | 'muted' | 'accent';
};

export function CTASection({
  title = 'Ready for a healthier smile?',
  description = 'Your first consultation is completely free. Reach out and we’ll find a time that works for your schedule.',
  primaryHref = '/new-patients/free-consult',
  primaryLabel = 'Book my free consultation',
  secondaryHref,
  secondaryLabel,
  tone = 'accent',
}: CTASectionProps) {
  return (
    <Section spacing="lg" tone={tone}>
      <Container size="narrow">
        <div className="flex flex-col items-center text-center gap-6">
          <Heading as="h2" size="xl">
            {title}
          </Heading>
          <Text size="xl" tone="muted">
            {description}
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button href={secondaryHref} size="lg" variant="secondary">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
