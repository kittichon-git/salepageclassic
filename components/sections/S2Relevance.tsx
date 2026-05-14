import { Target } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { RELEVANCE } from "@/lib/data"

export function S2Relevance() {
  return (
    <section className="py-20 md:py-30 bg-bg-surface border-t-2 border-text-primary">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionEyebrow>S2 / RELEVANCE</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              หน้านี้สำหรับคุณ ถ้า...
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {RELEVANCE.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="h-full rounded-xl bg-bg-card border-2 border-text-primary p-5 md:p-6">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-primary/15 text-brand-primary mb-3">
                  <Target size={18} strokeWidth={2.5} />
                </div>
                <p className="text-text-primary leading-relaxed text-sm md:text-base">
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
