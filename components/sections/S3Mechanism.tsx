import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { MECHANISM, MECHANISM_CLOSING } from "@/lib/data"

export function S3Mechanism() {
  return (
    <section className="py-20 md:py-30">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S3 / MECHANISM</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              สูตรนี้ทำงานยังไง — 3 ขั้น
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MECHANISM.map((s, i) => (
            <ScrollReveal key={s.n} delay={i * 0.1}>
              <Card className="h-full">
                <div className="font-mono text-4xl md:text-5xl font-bold text-[var(--color-brand-primary)] mb-4">
                  {s.n}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {s.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {s.body}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <blockquote className="mt-12 max-w-3xl mx-auto text-center text-xl md:text-2xl italic text-[var(--color-text-secondary)] border-l-4 border-[var(--color-brand-primary)] pl-6 md:border-l-0 md:pl-0">
            &ldquo;{MECHANISM_CLOSING}&rdquo;
          </blockquote>
        </ScrollReveal>
      </Container>
    </section>
  )
}
