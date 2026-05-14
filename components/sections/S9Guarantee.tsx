import { ShieldCheck } from "lucide-react"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { GUARANTEE } from "@/lib/data"

export function S9Guarantee() {
  return (
    <section className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S9 / RISK REVERSAL</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            การันตีความเสี่ยงเป็นศูนย์
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex items-center gap-5 border-2 border-text-primary bg-[#eef8f4] shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5 md:p-6">
            <div className="relative shrink-0">
              <ShieldCheck size={36} className="text-success" strokeWidth={2} />
              <span className="absolute -bottom-2 -right-2 bg-bg-card text-brand-primary text-[10px] font-black border border-brand-primary/30 px-1.5 py-0.5 leading-none">
                {GUARANTEE.days}วัน
              </span>
            </div>
            <p className="text-xl md:text-2xl font-black text-text-primary leading-[1.5]">
              {GUARANTEE.headline}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-5 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
            {GUARANTEE.body}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
