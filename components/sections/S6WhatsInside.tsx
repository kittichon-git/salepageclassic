import { BookOpen, Gift, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { MODULES, BONUS, HERO } from "@/lib/data"

export function S6WhatsInside() {
  return (
    <section className="py-20 md:py-30">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S6 / WHAT&apos;S INSIDE</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              ข้างในมีอะไร — 7 ภาค 24 บท
            </h2>
          </div>
        </ScrollReveal>

        {/* 7 Module cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {MODULES.map((m, i) => (
            <ScrollReveal key={m.n} delay={i * 0.06}>
              <Card className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-primary-soft flex items-center justify-center shrink-0">
                    <BookOpen size={16} className="text-brand-primary" />
                  </span>
                  <span className="font-mono text-sm font-semibold text-brand-primary">
                    {m.n}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{m.title}</h3>
                <p className="text-text-secondary leading-relaxed">{m.body}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Bonus callout */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto rounded-2xl bg-brand-primary/10 border-2 border-brand-primary/30 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-9 h-9 rounded-full bg-brand-primary-soft flex items-center justify-center shrink-0">
                <Gift size={20} className="text-brand-primary" />
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">{BONUS.label}</h3>
            </div>
            <ul className="space-y-2.5">
              {BONUS.items.map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-text-primary">
                  <span className="text-brand-primary font-bold mt-0.5 shrink-0">+</span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Inline CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button variant="line" size="lg" href={HERO.ctaHref}>
              อ่านบทนำ + บท 1 ฟรีใน LINE
              <ArrowRight size={20} />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
