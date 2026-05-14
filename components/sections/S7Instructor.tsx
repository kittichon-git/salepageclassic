import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { INSTRUCTOR } from "@/lib/data"

export function S7Instructor() {
  return (
    <section className="py-20 md:py-30 bg-bg-surface">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S7 / INSTRUCTOR</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              ใครเขียน — และทำไมต้องเชื่อ
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Card className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Avatar initials */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-heading font-black text-3xl md:text-4xl shadow-md">
                  {INSTRUCTOR.initials}
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-5">
                  {INSTRUCTOR.name}
                </h3>

                <div className="space-y-4">
                  {INSTRUCTOR.paras.map((p, i) => (
                    <p key={i} className="text-text-secondary leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                {INSTRUCTOR.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                    {INSTRUCTOR.tags.map((t, i) => (
                      <Badge key={i}>{t}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  )
}
