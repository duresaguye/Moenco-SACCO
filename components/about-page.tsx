'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Handshake, Landmark, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { useLanguage } from '@/components/language-context'

const content = {
  en: {
    eyebrow: 'ABOUT MOENCO SACCO', title: 'A stronger future, built together.', intro: 'A workplace cooperative where Moenco employees save together, share ownership and support one another through responsible access to credit.',
    sectionEyebrow: 'WHO WE ARE', heading: 'A cooperative belongs to its members.', p1: 'Moenco Workers Savings and Credit Cooperative is established to support the financial wellbeing of Moenco employees. Members pool their savings and follow shared rules to build a cooperative that serves the needs of its people.', p2: 'This is a member-owned organization—not a commercial bank. Members participate in its governance according to the cooperative’s rules, and share responsibility for its future.',
    principlesEyebrow: 'HOW WE WORK', principlesTitle: 'Shared responsibility in practice.', items: [
      ['Member ownership', 'Members are the foundation of the cooperative and take part in its governance under its rules.', 'hand'],
      ['Convenient contributions', 'Agreed savings contributions can be arranged through payroll deductions.', 'landmark'],
      ['Responsible credit', 'Eligible members can apply for cooperative loan products, subject to current policies.', 'shield'],
    ], closeTitle: 'Curious about joining?', closeText: 'See the membership steps and what is currently confirmed before you begin.', cta: 'Membership information'
  },
  am: {
    eyebrow: 'ስለ ሞኤንኮ ሳኮ', title: 'ጠንካራ ወደፊት፣ በጋራ የተገነባ።', intro: 'የሞኤንኮ ሠራተኞች በጋራ የሚቆጥቡበት፣ ባለቤትነትን የሚጋሩበትና በኃላፊነት በሚቀርብ ብድር እርስ በርስ የሚደጋገፉበት የሥራ ቦታ ማኅበር።',
    sectionEyebrow: 'ማን ነን?', heading: 'ማኅበሩ የአባላቱ ነው።', p1: 'የሞኤንኮ ሠራተኞች ቁጠባና ብድር ማኅበር የሞኤንኮ ሠራተኞችን የገንዘብ ደህንነት ለመደገፍ ተቋቁሟል። አባላት ቁጠባቸውን በጋራ ያዋህዳሉ፤ ማኅበሩም ለአባላቱ የሚጠቅም እንዲሆን በጋራ ደንብ ይመራሉ።', p2: 'ይህ በአባላቱ የሚተዳደር ድርጅት ነው፤ የንግድ ባንክ አይደለም። አባላት በማኅበሩ ደንብ መሠረት በአስተዳደሩ ይሳተፋሉ፤ ለወደፊቱም በጋራ ኃላፊነት ይወስዳሉ።',
    principlesEyebrow: 'አሠራራችን', principlesTitle: 'በተግባር የጋራ ኃላፊነት።', items: [
      ['በአባላት ባለቤትነት', 'አባላት የማኅበሩ መሠረት ናቸው፤ በደንቡም መሠረት በአስተዳደሩ ይሳተፋሉ።', 'hand'],
      ['ቀላል መዋጮ', 'የተስማሙበት የቁጠባ መዋጮ በደመወዝ ቅናሽ ሊዘጋጅ ይችላል።', 'landmark'],
      ['ኃላፊነት ያለው ብድር', 'ብቁ አባላት በአሁኑ መመሪያዎች መሠረት ለማኅበሩ ብድር ማመልከት ይችላሉ።', 'shield'],
    ], closeTitle: 'አባል ስለመሆን ይፈልጋሉ?', closeText: 'ከመጀመርዎ በፊት የአባልነት ሂደቱንና የተረጋገጠውን መረጃ ይመልከቱ።', cta: 'የአባልነት መረጃ'
  }
}

export function AboutPage() {
  const { language } = useLanguage()
  const c = content[language]
  const icons = [<Handshake key="hand" />, <Landmark key="landmark" />, <ShieldCheck key="shield" />]
  return <main lang={language}>
    <PageHero eyebrow={c.eyebrow} title={c.title} description={c.intro} image="/moenco-workplace.png" alt="Moenco colleagues collaborating in a modern Ethiopian workplace" />
    <section className="about-detail section-pad"><div className="about-detail-copy"><p className="eyebrow">{c.sectionEyebrow}</p><h2>{c.heading}</h2><p>{c.p1}</p><p>{c.p2}</p></div><div className="about-detail-image"><Image src="/moenco-hero.png" alt="Ethiopian professional in a bright Addis Ababa workplace" fill sizes="(max-width: 760px) 100vw, 48vw" /></div></section>
    <section className="principles section-pad"><div className="section-heading"><div><p className="eyebrow">{c.principlesEyebrow}</p><h2>{c.principlesTitle}</h2></div></div><div className="principle-grid">{c.items.map(([title, text], i) => <article className="principle-item" key={title}><span className="principle-icon">{icons[i]}</span><span className="principle-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="page-cta section-pad"><div><p className="eyebrow">MOENCO SACCO · MEMBERS FIRST</p><h2>{c.closeTitle}</h2><p>{c.closeText}</p></div><Link className="button button-primary" href="/membership">{c.cta}<ArrowRight size={16} /></Link></section>
  </main>
}
