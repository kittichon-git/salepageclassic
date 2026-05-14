import { Target } from "lucide-react"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { RELEVANCE } from "@/lib/data"

export function S2Relevance() {
  return (
    <section className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S2 / RELEVANCE</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            หน้านี้สำหรับคุณ ถ้า...
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {RELEVANCE.map((text, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="h-full border-2 border-text-primary bg-bg-card shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5">
                <div className="inline-flex items-center justify-center w-9 h-9 bg-brand-primary/15 text-brand-primary mb-3">
                  <Target size={22} strokeWidth={2.5} />
                </div>
                <p className="text-text-primary leading-[1.5] text-sm md:text-base font-bold">
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
