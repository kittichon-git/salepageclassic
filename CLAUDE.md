# CLAUDE.md — salepageclassic

<aside>
🤖

**Repo (local)**: `d:\salepageclassic`

**Repo (remote)**: [github.com/kittichon-git/salepageclassic](http://github.com/kittichon-git/salepageclassic)

**Mission**: Build landing page ขาย e-book **แค่เปลี่ยนคำ ก็ทำเงิน** — โครงสร้าง + layout/theme จาก [notionsale-5suth7km.manus.space](http://notionsale-5suth7km.manus.space) · tech stack + tone สี + ฟอนต์จาก [cc.aiflowlab.co](http://cc.aiflowlab.co)

**Stack**: Next.js 15 App Router · TypeScript strict · Tailwind v4 · Framer Motion · Lucide React

**Content source**: [Sales Page Spec V.2](https://www.notion.so/Sales-Page-Spec-V-2-24daac0586674912a7dcc1580996bd16?pvs=21)

**Structure source**: [salepageclassic](https://www.notion.so/salepageclassic-d6a93ffdf84c477eb0f7d7d10fd2300c?pvs=21)

</aside>

## 0. Project Snapshot

| หัวข้อ | ค่า |
| --- | --- |
| Repo (local) | `d:\salepageclassic` |
| Repo (remote) | [github.com/kittichon-git/salepageclassic](http://github.com/kittichon-git/salepageclassic) |
| Framework | Next.js 15 (App Router, RSC default) |
| Language | TypeScript strict · ห้าม `any` |
| Styling | Tailwind v4 (`@theme` ใน `globals.css`) |
| Animation | Framer Motion (scroll-reveal fade-up 24px) |
| Icons | Lucide React |
| Fonts | Noto Sans Thai + Inter (`next/font/google`) |
| Section count | 10 (S1 Hero + S2–S10 ตามแบบ [manus.space](http://manus.space)) |
| Theme | Dark mode only (navy `#0a0e1a`  • cyan teal `#00d4c8`) |
| Target Lighthouse | Performance ≥ 95 · LCP < 2.5s · CLS < 0.1 |
| Deploy | Vercel (เฟส 2) |

## 1. Quick Start

```bash
cd d:\salepageclassic
npx create-next-app@latest . --typescript --tailwind --app --eslint --import-alias="@/*" --no-src-dir --turbopack
npm install framer-motion lucide-react clsx

# git connect to GitHub
git init
git branch -M main
git remote add origin https://github.com/kittichon-git/salepageclassic.git
git add .
git commit -m "chore: initial scaffold (P0)"
git push -u origin main

npm run dev
```

## 2. File Structure

```
d:\salepageclassic
├── app/
│   ├── layout.tsx              # fonts + metadata + RootLayout
│   ├── page.tsx                # landing — import sections เรียงตามลำดับ
│   └── globals.css             # @theme tokens + base reset
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # variants: primary | secondary | ghost
│   │   ├── Badge.tsx
│   │   ├── SectionEyebrow.tsx  # "S2 / RELEVANCE" caption
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── shared/
│   │   └── ScrollReveal.tsx    # 'use client' Framer Motion wrapper
│   └── sections/
│       ├── S1Hero.tsx
│       ├── S2Relevance.tsx
│       ├── S3Mechanism.tsx
│       ├── S4Outcome.tsx
│       ├── S5TrustFilter.tsx
│       ├── S6WhatsInside.tsx
│       ├── S7Instructor.tsx
│       ├── S8OfferStack.tsx
│       ├── S9RiskFAQ.tsx
│       └── S10FinalCTA.tsx
├── lib/
│   └── data.ts                 # static Thai content (single source)
├── public/
│   └── og.png                  # 1200x630 (เฟส 2)
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 3. Design Tokens — ⚠️ Pending Audit

<aside>
⚠️

**สถานะ**: tokens ด้านล่างเป็น **placeholder** ที่เดาจาก vibe ทั่วไป — ยังไม่ใช่ค่าจริงจาก [cc.aiflowlab.co](http://cc.aiflowlab.co)

**ต้องทำก่อน P3**: รัน DevTools script ในข้อ 3.1 บนเว็บต้นแบบ → ส่งผลลัพธ์ JSON กลับ → ผมจะอัปเดต token ในไฟล์นี้ให้ตรง 100%

**ระหว่างที่ยังไม่ได้ค่าจริง**: ใช้ placeholder ทำ P0–P2 ได้ (scaffold + data.ts + UI primitives) — แต่หยุดก่อนเริ่ม P3 (sections build)

</aside>

### 3.1 DevTools Scripts — ดึง Colors + Fonts จากเว็บต้นแบบ

เปิด [https://cc.aiflowlab.co/](https://cc.aiflowlab.co/) → F12 → Console → paste script ทีละก้อน → copy ผลลัพธ์ JSON

**Script A · CSS Variables**

```jsx
(() => {
	const root = getComputedStyle(document.documentElement)
	const vars = new Set()
	for (const sheet of document.styleSheets) {
		try {
			for (const rule of sheet.cssRules) {
				if (rule.style) for (const prop of rule.style) if (prop.startsWith('--')) vars.add(prop)
			}
		} catch (e) {}
	}
	for (const el of [document.documentElement, document.body]) {
		for (const prop of el.style) if (prop.startsWith('--')) vars.add(prop)
	}
	const result = {}
	;[...vars].sort().forEach(v => {
		const val = root.getPropertyValue(v).trim()
		if (val) result[v] = val
	})
	console.log(JSON.stringify(result, null, 2))
	return result
})()
```

**Script B · Fonts**

```jsx
(() => {
	const fonts = new Set(), weights = new Set(), samples = {}
	document.querySelectorAll('*').forEach(el => {
		const cs = getComputedStyle(el)
		fonts.add(cs.fontFamily); weights.add(cs.fontWeight)
		const tag = el.tagName.toLowerCase()
		if (['h1','h2','h3','h4','p','body','button','a'].includes(tag) && !samples[tag]) {
			samples[tag] = { family: cs.fontFamily, weight: cs.fontWeight, size: cs.fontSize, lineHeight: cs.lineHeight, letterSpacing: cs.letterSpacing }
		}
	})
	const fontLinks = [...document.querySelectorAll('link[rel="stylesheet"], link[rel="preload"]')].map(l => l.href).filter(h => h.includes('font') || h.includes('googleapis'))
	const out = { families: [...fonts], weights: [...weights], fontLinks, samples }
	console.log(JSON.stringify(out, null, 2))
	return out
})()
```

**Script C · Hero + Button + Body + Card**

```jsx
(() => {
	const out = {}
	const h1 = document.querySelector('h1')
	if (h1) { const cs = getComputedStyle(h1); out.h1 = { text: h1.innerText.slice(0, 60), fontFamily: cs.fontFamily, fontWeight: cs.fontWeight, fontSize: cs.fontSize, lineHeight: cs.lineHeight, color: cs.color, letterSpacing: cs.letterSpacing } }
	const btn = document.querySelector('button, a[class*="btn"], a[class*="button"], [class*="cta"]')
	if (btn) { const cs = getComputedStyle(btn); out.button = { text: btn.innerText.slice(0, 40), bg: cs.backgroundColor, color: cs.color, borderRadius: cs.borderRadius, padding: cs.padding, fontWeight: cs.fontWeight, fontSize: cs.fontSize, boxShadow: cs.boxShadow } }
	const bs = getComputedStyle(document.body); out.body = { bg: bs.backgroundColor, color: bs.color, fontFamily: bs.fontFamily, fontSize: bs.fontSize }
	const card = document.querySelector('[class*="card"], section > div')
	if (card) { const cs = getComputedStyle(card); out.card = { bg: cs.backgroundColor, border: cs.border, borderRadius: cs.borderRadius, boxShadow: cs.boxShadow } }
	console.log(JSON.stringify(out, null, 2))
	return out
})()
```

### 3.2 Placeholder Tokens (paste ใน `app/globals.css` ตอน P0)

```css
@import "tailwindcss";

@theme {
	/* Brand (จาก aiflowlab) */
	--color-brand-primary: #00d4c8;
	--color-brand-primary-dark: #00a89c;
	--color-brand-accent: #ffb800;
	--color-line-green: #00B900;

	/* Surfaces — dark mode */
	--color-bg-base: #0a0e1a;
	--color-bg-elevated: #131826;
	--color-bg-card: #1a2033;
	--color-bg-card-hover: #232a40;

	/* Text */
	--color-text-primary: #ffffff;
	--color-text-secondary: #b8c0d0;
	--color-text-muted: #6b7689;

	/* Semantic */
	--color-success: #00d4a8;
	--color-warning: #ff9a3c;
	--color-danger: #ff5c5c;

	/* Borders */
	--color-border-subtle: #232a40;
	--color-border-strong: #3a4259;

	/* Typography */
	--font-thai: var(--font-noto-sans-thai);
	--font-latin: var(--font-inter);
}

html, body {
	background: var(--color-bg-base);
	color: var(--color-text-primary);
	font-family: var(--font-thai), var(--font-latin), system-ui, sans-serif;
	-webkit-font-smoothing: antialiased;
}
```

## 4. Fonts (ใน `app/layout.tsx`)

```tsx
import { Inter, Noto_Sans_Thai } from "next/font/google"

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	weight: ["400", "600", "700", "900"],
})

const notoSansThai = Noto_Sans_Thai({
	subsets: ["thai", "latin"],
	display: "swap",
	variable: "--font-noto-sans-thai",
	weight: ["400", "600", "700", "900"],
})

export const metadata = {
	title: "แค่เปลี่ยนคำ ก็ทำเงิน — สูตรเขียนขายของสำหรับตลาดไทย",
	description: "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค — 7 ภาค 24 บท สูตรกรอกคำ",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="th" className={`${notoSansThai.variable} ${inter.variable}`}>
			<body>{children}</body>
		</html>
	)
}
```

## 5. Typography Scale

| Token | Mobile | Desktop | Weight | Usage |
| --- | --- | --- | --- | --- |
| display-xl | 40px / 1.15 | 64px / 1.1 | 900 | Hero H1 |
| display-lg | 32px / 1.2 | 48px / 1.2 | 800 | Section H2 |
| display-md | 24px / 1.25 | 32px / 1.3 | 700 | Sub H3 |
| body-lg | 18px / 1.6 | 20px / 1.6 | 400 | Emphasis |
| body | 16px / 1.7 | 16px / 1.7 | 400 | Default |
| label | 13px / 1.4 | 14px / 1.4 | 600 | Eyebrow (uppercase tracking-widest) |

## 6. Layout Rules (Layout/Theme จาก [manus.space](http://manus.space))

- Container: `max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16`
- Section vertical padding: `py-20 md:py-30` (80px / 120px)
- Card radius: `rounded-xl` (12px) · Hero: `rounded-3xl` (24px)
- Button radius: `rounded-lg` (8px)
- Mobile-first · breakpoints 360 / 768 / 1024 / 1440
- **Eyebrow pattern (สำคัญ จาก manus)**: ทุก section H2 ขึ้นด้วย caption เล็ก uppercase รูปแบบ `S2 / RELEVANCE` สี brand-primary tracking-widest text-xs/sm
- Section dividers: ใช้ horizontal rule subtle หรือ spacing เพียงพอ

## 7. Section-by-Section Build Spec

เนื้อหาเต็มดูจาก [salepageclassic](https://www.notion.so/salepageclassic-d6a93ffdf84c477eb0f7d7d10fd2300c?pvs=21) — สรุป component:

| Section | Eyebrow | Component | Type | Note |
| --- | --- | --- | --- | --- |
| S1 Hero | — | `S1Hero.tsx` | server | H1 italic บรรทัดสุดท้าย highlight + CTA LINE green + trust strip |
| S2 Relevance | `S2 / RELEVANCE` | `S2Relevance.tsx` | server | 4 bullets · ไอคอน X สี danger |
| S3 Mechanism | `S3 / MECHANISM` | `S3Mechanism.tsx` | server | 3 step cards · number badge 01/02/03 + closing italic |
| S4 Outcome | `S4 / OUTCOME PROOF` | `S4Outcome.tsx` | server | 4 outcome bullets + 3 testimonial blockquotes |
| S5 Trust Filter | `S5 / TRUST FILTER` | `S5TrustFilter.tsx` | server | 2 columns: ✅ เหมาะ · ❌ ไม่เหมาะ |
| S6 What's Inside | `S6 / WHAT'S INSIDE` | `S6WhatsInside.tsx` | server | 7 module cards (1/2/3 col) + bonus callout |
| S7 Instructor | `S7 / INSTRUCTOR` | `S7Instructor.tsx` | server | avatar initials + bio + tag chips |
| S8 Offer Stack | `S8 / OFFER STACK` | `S8OfferStack.tsx` | server | value table + anchor strike + price big + CTA |
| S9 Risk + FAQ | `S9 / RISK REVERSAL` | `S9RiskFAQ.tsx` | server | guarantee callout + 6 FAQ ใน `<details>` native |
| S10 Final CTA | — | `S10FinalCTA.tsx` | server | H2 centered + CTA + trust recap |

## 8. Static Content (`lib/data.ts`)

ห้าม hardcode ใน component — ย้ายมาอยู่ที่นี่ทั้งหมด:

```tsx
export const HERO = {
	headline: ["เขียน 1 ประโยค ขายได้มากกว่า", "เขียน 100 ประโยค"],
	highlight: "100 ประโยค",
	sub: "สูตรเปลี่ยนคำ 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น",
	ctaText: "เริ่มอ่านฟรี 2 บทแรก",
	trust: "ผู้อ่าน 1,200+ · 4.8/5 · ตลาดไทยล้วน",
}

export const RELEVANCE = [
	"โพสต์ขายของแล้วคนเลื่อนผ่าน ไม่มีใครหยุดอ่าน",
	"มีของดีจริง แต่ขายไม่ออกเหมือนคู่แข่ง",
	"เคยซื้อคอร์ส copywriting ฝรั่ง — ใช้กับลูกค้าไทยไม่ได้",
	"เขียนได้ แต่ไม่รู้ว่าคำไหน 'ปิดการขาย' คำไหน 'แค่ฟังดูสวย'",
]

export const MECHANISM = [
	{ n: "01", title: "หยุดสมอง", body: "Hook 12 ตระกูล (ภาค 3) ทำให้คนหยุดเลื่อนใน 1.3 วินาที" },
	{ n: "02", title: "สร้างความเชื่อ", body: "โครง 4 ส่วน (ภาค 4) พาคนจากสงสัย → เชื่อ → อยากได้" },
	{ n: "03", title: "ปิดด้วยคำ", body: "12 ประโยคปิด (ภาค 6) ที่ไม่ต้องพูดว่า 'ซื้อเลย'" },
]

export const OUTCOMES = [
	"เขียน Hook ที่หยุดคนได้ใน 3 วินาทีแรก — 50+ สูตรพร้อมใช้",
	"เขียน Sales Page ที่ปิดยอดได้จริง — 15 เทมเพลตกรอกคำ",
	"ใช้ AI ช่วยเขียน — Prompt Library 30 ชุด",
	"รู้ว่าคำไหนทำให้คนกล้าจ่ายแพง — ตาราง 200+ คำต้องห้าม vs คำควรใช้",
]

export const TESTIMONIALS = [
	{ quote: "ปรับ Hook ตามสูตรภาค 3 — engagement โพสต์เพิ่ม 4 เท่าใน 7 วัน", name: "คุณ A", role: "ร้านเสื้อผ้า IG" },
	{ quote: "เปลี่ยนคำ CTA บน Landing — conversion จาก 1.2% → 3.8%", name: "คุณ B", role: "คอร์สออนไลน์" },
	{ quote: "ทำตามภาค 6 — ลูกค้าทักไลน์เพิ่มจาก 5 → 23 คน/วัน", name: "คุณ C", role: "ร้านเครื่องสำอาง" },
]

export const TRUST_FIT = {
	for: [
		"ขายของออนไลน์อยู่แล้ว แต่ยอดไม่ขึ้น",
		"พร้อมลงมือเขียน-แก้-ลองจริง",
		"ขายในตลาดไทย (FB, IG, TikTok, LINE)",
		"อยากมีสูตร + เทมเพลตพร้อมใช้",
	],
	notFor: [
		"ยังไม่มีสินค้า/บริการของตัวเอง",
		"คาดหวังว่าอ่านจบแล้วเงินไหลเข้าเอง",
		"ขายในตลาดต่างประเทศ B2B SaaS",
		"อยากเรียนทฤษฎี copywriting เชิงวิชาการ",
	],
}

export const MODULES = [
	{ n: "ภาค 1", title: "จิตวิทยาผู้ซื้อ", body: "เข้าใจว่า 'ปม' ไหนทำให้คนกดซื้อ" },
	{ n: "ภาค 2", title: "วัดผลคำ", body: "ตรวจคำด้วยตัวเลข ไม่เดา" },
	{ n: "ภาค 3", title: "Hook 12 ตระกูล", body: "50+ สูตรพร้อมกรอก" },
	{ n: "ภาค 4", title: "โครงสร้างเต็มฟอร์แมต", body: "โพสต์ / สคริปต์คลิป / Landing Page" },
	{ n: "ภาค 5", title: "คำที่ทรงพลัง", body: "Call-out words ที่ทำให้คนรู้สึก 'พูดถึงฉัน'" },
	{ n: "ภาค 6", title: "ปิดการขาย", body: "12 ประโยคปิดท้ายที่ไม่ต้องพูดว่า 'ซื้อเลย'" },
	{ n: "ภาค 7", title: "AI ผู้ช่วย", body: "Prompt 5 ขั้น + Workflow ครบลูป" },
]

export const INSTRUCTOR = {
	initials: "KC",
	name: "Kittichon",
	paras: [
		"ผม Kittichon — ขายของออนไลน์มา X ปี เคยเขียนโพสต์สวยจนคนชม แต่ไม่มีคนซื้อ",
		"วันที่เลิกเขียนเพื่อให้คน 'ชม' แล้วเริ่มเขียนเพื่อให้คน 'ทำตาม' — ทุกอย่างเปลี่ยน",
		"หนังสือเล่มนี้คือสิ่งที่ผมอยากให้ตัวเอง 5 ปีก่อนได้อ่าน",
	],
	tags: ["ตลาดไทย", "สูตรกรอกคำ", "เน้นลงมือจริง"],
}

export const OFFER = [
	{ label: "หนังสือ 7 ภาค 24 บท", value: 1500 },
	{ label: "100+ Template กรอกคำ", value: 990 },
	{ label: "50+ Hook Formulas", value: 590 },
	{ label: "Prompt Library 30 ชุด", value: 790 },
	{ label: "แผนลงมือทำ 30 วัน", value: 390 },
]
export const PRICE = { total: 4260, anchor: 1990, today: 990 }

export const FAQ = [
	{ q: "ไม่เคยเขียน copy เลย ใช้ได้ไหม?", a: "ใช้ได้ เนื้อหาถูกออกแบบเป็นสูตรกรอกคำ ไม่ใช่ทฤษฎีที่ต้องตีความเอง" },
	{ q: "เนื้อหาเป็นภาษาไทยทั้งหมดใช่ไหม?", a: "ใช่ ตลาดไทยล้วน ปรับใช้กับ FB, IG, TikTok, LINE ได้ง่าย" },
	{ q: "อ่านบนมือถือได้ไหม?", a: "ได้ อ่านผ่าน LINE ได้ทันที ไม่ต้องโหลดแอป" },
	{ q: "เปลี่ยนเครื่องอ่านได้ไหม?", a: "ได้ ผูกกับ LINE account ของคุณ" },
	{ q: "มี community / กลุ่มถามตอบไหม?", a: "เวอร์ชันนี้เน้นหนังสือ + เทมเพลตพร้อมใช้ · รายละเอียด community แจ้งก่อนเปิดขายจริง" },
	{ q: "ถ้าเจอข้อสงสัย ถามได้ที่ไหน?", a: "ทักไลน์ OA ได้เลย ตอบภายใน 24 ชม." },
]

export const FINAL_CTA = {
	headline: "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค",
	sub: "เริ่มจาก 2 บทแรกฟรี — ไม่ต้องจ่ายอะไรเพื่อตัดสินใจ",
	ctaText: "อ่านฟรี 2 บทแรกผ่าน LINE",
}
```

## 9. ScrollReveal Wrapper (`components/shared/ScrollReveal.tsx`)

```tsx
"use client"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
	return (
		<motion.div
			initial= opacity: 0, y: 24 
			whileInView= opacity: 1, y: 0 
			viewport= once: true, margin: "-80px" 
			transition= duration: 0.5, delay, ease: "easeOut" 
		>
			{children}
		</motion.div>
	)
}
```

## 10. Build Phases — ⚠️ STOP-GATE ก่อน P3

<aside>
🚦

**Gate**: หลัง P2 จบ → หยุดและขอ design tokens จริงก่อนเริ่ม P3 (sections build)

ถ้า build sections ด้วย placeholder จะต้องมาแก้ทั้งหมดทีหลัง — เสียเวลา 2 รอบ

</aside>

| Phase | งาน | Output | เวลา |
| --- | --- | --- | --- |
| **P0** | Next.js scaffold + deps + `@theme` tokens + fonts | `/` render bg navy + brand visible | 30 นาที |
| **P1** | `lib/data.ts` ครบทั้งหมด | Single source of truth | 30 นาที |
| **P2** | UI primitives: Button, Badge, SectionEyebrow, Card, Container, ScrollReveal | Re-usable components พร้อม | 1 ชม. |
| **P3** | S1 Hero + S2 Relevance + S3 Mechanism | 30% หน้า render | 1.5 ชม. |
| **P4** | S4 Outcome + S5 TrustFilter + S6 What's Inside | 60% หน้า render | 1.5 ชม. |
| **P5** | S7 Instructor + S8 Offer Stack | 80% หน้า | 1 ชม. |
| **P6** | S9 Risk + FAQ (`<details>`) + S10 Final CTA | 100% เนื้อหา | 1 ชม. |
| **P7** | ScrollReveal wrap ทุก section + responsive QA | Smooth scroll | 1 ชม. |
| **P8** | Metadata + OG image + Lighthouse audit ≥ 95 | Production-ready | 30 นาที |

รวมประมาณ **~7 ชม.** ต่อเนื่อง (ไม่รวม payment integration)

## 11. Quality Rules

- TypeScript strict · ห้าม `any` · ห้าม `@ts-ignore`
- Server components by default · `"use client"` เฉพาะ `ScrollReveal` (หรือ component อื่นที่มี state)
- FAQ ใช้ `<details><summary>` native (a11y ฟรี · ไม่ต้อง JS)
- ห้าม hardcode ข้อความใน component — ดึงจาก `lib/data.ts` เสมอ
- ไม่ใช้ `<img>` — ใช้ `next/image` เสมอ (หากมีรูป)
- LCP < 2.5s · CLS < 0.1 · Lighthouse Performance ≥ 95
- Commit ตาม conventional: `feat:`, `style:`, `perf:`, `fix:`
- ทุก phase จบ → commit · ถามก่อนข้ามไป phase ถัดไป

## 12. Out of Scope (เฟส 2)

- Payment integration (CTA → LINE deeplink ก่อน)
- Sticky CTA bar + countdown
- A/B test variant
- Analytics (GA4 + FB Pixel)
- Multi-language (ไทยเท่านั้น)
- CMS/headless

## 13. Master Prompt สำหรับ Claude Code

```
คุณคือผู้ช่วย build landing page "แค่เปลี่ยนคำ ก็ทำเงิน" ใน d:\salepageclassic

Reference:
- Structure/layout/theme: https://notionsale-5suth7km.manus.space/
- Tech stack + tone สี + ฟอนต์: https://cc.aiflowlab.co/
- Spec page (Notion): salepageclassic + CLAUDE.md — salepageclassic

Requirements:
1. Next.js 15 App Router + TypeScript strict + Tailwind v4 + Framer Motion + Lucide React
2. Font: Noto Sans Thai (ไทย) + Inter (latin) ผ่าน next/font/google
3. Dark mode only — navy #0a0e1a + cyan #00d4c8 + accent gold #ffb800
4. 10 sections (S1 Hero + S2 Relevance … S10 Final CTA) ตามลำดับ manus.space
5. Section eyebrow รูปแบบ "S2 / RELEVANCE" uppercase tracking-widest text-brand-primary เหนือทุก H2
6. ทุก section รับ data จาก lib/data.ts (ห้าม hardcode)
7. Mobile-first · breakpoints 360 / 768 / 1024 / 1440
8. Lighthouse target: Performance ≥ 95, LCP \< 2.5s, CLS \< 0.1

Execution:
- เริ่มจาก P0 → P8 ตามตาราง Build Phases
- Stop-and-go: ถามทุกครั้งก่อนข้ามเฟส
- Commit แต่ละ phase ด้วย conventional commits
- Server components by default · 'use client' เฉพาะ ScrollReveal
- FAQ ใช้ <details> native

Out of scope (เฟส 2): payment, countdown, analytics, multi-language

เริ่ม P0 ได้เลย — แจ้งเมื่อ setup เสร็จและสีพร้อม preview
```

## 14. References

- Structure + layout + theme: [https://notionsale-5suth7km.manus.space/](https://notionsale-5suth7km.manus.space/)
- Tech + tone + font: [https://cc.aiflowlab.co/](https://cc.aiflowlab.co/)
- Content source: [Sales Page Spec V.2](https://www.notion.so/Sales-Page-Spec-V-2-24daac0586674912a7dcc1580996bd16?pvs=21)
- Parent spec: [salepageclassic](https://www.notion.so/salepageclassic-d6a93ffdf84c477eb0f7d7d10fd2300c?pvs=21)