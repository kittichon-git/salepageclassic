import { Check, ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/Container"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { SectionEyebrow } from "@/components/ui/SectionEyebrow"
import { ScrollReveal } from "@/components/shared/ScrollReveal"
import { OFFER, PRICE, HERO } from "@/lib/data"

const fmt = (v: number) => v.toLocaleString("th-TH")

export function S8OfferStack() {
  return (
    <section id="offer" className="py-20 md:py-30 border-t-2 border-text-primary">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionEyebrow>S8 / OFFER STACK</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              สิ่งที่คุณจะได้ทั้งหมด
            </h2>
            <p className="text-text-secondary text-lg">
              มูลค่ารวมจริง · ราคาเปิดตัวจำกัด
            </p>
          </div>
        </ScrollReveal>

        {/* Value Stack Table */}
        <ScrollReveal>
          <Card className="max-w-3xl mx-auto p-0 overflow-hidden">
            <ul>
              {OFFER.map((item, i) => (
                <li
                  key={i}
                  className={
                    "flex items-center gap-4 p-5 md:p-6" +
                    (i < OFFER.length - 1 ? " border-b border-border-subtle" : "")
                  }
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-primary-soft flex items-center justify-center">
                    <Check size={13} strokeWidth={3} className="text-brand-primary" />
                  </span>
                  <span className="flex-1 text-text-primary">{item.label}</span>
                  <span className="font-mono font-semibold text-text-secondary text-sm shrink-0">
                    ฿{fmt(item.value)}
                  </span>
                </li>
              ))}
            </ul>

            {/* Total value row */}
            <div className="flex items-center gap-4 p-5 md:p-6 bg-bg-surface border-t-2 border-border-strong">
              <span className="flex-1 font-bold text-text-primary">มูลค่ารวมทั้งหมด</span>
              <span className="font-mono font-bold text-text-primary">฿{fmt(PRICE.total)}</span>
            </div>
          </Card>
        </ScrollReveal>

        {/* Price block */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-text-muted mb-4">
              ราคาเปิดตัว (ลดเฉพาะรอบแรก)
            </p>

            <div className="flex items-baseline justify-center gap-4 mb-2 flex-wrap">
              <span className="text-xl md:text-2xl text-text-muted line-through font-mono">
                ฿{fmt(PRICE.anchor)}
              </span>
              <span className="text-5xl md:text-6xl font-black text-brand-primary font-mono">
                ฿{fmt(PRICE.today)}
              </span>
            </div>

            <div className="mt-8">
              <Button variant="line" size="lg" href={HERO.ctaHref}>
                สั่งซื้อผ่าน LINE
                <ArrowRight size={20} />
              </Button>
              <p className="text-text-muted text-sm mt-4">
                จ่ายเงินผ่าน LINE · รับอีบุ๊กทันที · คืนเงิน 30 วันถ้าไม่พอใจ
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
