import { ChevronDown } from "lucide-react"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { FAQ } from "@/lib/data"

export function S9FAQ() {
  return (
    <section id="faq" className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>FAQ</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-[36px] font-[800] leading-[1.2] mb-8">
            คำถามที่พบบ่อย
          </h2>
        </ScrollReveal>

        <div className="grid gap-2.5">
          {FAQ.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <details className="group border-2 border-text-primary bg-bg-card shadow-[2px_2px_0_rgba(26,26,26,0.45)]">
                <summary className="flex items-center justify-between gap-4 px-4 py-4 cursor-pointer list-none select-none font-black">
                  <span className="text-text-primary text-base md:text-lg pr-2">{item.q}</span>
                  <ChevronDown
                    size={18}
                    className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>
                <p className="px-4 pb-4 text-text-secondary leading-[1.65]">{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
