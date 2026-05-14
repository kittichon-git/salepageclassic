import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { MECHANISM, MECHANISM_CLOSING } from "@/lib/data"

const ICONS = ["🎯", "🛡️", "💬"]

export function S3Mechanism() {
  return (
    <section className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S3 / MECHANISM</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            สูตรนี้ทำงานยังไง — 3 ขั้น
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[18px] items-start">
          {/* Steps — left col */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {MECHANISM.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.1}>
                <div className="border-2 border-text-primary bg-bg-card shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5">
                  <span className="inline-flex bg-brand-primary text-white font-mono font-black text-xs px-2 py-1 mb-3">
                    {s.n}
                  </span>
                  <div className="text-2xl mb-2">{ICONS[i]}</div>
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-text-secondary leading-[1.55] text-sm">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Framework sidebar — right col */}
          <ScrollReveal delay={0.25}>
            <div className="border-2 border-text-primary bg-bg-surface shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5 flex flex-col items-center justify-center min-h-[180px] gap-4">
              <div className="w-full aspect-video border-2 border-text-primary bg-bg-card flex items-center justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted text-center p-4">
                  Framework<br />Diagram<br />Placeholder
                </span>
              </div>
              <p className="text-base font-black text-brand-primary text-center leading-tight">
                {MECHANISM_CLOSING}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
