'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Info } from 'lucide-react'

type Language = 'en' | 'am'

type PreviewNoticeProps = {
  language: Language
  submitted: boolean
}

function PreviewNotice({ language, submitted }: PreviewNoticeProps) {
  const text = language === 'en'
    ? 'Preview only: this form does not send or save information. Please do not enter real personal details.'
    : 'የቅድመ እይታ ቅጽ ብቻ ነው፤ መረጃ አይላክም ወይም አይቀመጥም። እባክዎ እውነተኛ የግል መረጃ አያስገቡ።'
  const confirmation = language === 'en'
    ? 'Preview complete. Nothing was sent or saved.'
    : 'ቅድመ እይታው ተጠናቋል። ምንም መረጃ አልተላከም ወይም አልተቀመጠም።'

  return <>
    <p className="preview-form-note" role="note"><Info size={16} aria-hidden="true" />{text}</p>
    {submitted && <p className="preview-form-status" role="status" aria-live="polite">{confirmation}</p>}
  </>
}

export function MembershipInterestForm({ language }: { language: Language }) {
  const [submitted, setSubmitted] = useState(false)
  const isEnglish = language === 'en'
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section className="preview-form member-preview-form" aria-labelledby="member-form-heading">
    <div className="preview-form-heading">
      <p className="eyebrow">{isEnglish ? 'MEMBERSHIP INTEREST' : 'የአባልነት ፍላጎት'}</p>
      <h3 id="member-form-heading">{isEnglish ? 'Interested in joining?' : 'ማኅበሩን መቀላቀል ይፈልጋሉ?'}</h3>
      <p>{isEnglish ? 'Share a few details to preview the membership enquiry form.' : 'የአባልነት ጥያቄ ቅጹን ለማየት ጥቂት መረጃዎችን ያስገቡ።'}</p>
    </div>
    <PreviewNotice language={language} submitted={submitted} />
    <form className="preview-form-fields" onSubmit={handleSubmit}>
      <label className="preview-field">{isEnglish ? 'Full name' : 'ሙሉ ስም'}<input name="name" type="text" autoComplete="name" required /></label>
      <label className="preview-field">{isEnglish ? 'Phone number' : 'ስልክ ቁጥር'}<input name="phone" type="tel" autoComplete="tel" required /></label>
      <label className="preview-field">{isEnglish ? 'Work location' : 'የሥራ ቦታ'}<input name="workLocation" type="text" autoComplete="organization" /></label>
      <label className="preview-field preview-field-wide">{isEnglish ? 'What would you like to ask?' : 'ምን መጠየቅ ይፈልጋሉ?'}<textarea name="message" rows={3} /></label>
      <div className="preview-form-actions"><button className="button button-primary" type="submit">{isEnglish ? 'Test form preview' : 'የቅድመ እይታ ቅጹን ይሞክሩ'}<ArrowRight size={16} /></button></div>
    </form>
  </section>
}

export function ContactForm({ language }: { language: Language }) {
  const [submitted, setSubmitted] = useState(false)
  const isEnglish = language === 'en'
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section className="preview-form contact-page-form" aria-labelledby="contact-form-heading">
    <div className="preview-form-heading">
      <p className="eyebrow">{isEnglish ? 'CONTACT' : 'ያግኙን'}</p>
      <h3 id="contact-form-heading">{isEnglish ? 'How can we help?' : 'እንዴት ልንርዳዎት እንችላለን?'}</h3>
      <p>{isEnglish ? 'Use this preview to see how a message form will look.' : 'የመልዕክት ቅጹ እንዴት እንደሚታይ ለማየት ይህን ቅድመ እይታ ይጠቀሙ።'}</p>
    </div>
    <PreviewNotice language={language} submitted={submitted} />
    <form className="preview-form-fields" onSubmit={handleSubmit}>
      <label className="preview-field">{isEnglish ? 'Your name' : 'ስም'}<input name="name" type="text" autoComplete="name" required /></label>
      <label className="preview-field">{isEnglish ? 'Email address' : 'ኢሜይል አድራሻ'}<input name="email" type="email" autoComplete="email" required /></label>
      <label className="preview-field preview-field-wide">{isEnglish ? 'Message' : 'መልዕክት'}<textarea name="message" rows={3} required /></label>
      <div className="preview-form-actions"><button className="button button-accent" type="submit">{isEnglish ? 'Test form preview' : 'የቅድመ እይታ ቅጹን ይሞክሩ'}<ArrowRight size={16} /></button></div>
    </form>
  </section>
}
