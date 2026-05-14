import { Check, Quote } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { OUTCOMES, TESTIMONIALS } from "@/lib/data"

export function S4Outcome() {
  return (
    <section className="py-20 md:py-30 border-t-2 border-text-primary">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S4 / OUTCOME PROOF</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              สิ่งที่คุณจะทำได้หลังอ่านจบ
            </h2>
          </div>
        </ScrollReveal>

        {/* 4 Outcomes — wrapped in card */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mb-20 rounded-2xl bg-bg-card border-2 border-text-primary shadow-sm p-8 md:p-12">
            <ul className="space-y-5">
              {OUTCOMES.map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-brand-primary-soft flex items-center justify-center">
                    <Check size={14} strokeWidth={3} className="text-brand-primary" />
                  </span>
                  <span className="text-lg text-text-primary leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal>
          <div className="max-w-md mx-auto mb-12 text-center">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-muted">
              ลูกค้าจริงเล่าให้ฟัง
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full flex flex-col">
                <Quote size={28} className="text-brand-primary mb-4 shrink-0" />
                <blockquote className="text-text-primary text-base md:text-lg leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="pt-4 border-t border-border-subtle">
                  <p className="font-semibold text-text-primary">{t.name}</p>
                  <p className="text-sm text-text-muted">{t.role}</p>
                </footer>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
