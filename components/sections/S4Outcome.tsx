import { Check } from "lucide-react"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { OUTCOMES, TESTIMONIALS } from "@/lib/data"

export function S4Outcome() {
  return (
    <section className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S4 / OUTCOME PROOF</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            สิ่งที่คุณจะทำได้หลังอ่านจบ
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[18px]">
          {/* Outcomes — left col */}
          <ScrollReveal>
            <div className="grid gap-3">
              {OUTCOMES.map((text, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border-2 border-text-primary/20 bg-[#eef8f4] p-[15px] font-bold"
                >
                  <Check size={20} className="text-success flex-none mt-0.5" strokeWidth={3} />
                  <span className="text-text-primary leading-[1.5]">{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Testimonials — right col */}
          <div className="grid gap-3">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <figure className="border-2 border-text-primary bg-text-primary text-white shadow-[3px_3px_0_rgba(26,26,26,0.45)] p-5 m-0">
                  <blockquote className="text-white/95 text-base leading-[1.55] mb-3">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-brand-primary font-black text-sm">
                    — {t.name}, {t.role}
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
