import { Plus } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { FAQ } from "@/lib/data"

export function S9FAQ() {
  return (
    <section id="faq" className="py-20 md:py-30 bg-bg-surface border-t-2 border-text-primary">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              คำถามที่พบบ่อย
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <details className="group bg-bg-card border-2 border-text-primary rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 md:p-6 cursor-pointer list-none select-none">
                  <span className="font-semibold text-text-primary text-base md:text-lg pr-2">
                    {item.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-brand-primary-soft flex items-center justify-center transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} strokeWidth={2.5} className="text-brand-primary" />
                  </span>
                </summary>
                <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                  <p className="text-text-secondary leading-relaxed border-t border-border-subtle pt-4">
                    {item.a}
                  </p>
                </div>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
