import { Check, X } from "lucide-react"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { TRUST_FIT } from "@/lib/data"

export function S5TrustFilter() {
  return (
    <section className="relative mb-7 border border-border-default bg-bg-card shadow-soft">
      <SectionEyebrow>S5 / TRUST FILTER</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-[36px] font-[800] leading-[1.2] mb-8">
            เหมาะกับใคร และไม่เหมาะกับใคร
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {/* For */}
          <ScrollReveal>
            <div className="h-full border border-border-default bg-[#ecf8f3] shadow-soft p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4">เหมาะกับคุณ ถ้า</h3>
              <ul className="space-y-3">
                {TRUST_FIT.for.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold">
                    <Check size={18} className="shrink-0 mt-0.5 text-success" strokeWidth={3} />
                    <span className="text-text-primary">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Not For */}
          <ScrollReveal delay={0.1}>
            <div className="h-full border border-border-default bg-[#fff3ec] shadow-soft p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-4">ไม่เหมาะ ถ้า</h3>
              <ul className="space-y-3">
                {TRUST_FIT.notFor.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold">
                    <X size={18} className="shrink-0 mt-0.5 text-danger" strokeWidth={3} />
                    <span className="text-text-primary">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
