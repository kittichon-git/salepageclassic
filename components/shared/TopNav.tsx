export function TopNav() {
  return (
    <nav
      className="sticky top-3 z-20 flex items-center justify-between gap-4 px-4 py-3 mb-7 border-2 border-text-primary bg-bg-card/95 backdrop-blur-sm shadow-[4px_4px_0_rgba(26,26,26,0.65)]"
      aria-label="Sale page navigation"
    >
      {/* Brand badge — sharp, no radius */}
      <a
        href="#hero"
        className="inline-flex items-center bg-text-primary text-white font-heading font-black text-sm uppercase tracking-widest px-3 py-2"
      >
        แค่เปลี่ยนคำ
      </a>

      {/* Nav links */}
      <ul className="flex items-center gap-4 md:gap-6 text-[13px] font-black uppercase tracking-wide">
        <li>
          <a
            href="#whats-inside"
            className="text-text-primary hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-0.5"
          >
            เนื้อหา
          </a>
        </li>
        <li>
          <a
            href="#offer"
            className="text-text-primary hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-0.5"
          >
            ราคา
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="text-text-primary hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary pb-0.5"
          >
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  )
}
