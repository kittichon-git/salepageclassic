## 🎯 Phase Command P1 — Paste ใน Claude Code

```
P1: สร้าง lib/data.ts เป็น single source of truth สำหรับทุก section
ใช้ shape ด้านล่างนี้เป๊ะ ๆ (ห้ามเปลี่ยน key names — component จะ import ตาม)
ทุก export เป็น `as const` เพื่อให้ TypeScript infer literal type

```

// lib/data.ts

// Single source of truth — ห้าม hardcode text ใน component

// ทุก field ใช้ภาษาไทยตาม Notion [CLAUDE.md](http://CLAUDE.md) ข้อ 8

export const HERO = {

headline: ["เขียน 1 ประโยค ขายได้มากกว่า", "เขียน 100 ประโยค"],

highlight: "100 ประโยค",

sub: "สูตรเปลี่ยนคำ 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น — ไม่ต้องเป็นนักเขียน แค่กรอกคำตามสูตร",

ctaText: "เริ่มอ่านฟรี 2 บทแรก",

ctaHref: "https://line.me/R/ti/p/@your-line-oa",

trust: "ผู้อ่าน 1,200+ · 4.8/5 · เนื้อหาตลาดไทยล้วน",

} as const

export const RELEVANCE = {

eyebrow: "S2 / RELEVANCE",

title: "หน้านี้สำหรับคุณ ถ้า...",

items: [

"โพสต์ขายของแล้วคนเลื่อนผ่าน ไม่มีใครหยุดอ่าน",

"มีของดีจริง แต่ขายไม่ออกเหมือนคู่แข่ง",

"เคยซื้อคอร์ส copywriting ฝรั่ง — ใช้กับลูกค้าไทยไม่ได้",

"เขียนได้ แต่ไม่รู้ว่าคำไหน 'ปิดการขาย' คำไหน 'แค่ฟังดูสวย'",

],

} as const

export const MECHANISM = {

eyebrow: "S3 / MECHANISM",

title: "สูตรนี้ทำงานยังไง — 3 ขั้น",

steps: [

{ n: "01", title: "หยุดสมอง", body: "Hook 12 ตระกูล (ภาค 3) ทำให้คนหยุดเลื่อนใน 1.3 วินาที" },

{ n: "02", title: "สร้างความเชื่อ", body: "โครง 4 ส่วน (ภาค 4) พาคนจากสงสัย → เชื่อ → อยากได้" },

{ n: "03", title: "ปิดด้วยคำ", body: "12 ประโยคปิด (ภาค 6) ที่ไม่ต้องพูดว่า 'ซื้อเลย'" },

],

closing: "เปลี่ยนคำในจุดที่ถูก = เปลี่ยนผลลัพธ์ทั้งโพสต์",

} as const

export const OUTCOMES = {

eyebrow: "S4 / OUTCOME PROOF",

title: "สิ่งที่คุณจะทำได้หลังอ่านจบ",

items: [

"เขียน Hook ที่หยุดคนได้ใน 3 วินาทีแรก — 50+ สูตรพร้อมใช้",

"เขียน Sales Page ที่ปิดยอดได้จริง — 15 เทมเพลตกรอกคำ",

"ใช้ AI ช่วยเขียนแทนการนั่งคิดเอง — Prompt Library 30 ชุด",

"รู้ว่าคำไหนทำให้คนกล้าจ่ายแพง — ตาราง 200+ คำต้องห้าม vs คำควรใช้",

],

} as const

export const TESTIMONIALS = [

{ quote: "ปรับ Hook ตามสูตรภาค 3 — engagement โพสต์เพิ่ม 4 เท่าใน 7 วัน", name: "คุณ A", role: "ร้านเสื้อผ้า IG" },

{ quote: "เปลี่ยนคำ CTA บน Landing — conversion จาก 1.2% → 3.8%", name: "คุณ B", role: "คอร์สออนไลน์" },

{ quote: "ทำตามภาค 6 — ลูกค้าทักไลน์เพิ่มจาก 5 → 23 คน/วัน", name: "คุณ C", role: "ร้านเครื่องสำอาง" },

] as const

export const TRUST_FILTER = {

eyebrow: "S5 / TRUST FILTER",

title: "เหมาะกับใคร และไม่เหมาะกับใคร",

forUsers: {

heading: "เหมาะกับคุณ ถ้า",

items: [

"ขายของออนไลน์อยู่แล้ว แต่ยอดไม่ขึ้น",

"พร้อมลงมือเขียน-แก้-ลองจริง",

"ขายในตลาดไทย (FB, IG, TikTok, LINE)",

"อยากมีสูตร + เทมเพลตพร้อมใช้",

],

},

notForUsers: {

heading: "ไม่เหมาะ ถ้า",

items: [

"ยังไม่มีสินค้า/บริการของตัวเอง",

"คาดหวังว่าอ่านจบแล้วเงินไหลเข้าเอง",

"ขายในตลาดต่างประเทศ B2B SaaS",

"อยากเรียนทฤษฎี copywriting เชิงวิชาการ",

],

},

} as const

export const MODULES = {

eyebrow: "S6 / WHAT'S INSIDE",

title: "ข้างในมีอะไร — 7 ภาค 24 บท",

items: [

{ n: "ภาค 1", title: "จิตวิทยาผู้ซื้อ", body: "เข้าใจว่า 'ปม' ไหนทำให้คนกดซื้อ" },

{ n: "ภาค 2", title: "วัดผลคำ", body: "ตรวจคำด้วยตัวเลข ไม่เดา" },

{ n: "ภาค 3", title: "Hook 12 ตระกูล", body: "50+ สูตรพร้อมกรอก" },

{ n: "ภาค 4", title: "โครงสร้างเต็มฟอร์แมต", body: "โพสต์ / สคริปต์คลิป / Landing Page" },

{ n: "ภาค 5", title: "คำที่ทรงพลัง", body: "Call-out words ที่ทำให้คนรู้สึก 'พูดถึงฉัน'" },

{ n: "ภาค 6", title: "ปิดการขาย", body: "12 ประโยคปิดท้ายที่ไม่ต้องพูดว่า 'ซื้อเลย'" },

{ n: "ภาค 7", title: "AI ผู้ช่วย", body: "Prompt 5 ขั้น + Workflow ครบลูป" },

],

bonus: {

heading: "ภาคผนวก (รวมอยู่ในเล่ม)",

items: [

"100+ Template ครบทุกฟอร์แมต (กรอกคำได้ทันที)",

"50+ Hook Formulas พร้อมตัวอย่างไทย",

"Prompt Library 30 ชุด",

"ตาราง 200+ คำต้องห้าม vs คำควรใช้",

"แผนลงมือทำ 30 วัน",

],

},

inlineCta: "อ่านบทนำ + บท 1 ฟรีใน LINE",

} as const

export const INSTRUCTOR = {

eyebrow: "S7 / INSTRUCTOR",

title: "จากคนที่เคยเขียนสวย แต่ไม่มีคนซื้อ",

initials: "KC",

name: "Kittichon",

paragraphs: [

"ผม Kittichon — ขายของออนไลน์มา X ปี เคยเขียนโพสต์สวยจนคนชม แต่ไม่มีคนซื้อ",

"วันที่เลิกเขียนเพื่อให้คน 'ชม' แล้วเริ่มเขียนเพื่อให้คน 'ทำตาม' — ทุกอย่างเปลี่ยน",

"หนังสือเล่มนี้คือสิ่งที่ผมอยากให้ตัวเอง 5 ปีก่อนได้อ่าน",

],

tags: ["ตลาดไทย", "สูตรกรอกคำ", "เน้นลงมือจริง"],

} as const

export const OFFER = {

eyebrow: "S8 / OFFER STACK",

title: "ทั้งหมดนี้ในราคาเดียว",

items: [

{ label: "หนังสือ 7 ภาค 24 บท (เนื้อหาหลัก)", value: 1500 },

{ label: "100+ Template กรอกคำ", value: 990 },

{ label: "50+ Hook Formulas", value: 590 },

{ label: "Prompt Library 30 ชุด", value: 790 },

{ label: "แผนลงมือทำ 30 วัน", value: 390 },

],

} as const

export const PRICE = {

total: 4260,

anchor: 1990,

today: 990,

note: "จ่ายครั้งเดียว · เข้าถึงตลอดชีพ · เปิดอ่านบน LINE ได้ทุกที่",

ctaText: "จ่าย 990฿ ผ่าน LINE",

} as const

export const RISK = {

eyebrow: "S9 / RISK REVERSAL",

title: "รับประกัน 7 วัน คืนเงิน 100%",

body: "ถ้าอ่าน 3 บทแรกแล้วไม่ตรงกับที่คุณต้องการ ทักไลน์ คืนเงินทันที ไม่ถาม",

} as const

export const FAQ = [

{ q: "ไม่เคยเขียน copy เลย ใช้ได้ไหม?", a: "ใช้ได้ เพราะเนื้อหาถูกออกแบบเป็นสูตรกรอกคำ ไม่ใช่ทฤษฎีที่ต้องตีความเอง คุณเริ่มจากตัวอย่างและเทมเพลตได้ทันที" },

{ q: "เนื้อหาเป็นภาษาไทยทั้งหมดใช่ไหม?", a: "ใช่ เนื้อหา ตัวอย่าง และคำที่ใช้เน้นตลาดไทยเป็นหลัก เพื่อให้ปรับใช้กับ FB, IG, TikTok และ LINE ได้ง่าย" },

{ q: "อ่านบนมือถือได้ไหม?", a: "ได้ หน้าอ่านถูกออกแบบให้เหมาะกับมือถือ และสามารถเริ่มจากบทฟรีผ่าน LINE ก่อนตัดสินใจ" },

{ q: "เปลี่ยนเครื่องอ่านได้ไหม?", a: "สามารถอ่านผ่าน LINE ได้ตามระบบบัญชีที่ใช้งาน หากมีปัญหาสามารถทักแชตเพื่อให้ทีมช่วยตรวจสอบ" },

{ q: "มี community / กลุ่มถามตอบไหม?", a: "เวอร์ชันนี้เน้นหนังสือและเทมเพลตพร้อมใช้ หากมี community เพิ่มเติมควรแจ้งรายละเอียดอีกครั้งก่อนเปิดขายจริง" },

{ q: "ถ้าเจอข้อสงสัย ถามได้ที่ไหน?", a: "ทักผ่าน LINE Official Account ที่ใช้รับบทฟรีและข้อมูลการซื้อได้โดยตรง" },

] as const

export const FINAL_CTA = {

headline: "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค",

sub: "เริ่มจาก 2 บทแรกฟรี — ไม่ต้องจ่ายอะไรเพื่อตัดสินใจ",

ctaText: "อ่านฟรี 2 บทแรกผ่าน LINE",

ctaHref: "https://line.me/R/ti/p/@your-line-oa",

} as const

```

ขั้นตอน:
1. สร้างไฟล์ `lib/data.ts` ตาม shape ด้านบนเป๊ะ ๆ
2. ห้าม import / export อื่น นอกจาก 13 constants ข้างต้น
3. รัน `npx tsc --noEmit` ตรวจว่าไม่มี TypeScript error
4. รัน `npm run dev` ตรวจว่ายังเปิด localhost ได้ปกติ (data.ts ยังไม่ถูก import ที่ไหน — แค่ต้อง compile ผ่าน)
5. git add lib/data.ts → commit "feat(p1): add lib/data.ts with all section content" → push

เสร็จแล้วรายงาน:
- ขนาดไฟล์ (line count)
- TypeScript error count (ควรเป็น 0)
- commit hash
- ถามก่อนไป P2
```

---

## 📋 หลัง P1 จบ → สั่ง P2 ทันที

```
P2: สร้าง UI primitives ใน components/ui/ + ScrollReveal ใน components/shared/

ไฟล์ที่ต้องสร้าง (5 ใน ui/ + 1 ใน shared/):

1. components/ui/Container.tsx
   - max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16
   - props: children, className?

2. components/ui/Button.tsx
   - variants: 'primary' | 'secondary' | 'ghost' | 'line'
     · primary: bg-brand-primary text-bg-base
     · secondary: bg-bg-card text-text-primary border border-border-strong
     · ghost: text-brand-primary hover:bg-bg-card
     · line: bg-line-green text-white (สำหรับ LINE CTA)
   - sizes: 'sm' | 'md' | 'lg'
   - props: variant, size, href?, children, className?
   - ถ้ามี href → render เป็น <a> ไม่ใช่ <button>
   - rounded-lg · font-semibold · transition-colors

3. components/ui/Badge.tsx
   - props: children, variant: 'default' | 'success' | 'warning' | 'danger'
   - text-xs · px-2 py-1 · rounded-md · uppercase

4. components/ui/SectionEyebrow.tsx
   - แสดง "S2 / RELEVANCE" pattern
   - props: children
   - className: text-xs md:text-sm uppercase tracking-widest text-brand-primary font-semibold mb-3

5. components/ui/Card.tsx
   - props: children, className?
   - bg-bg-card · rounded-xl · p-6 md:p-8 · border border-border-subtle
   - hover:bg-bg-card-hover · transition-colors

6. components/shared/ScrollReveal.tsx
   - 'use client'
   - import { motion } from 'framer-motion'
   - props: children, delay?: number (default 0)
   - initial: { opacity: 0, y: 24 }
   - whileInView: { opacity: 1, y: 0 }
   - viewport: { once: true, margin: '-80px' }
   - transition: { duration: 0.5, delay, ease: 'easeOut' }

ขั้นตอน:
1. สร้างทั้ง 6 ไฟล์
2. ใช้ TypeScript strict — props ต้องมี type ครบ
3. รัน `npx tsc --noEmit` → 0 errors
4. รัน `npm run dev` → ตรวจไม่มี runtime error
5. commit "feat(p2): add ui primitives + scroll reveal" → push
6. หยุดที่ Gate — รายงานผล + แจ้งว่ารอ token audit JSON จาก owner

ห้ามเริ่ม P3 จนกว่าจะได้ JSON
```

---

## 🚦 หลัง P2 จบ → คุณทำต่อ