import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { OFFER, PRICE, HERO } from "@/lib/data"

const fmt = (v: number) => v.toLocaleString("th-TH")

export function S8OfferStack() {
  return (
    <section id="offer" className="relative mb-7 border-2 border-text-primary bg-bg-card shadow-[5px_5px_0_rgba(26,26,26,0.50)]">
      <SectionEyebrow>S8 / OFFER STACK</SectionEyebrow>
      <div className="px-7 md:px-10 pt-12 pb-8 md:pb-10">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
            ทั้งหมดนี้ในราคาเดียว
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-[18px] items-start">
          {/* Offer visual — placeholder */}
          <ScrollReveal>
            <div className="aspect-[4/3] border-2 border-text-primary bg-bg-surface shadow-[3px_3px_0_rgba(26,26,26,0.45)] flex flex-col items-center justify-center gap-3 p-6">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted text-center">
                Offer Stack<br />Value Cards<br />Illustration
              </span>
            </div>
          </ScrollReveal>

          {/* Price card */}
          <ScrollReveal delay={0.1}>
            <div className="border-2 border-text-primary bg-bg-card shadow-[3px_3px_0_rgba(26,26,26,0.40)] p-5 md:p-6">
              {/* Offer list */}
              {OFFER.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between gap-3 py-3 border-b border-dashed border-text-primary/25 font-bold"
                >
                  <span>{item.label}</span>
                  <strong className="font-mono shrink-0">฿{fmt(item.value)}</strong>
                </div>
              ))}

              {/* Total */}
              <div className="flex justify-between gap-3 py-3 text-xl font-bold border-b-2 border-text-primary">
                <span>รวมมูลค่า</span>
                <strong className="font-mono">฿{fmt(PRICE.total)}</strong>
              </div>

              {/* Anchor price */}
              <p className="mt-4 font-black text-sm text-text-secondary">
                ราคา anchor:{" "}
                <s className="font-mono">฿{fmt(PRICE.anchor)}</s>
              </p>

              {/* Today price */}
              <div className="flex items-baseline gap-3 mt-2 mb-4">
                <span className="bg-brand-primary text-white font-black text-sm px-2 py-1">วันนี้</span>
                <strong className="font-mono font-black text-[clamp(52px,8vw,72px)] leading-none text-text-primary">
                  ฿{fmt(PRICE.today)}
                </strong>
              </div>

              <p className="text-brand-primary font-bold text-sm mb-5">
                จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่
              </p>

              <Button variant="line" size="lg" href={HERO.ctaHref} className="w-full justify-center">
                จ่าย ฿{fmt(PRICE.today)} ผ่าน LINE
                <ArrowRight size={20} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
