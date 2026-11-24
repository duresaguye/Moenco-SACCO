import type { Bi } from "./locale-context";

/**
 * Shared "chrome" copy used across navigation, footer, buttons and generic
 * labels. Page-specific content lives next to each page/section as typed
 * { en, am } objects instead of here, to keep this file manageable.
 */
export const DICT = {
  nav: {
    home: { en: "Home", am: "መነሻ" } as Bi,
    about: { en: "About Us", am: "ስለ እኛ" } as Bi,
    membership: { en: "Membership", am: "አባልነት" } as Bi,
    savings: { en: "Savings & Shares", am: "ቁጠባና ድርሻ" } as Bi,
    savingsLoans: { en: "Savings & Loans", am: "ቁጠባና ብድር" } as Bi,
    loans: { en: "Loans", am: "ብድር" } as Bi,
    loanProducts: { en: "Loan Products", am: "የብድር አገልግሎቶች" } as Bi,
    loanCalculator: { en: "Loan Calculator", am: "የብድር ማስያ" } as Bi,
    mobileApp: { en: "Mobile App", am: "የሞባይል መተግበሪያ" } as Bi,
    news: { en: "News & Announcements", am: "ዜናና ማስታወቂያ" } as Bi,
    newsShort: { en: "News", am: "ዜና" } as Bi,
    resources: { en: "Resources", am: "ሰነዶች" } as Bi,
    downloads: { en: "Downloads", am: "ዶክመንቶች" } as Bi,
    faq: { en: "FAQ", am: "ተደጋጋሚ ጥያቄዎች" } as Bi,
    contact: { en: "Contact", am: "አግኙን" } as Bi,
  },
  cta: {
    becomeMember: { en: "Become a Member", am: "አባል ይሁኑ" } as Bi,
    exploreServices: { en: "Explore Our Services", am: "አገልግሎቶቻችንን ይመልከቱ" } as Bi,
    learnMore: { en: "Learn More", am: "ተጨማሪ ይመልከቱ" } as Bi,
    readMore: { en: "Read More", am: "ሙሉውን ያንብቡ" } as Bi,
    contactUs: { en: "Contact Us", am: "ያግኙን" } as Bi,
    getInTouch: { en: "Get in Touch", am: "ያግኙን" } as Bi,
    exploreLoans: { en: "Explore Loan Products", am: "የብድር አገልግሎቶችን ይመልከቱ" } as Bi,
    useCalculator: { en: "Use the Loan Calculator", am: "የብድር ማስያውን ይጠቀሙ" } as Bi,
    sendMessage: { en: "Send Message", am: "መልዕክት ይላኩ" } as Bi,
    viewAllNews: { en: "View All News", am: "ሁሉንም ዜናዎች ይመልከቱ" } as Bi,
    viewDownloads: { en: "View Downloads", am: "ዶክመንቶችን ይመልከቱ" } as Bi,
  },
  common: {
    estimateOnly: {
      en: "This is an estimate for information purposes only and is not a loan offer.",
      am: "ይህ ለማብራሪያ ብቻ የሚያገለግል ግምት ነው እና የብድር ውሳኔ አያመለክትም።",
    } as Bi,
    etb: { en: "ETB", am: "ብር" } as Bi,
    perMonth: { en: "/ month", am: "/ በወር" } as Bi,
    months: { en: "months", am: "ወራት" } as Bi,
    required: { en: "Required", am: "አስፈላጊ" } as Bi,
    optional: { en: "Optional", am: "አስፈላጊ ያልሆነ" } as Bi,
    close: { en: "Close", am: "ዝጋ" } as Bi,
  },
  footer: {
    quickLinks: { en: "Quick Links", am: "ፈጣን አገናኞች" } as Bi,
    resources: { en: "Resources", am: "ሰነዶች" } as Bi,
    branches: { en: "Branches", am: "ቅርንጫፎች" } as Bi,
    contactInfo: { en: "Contact Info", am: "የመገኛ አድራሻ" } as Bi,
    rightsReserved: { en: "All Rights Reserved.", am: "መብቱ በህግ የተጠበቀ ነው።" } as Bi,
    tagline: {
      en: "A workplace savings and credit cooperative owned by Moenco employees — building shared financial security through regular savings and affordable credit.",
      am: "በሞኤንኮ ሰራተኞች ባለቤትነት የተያዘ የቁጠባና ብድር ህብረት ስራ ማህበር — በመደበኛ ቁጠባና በተመጣጣኝ ብድር የጋራ የፋይናንስ ዋስትናን እንገነባለን።",
    } as Bi,
    bankingNote: {
      en: "Member savings and share capital are held with Zemen Bank.",
      am: "የአባላት ቁጠባና ካፒታል በዘመን ባንክ ይያዛል።",
    } as Bi,
  },
} as const;
