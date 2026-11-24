"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { CONTACT } from "@/config/sacco-config";
import { Mail, CallAlt, Clock } from "@/components/icons";

type ContactProps = {
  gap?: "default" | "top" | "bottom" | "none";
  className?: string;
  sectionHead?: boolean;
};

export default function Contact({ gap = "default", className, sectionHead = true }: ContactProps) {
  const { t, locale } = useLocale();
  const [sent, setSent] = useState(false);

  const CONTACT_INFO = [
    { icon: Mail, title: locale === "am" ? "ኢሜይል አድራሻ" : "Email Address", info: CONTACT.email },
    { icon: CallAlt, title: locale === "am" ? "ስልክ ቁጥር" : "Phone Number", info: CONTACT.phone },
    { icon: Clock, title: locale === "am" ? "የስራ ሰዓት" : "Working Hours", info: t(CONTACT.workingHours) },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const subject = String(form.get("subject") || "General Inquiry");
    const message = String(form.get("message") || "");

    const body = [`Name: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : null, "", message]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`[Moenco SACCO] ${subject}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <Section gap={gap} className={className}>
      <div className="container">
        <div className={cn("row g-12 items-start justify-between", sectionHead ? "justify-between" : "justify-center")}>
          {sectionHead && (
            <div className="lg:column-6 xl:column-5">
              <ScrollReveal delay={100}>
                <div className="text-block mb-8">
                  <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                    {locale === "am" ? "እናግዝዎት" : "We're here to help"}
                  </h2>
                  <p className="text-base/relaxed text-body text-pretty">
                    {locale === "am"
                      ? "ስለ አባልነት፣ ቁጠባ ወይም ብድር ጥያቄ ካለዎት፣ የማህበራችን ቡድን ዝግጁ ነው።"
                      : "Have a question about membership, savings, or a loan? Our team is ready to help."}
                  </p>
                </div>
                <ul className="flex flex-col gap-8">
                  {CONTACT_INFO.map((item, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="size-14 flex items-center justify-center bg-primary rounded-md shrink-0">
                        <item.icon className="size-7 fill-white" />
                      </div>
                      <div className="">
                        <h5 className="text-darker text-xl font-medium mb-0.5">{item.title}</h5>
                        <p className="text-body text-base/normal">{item.info}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>)}

          <div className="lg:column-6 xl:column-7 2xl:column-6">
            <ScrollReveal delay={300}>
              <h3 className="mb-6 text-4xl font-bold text-darker">{locale === "am" ? "መልዕክት ይላኩልን" : "Get In Touch"}</h3>
              {sent && (
                <p className="mb-6 rounded-lg bg-primary-lighter text-primary-dark px-4 py-3 text-sm">
                  {locale === "am" ? "የኢሜይል መተግበሪያዎ ተከፍቷል — መልዕክቱን ልከው ያጠናቅቁ።" : "Your email app should have opened with this message — send it from there to reach us."}
                </p>
              )}
              <form className="row g-6" onSubmit={handleSubmit}>
                <div className="column-6 lg:column-12 xl:column-6">
                  <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-name">
                    {locale === "am" ? "ሙሉ ስም *" : "Your Full Name *"}
                  </label>
                  <input name="name" className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="text" id="contact-name" required />
                </div>
                <div className="column-6 lg:column-12 xl:column-6">
                  <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-email">{locale === "am" ? "ኢሜይል *" : "Email Address *"}</label>
                  <input name="email" className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="email" id="contact-email" required />
                </div>
                <div className="column-6 lg:column-12 xl:column-6">
                  <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-phone">{locale === "am" ? "ስልክ" : "Your Phone"}</label>
                  <input name="phone" className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" type="text" id="contact-phone" />
                </div>
                <div className="column-6 lg:column-12 xl:column-6">
                  <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-subject">{locale === "am" ? "የጥያቄ አይነት" : "Inquiry Type"}</label>
                  <select name="subject" id="contact-subject" className="border border-lighter bg-white text-darker rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all" defaultValue="General Inquiry">
                    <option value="General Inquiry">{locale === "am" ? "አጠቃላይ ጥያቄ" : "General Inquiry"}</option>
                    <option value="Membership">{locale === "am" ? "አባልነት" : "Membership"}</option>
                    <option value="Savings & Shares">{locale === "am" ? "ቁጠባና ድርሻ" : "Savings & Shares"}</option>
                    <option value="Loans">{locale === "am" ? "ብድር" : "Loans"}</option>
                  </select>
                </div>
                <div className="column-12">
                  <label className="block mb-2 text-base/relaxed font-normal text-darker" htmlFor="contact-message">{locale === "am" ? "መልዕክት *" : "Message *"}</label>
                  <textarea name="message" id="contact-message" rows={5} className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all resize-none" required />
                </div>
                <div className="pt-3 column-12">
                  <Button type="submit" variant="default" size="lg" className="uppercase">
                    <span>{t(DICT.cta.sendMessage)}</span>
                  </Button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
