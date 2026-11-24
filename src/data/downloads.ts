import type { Bi } from "@/i18n/locale-context";

export interface DownloadItem {
  id: string;
  title: Bi;
  description: Bi;
  fileType: "pdf" | "doc";
  /** No real documents are wired up yet — every item is a placeholder until Moenco SACCO supplies the files. */
  available: boolean;
}

export const DOWNLOADS_DATA: DownloadItem[] = [
  {
    id: "bylaws",
    title: { en: "SACCO Bylaws", am: "የማህበሩ መተዳደሪያ ደንብ" },
    description: { en: "The full governing bylaws of Moenco Workers Savings and Credit Cooperative.", am: "የሞኤንኮ ሰራተኞች ቁጠባና ብድር ህብረት ስራ ማህበር ሙሉ መተዳደሪያ ደንብ።" },
    fileType: "pdf",
    available: false,
  },
  {
    id: "agm-report",
    title: { en: "Annual General Assembly Report", am: "የዓመታዊ ጠቅላላ ጉባኤ ሪፖርት" },
    description: { en: "The most recent Annual General Assembly minutes and financial summary.", am: "የቅርብ ጊዜ የዓመታዊ ጠቅላላ ጉባኤ ቃለ ጉባኤና የገንዘብ ማጠቃለያ።" },
    fileType: "pdf",
    available: false,
  },
  {
    id: "membership-application",
    title: { en: "Membership Application Form", am: "የአባልነት ማመልከቻ ቅጽ" },
    description: { en: "The form used to apply for Moenco SACCO membership.", am: "ለሞኤንኮ ሳኮ አባልነት ለማመልከት የሚያገለግል ቅጽ።" },
    fileType: "doc",
    available: false,
  },
  {
    id: "loan-application",
    title: { en: "Loan Application Form", am: "የብድር ማመልከቻ ቅጽ" },
    description: { en: "The form used to apply for Normal, Material, or Holiday loans.", am: "ለመደበኛ፣ ለንዋይ ወይም ለበዓል ብድር ለማመልከት የሚያገለግል ቅጽ።" },
    fileType: "doc",
    available: false,
  },
];
