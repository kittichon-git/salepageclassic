import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { INSTRUCTOR } from "@/lib/data"

export function S7Instructor() {
  return (
    <section className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S7 / INSTRUCTOR</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-[36px] font-[800] leading-[1.2] mb-8">
            ใครเขียน — และทำไมต้องเชื่อ
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border-2 border-text-primary bg-bg-card shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5 md:p-6 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 items-center">
            {/* Portrait */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                aria-label={INSTRUCTOR.name}
                className="w-[150px] h-[150px] border-2 border-text-primary bg-brand-primary text-white flex items-center justify-center font-heading font-black text-5xl shadow-[3px_3px_0_rgba(218,119,86,0.85)]"
              >
                {INSTRUCTOR.initials}
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xl md:text-2xl font-black text-text-primary leading-[1.45] mb-3">
                {INSTRUCTOR.paras[0]}
              </p>
              {INSTRUCTOR.paras.slice(1).map((p, i) => (
                <p key={i} className="text-text-secondary leading-[1.7] mb-2">{p}</p>
              ))}

              {INSTRUCTOR.tags.length > 0 && (
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {INSTRUCTOR.tags.map((t, i) => (
                    <span
                      key={i}
                      className="border-2 border-text-primary bg-[#e8c56d] text-text-primary font-black text-sm px-2.5 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
