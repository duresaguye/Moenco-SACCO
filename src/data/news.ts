import type { Bi } from "@/i18n/locale-context";

export interface NewsPost {
  id: string;
  featured: boolean;
  category: Bi;
  title: Bi;
  excerpt: Bi;
  body: Bi[];
  date: string; // ISO yyyy-mm-dd
}

/**
 * Sample announcements only — replace with official Moenco SACCO
 * communications before launch. Kept deliberately generic/dated so nobody
 * mistakes these for real notices.
 */
export const NEWS_DATA: NewsPost[] = [
  {
    id: "agm-2026-notice",
    featured: true,
    category: { en: "Announcement", am: "ማስታወቂያ" },
    title: {
      en: "Sample: Annual General Assembly scheduled",
      am: "ናሙና፦ ዓመታዊ ጠቅላላ ጉባኤ ተይዟል",
    },
    excerpt: {
      en: "This is placeholder text showing how an Annual General Assembly notice would appear on this page, including date, venue, and agenda items.",
      am: "ይህ የዓመታዊ ጠቅላላ ጉባኤ ማስታወቂያ በዚህ ገጽ ላይ እንዴት እንደሚታይ ለማሳየት የቀረበ ናሙና ጽሑፍ ሲሆን ቀን፣ ቦታና አጀንዳን ያካትታል።",
    },
    body: [
      {
        en: "This article is sample content included to demonstrate the News & Announcements page layout. Replace it with the official Annual General Assembly (AGM) notice, including the confirmed date, venue, registration requirements, and agenda.",
        am: "ይህ ጽሑፍ የዜናና ማስታወቂያ ገጽን አቀማመጥ ለማሳየት የቀረበ ናሙና ይዘት ነው። በተረጋገጠው ቀን፣ ቦታ፣ የምዝገባ መስፈርትና አጀንዳ ባካተተ ኦፊሴላዊ የዓመታዊ ጠቅላላ ጉባኤ ማስታወቂያ ይተኩት።",
      },
      {
        en: "Official announcements should be published in both English and Amharic, as shown here, so all members can read them in their preferred language.",
        am: "ኦፊሴላዊ ማስታወቂያዎች እዚህ እንደሚታየው በእንግሊዝኛና በአማርኛ ሁለቱም ቋንቋ መውጣት አለባቸው፤ ይህም ሁሉም አባላት በሚመርጡት ቋንቋ እንዲያነቡ ያስችላል።",
      },
    ],
    date: "2026-01-15",
  },
  {
    id: "dividend-declaration-sample",
    featured: false,
    category: { en: "Dividends", am: "ትርፍ ድርሻ" },
    title: { en: "Sample: Annual dividend declaration", am: "ናሙና፦ ዓመታዊ የትርፍ ድርሻ ማሳወቂያ" },
    excerpt: {
      en: "Placeholder announcement showing how the SACCO would publish its approved annual dividend rate to members.",
      am: "ማህበሩ የፀደቀውን ዓመታዊ የትርፍ ድርሻ መጠን ለአባላት እንዴት እንደሚያሳውቅ የሚያሳይ ናሙና ማስታወቂያ።",
    },
    body: [
      {
        en: "Replace this with the real dividend rate once approved by the General Assembly, along with instructions on how and when dividends will be credited to members.",
        am: "ይህንን በጠቅላላ ጉባኤ ከፀደቀ በኋላ በእውነተኛው የትርፍ ድርሻ መጠን እንዲሁም ትርፍ ድርሻ መቼና እንዴት ለአባላት እንደሚከፈል በሚገልጽ መመሪያ ይተኩት።",
      },
    ],
    date: "2025-11-20",
  },
  {
    id: "material-loan-window-sample",
    featured: false,
    category: { en: "Loans", am: "ብድር" },
    title: { en: "Sample: Material Loan window opens in September", am: "ናሙና፦ የንዋይ ብድር ማመልከቻ በመስከረም ይከፈታል" },
    excerpt: {
      en: "Placeholder reminder that Material Loan applications open every September, as a demonstration of a recurring seasonal notice.",
      am: "የንዋይ ብድር ማመልከቻ በየዓመቱ መስከረም እንደሚከፈት የሚያሳስብ ናሙና ማስታወቂያ፣ ተደጋጋሚ ወቅታዊ ማስታወቂያ አይነት ለማሳየት ነው።",
    },
    body: [
      {
        en: "Material Loan applications open every September and must be fully repaid by the following September, with a flat 5% service charge and no interest. See the Loan Products page for full eligibility details.",
        am: "የንዋይ ብድር ማመልከቻ በየዓመቱ መስከረም ይከፈታል፣ በሚቀጥለው መስከረም ሙሉ በሙሉ መከፈል አለበት፣ ያለወለድ በ5% ቋሚ የአገልግሎት ክፍያ ብቻ። ሙሉ ዝርዝር በብድር አገልግሎቶች ገጽ ይመልከቱ።",
      },
    ],
    date: "2025-09-01",
  },
  {
    id: "mobile-app-update-sample",
    featured: false,
    category: { en: "Mobile App", am: "የሞባይል መተግበሪያ" },
    title: { en: "Sample: Mobile app feature update", am: "ናሙና፦ የሞባይል መተግበሪያ ዝማኔ" },
    excerpt: {
      en: "Placeholder post demonstrating how app update notes would be communicated to members.",
      am: "የመተግበሪያ ዝማኔ መረጃ ለአባላት እንዴት እንደሚተላለፍ የሚያሳይ ናሙና ጽሑፍ።",
    },
    body: [
      {
        en: "Use this space to tell members about new mobile app features, such as improved loan tracking or faster statement access, once the app is published.",
        am: "መተግበሪያው ከወጣ በኋላ እንደ የተሻሻለ የብድር ክትትል ወይም ፈጣን መግለጫ ማግኛ ያሉ አዳዲስ ባህሪያትን ለአባላት ለማሳወቅ ይህንን ቦታ ይጠቀሙ።",
      },
    ],
    date: "2025-07-10",
  },
];
