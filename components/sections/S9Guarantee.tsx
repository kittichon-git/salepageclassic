import { ShieldCheck } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { GUARANTEE } from "@/lib/data"

export function S9Guarantee() {
  return (
    <section className="py-20 md:py-30">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S9 / RISK REVERSAL</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              การันตีความเสี่ยงเป็นศูนย์
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto rounded-3xl bg-brand-primary/10 border-2 border-brand-primary/30 p-8 md:p-12 text-center">
            {/* Days badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-primary text-white mb-6 shadow-md relative">
              <ShieldCheck size={36} strokeWidth={2} />
              <span className="absolute -bottom-2 -right-2 bg-white text-brand-primary text-xs font-black rounded-full px-2 py-0.5 border border-brand-primary/30 shadow-sm">
                {GUARANTEE.days}วัน
              </span>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
              {GUARANTEE.headline}
            </h3>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              {GUARANTEE.body}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
