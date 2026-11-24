"use client";

import { Section, SectionContent } from "@/components/layout/section";
import { ScrollReveal, getDelayClass } from "@/components/ui/scroll-reveal";
import { FilePdf, FileDoc, Download } from "@/components/icons";
import { useLocale } from "@/i18n/locale-context";
import { DOWNLOADS_DATA } from "@/data/downloads";
import { cn } from "@/lib/utils";

export default function DownloadsContent() {
  const { t, locale } = useLocale();

  return (
    <Section gap="top">
      <SectionContent>
        <div className="container">
          <div className="row justify-center text-center mb-12">
            <div className="lg:column-8">
              <ScrollReveal delay={100}>
                <p className="text-base/relaxed text-body">
                  {locale === "am"
                    ? "ከዚህ በታች ያሉት ሰነዶች ቦታ ያዥ ናቸው — ትክክለኛ ፋይሎች ከማህበሩ እስኪቀርቡ ድረስ ለማውረድ አይገኙም።"
                    : "The documents below are placeholders — they will become downloadable once Moenco SACCO supplies the official files."}
                </p>
              </ScrollReveal>
            </div>
          </div>
          <div className="row g-6">
            {DOWNLOADS_DATA.map((doc, index) => {
              const Icon = doc.fileType === "pdf" ? FilePdf : FileDoc;
              return (
                <div key={doc.id} className="sm:column-6 lg:column-3">
                  <ScrollReveal className={cn("h-full flex flex-col bg-white border border-lighter rounded-2xl p-6", getDelayClass(index))}>
                    <Icon className="size-9 fill-primary mb-4" />
                    <h5 className="font-semibold text-darker mb-2">{t(doc.title)}</h5>
                    <p className="text-sm text-body mb-6 flex-1">{t(doc.description)}</p>
                    <button
                      type="button"
                      disabled={!doc.available}
                      className="flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2.5 bg-primary-lighter text-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-disabled={!doc.available}
                    >
                      <Download className="size-4 fill-current" />
                      {doc.available ? (locale === "am" ? "አውርድ" : "Download") : (locale === "am" ? "በቅርብ ጊዜ ይመጣል" : "Coming soon")}
                    </button>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </SectionContent>
    </Section>
  );
}
