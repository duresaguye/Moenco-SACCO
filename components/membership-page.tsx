'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, FileText, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { useLanguage } from '@/components/language-context'
import { MembershipInterestForm } from '@/components/preview-forms'
import { MEMBERSHIP_FEES, SAVINGS_RULES } from '@/lib/sacco-config'

const content = {
  en: {
    eyebrow: 'MEMBERSHIP REQUEST', title: 'Take the first step toward membership.', intro: 'A clear guide for Moenco employees interested in joining the cooperative. Official application details are being confirmed.',
    stepsEyebrow: 'HOW TO GET STARTED', stepsTitle: 'Prepare your membership request.', steps: [
      ['Confirm eligibility', 'Membership is intended for eligible Moenco employees. Confirm the current requirements with the cooperative.'],
      ['Get the official application', 'Request the current membership form and instructions from Moenco SACCO.'],
      ['Confirm fees and terms', `A ${MEMBERSHIP_FEES.registration.value.toLocaleString()} ETB registration fee and a minimum of ${MEMBERSHIP_FEES.minimumShares.value} shares at ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ETB each are confirmed. An application fee also applies — the exact amount is still pending confirmation from the SACCO office.`],
      ['Submit through an approved channel', 'Use the official submission process provided by the cooperative and follow its payroll setup instructions.'],
    ],
    noticeEyebrow: 'APPLICATION CHANNEL', noticeTitle: 'Official request details to be confirmed.', noticeText: 'The membership form on this page is a preview only, not an official application. It does not send or save personal information. Moenco SACCO is still confirming the official application route.', noticeSub: 'Please do not enter real personal information until the official submission process is confirmed.',
    checklistTitle: 'Before you apply', checklist: ['Confirm you are eligible as a Moenco employee', 'Ask for the current application form and membership rules', 'Confirm the application fee amount and the payroll deduction process'], savingsTitle: 'Understand savings and loans', savingsText: 'Review the cooperative’s savings approach and loan categories before preparing your request.', savingsLink: 'Savings & loan information', faqTitle: 'Common questions', faq: [
      ['Who can apply?', 'Membership is intended for eligible Moenco employees. The cooperative’s current membership rules determine final eligibility.'],
      ['How much should I contribute?', `Non-management employees choose a fixed percentage of their salary, between ${SAVINGS_RULES.nonManagement.minPercent}% and ${SAVINGS_RULES.nonManagement.maxPercent}%, deducted through payroll. Management employees set an initial amount that increases by ${SAVINGS_RULES.management.annualIncreasePercent}% every January.`],
      ['What fees apply?', `The registration fee (${MEMBERSHIP_FEES.registration.value.toLocaleString()} ETB) and minimum share purchase (${MEMBERSHIP_FEES.minimumShareCapital.value.toLocaleString()} ETB) are confirmed. Annual charity and retirement contributions are ${MEMBERSHIP_FEES.annualCharity.value.toLocaleString()} ETB and ${MEMBERSHIP_FEES.annualRetirement.value.toLocaleString()} ETB; confirm when they are due. The application fee amount is still pending confirmation with Moenco SACCO.`],
    ]
  },
  am: {
    eyebrow: 'የአባልነት ጥያቄ', title: 'ወደ አባልነት የመጀመሪያ እርምጃዎን ይውሰዱ።', intro: 'ማኅበሩን መቀላቀል ለሚፈልጉ የሞኤንኮ ሠራተኞች ግልጽ መመሪያ። ይፋዊ የማመልከቻ መረጃዎች በማረጋገጥ ላይ ናቸው።',
    stepsEyebrow: 'እንዴት ይጀምሩ?', stepsTitle: 'የአባልነት ጥያቄዎን ያዘጋጁ።', steps: [
      ['ብቁነትዎን ያረጋግጡ', 'አባልነት ለብቁ የሞኤንኮ ሠራተኞች የተዘጋጀ ነው። የአሁኑን መስፈርቶች ከማኅበሩ ያረጋግጡ።'],
      ['ይፋዊ ማመልከቻውን ያግኙ', 'የአሁኑን የአባልነት ማመልከቻና መመሪያ ከሞኤንኮ ሳኮ ይጠይቁ።'],
      ['ክፍያዎችንና ውሎችን ያረጋግጡ', `${MEMBERSHIP_FEES.registration.value.toLocaleString()} ብር የምዝገባ ክፍያና ቢያንስ ${MEMBERSHIP_FEES.minimumShares.value} ድርሻ በ${MEMBERSHIP_FEES.pricePerShare.value.toLocaleString()} ብር ተረጋግጧል። የማመልከቻ ክፍያም ይጠበቃል፤ ትክክለኛው መጠን ከማህበሩ ጽሕፈት ቤት በመረጋገጥ ላይ ነው።`],
      ['በተፈቀደ መንገድ ያስገቡ', 'ማኅበሩ የሚያቀርበውን ይፋዊ የማስገቢያ ሂደት ይከተሉ፤ የደመወዝ ቅናሽ መመሪያዎችንም ያስፈጽሙ።'],
    ],
    noticeEyebrow: 'የማመልከቻ መንገድ', noticeTitle: 'ይፋዊ የጥያቄ መረጃ ይረጋገጣል።', noticeText: 'በዚህ ገጽ ያለው የአባልነት ቅጽ የቅድመ እይታ ብቻ ነው፤ ይፋዊ ማመልከቻ አይደለም። የግል መረጃን አይልክም ወይም አያስቀምጥም። ሞኤንኮ ሳኮ ይፋዊውን የማመልከቻ መንገድ እያረጋገጠ ነው።', noticeSub: 'ይፋዊው የማስገቢያ ሂደት እስኪረጋገጥ ድረስ እውነተኛ የግል መረጃ አያስገቡ።',
    checklistTitle: 'ከማመልከትዎ በፊት', checklist: ['እንደ ሞኤንኮ ሠራተኛ ብቁነትዎን ያረጋግጡ', 'የአሁኑን ማመልከቻና የአባልነት ደንብ ይጠይቁ', 'የማመልከቻ ክፍያ መጠንና የደመወዝ ቅናሽ ሂደትን ያረጋግጡ'], savingsTitle: 'ቁጠባና ብድርን ይረዱ', savingsText: 'ጥያቄዎን ከማዘጋጀትዎ በፊት የማኅበሩን የቁጠባ አሠራርና የብድር አይነቶች ይመልከቱ።', savingsLink: 'የቁጠባና ብድር መረጃ', faqTitle: 'ተደጋጋሚ ጥያቄዎች', faq: [
      ['ማን ማመልከት ይችላል?', 'አባልነት ለብቁ የሞኤንኮ ሠራተኞች የተዘጋጀ ነው። የአሁኑ የማኅበሩ ደንብ ብቁነትን ይወስናል።'],
      ['ምን ያህል መዋጮ ያስፈልጋል?', `የአመራር ያልሆኑ ሠራተኞች ከ${SAVINGS_RULES.nonManagement.minPercent}% እስከ ${SAVINGS_RULES.nonManagement.maxPercent}% ከደመወዛቸው በደመወዝ ቅናሽ ይቆጥባሉ። የአመራር ሠራተኞች የመጀመሪያ መጠን ይመርጣሉ፤ በየዓመቱ ጥር ወርም በ${SAVINGS_RULES.management.annualIncreasePercent}% ይጨምራል።`],
      ['ምን ክፍያዎች አሉ?', `የምዝገባ ክፍያ (${MEMBERSHIP_FEES.registration.value.toLocaleString()} ብር) እና ዝቅተኛው የድርሻ ግዢ (${MEMBERSHIP_FEES.minimumShareCapital.value.toLocaleString()} ብር) ተረጋግጠዋል። ዓመታዊ የበጎ አድራጎትና የጡረታ መዋጮዎች ${MEMBERSHIP_FEES.annualCharity.value.toLocaleString()} ብር እና ${MEMBERSHIP_FEES.annualRetirement.value.toLocaleString()} ብር ናቸው፤ የሚከፈሉበትን ጊዜ ያረጋግጡ። የማመልከቻ ክፍያ መጠን ከሞኤንኮ ሳኮ በመረጋገጥ ላይ ነው።`],
    ]
  }
}

export function MembershipPage() {
  const { language } = useLanguage()
  const reducedMotion = useReducedMotion()
  const c = content[language]
  return <main lang={language}>
    <PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image="/moenco-workplace.png" alt="Moenco colleagues working together in an Ethiopian office" />
    <section className="membership-request section-pad" id="eligibility"><div className="membership-request-heading"><p className="eyebrow">{c.stepsEyebrow}</p><h2>{c.stepsTitle}</h2></div><div className="request-steps">{c.steps.map(([title, text], i) => <motion.article className="request-step" key={title} initial={reducedMotion ? false : { opacity: 0, y: 10 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}><span className="request-count">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><motion.span className="request-check" initial={reducedMotion ? false : { scale: 0.7, opacity: 0.5 }} whileInView={reducedMotion ? undefined : { scale: 1, opacity: 1 }} viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 250, damping: 20, delay: i * 0.08 + 0.1 }}><Check size={18} /></motion.span></motion.article>)}</div><MembershipInterestForm language={language} /><div className="request-callout" id="request-channel"><div className="request-callout-icon"><ShieldCheck size={22} /></div><div><p className="eyebrow">{c.noticeEyebrow}</p><h3>{c.noticeTitle}</h3><p>{c.noticeText}</p><p className="request-subnote"><FileText size={15} />{c.noticeSub}</p></div></div></section>
    <section className="membership-checklist section-pad"><div className="checklist-card"><p className="eyebrow">{c.checklistTitle}</p>{c.checklist.map((item) => <p className="checklist-item" key={item}><Check size={16} />{item}</p>)}<div className="membership-costs"><p className="costs-heading">{language === 'en' ? 'Known membership costs' : 'የታወቁ የአባልነት ወጪዎች'}</p><div><span>{language === 'en' ? 'Registration fee' : 'የምዝገባ ክፍያ'}</span><b>{MEMBERSHIP_FEES.registration.value.toLocaleString()} ETB</b></div><div><span>{language === 'en' ? `Minimum share purchase (${MEMBERSHIP_FEES.minimumShares.value} shares)` : `ዝቅተኛ የድርሻ ግዢ (${MEMBERSHIP_FEES.minimumShares.value} ድርሻ)`}</span><b>{MEMBERSHIP_FEES.minimumShareCapital.value.toLocaleString()} ETB</b></div><div><span>{language === 'en' ? 'Application fee' : 'የማመልከቻ ክፍያ'}</span><b>{language === 'en' ? 'Amount pending confirmation' : 'መጠኑ ይረጋገጣል'}</b></div><div><span>{language === 'en' ? 'Annual charity contribution' : 'ዓመታዊ የበጎ አድራጎት መዋጮ'}</span><b>{MEMBERSHIP_FEES.annualCharity.value.toLocaleString()} ETB</b></div><div><span>{language === 'en' ? 'Annual retirement contribution' : 'ዓመታዊ የጡረታ መዋጮ'}</span><b>{MEMBERSHIP_FEES.annualRetirement.value.toLocaleString()} ETB</b></div><p className="costs-note">{language === 'en' ? 'Annual amounts shown separately. Confirm when they are due with the cooperative.' : 'ዓመታዊ መዋጮዎች በተለይ ቀርበዋል። የሚከፈሉበትን ጊዜ ከማኅበሩ ያረጋግጡ።'}</p></div></div><div className="checklist-copy"><p className="eyebrow">{c.savingsTitle}</p><h2>{c.savingsTitle}</h2><p>{c.savingsText}</p><Link href="/savings-loans" className="text-link green-link">{c.savingsLink}<ArrowRight size={16} /></Link></div></section>
    <section className="membership-faq section-pad" id="faq"><div className="section-heading"><div><p className="eyebrow">MOENCO SACCO</p><h2>{c.faqTitle}</h2></div></div><div className="faq-list">{c.faq.map(([question, answer]) => <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
  </main>
}
