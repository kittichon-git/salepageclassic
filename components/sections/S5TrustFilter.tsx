import { Check, X } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { TRUST_FIT } from "@/lib/data"

export function S5TrustFilter() {
  return (
    <section className="py-20 md:py-30 bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S5 / TRUST FILTER</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              เหมาะกับใคร และไม่เหมาะกับใคร
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* For */}
          <ScrollReveal>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Check size={18} strokeWidth={3} className="text-green-700" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold">เหมาะกับคุณ ถ้า</h3>
              </div>
              <ul className="space-y-3">
                {TRUST_FIT.for.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={18} className="shrink-0 mt-0.5 text-success" />
                    <span className="text-text-primary">{text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>

          {/* Not For */}
          <ScrollReveal delay={0.1}>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <X size={18} strokeWidth={3} className="text-red-700" />
                </span>
                <h3 className="text-xl md:text-2xl font-bold">ไม่เหมาะ ถ้า</h3>
              </div>
              <ul className="space-y-3">
                {TRUST_FIT.notFor.map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X size={18} className="shrink-0 mt-0.5 text-danger" />
                    <span className="text-text-primary">{text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  )
}
