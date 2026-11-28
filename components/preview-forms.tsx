'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Info } from 'lucide-react'
import { SAVINGS_RULES } from '@/lib/sacco-config'

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
  const savingsGuidance = isEnglish
    ? `Non-management employees choose ${SAVINGS_RULES.nonManagement.minPercent}–${SAVINGS_RULES.nonManagement.maxPercent}% of salary; management employees set an initial amount that increases by ${SAVINGS_RULES.management.annualIncreasePercent}% each January. Confirm your final contribution with Moenco SACCO.`
    : `የአመራር ያልሆኑ ሠራተኞች ከደመወዝ ${SAVINGS_RULES.nonManagement.minPercent}–${SAVINGS_RULES.nonManagement.maxPercent}% ይመርጣሉ፤ የአመራር ሠራተኞች በየጥር ${SAVINGS_RULES.management.annualIncreasePercent}% የሚጨምር የመጀመሪያ መጠን ያስቀምጣሉ። የመጨረሻ መዋጮዎን ከሞኤንኮ ሳኮ ያረጋግጡ።`
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return <section className="preview-form member-preview-form" aria-labelledby="member-form-heading">
    <div className="preview-form-heading">
      <p className="eyebrow">{isEnglish ? 'MEMBERSHIP REQUEST PREVIEW' : 'የአባልነት ጥያቄ ቅድመ እይታ'}</p>
      <h3 id="member-form-heading">{isEnglish ? 'Start your membership request' : 'የአባልነት ጥያቄዎን ይጀምሩ'}</h3>
      <p>{isEnglish ? 'Share the employee, contact and savings details typically needed to begin. Moenco SACCO is still confirming its official application requirements and process.' : 'ለመጀመር በተለምዶ የሚያስፈልጉ የሠራተኛ፣ የመገኛና የቁጠባ መረጃዎችን ያስገቡ። ሞኤንኮ ሳኮ ይፋዊ የማመልከቻ መስፈርቶቹንና ሂደቱን እያረጋገጠ ነው።'}</p>
    </div>
    <PreviewNotice language={language} submitted={submitted} />
    <form className="preview-form-fields membership-form-fields" onSubmit={handleSubmit}>
      <fieldset className="membership-form-group">
        <legend>{isEnglish ? 'Employee details' : 'የሠራተኛ መረጃ'}</legend>
        <div className="membership-form-grid">
          <label className="preview-field">{isEnglish ? 'Full name' : 'ሙሉ ስም'}<input name="name" type="text" autoComplete="name" required /></label>
          <label className="preview-field">{isEnglish ? 'Moenco employee ID' : 'የሞኤንኮ ሠራተኛ መለያ ቁጥር'}<input name="employeeId" type="text" autoComplete="off" required /></label>
          <label className="preview-field">{isEnglish ? 'Work location' : 'የሥራ ቦታ'}<input name="workLocation" type="text" autoComplete="organization" required /></label>
          <label className="preview-field">{isEnglish ? 'Department (optional)' : 'የሥራ ክፍል (አማራጭ)'}<input name="department" type="text" autoComplete="organization-title" /></label>
          <label className="preview-field">{isEnglish ? 'Phone number' : 'ስልክ ቁጥር'}<input name="phone" type="tel" autoComplete="tel" required /></label>
          <label className="preview-field">{isEnglish ? 'Email address (optional)' : 'ኢሜይል አድራሻ (አማራጭ)'}<input name="email" type="email" autoComplete="email" /></label>
        </div>
      </fieldset>
      <fieldset className="membership-form-group">
        <legend>{isEnglish ? 'Membership and savings preference' : 'የአባልነትና የቁጠባ ምርጫ'}</legend>
        <div className="membership-form-grid">
          <label className="preview-field">{isEnglish ? 'Employee category' : 'የሠራተኛ ምድብ'}<select name="employeeCategory" defaultValue="" required><option value="" disabled>{isEnglish ? 'Select your category' : 'ምድብዎን ይምረጡ'}</option><option value="non-management">{isEnglish ? 'Non-management' : 'የአመራር ያልሆነ'}</option><option value="management">{isEnglish ? 'Management' : 'የአመራር'}</option></select></label>
          <label className="preview-field">{isEnglish ? 'Preferred savings contribution (optional)' : 'የቁጠባ መዋጮ ምርጫ (አማራጭ)'}<input name="savingsPreference" type="text" placeholder={isEnglish ? 'For example, 10% or 2,000 ETB' : 'ለምሳሌ፣ 10% ወይም 2,000 ብር'} /></label>
          <p className="membership-form-help">{savingsGuidance}</p>
        </div>
      </fieldset>
      <fieldset className="membership-eligibility-group">
        <legend>{isEnglish ? 'Eligibility' : 'ብቁነት'}</legend>
        <label className="preview-checkbox"><input name="moencoEmployee" type="checkbox" required /><span>{isEnglish ? 'I am a current Moenco employee.' : 'አሁን የሞኤንኮ ሠራተኛ ነኝ።'}</span></label>
      </fieldset>
      <label className="preview-field preview-field-wide">{isEnglish ? 'Questions or additional notes (optional)' : 'ጥያቄ ወይም ተጨማሪ ማስታወሻ (አማራጭ)'}<textarea name="message" rows={3} /></label>
      <div className="preview-form-actions"><button className="button button-primary" type="submit">{isEnglish ? 'Preview membership details' : 'የአባልነት መረጃውን ይመልከቱ'}<ArrowRight size={16} /></button></div>
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
