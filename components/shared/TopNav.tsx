export function TopNav() {
  return (
    <nav className="flex items-center justify-between gap-4 px-5 md:px-8 py-4 border-b-2 border-text-primary bg-bg-elevated">
      {/* Brand pill */}
      <a
        href="#top"
        className="inline-flex items-center gap-2 rounded-lg bg-text-primary text-white px-3 py-1.5 font-heading font-bold text-sm md:text-base"
      >
        แค่เปลี่ยนคำ
      </a>

      {/* Nav links */}
      <ul className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
        <li>
          <a href="#whats-inside" className="text-text-primary hover:text-brand-primary transition-colors font-medium">
            เนื้อหา
          </a>
        </li>
        <li>
          <a href="#offer" className="text-text-primary hover:text-brand-primary transition-colors font-medium">
            ราคา
          </a>
        </li>
        <li>
          <a href="#faq" className="text-text-primary hover:text-brand-primary transition-colors font-medium">
            FAQ
          </a>
        </li>
      </ul>
    </nav>
  )
}
