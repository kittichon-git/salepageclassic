export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-4">
      <p className="text-xs uppercase tracking-widest text-brand-primary font-semibold">
        S0 / PREVIEW
      </p>
      <h1 className="text-5xl font-black text-center leading-tight">
        แค่เปลี่ยนคำ<br />
        <em className="text-brand-primary not-italic">ก็ทำเงิน</em>
      </h1>
      <p className="text-text-secondary text-lg text-center max-w-md">
        สูตรเขียนขายของ 7 ภาค 24 บท สำหรับตลาดไทย
      </p>
      <div className="flex gap-3">
        <div className="bg-brand-primary text-bg-base px-6 py-3 rounded-lg font-bold text-sm">
          CTA Primary
        </div>
        <div className="bg-bg-card border border-border-subtle px-6 py-3 rounded-lg text-text-secondary text-sm">
          CTA Secondary
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 text-xs">
        <div className="bg-bg-elevated border border-border-subtle rounded-xl p-4 text-text-muted text-center">bg-elevated</div>
        <div className="bg-bg-card border border-border-subtle rounded-xl p-4 text-text-secondary text-center">bg-card</div>
        <div className="bg-brand-accent/20 border border-brand-accent/30 rounded-xl p-4 text-brand-accent text-center">accent gold</div>
      </div>
    </main>
  )
}
