'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Check, ShieldCheck, Wallet } from 'lucide-react'
import { useLanguage } from '@/components/language-context'
import { BANKING, BRANCH_COUNT, LOAN_PRODUCTS, MEMBERSHIP_FEES } from '@/lib/sacco-config'

export type Language = 'en' | 'am'

export const copy = {
  en: {
    nav: ['Home', 'About', 'Membership', 'Savings & Loans', 'News', 'Resources', 'Contact'],
    member: 'Become a member', language: 'አማርኛ', eyebrow: 'MOENCO WORKERS SAVINGS & CREDIT COOPERATIVE',
    title: 'Save together.\nGrow together.', intro: 'Build your financial future with a cooperative that puts its members first. Save conveniently through your salary and access affordable loans when you need them.', explore: 'Explore our services', trust: `Member savings and share capital are held with ${BANKING.bankNameEn}.`,
    aboutEyebrow: 'A COOPERATIVE, BY DESIGN', aboutTitle: 'Built on shared responsibility.', aboutText: 'Moenco SACCO is a member-owned savings and credit cooperative established to support the financial wellbeing of Moenco employees. Through collective savings, shared ownership and accessible credit, members work together to create greater financial security for themselves and their families.', aboutText2: `Members contribute savings through payroll deductions; loan repayments are also managed through payroll for convenience. Moenco SACCO currently serves employees across ${BRANCH_COUNT} locations in Ethiopia, and members participate in governance according to the cooperative's rules.`, aboutLink: 'How membership works',
    savingsEyebrow: 'SAVE WITH PURPOSE', savingsTitle: 'Small contributions. Stronger futures.', savingsVisual: 'A steady habit, built together.', savingsImageAlt: 'Moenco member reviewing a savings plan at work', steps: ['Monthly salary', 'Payroll deduction', 'Member savings'], stepDetails: ['Choose your contribution under the cooperative’s savings rules.', 'Your agreed contribution is taken from your salary through payroll.', 'The deducted amount is deposited as your savings with the cooperative.'], savingsLink: 'See savings rules and loan options',
    loansEyebrow: 'SUPPORT WHEN IT MATTERS', loansTitle: 'Credit that understands your needs.', loansIntro: 'Explore support for life’s bigger plans, essential purchases and seasonal moments.', learn: 'View loan details', loans: [
      { name: 'Normal loan', type: 'GENERAL-PURPOSE BORROWING', image: 'normal-loan', imageAlt: 'Ethiopian couple planning a home purchase together', text: `Up to ${LOAN_PRODUCTS.normal.maxAmount.toLocaleString()} ETB · ${(LOAN_PRODUCTS.normal.annualInterestRate * 100).toFixed(0)}% annual interest · up to ${LOAN_PRODUCTS.normal.maxMonths} months.` },
      { name: 'Material loan', type: 'ESSENTIAL PURCHASES', image: 'material-loan', imageAlt: 'Family choosing essential home appliances', text: `Up to ${LOAN_PRODUCTS.material.maxAmount.toLocaleString()} ETB · interest-free with a ${(LOAN_PRODUCTS.material.serviceChargeRate * 100).toFixed(0)}% flat service charge.` },
      { name: 'Holiday loan', type: 'PERSONAL & SEASONAL NEEDS', image: 'holiday-loan', imageAlt: 'Family sharing a holiday meal at home', text: `Up to ${LOAN_PRODUCTS.holiday.maxAmount.toLocaleString()} ETB · interest-free with a ${(LOAN_PRODUCTS.holiday.serviceChargeRate * 100).toFixed(0)}% flat service charge.` },
    ],
    membershipEyebrow: 'YOUR NEXT STEP', membershipTitle: 'Getting started is simple.', membershipIntro: 'A clear path to becoming part of the cooperative.', membership: [
      ['Check eligibility', 'Confirm that you meet the cooperative’s membership requirements as a Moenco employee.'],
      ['Apply for membership', `Pay the ${MEMBERSHIP_FEES.registration.value.toLocaleString()} ETB registration fee and purchase at least ${MEMBERSHIP_FEES.minimumShares.value} shares at ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ETB each; an application fee also applies, pending confirmation from the SACCO office.`],
      ['Set up payroll deductions', 'Arrange your agreed savings contributions through the payroll system.'],
      ['Start saving and borrowing', 'Build your savings and access eligible loan products according to cooperative rules.'],
    ],
    whyEyebrow: 'WHY MOENCO SACCO', whyTitle: 'More than savings. Shared ownership.', values: [
      ['Member-owned & governed', 'Members are the foundation of the cooperative and participate in its governance.'],
      ['Convenient payroll savings', 'Save consistently without having to remember monthly manual transfers.'],
      ['Transparent & responsible', 'Clear membership requirements and understandable loan conditions.'],
      ['Accessible credit', 'Loan products designed around members’ needs, subject to cooperative policies.'],
    ], ctaTitle: 'Your financial future\nstarts together.', ctaText: 'Become part of a cooperative built around the people of Moenco. Start saving, share ownership and move forward with confidence.',
    footerText: 'A member-owned savings and credit cooperative supporting the financial wellbeing of Moenco employees.', links: 'Explore', resources: 'Resources', contact: 'Get in touch', placeholder: 'Official contact details to be confirmed', copyright: '© 2026 Moenco SACCO. All rights reserved.', privacy: 'Privacy policy', terms: 'Terms & conditions', notice: 'Official membership requirements, fees and contact details will be confirmed by Moenco SACCO.'
  },
  am: {
    nav: ['መነሻ', 'ስለ እኛ', 'አባልነት', 'ቁጠባና ብድር', 'ዜና', 'መረጃዎች', 'ያግኙን'],
    member: 'አባል ይሁኑ', language: 'English', eyebrow: 'የሞኤንኮ ሠራተኞች ቁጠባና ብድር ማኅበር',
    title: 'በጋራ እንቆጥብ።\nበጋራ እናድግ።', intro: 'አባላቱን በቅድሚያ በሚያስቀምጥ ማኅበር የገንዘብ ደህንነትዎን ይገንቡ። በደመወዝዎ በቀላሉ ይቆጥቡ፤ በሚያስፈልግዎት ጊዜም ተመጣጣኝ ብድር ያግኙ።', explore: 'አገልግሎቶቻችንን ይመልከቱ', trust: `የአባላት ቁጠባና ካፒታል በ${BANKING.bankNameAm} ይያዛል።`,
    aboutEyebrow: 'በትብብር የተመሠረተ', aboutTitle: 'በጋራ ኃላፊነት የተገነባ።', aboutText: 'ሞኤንኮ ሳኮ የሞኤንኮ ሠራተኞችን የገንዘብ ደህንነት ለመደገፍ የተቋቋመ በአባላቱ የሚተዳደር የቁጠባና ብድር ማኅበር ነው። በጋራ ቁጠባ፣ በጋራ ባለቤትነትና ተደራሽ ብድር አባላት ለራሳቸውና ለቤተሰቦቻቸው የተሻለ የገንዘብ ደህንነት ይገነባሉ።', aboutText2: `ሞኤንኮ ሳኮ በአሁኑ ጊዜ በኢትዮጵያ በ${BRANCH_COUNT} የሥራ ቦታዎች የሞኤንኮ ሠራተኞችን ያገለግላል። አባላት በደመወዝ ቅናሽ ይቆጥባሉ፤ የብድር ክፍያዎችም በደመወዝ ቅናሽ ይፈጸማሉ። አባላት በማኅበሩ ደንብ መሠረት በአስተዳደሩ ይሳተፋሉ።`, aboutLink: 'የአባልነት ሂደት',
    savingsEyebrow: 'በዓላማ ይቆጥቡ', savingsTitle: 'ትንሽ ቁጠባ። ጠንካራ ወደፊት።', savingsVisual: 'በጋራ የሚገነባ ቋሚ ልምድ።', savingsImageAlt: 'የሞኤንኮ አባል በሥራ ቦታ የቁጠባ ዕቅድን ሲመለከት', steps: ['ወርሃዊ ደመወዝ', 'የደመወዝ ቅናሽ', 'የአባልነት ቁጠባ'], stepDetails: ['የቁጠባ መዋጮዎን በማኅበሩ ደንብ መሠረት ይምረጡ።', 'የተስማሙበት መዋጮ ከደመወዝዎ በቀጥታ ይቆረጣል።', 'የተቆረጠው መጠን በማኅበሩ ውስጥ እንደ ቁጠባዎ ይመዘገባል።'], savingsLink: 'የቁጠባና ብድር ደንቦችን ይመልከቱ',
    loansEyebrow: 'በሚያስፈልግ ጊዜ ድጋፍ', loansTitle: 'ፍላጎትዎን የሚረዳ ብድር።', loansIntro: 'ለአባላት የተዘጋጁ የብድር አማራጮችን ይመልከቱ።', learn: 'ዝርዝሩን ይመልከቱ', loans: [
      { name: 'መደበኛ ብድር', type: 'ለአጠቃላይ ፍላጎቶች', image: 'normal-loan', imageAlt: 'የኢትዮጵያውያን ባልና ሚስት የቤት ግዢ ዕቅድ ሲያወጡ', text: `እስከ ${LOAN_PRODUCTS.normal.maxAmount.toLocaleString()} ብር · ${((LOAN_PRODUCTS.normal.annualInterestRate * 100).toFixed(0))}% ዓመታዊ ወለድ · እስከ ${LOAN_PRODUCTS.normal.maxMonths} ወር።` },
      { name: 'የቁሳቁስ ብድር', type: 'አስፈላጊ ግዢዎች', image: 'material-loan', imageAlt: 'ቤተሰብ አስፈላጊ የቤት ዕቃዎችን ሲመርጥ', text: `እስከ ${LOAN_PRODUCTS.material.maxAmount.toLocaleString()} ብር · ወለድ የለሽ፣ ${((LOAN_PRODUCTS.material.serviceChargeRate * 100).toFixed(0))}% ቋሚ አገልግሎት ክፍያ።` },
      { name: 'የበዓል ብድር', type: 'የግልና ወቅታዊ ፍላጎቶች', image: 'holiday-loan', imageAlt: 'ቤተሰብ በዓልን በቤት ውስጥ ሲያከብር', text: `እስከ ${LOAN_PRODUCTS.holiday.maxAmount.toLocaleString()} ብር · ወለድ የለሽ፣ ${((LOAN_PRODUCTS.holiday.serviceChargeRate * 100).toFixed(0))}% ቋሚ አገልግሎት ክፍያ።` },
    ],
    membershipEyebrow: 'ቀጣይ እርምጃዎ', membershipTitle: 'መጀመር ቀላል ነው።', membershipIntro: 'የማኅበሩ አባል ለመሆን ግልጽ ሂደት።', membership: [
      ['ብቁነትዎን ያረጋግጡ', 'እንደ ሞኤንኮ ሠራተኛ የማኅበሩን የአባልነት መስፈርቶች እንደሚያሟሉ ያረጋግጡ።'],
      ['ለአባልነት ያመልክቱ', `${MEMBERSHIP_FEES.registration.value.toLocaleString()} ብር የምዝገባ ክፍያ ይክፈሉ እና ቢያንስ ${MEMBERSHIP_FEES.minimumShares.value} ድርሻዎችን በ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ብር ይግዙ፤ የማመልከቻ ክፍያም ይጠበቃል፣ መጠኑ ከማህበሩ ጽሕፈት ቤት በመረጋገጥ ላይ ነው።`],
      ['የደመወዝ ቅናሽ ያዘጋጁ', 'የተስማሙበትን የቁጠባ መዋጮ በደመወዝ ሥርዓቱ ያዘጋጁ።'],
      ['መቆጠብና መበደር ይጀምሩ', 'ቁጠባዎን ይገንቡ፤ በማኅበሩ ደንብ መሠረት ብቁ የሆኑ ብድሮችን ያግኙ።'],
    ],
    whyEyebrow: 'ለምን ሞኤንኮ ሳኮ?', whyTitle: 'ከቁጠባ በላይ። በጋራ ባለቤትነት።', values: [
      ['በአባላት የተያዘና የሚተዳደር', 'አባላት የማኅበሩ መሠረት ናቸው፤ በአስተዳደሩም ይሳተፋሉ።'],
      ['ቀላል የደመወዝ ቁጠባ', 'በየወሩ በእጅ ማስተላለፍን ሳያስታውሱ በቋሚነት ይቆጥቡ።'],
      ['ግልጽና ኃላፊነት ያለው', 'ግልጽ የአባልነት መስፈርቶችና በቀላሉ የሚገቡ የብድር ሁኔታዎች።'],
      ['ተደራሽ ብድር', 'በማኅበሩ መመሪያ መሠረት ለአባላት ፍላጎት የተዘጋጁ ብድሮች።'],
    ], ctaTitle: 'የገንዘብ ደህንነትዎ\nበጋራ ይጀምራል።', ctaText: 'በሞኤንኮ ሠራተኞች ዙሪያ የተገነባ ማኅበር አካል ይሁኑ። ይቆጥቡ፣ ባለቤትነትን ይጋሩ፣ በእምነትም ወደፊት ይሂዱ።',
    footerText: 'የሞኤንኮ ሠራተኞችን የገንዘብ ደህንነት የሚደግፍ በአባላቱ የሚተዳደር የቁጠባና ብድር ማኅበር።', links: 'አሰሳ', resources: 'መረጃዎች', contact: 'ያግኙን', placeholder: 'ይፋዊ የመገኛ መረጃ በኋላ ይረጋገጣል', copyright: '© 2026 ሞኤንኮ ሳኮ። መብቱ በሕግ የተጠበቀ ነው።', privacy: 'የግላዊነት መመሪያ', terms: 'ውሎችና ሁኔታዎች', notice: 'ይፋዊ የአባልነት መስፈርቶች፣ ክፍያዎችና የመገኛ መረጃዎች በሞኤንኮ ሳኮ ይረጋገጣሉ።'
  }
}

export function MoencoHomepage() {
  const { language } = useLanguage()
  const reducedMotion = useReducedMotion()
  const c = copy[language]
  const revealProps = {
    initial: reducedMotion ? false : { opacity: 0, y: 22 },
    whileInView: reducedMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: reducedMotion ? { duration: 0 } : { duration: 0.62, ease: 'easeOut' as const },
  }
  return <main lang={language}>

    <motion.section className="hero" id="home"><Image className="hero-image" src="/moenco-hero.png" alt="Ethiopian professional in a bright Addis Ababa workplace" fill priority sizes="100vw" /><div className="hero-shade" /><motion.div className="hero-content" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.72, delay: 0.12, ease: 'easeOut' }}><p className="eyebrow hero-eyebrow"><span />{c.eyebrow}</p><h1>{c.title}</h1><p className="hero-intro">{c.intro}</p><div className="hero-actions"><a href="#membership" className="button button-accent">{c.member}<ArrowRight size={17} /></a><a href="#savings" className="text-link light-link">{c.explore}<ArrowDownRight size={17} /></a></div><div className="hero-foot"><span className="hero-seal"><ShieldCheck size={17} /></span><span>{c.trust}</span></div></motion.div><div className="hero-index"><span>01</span><span className="index-line" /><span>MOENCO SACCO</span></div></motion.section>

    <motion.section className="about section-pad" id="about" {...revealProps}><div className="about-copy"><p className="eyebrow">{c.aboutEyebrow}</p><h2>{c.aboutTitle}</h2><p className="lead">{c.aboutText}</p><p className="body-copy">{c.aboutText2}</p><a className="text-link green-link" href="#membership">{c.aboutLink}<ArrowRight size={16} /></a></div><div className="about-visual"><Image src="/moenco-workplace.png" alt="Ethiopian colleagues working together in a modern office" fill sizes="(max-width: 760px) 100vw, 50vw" /><div className="image-caption"><span className="caption-mark">M</span><span>Shared effort.<br /><b>Stronger futures.</b></span></div><span className="about-side-note">MOENCO · ADDIS ABABA</span></div></motion.section>

    <motion.section className="savings section-pad" id="savings" {...revealProps}><div className="savings-top"><div className="savings-heading"><p className="eyebrow">{c.savingsEyebrow}</p><h2>{c.savingsTitle}</h2></div><div className="savings-feature"><Image src="/sacco-savings.png" alt={c.savingsImageAlt} fill sizes="(max-width: 700px) 100vw, 48vw" /><span className="savings-feature-caption">{c.savingsVisual}</span></div></div><div className="savings-flow">{c.steps.map((step, i) => <motion.article className="flow-step" key={step} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.42, delay: i * 0.1, ease: 'easeOut' }}><span className="flow-number">0{i + 1}</span><motion.span className="flow-icon" initial={reducedMotion ? false : { scale: 0.8, rotate: -8 }} whileInView={reducedMotion ? undefined : { scale: 1, rotate: 0 }} whileHover={reducedMotion ? undefined : { y: -2, rotate: -4 }} viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: i * 0.1 + 0.12 }} aria-hidden="true">{i === 0 ? <Wallet /> : i === 1 ? <ArrowRight /> : <Check />}</motion.span><h3 className="flow-label">{step}</h3><p className="flow-detail">{c.stepDetails[i]}</p>{i < 2 && <span className="flow-connector" aria-hidden="true" />}</motion.article>)}</div><a className="text-link green-link savings-link" href="/savings-loans#savings">{c.savingsLink}<ArrowRight size={16} /></a></motion.section>

    <motion.section className="loans section-pad" id="loans" {...revealProps}><div className="section-heading"><div><p className="eyebrow">{c.loansEyebrow}</p><h2>{c.loansTitle}</h2></div><p>{c.loansIntro}</p></div><div className="loan-grid">{c.loans.map((loan, i) => <article className={`loan-card loan-${i + 1}`} key={loan.name}><div className="loan-card-image"><Image src={`/sacco-${loan.image}.png`} alt={loan.imageAlt} fill sizes="(max-width: 700px) 100vw, 33vw" /><span className="loan-number">0{i + 1}</span></div><p className="loan-type">{loan.type}</p><h3>{loan.name}</h3><p className="loan-description">{loan.text}</p><a href="#membership" className="card-link">{c.learn}<ArrowRight size={16} /></a></article>)}</div><p className="loan-disclaimer">{language === 'en' ? 'Loan terms and eligibility are governed by the cooperative’s current policies.' : 'የብድር ሁኔታዎችና ብቁነት በማኅበሩ የአሁኑ መመሪያዎች ይወሰናሉ።'}</p></motion.section>

    <motion.section className="membership section-pad" id="membership" {...revealProps}><div className="membership-heading"><p className="eyebrow">{c.membershipEyebrow}</p><h2>{c.membershipTitle}</h2><p>{c.membershipIntro}</p></div><div className="steps-grid">{c.membership.map(([title, text], i) => <motion.article className="member-step" key={title} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.42, delay: i * 0.08, ease: 'easeOut' }}><div className="step-top"><span className="step-count">0{i + 1}</span><motion.span className="step-check" initial={reducedMotion ? false : { scale: 0.7 }} whileInView={reducedMotion ? undefined : { scale: 1 }} viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 260, damping: 18, delay: i * 0.08 + 0.12 }}><Check size={15} /></motion.span></div><h3>{title}</h3><p>{text}</p></motion.article>)}</div><div className="membership-bottom"><p>{language === 'en' ? 'Ready to take the first step?' : 'መጀመሪያውን እርምጃ ለመውሰድ ዝግጁ ነዎት?'}</p><a href="#contact" className="button button-primary">{c.member}<ArrowRight size={16} /></a></div></motion.section>

    <motion.section className="why section-pad" id="news" {...revealProps}><div className="why-intro"><p className="eyebrow">{c.whyEyebrow}</p><h2>{c.whyTitle}</h2><span className="why-rule" /></div><div className="value-list">{c.values.map(([title, text], i) => <article className="value-item" key={title}><span className="value-index">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ArrowDownRight className="value-arrow" size={18} /></article>)}</div></motion.section>

    <motion.section className="final-cta" id="resources" {...revealProps}><div className="cta-inner"><p className="eyebrow">MOENCO SACCO · MEMBERS FIRST</p><h2>{c.ctaTitle}</h2><p>{c.ctaText}</p><a href="#membership" className="button button-accent">{c.member}<ArrowRight size={17} /></a></div><div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" /></motion.section>

  </main>
}
