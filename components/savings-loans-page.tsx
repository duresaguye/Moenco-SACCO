'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, BookOpen, Check, HandCoins, Wallet } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { useLanguage } from '@/components/language-context'
import { LOAN_PRODUCTS, SAVINGS_RULES } from '@/lib/sacco-config'

const content = {
  en: {
    eyebrow: 'SAVINGS & LOANS', title: 'Save steadily. Borrow thoughtfully.', intro: 'Straightforward ways for eligible Moenco employees to build savings and access cooperative credit.',
    savingsTag: 'SAVINGS', savingsTitle: 'A habit that grows with you.', savingsText: `Non-management employees choose a regular contribution of ${SAVINGS_RULES.nonManagement.minPercent}%–${SAVINGS_RULES.nonManagement.maxPercent}% of monthly salary. Management employees set an initial amount that increases by ${SAVINGS_RULES.management.annualIncreasePercent}% each January. Both contributions are deducted through payroll and deposited as member savings.`, flow: ['Monthly salary', 'Payroll deduction', 'Member savings'], flowDetails: ['Choose a contribution according to the cooperative’s rules.', 'Your agreed contribution is taken directly from your salary.', 'The deducted amount is deposited as savings with the cooperative.'], note: 'Savings contributions and account terms are set by Moenco SACCO policy.',
    loansTag: 'LOAN PRODUCTS', loansTitle: 'Support for different needs.', loansIntro: 'The cooperative offers three loan categories. Eligibility, application terms and repayment conditions are governed by its current policies.', learn: 'Request membership details', loanData: [
      { id: 'normal-loan', name: 'Normal loan', category: 'General-purpose borrowing', text: 'For larger planned expenses and important financial commitments.', detail: 'A guarantor is required. An annual insurance fee may also apply; its rate is pending confirmation from Moenco SACCO.', icon: 'wallet' },
      { id: 'material-loan', name: 'Material loan', category: 'Essential purchases', text: 'Helps members pay for important household materials.', detail: 'Applications typically open each September and must be fully repaid by the following September.', icon: 'hand' },
      { id: 'holiday-loan', name: 'Holiday loan', category: 'Personal and seasonal needs', text: 'Helps eligible members cover holiday and seasonal expenses.', detail: 'Applications typically open each April and must be fully repaid by the following April.', icon: 'book' },
    ],
    howTitle: 'From saving to support.', howText: 'Members build savings through agreed payroll contributions. When a need arises, eligible members can apply for the loan product that fits, subject to the cooperative’s current rules.', ctaTitle: 'Want to become a member?', ctaText: 'Review the membership request steps and see what official details are still to be confirmed.', cta: 'Membership request'
  },
  am: {
    eyebrow: 'ቁጠባና ብድር', title: 'በቋሚነት ይቆጥቡ። በጥንቃቄ ይበደሩ።', intro: 'ለብቁ የሞኤንኮ ሠራተኞች ቁጠባ ለመገንባትና የማኅበር ብድር ለማግኘት ቀላል መንገዶች።',
    savingsTag: 'ቁጠባ', savingsTitle: 'ከእርስዎ ጋር የሚያድግ ልማድ።', savingsText: `አስተዳደር ያልሆኑ ሠራተኞች ከወርሃዊ ደመወዛቸው ${SAVINGS_RULES.nonManagement.minPercent}%–${SAVINGS_RULES.nonManagement.maxPercent}% የሚሆነውን መዋጮ ይመርጣሉ። የአስተዳደር ሠራተኞች የመጀመሪያ መጠን ይወስናሉ፤ ይህም በየጥር ወር ${SAVINGS_RULES.management.annualIncreasePercent}% ይጨምራል። መዋጮው በደመወዝ ቅናሽ ይወሰዳል፤ ከዚያም በአባልነት ቁጠባ ይመዘገባል።`, flow: ['ወርሃዊ ደመወዝ', 'የደመወዝ ቅናሽ', 'የአባልነት ቁጠባ'], flowDetails: ['መዋጮዎን በማኅበሩ ደንብ መሠረት ይምረጡ።', 'የተስማሙበት መዋጮ ከደመወዝዎ በቀጥታ ይቆረጣል።', 'የተቆረጠው መጠን በአባልነት ቁጠባዎ ይመዘገባል።'], note: 'የቁጠባ መዋጮና የሂሳብ ውሎች በሞኤንኮ ሳኮ መመሪያ ይወሰናሉ።',
    loansTag: 'የብድር አይነቶች', loansTitle: 'ለተለያዩ ፍላጎቶች ድጋፍ።', loansIntro: 'ማኅበሩ ሦስት የብድር አይነቶችን ያቀርባል። ብቁነት፣ የማመልከቻ ውሎችና የክፍያ ሁኔታዎች በአሁኑ መመሪያዎቹ ይወሰናሉ።', learn: 'የአባልነት መረጃ ይጠይቁ', loanData: [
      { id: 'normal-loan', name: 'መደበኛ ብድር', category: 'ለአጠቃላይ ፍላጎቶች', text: `ትልቅ የገንዘብ ፍላጎትና አስፈላጊ የሕይወት ጉዳዮችን ለመደገፍ የሚረዳ ብድር — እስከ ${LOAN_PRODUCTS.normal.maxAmount.toLocaleString()} ብር በ${(LOAN_PRODUCTS.normal.annualInterestRate * 100).toFixed(0)}% ዓመታዊ ወለድ፣ በቀሪ ሂሳብ ቀንሶ እስከ ${LOAN_PRODUCTS.normal.maxMonths} ወር ይከፈላል።`, detail: 'ተያዥ ያስፈልጋል፤ ዓመታዊ የመድን ክፍያ ሊኖር ይችላል፣ ትክክለኛው መጠን ከማህበሩ እስኪረጋገጥ እየተጠበቀ ነው።', icon: 'wallet' },
      { id: 'material-loan', name: 'የቁሳቁስ ብድር', category: 'አስፈላጊ ግዢዎች', text: `ለቤት ቁሳቁስ የሚሰጥ እስከ ${LOAN_PRODUCTS.material.maxAmount.toLocaleString()} ብር ወለድ የለሽ የአጭር ጊዜ ብድር፣ በ${(LOAN_PRODUCTS.material.serviceChargeRate * 100).toFixed(0)}% ቋሚ የአገልግሎት ክፍያ እስከ ${LOAN_PRODUCTS.material.maxMonths} ወር ይከፈላል።`, detail: 'ማመልከቻ በየዓመቱ መስከረም ይከፈታል፤ በሚቀጥለው መስከረም ሙሉ በሙሉ መከፈል አለበት።', icon: 'hand' },
      { id: 'holiday-loan', name: 'የበዓል ብድር', category: 'የግልና ወቅታዊ ፍላጎቶች', text: `የበዓል ወጪን ለመሸፈን የሚያግዝ እስከ ${LOAN_PRODUCTS.holiday.maxAmount.toLocaleString()} ብር ወለድ የለሽ የአጭር ጊዜ ብድር፣ በ${(LOAN_PRODUCTS.holiday.serviceChargeRate * 100).toFixed(0)}% ቋሚ የአገልግሎት ክፍያ እስከ ${LOAN_PRODUCTS.holiday.maxMonths} ወር ይከፈላል።`, detail: 'ማመልከቻ በየዓመቱ ሚያዝያ ይከፈታል፤ በሚቀጥለው ሚያዝያ ሙሉ በሙሉ መከፈል አለበት።', icon: 'book' },
    ],
    howTitle: 'ከቁጠባ ወደ ድጋፍ።', howText: 'አባላት በተስማሙበት የደመወዝ መዋጮ ቁጠባቸውን ይገነባሉ። ፍላጎት ሲኖር ብቁ አባላት በማኅበሩ የአሁኑ ደንብ መሠረት የሚስማማቸውን ብድር ማመልከት ይችላሉ።', ctaTitle: 'አባል መሆን ይፈልጋሉ?', ctaText: 'የአባልነት ሂደቱን ይመልከቱ፤ የሚረጋገጡ ይፋዊ መረጃዎችንም ይመልከቱ።', cta: 'የአባልነት ጥያቄ'
  }
}

export function SavingsLoansPage() {
  const { language } = useLanguage()
  const reducedMotion = useReducedMotion()
  const c = content[language]
  const isAm = language === 'am'
  const icons = [<Wallet key="wallet" />, <HandCoins key="hand" />, <BookOpen key="book" />]
  const loanFacts = (id: string) => {
    const months = isAm ? 'ወር' : 'months'
    const eligible = isAm ? 'ከአባልነት 6 ወር በኋላ' : 'After 6 months of membership'
    if (id === 'normal-loan') return [
      [isAm ? 'የብድር መጠን' : 'Loan amount', `${LOAN_PRODUCTS.normal.minAmount.toLocaleString()}–${LOAN_PRODUCTS.normal.maxAmount.toLocaleString()} ETB`],
      [isAm ? 'ወለድ' : 'Interest', `${(LOAN_PRODUCTS.normal.annualInterestRate * 100).toFixed(0)}% ${isAm ? 'በዓመት፣ በቀሪ ሂሳብ' : 'annual, reducing balance'}`],
      [isAm ? 'የመክፈያ ጊዜ' : 'Repayment period', `${LOAN_PRODUCTS.normal.maxMonths} ${months} ${isAm ? 'ድረስ' : 'maximum'}`],
      [isAm ? 'ብቁነት' : 'Eligibility', eligible],
    ]
    const product = id === 'material-loan' ? LOAN_PRODUCTS.material : LOAN_PRODUCTS.holiday
    return [
      [isAm ? 'የብድር መጠን' : 'Loan amount', `${product.minAmount.toLocaleString()}–${product.maxAmount.toLocaleString()} ETB`],
      [isAm ? 'የአገልግሎት ክፍያ' : 'Service charge', `${(product.serviceChargeRate * 100).toFixed(0)}% ${isAm ? 'ጠፍጣፋ ክፍያ' : 'flat charge'}`],
      [isAm ? 'የመክፈያ ጊዜ' : 'Repayment period', `${product.maxMonths} ${months} ${isAm ? 'ድረስ' : 'maximum'}`],
      [isAm ? 'ብቁነት' : 'Eligibility', eligible],
    ]
  }
  return <main lang={language}>
    <PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image="/moenco-hero.png" alt="Ethiopian professional in a modern Addis Ababa workplace" />
    <section className="savings-detail section-pad" id="savings"><div className="savings-detail-head"><div><p className="eyebrow">{c.savingsTag}</p><h2>{c.savingsTitle}</h2></div><p>{c.savingsText}</p></div><div className="savings-flow">{c.flow.map((label, i) => <motion.article className="flow-step" key={label} initial={reducedMotion ? false : { opacity: 0, y: 12 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={reducedMotion ? { duration: 0 } : { duration: 0.42, delay: i * 0.1, ease: 'easeOut' }}><span className="flow-number">0{i + 1}</span><motion.span className="flow-icon" initial={reducedMotion ? false : { scale: 0.8, rotate: -8 }} whileInView={reducedMotion ? undefined : { scale: 1, rotate: 0 }} whileHover={reducedMotion ? undefined : { y: -2, rotate: -4 }} viewport={{ once: true }} transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: i * 0.1 + 0.12 }} aria-hidden="true">{i === 0 ? <Wallet /> : i === 1 ? <ArrowRight /> : <Check />}</motion.span><h3 className="flow-label">{label}</h3><p className="flow-detail">{'flowDetails' in c ? c.flowDetails[i] : ''}</p>{i < 2 && <span className="flow-connector" aria-hidden="true" />}</motion.article>)}</div><p className="savings-note"><span className="note-dot" />{c.note}</p></section>
    <section className="product-detail section-pad" id="loans"><div className="section-heading"><div><p className="eyebrow">{c.loansTag}</p><h2>{c.loansTitle}</h2></div><p>{c.loansIntro}</p></div><div className="product-detail-grid">{c.loanData.map((loan, i) => <article className="product-detail-card" id={loan.id} key={loan.id}><div className="loan-card-top"><span className={`loan-icon loan-icon-${i + 1}`}>{icons[i]}</span><span className="loan-number">0{i + 1}</span></div><p className="loan-type">{loan.category}</p><h3>{loan.name}</h3><p>{loan.text}</p><dl className="loan-facts">{loanFacts(loan.id).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="product-detail-foot">{loan.detail}</div></article>)}</div><Link href="/membership" className="text-link green-link product-link">{c.learn}<ArrowRight size={16} /></Link></section>
    <section className="page-cta section-pad"><div><p className="eyebrow">{c.savingsTag} · {c.loansTag}</p><h2>{c.howTitle}</h2><p>{c.howText}</p></div><Link className="button button-primary" href="/membership">{c.cta}<ArrowRight size={16} /></Link></section>
  </main>
}
