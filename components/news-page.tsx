'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen, Download, Smartphone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { useLanguage } from '@/components/language-context'

const content = {
  en: {
    eyebrow: 'NEWS & UPDATES', title: 'News from your cooperative.', intro: 'Official updates, useful member resources and answers to common questions—all in one place.',
    newsEyebrow: 'LATEST FROM MOENCO SACCO', newsTitle: 'Updates will appear here.', newsText: 'There are no official announcements published on this site yet. Check back for confirmed news from Moenco SACCO.',
    resourcesEyebrow: 'MEMBER RESOURCES', resourcesTitle: 'Useful information, as it becomes available.', resourcesText: 'Official forms, downloads and mobile app information will be added once Moenco SACCO confirms the right materials and links.', resourceCards: [
      ['Membership guidelines', 'Review eligibility and the current membership request process.', 'guide'],
      ['Downloads', 'Official forms and documents will be listed here after confirmation.', 'download'],
      ['Mobile app', 'Official app availability and download links have not yet been confirmed.', 'mobile'],
    ], faqTitle: 'Common questions', faq: [
      ['Who is Moenco SACCO for?', 'The cooperative is established to serve eligible Moenco employees, according to its membership rules.'],
      ['How do payroll savings work?', 'Members agree on their contributions, which can be arranged as regular payroll deductions. Confirm current details with the cooperative.'],
      ['Where can I find current loan terms?', 'Loan eligibility, repayment terms and application conditions are set by current cooperative policy. Ask Moenco SACCO for the latest information.'],
    ], pending: 'Official details to be confirmed', legalPrivacy: 'The official privacy policy will be published here when approved by Moenco SACCO.', legalTerms: 'The official terms and conditions will be published here when approved by Moenco SACCO.'
  },
  am: {
    eyebrow: 'ዜናና ወቅታዊ መረጃ', title: 'ከማኅበርዎ የሚመጡ ዜናዎች።', intro: 'ይፋዊ ማሳሰቢያዎች፣ ጠቃሚ የአባላት መረጃዎችና ለተደጋጋሚ ጥያቄዎች መልሶች።',
    newsEyebrow: 'የቅርብ ጊዜ ከሞኤንኮ ሳኮ', newsTitle: 'ወቅታዊ መረጃዎች እዚህ ይቀርባሉ።', newsText: 'በዚህ ድረ-ገጽ ላይ እስካሁን ይፋዊ ማሳሰቢያ አልታተመም። ከሞኤንኮ ሳኮ የተረጋገጡ ዜናዎችን ለማየት ተመልሰው ይጎብኙ።',
    resourcesEyebrow: 'ለአባላት መረጃ', resourcesTitle: 'ጠቃሚ መረጃ፣ ሲገኝ።', resourcesText: 'ይፋዊ ቅጾች፣ ማውረጃዎችና የሞባይል መተግበሪያ መረጃ ሞኤንኮ ሳኮ ትክክለኛ ማጣቀሻዎቹን ካረጋገጠ በኋላ ይቀርባሉ።', resourceCards: [
      ['የአባልነት መመሪያ', 'ብቁነትንና የአሁኑን የአባልነት ጥያቄ ሂደት ይመልከቱ።', 'guide'],
      ['ማውረጃዎች', 'ይፋዊ ቅጾችና ሰነዶች ከተረጋገጡ በኋላ እዚህ ይቀርባሉ።', 'download'],
      ['የሞባይል መተግበሪያ', 'ይፋዊ የመተግበሪያ መኖርና የማውረጃ አድራሻ ገና አልተረጋገጠም።', 'mobile'],
    ], faqTitle: 'ተደጋጋሚ ጥያቄዎች', faq: [
      ['ሞኤንኮ ሳኮ ለማን ነው?', 'ማኅበሩ በአባልነት ደንቡ መሠረት ብቁ የሞኤንኮ ሠራተኞችን ለማገልገል ተቋቁሟል።'],
      ['የደመወዝ ቁጠባ እንዴት ይሠራል?', 'አባላት በየጊዜው የሚቆረጥ የቁጠባ መዋጮ ይስማማሉ። የአሁኑን መረጃ ከማኅበሩ ያረጋግጡ።'],
      ['የአሁኑን የብድር ውሎች የት እገኛለሁ?', 'የብድር ብቁነት፣ የክፍያ ጊዜና የማመልከቻ ሁኔታዎች በማኅበሩ መመሪያ ይወሰናሉ። የቅርብ ጊዜ መረጃ ከሞኤንኮ ሳኮ ይጠይቁ።'],
    ], pending: 'ይፋዊ መረጃ ይጠበቃል', legalPrivacy: 'ይፋዊ የግላዊነት መመሪያ በሞኤንኮ ሳኮ ከጸደቀ በኋላ እዚህ ይቀርባል።', legalTerms: 'ይፋዊ ውሎችና ሁኔታዎች በሞኤንኮ ሳኮ ከጸደቁ በኋላ እዚህ ይቀርባሉ።'
  }
}

export function NewsPage() {
  const { language } = useLanguage()
  const c = content[language]
  const icons = [<BookOpen key="guide" />, <Download key="download" />, <Smartphone key="mobile" />]
  return <main lang={language}>
    <PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image="/moenco-workplace.png" alt="Ethiopian colleagues sharing ideas at work" />
    <section className="news-empty section-pad"><div className="news-empty-mark"><BookOpen size={24} /></div><div><p className="eyebrow">{c.newsEyebrow}</p><h2>{c.newsTitle}</h2><p>{c.newsText}</p></div><span className="news-pending">{c.pending}</span></section>
    <section className="news-resources section-pad" id="resources"><div className="section-heading"><div><p className="eyebrow">{c.resourcesEyebrow}</p><h2>{c.resourcesTitle}</h2></div><p>{c.resourcesText}</p></div><div className="news-resource-grid">{c.resourceCards.map(([title, text, icon], i) => <article className="news-resource" id={icon === 'download' ? 'downloads' : icon === 'mobile' ? 'mobile-app' : 'guidelines'} key={title}><span className="news-resource-icon">{icons[i]}</span><h3>{title}</h3><p>{text}</p>{icon === 'guide' && <Link href="/membership#eligibility" className="card-link">{language === 'en' ? 'Membership request' : 'የአባልነት ጥያቄ'}<ArrowRight size={16} /></Link>}</article>)}</div></section>
    <section className="news-faq section-pad" id="faq"><div className="section-heading"><div><p className="eyebrow">MOENCO SACCO</p><h2>{c.faqTitle}</h2></div></div><div className="faq-list">{c.faq.map(([question, answer]) => <article className="faq-item" key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></section>
    <section className="legal-placeholders section-pad"><article id="privacy"><p className="eyebrow">{language === 'en' ? 'PRIVACY' : 'ግላዊነት'}</p><p>{c.legalPrivacy}</p></article><article id="terms"><p className="eyebrow">{language === 'en' ? 'TERMS' : 'ውሎች'}</p><p>{c.legalTerms}</p></article></section>
  </main>
}
