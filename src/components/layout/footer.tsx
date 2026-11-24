"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FacebookCircle, TelegramCircle, LinkedinRound, Mail, CallAlt, Location } from "@/components/icons";
import patternA from "@/images/decoration/pattern-a.png";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLocale } from "@/i18n/locale-context";
import { DICT } from "@/i18n/dictionary";
import { ORG, CONTACT, BANKING, BRANCHES } from "@/config/sacco-config";

type FooterProps = {
  className?: string;
};

const SOCIAL_LINKS = [
  { href: "https://facebook.com", icon: FacebookCircle, label: "Facebook" },
  { href: "https://t.me", icon: TelegramCircle, label: "Telegram" },
  { href: "https://linkedin.com", icon: LinkedinRound, label: "LinkedIn" },
];

export default function Footer({ className }: FooterProps) {
  const { t, locale } = useLocale();
  const headOffice = BRANCHES.find((b) => b.isHeadOffice) ?? BRANCHES[0];

  const FOOTER_LINKS = [
    {
      title: t(DICT.footer.quickLinks),
      links: [
        { label: t(DICT.nav.about), href: "/about" },
        { label: t(DICT.nav.membership), href: "/membership" },
        { label: t(DICT.nav.savings), href: "/savings" },
        { label: t(DICT.nav.loanProducts), href: "/loans" },
        { label: t(DICT.nav.news), href: "/news" },
      ],
    },
    {
      title: t(DICT.footer.resources),
      links: [
        { label: t(DICT.nav.loanCalculator), href: "/loan-calculator" },
        { label: t(DICT.nav.mobileApp), href: "/mobile-app" },
        { label: t(DICT.nav.downloads), href: "/downloads" },
        { label: t(DICT.nav.faq), href: "/faqs" },
      ],
    },
  ];

  // Branch addresses and the general phone line aren't confirmed yet — rather than
  // showing the raw "To confirm" placeholder as if it were real data, link to the
  // Contact page and lead with what's actually known (the head office's name).
  const CONTACT_INFO = [
    { icon: Location, label: t(headOffice.name), href: "/contact" },
    ...(CONTACT.phone !== "To confirm" ? [{ icon: CallAlt, label: CONTACT.phone, href: `tel:${CONTACT.phone}` }] : []),
    { icon: Mail, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ];

  return (
    <footer className={cn("relative w-full", className)}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-linear-to-r from-darker to-dark">
        <Image className="absolute bottom-0 inset-0 opacity-4" alt="" src={patternA} width={1920} height={636} />
      </div>
      <div className="relative py-10 md:py-15">
        <div className="container">
          <div className="justify-between row">
            <div className="lg:column-4 me-auto">
              <ScrollReveal delay={100} className="flex flex-col h-full">
                <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Moenco SACCO home">
                  <span className="flex items-center justify-center size-10 rounded-full bg-primary text-white font-bold text-sm shrink-0">MS</span>
                  <span className="text-white font-bold text-base">{t(ORG.shortName)}</span>
                </Link>
                <p className="mt-4 text-lg/relaxed text-white">{t(DICT.footer.tagline)}</p>
                <ul className="flex flex-wrap gap-4 pt-7 mt-auto">
                  {SOCIAL_LINKS.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
                          <Icon className="transition-colors size-5 fill-white/70 group-hover:fill-primary" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            </div>
            <div className="md:column-6 lg:column-3">
              <ScrollReveal delay={150}>
                <div className="text-xl/8 font-bold text-white mb-6">{t(DICT.footer.contactInfo)}</div>
                <ul className="flex flex-col gap-4">
                  {CONTACT_INFO.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index} className="flex gap-2.5">
                        <Icon className="fill-primary size-5 mt-1.25 shrink-0" />
                        <a className="text-lg/7.5 text-white hover:text-primary transition-colors" href={item.href}>{item.label}</a>
                      </li>
                    );
                  })}
                </ul>
              </ScrollReveal>
            </div>
            {FOOTER_LINKS.map((item, index) => (
              <div key={index} className="sm:column-6 md:column-3 lg:column-2">
                <ScrollReveal delay={200 + index * 50}>
                  <div className="text-xl/8 font-bold text-white mb-6">{item.title}</div>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((lItem, lIndex) => (
                      <li key={lIndex}><Link className="text-lg/7.5 text-white hover:text-primary transition-colors" href={lItem.href}>{lItem.label}</Link></li>
                    ))}
                  </ul>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>{/* Section Content */}
      <div className="py-4 border-t border-white/16">
        <div className="container">
          <ScrollReveal mode="fade" delay={50} className="text-center">
            <p className="text-sm text-white/70">{t(BANKING.bankName)} · {BANKING.accountName} · {t(DICT.footer.bankingNote)}</p>
          </ScrollReveal>
        </div>
      </div>
      <div className="py-5 border-t border-white/16">
        <div className="container">
          <ScrollReveal mode="fade" delay={100} className="flex flex-col lg:flex-row items-center flex-wrap gap-x-10 gap-y-2 justify-between">
            <p className="text-lg/normal text-white">&copy; {new Date().getFullYear()} {t(ORG.shortName)}. {t(DICT.footer.rightsReserved)}</p>
            <ul className="flex gap-y-2 gap-x-6">
              <li><Link className="text-lg/normal text-white hover:text-primary transition-colors" href="/downloads">{locale === "am" ? "ህጎችና ደንቦች" : "Bylaws & Policies"}</Link></li>
              <li><Link className="text-lg/normal text-white hover:text-primary transition-colors" href="/contact">{t(DICT.nav.contact)}</Link></li>
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
