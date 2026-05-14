import { X } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { RELEVANCE } from "@/lib/data"

export function S2Relevance() {
  return (
    <section className="py-20 md:py-30 bg-[var(--color-bg-surface)]">
      <Container>
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <SectionEyebrow>S2 / RELEVANCE</SectionEyebrow>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-10">
              หน้านี้สำหรับคุณ ถ้า...
            </h2>

            <ul className="space-y-5">
              {RELEVANCE.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                    <X size={14} strokeWidth={3} className="text-red-600" />
                  </span>
                  <span className="text-lg text-[var(--color-text-primary)] leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
