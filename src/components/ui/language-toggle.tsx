"use client";

import { useLocale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn("inline-flex items-center rounded-full border border-white/20 bg-white/5 p-1 text-sm font-medium", className)}
    >
      <button
        type="button"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          locale === "en" ? "bg-primary text-white" : "text-white/70 hover:text-white"
        )}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={locale === "am"}
        onClick={() => setLocale("am")}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          locale === "am" ? "bg-primary text-white" : "text-white/70 hover:text-white"
        )}
      >
        አማ
      </button>
    </div>
  );
}
