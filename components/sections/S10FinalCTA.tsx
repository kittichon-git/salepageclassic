import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { FINAL_CTA } from "@/lib/data"

export function S10FinalCTA() {
  return (
    <section className="py-20 md:py-30 border-t-2 border-text-primary">
      <Container>
        <ScrollReveal>
          <div className="relative max-w-5xl mx-auto rounded-2xl bg-brand-primary border-2 border-brand-primary-hover shadow-md overflow-hidden p-10 md:p-20">
            {/* Subtle dot texture overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-heading font-black leading-tight text-white mb-6">
                {FINAL_CTA.headline}
              </h2>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
                {FINAL_CTA.sub}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="line" size="lg" href={FINAL_CTA.ctaHref}>
                  {FINAL_CTA.ctaText}
                  <ArrowRight size={20} />
                </Button>

                <a
                  href="#offer"
                  className="text-white/90 hover:text-white underline underline-offset-4 font-medium transition-colors"
                >
                  ดูสารบัญอีกครั้ง
                </a>
              </div>

              <p className="text-white/80 text-sm mt-8">
                {FINAL_CTA.trust}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
