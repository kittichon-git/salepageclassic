import type { Metadata } from "next"
import { Kanit, Bai_Jamjuree, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const kanit = Kanit({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-kanit",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const baiJamjuree = Bai_Jamjuree({
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-bai-jamjuree",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
  title: "แค่เปลี่ยนคำ ก็ทำเงิน — สูตรเขียนขายของสำหรับตลาดไทย",
  description:
    "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 ประโยค — 7 ภาค 24 บท สูตรกรอกคำ",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${baiJamjuree.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
