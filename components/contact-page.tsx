'use client'

import Link from 'next/link'
import { ArrowRight, Building2, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/preview-forms'
import { PageHero } from '@/components/page-hero'
import { useLanguage } from '@/components/language-context'

const content = {
  en: {
    heroEyebrow: 'CONTACT MOENCO SACCO',
    title: 'We’re here to help you find the right next step.',
    intro: 'Explore the cooperative’s service area, membership information and contact form preview.',
    detailsEyebrow: 'CONTACT & LOCATION',
    detailsTitle: 'A clear place to start.',
    detailsIntro: 'Some public contact details are still being confirmed by Moenco SACCO. We’ll show verified information here as it becomes available.',
    items: [
      ['Service area', 'Moenco SACCO currently serves eligible employees across five locations in Ethiopia.', 'area'],
      ['Office address', 'A public street address and visiting hours have not yet been confirmed for this page.', 'office'],
      ['Phone and email', 'An official public phone number and email address are still awaiting confirmation.', 'phone'],
    ],
    memberEyebrow: 'MEMBERSHIP SUPPORT',
    memberTitle: 'Interested in becoming a member?',
    memberText: 'Membership is intended for eligible Moenco employees. Review the confirmed steps and costs before starting.',
    memberLink: 'Membership information',
  },
  am: {
    heroEyebrow: 'ሞኤንኮ ሳኮን ያግኙ',
    title: 'ቀጣዩን ትክክለኛ እርምጃ እንዲያገኙ እንረዳዎታለን።',
    intro: 'የማኅበሩን የአገልግሎት ቦታ፣ የአባልነት መረጃና የመገኛ ቅጽ ቅድመ እይታ ይመልከቱ።',
    detailsEyebrow: 'መገኛና ቦታ',
    detailsTitle: 'ለመጀመር ግልጽ መንገድ።',
    detailsIntro: 'አንዳንድ ይፋዊ የመገኛ መረጃዎች በሞኤንኮ ሳኮ እየተረጋገጡ ናቸው። የተረጋገጠ መረጃ ሲገኝ እዚህ እናሳያለን።',
    items: [
      ['የአገልግሎት ቦታ', 'ሞኤንኮ ሳኮ በኢትዮጵያ በሚገኙ አምስት ቦታዎች ለሚገኙ ብቁ ሠራተኞች አገልግሎት ይሰጣል።', 'area'],
      ['የቢሮ አድራሻ', 'ይፋዊ የመንገድ አድራሻና የጉብኝት ሰዓት ለዚህ ገጽ ገና አልተረጋገጡም።', 'office'],
      ['ስልክና ኢሜይል', 'ይፋዊ ስልክ ቁጥርና ኢሜይል አድራሻ እየተረጋገጡ ናቸው።', 'phone'],
    ],
    memberEyebrow: 'የአባልነት ድጋፍ',
    memberTitle: 'አባል መሆን ይፈልጋሉ?',
    memberText: 'አባልነት ለብቁ የሞኤንኮ ሠራተኞች የተዘጋጀ ነው። ከመጀመርዎ በፊት የተረጋገጡ እርምጃዎችንና ወጪዎችን ይመልከቱ።',
    memberLink: 'የአባልነት መረጃ',
  },
} as const

const icons = {
  area: MapPin,
  office: Building2,
  phone: Phone,
}

export function ContactPage() {
  const { language } = useLanguage()
  const c = content[language]

  return <main lang={language}>
    <PageHero eyebrow={c.heroEyebrow} title={c.title} description={c.intro} image="/moenco-workplace.png" alt="Moenco colleagues working together in a modern Ethiopian office" />
    <section className="contact-page-section section-pad">
      <div className="contact-page-heading">
        <p className="eyebrow">{c.detailsEyebrow}</p>
        <h2>{c.detailsTitle}</h2>
        <p>{c.detailsIntro}</p>
      </div>
      <div className="contact-info-grid">
        {c.items.map(([title, text, iconKey]) => {
          const Icon = icons[iconKey as keyof typeof icons]
          return <article className="contact-info-card" key={title}>
            <Icon className="contact-info-icon" size={20} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        })}
      </div>
      <div className="contact-membership-callout">
        <div>
          <p className="eyebrow">{c.memberEyebrow}</p>
          <h3>{c.memberTitle}</h3>
          <p>{c.memberText}</p>
        </div>
        <Link className="button button-primary" href="/membership">{c.memberLink}<ArrowRight size={16} /></Link>
      </div>
      <ContactForm language={language} />
    </section>
  </main>
}
