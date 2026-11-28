'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Menu, ShieldCheck, X } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/components/language-context'
import { ContactForm } from '@/components/preview-forms'

const labels = {
  en: {
    nav: ['Home', 'About', 'Membership', 'Savings & Loans', 'News', 'Resources', 'Contact'],
    member: 'Become a member', language: 'አማርኛ', savings: 'Savings', loans: 'Loan products', normal: 'Normal loan', material: 'Material loan', holiday: 'Holiday loan',
    faq: 'Frequently asked questions', downloads: 'Downloads & mobile app', explore: 'Explore', resources: 'Resources', contact: 'Get in touch',
    footer: 'A member-owned savings and credit cooperative supporting the financial wellbeing of Moenco employees.',
    contactNote: 'Official contact details to be confirmed', guidelines: 'Membership guidelines', privacy: 'Privacy policy', terms: 'Terms & conditions', notice: 'Membership terms, application channels and contact details will be confirmed by Moenco SACCO.', copyright: '© 2026 Moenco SACCO. All rights reserved.',
    announcement: 'Building financial wellbeing, together',
  },
  am: {
    nav: ['መነሻ', 'ስለ እኛ', 'አባልነት', 'ቁጠባና ብድር', 'ዜና', 'መረጃዎች', 'ያግኙን'],
    member: 'አባል ይሁኑ', language: 'English', savings: 'ቁጠባ', loans: 'የብድር አይነቶች', normal: 'መደበኛ ብድር', material: 'የቁሳቁስ ብድር', holiday: 'የበዓል ብድር',
    faq: 'ተደጋጋሚ ጥያቄዎች', downloads: 'ማውረጃዎችና የሞባይል መተግበሪያ', explore: 'አሰሳ', resources: 'መረጃዎች', contact: 'ያግኙን',
    footer: 'የሞኤንኮ ሠራተኞችን የገንዘብ ደህንነት የሚደግፍ በአባላቱ የሚተዳደር የቁጠባና ብድር ማኅበር።',
    contactNote: 'ይፋዊ የመገኛ መረጃ ይጠበቃል', guidelines: 'የአባልነት መመሪያ', privacy: 'የግላዊነት መመሪያ', terms: 'ውሎችና ሁኔታዎች', notice: 'የአባልነት ውሎች፣ የማመልከቻ መንገድና የመገኛ መረጃ በሞኤንኮ ሳኮ ይረጋገጣሉ።', copyright: '© 2026 ሞኤንኮ ሳኮ። መብቱ በሕግ የተጠበቀ ነው።',
    announcement: 'የገንዘብ ደህንነትን በጋራ እንገንባ',
  },
}

function Brand() {
  return <Link className="brand" href="/" aria-label="Moenco SACCO home"><img className="brand-logo" src="/moenco-logo.webp" alt="MOENCO" /><span className="brand-sacco">SACCO</span></Link>
}

function NavDropdown({ label, id, openId, setOpenId, onNavigate, children }: { label: string; id: string; openId: string | null; setOpenId: (id: string | null) => void; onNavigate: () => void; children: React.ReactNode }) {
  const open = openId === id
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpenId(null) }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenId(null) }
    document.addEventListener('mousedown', handler)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', handler); document.removeEventListener('keydown', onKey) }
  }, [open, setOpenId])

  const isDesktop = () => typeof window !== 'undefined' && window.matchMedia('(min-width: 981px)').matches

  return <div
    className={open ? 'nav-dropdown open' : 'nav-dropdown'}
    ref={ref}
    onMouseEnter={() => { if (isDesktop()) setOpenId(id) }}
    onMouseLeave={() => { if (isDesktop()) setOpenId(null) }}
  >
    <button type="button" className="nav-dropdown-trigger" aria-expanded={open} aria-haspopup="true" onClick={() => setOpenId(open ? null : id)}>
      {label}<ChevronDown size={13} aria-hidden="true" />
    </button>
    <AnimatePresence>
      {open && (
        <motion.div
          className="nav-dropdown-menu"
          initial={reducedMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          onClick={() => { setOpenId(null); onNavigate() }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
}

function SiteHeader() {
  const { language, toggleLanguage } = useLanguage()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const c = labels[language]
  const closeMenu = () => { setMenuOpen(false); setOpenDropdown(null) }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <>
    <div className="announcement"><span>MEMBER-OWNED · MOENCO EMPLOYEES</span><span>{c.announcement} <ArrowRight size={13} /></span></div>
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}><div className="nav-wrap"><Brand />
      <nav id="primary-navigation" className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label={language === 'en' ? 'Main navigation' : 'ዋና ማውጫ'}>
        <Link href="/" onClick={closeMenu} aria-current={pathname === '/' ? 'page' : undefined}>{c.nav[0]}</Link>
        <Link href="/about" onClick={closeMenu} aria-current={pathname === '/about' ? 'page' : undefined}>{c.nav[1]}</Link>
        <Link href="/membership" onClick={closeMenu} aria-current={pathname === '/membership' ? 'page' : undefined}>{c.nav[2]}</Link>
        <NavDropdown label={c.nav[3]} id="savings-loans" openId={openDropdown} setOpenId={setOpenDropdown} onNavigate={closeMenu}>
          <Link href="/savings-loans#savings">{c.savings}</Link><Link href="/savings-loans#loans">{c.loans}</Link><Link href="/savings-loans#normal-loan">{c.normal}</Link><Link href="/savings-loans#material-loan">{c.material}</Link><Link href="/savings-loans#holiday-loan">{c.holiday}</Link>
        </NavDropdown>
        <Link href="/news" onClick={closeMenu} aria-current={pathname === '/news' ? 'page' : undefined}>{c.nav[4]}</Link>
        <NavDropdown label={c.nav[5]} id="resources" openId={openDropdown} setOpenId={setOpenDropdown} onNavigate={closeMenu}>
          <Link href="/news#faq">{c.faq}</Link><Link href="/news#resources">{c.downloads}</Link>
        </NavDropdown>
        <Link href="/#contact" onClick={closeMenu}>{c.nav[6]}</Link>
        <div className="mobile-actions"><button className="language-button" onClick={toggleLanguage}>{c.language}</button><Link className="button button-primary" href="/membership" onClick={closeMenu}>{c.member}<ArrowRight size={16} /></Link></div>
      </nav>
      <div className="nav-actions"><button className="language-button" onClick={toggleLanguage} aria-label={language === 'en' ? 'Switch to Amharic' : 'ወደ እንግሊዝኛ ቀይር'}>{c.language}</button><Link className="button button-primary nav-cta" href="/membership">{c.member}<ArrowRight size={16} /></Link><button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button></div>
    </div></header>
  </>
}

function SiteFooter() {
  const { language } = useLanguage()
  const c = labels[language]
  return <footer className="footer" id="contact"><div className="footer-main"><div className="footer-brand"><Brand /><p>{c.footer}</p><span className="footer-note"><ShieldCheck size={14} /> MEMBER-OWNED · ETHIOPIA</span></div>
    <div className="footer-column"><h3>{c.explore}</h3><Link href="/about">{c.nav[1]}</Link><Link href="/membership">{c.nav[2]}</Link><Link href="/savings-loans#savings">{c.savings}</Link><Link href="/savings-loans#loans">{c.loans}</Link><Link href="/news">{c.nav[4]}</Link></div>
    <div className="footer-column"><h3>{c.resources}</h3><Link href="/membership#eligibility">{c.guidelines}</Link><Link href="/news#faq">{c.faq}</Link><Link href="/news#resources">{c.downloads}</Link></div>
    <div className="footer-column contact-column"><h3>{c.contact}</h3><p>{c.contactNote}</p><Link className="footer-contact-link" href="/membership">{c.member}<ArrowRight size={15} /></Link><span className="contact-pending">{c.notice}</span></div>
  </div><ContactForm language={language} /><div className="footer-bottom"><span>{c.copyright}</span><span className="footer-legal"><Link href="/news#privacy">{c.privacy}</Link><Link href="/news#terms">{c.terms}</Link></span></div></footer>
}

function SiteFrame({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const pathname = usePathname()
  const reducedMotion = useReducedMotion()
  return <div className={language === 'am' ? 'site amharic' : 'site'} lang={language}>
    <SiteHeader />
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
        transition={reducedMotion ? { duration: 0 } : { duration: 0.28, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
    <SiteFooter />
  </div>
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return <LanguageProvider><SiteFrame>{children}</SiteFrame></LanguageProvider>
}
