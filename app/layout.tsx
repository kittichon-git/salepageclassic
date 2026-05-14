import type { Metadata } from "next"
import { Inter, Noto_Sans_Thai } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "900"],
})

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-noto-sans-thai",
  weight: ["400", "500", "600", "700", "900"],
})

export const metadata: Metadata = {
  title: "แค่เปลี่ยนคำ ก็ทำเงิน — สูตรเขียนขายของสำหรับตลาดไทย",
  description:
    "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค — 7 ภาค 24 บท สูตรกรอกคำสำหรับตลาดไทย",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
