import type { Metadata, Viewport } from "next"
import { Kanit, Bai_Jamjuree, JetBrains_Mono } from "next/font/google"
import { PageFrame } from "@/components/shared/PageFrame"
import { TopNav } from "@/components/shared/TopNav"
import { StickyCTA } from "@/components/shared/StickyCTA"
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
  weight: ["400", "500", "700", "800"],
})

const SITE_URL = "https://salepageclassic.vercel.app"
const TITLE = "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 โพสต์"
const DESCRIPTION =
  "บทบาท + คำ + จังหวะ — สูตรเขียนคำขายแบบไม่ต้องเป็นกูรู สำหรับเจ้าของธุรกิจไทย"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | salepageclassic",
  },
  description: DESCRIPTION,
  keywords: ["copywriting", "sales page", "คำขาย", "การตลาด", "sme", "online business"],
  authors: [{ name: "Kittichon Sanitchua" }],
  creator: "Kittichon Sanitchua",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: "salepageclassic",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: SITE_URL },
  icons: { icon: "/icon.svg" },
}

export const viewport: Viewport = {
  themeColor: "#da7756",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${baiJamjuree.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <PageFrame>
          <TopNav />
          {children}
        </PageFrame>
        <StickyCTA />
      </body>
    </html>
  )
}
