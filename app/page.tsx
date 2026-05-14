export default function Home() {
  return (
    <main className="min-h-screen px-4 py-20">
      <div className="max-w-[1200px] mx-auto space-y-12">

        <div>
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold mb-3"
            style={{ color: "var(--color-brand-primary)" }}>
            PREVIEW / P2 TOKEN AUDIT
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
            แค่เปลี่ยนคำ ก็ทำเงิน
          </h1>
          <p className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}>
            สูตรเปลี่ยน &ldquo;คำ&rdquo; 7 ภาค 24 บท ที่คนไทย 1,200+ คนใช้แล้วยอดขายขึ้น
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <button
            className="px-6 py-3 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: "var(--color-brand-primary)" }}
          >
            ปุ่ม Primary (Coral)
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: "var(--color-line-green)" }}
          >
            ปุ่ม LINE
          </button>
          <button
            className="px-6 py-3 rounded-lg font-semibold border"
            style={{
              backgroundColor: "var(--color-bg-card)",
              color: "var(--color-text-primary)",
              borderColor: "var(--color-border-strong)",
            }}
          >
            Secondary
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["bg-base", "bg-elevated", "bg-surface"].map((name) => (
            <div
              key={name}
              className="p-6 rounded-xl border"
              style={{
                backgroundColor: "var(--color-bg-card)",
                borderColor: "var(--color-border-subtle)",
              }}
            >
              <p
                className="font-mono text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                --color-{name}
              </p>
              <p className="font-bold mt-2">การ์ดสีอุ่น Anthropic vibe</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-sm" style={{ color: "var(--color-text-muted)" }}>
          Font check: Kanit (heading) · Bai Jamjuree (body) · JetBrains Mono (mono)
        </p>

      </div>
    </main>
  )
}
