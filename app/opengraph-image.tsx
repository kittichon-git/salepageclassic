import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "เขียน 1 ประโยค ขายได้มากกว่าเขียน 100 โพสต์"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "linear-gradient(135deg, #f5f5f0 0%, #eaeae5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#da7756",
              color: "#ffffff",
              fontSize: "32px",
              fontWeight: 900,
            }}
          >
            ค
          </div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#555555",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            salepageclassic
          </div>
        </div>

        {/* Middle: headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            เขียน{" "}
            <span style={{ color: "#da7756" }}>1 ประโยค</span>
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 900,
              lineHeight: 1.15,
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            ขายได้มากกว่า 100 โพสต์
          </div>
        </div>

        {/* Bottom: subtitle + CTA hint */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              color: "#555555",
              lineHeight: 1.5,
              maxWidth: "780px",
            }}
          >
            บทบาท + คำ + จังหวะ — สูตรเขียนคำขายแบบไม่ต้องเป็นกูรู
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px 28px",
              borderRadius: "12px",
              background: "#00B900",
              color: "#ffffff",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            อ่านฟรีใน LINE →
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
