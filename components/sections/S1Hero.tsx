import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { HERO } from "@/lib/data"

export function S1Hero() {
  const line1 = HERO.headline[0]
  const line2 = HERO.headline[1]
  const highlight = HERO.highlight
  const parts = line2.split(highlight)

  return (
    <section className="py-20 md:py-30">
      <Container>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto rounded-2xl bg-bg-card border-2 border-border-strong shadow-sm p-8 md:p-16 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] tracking-tight mb-6">
              <span className="block">{line1}</span>
              <span className="block">
                {parts[0]}
                <span className="italic text-brand-primary">
                  {highlight}
                </span>
                {parts[1] ?? ""}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              {HERO.sub}
            </p>

            <div className="flex flex-col items-center gap-4">
              <Button variant="line" size="lg" href={HERO.ctaHref}>
                {HERO.ctaText}
                <ArrowRight size={20} />
              </Button>

              <p className="text-sm text-text-muted">
                {HERO.trust}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
