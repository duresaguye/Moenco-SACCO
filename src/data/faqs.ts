import type { Bi } from "@/i18n/locale-context";

export interface FaqQuestion {
  question: Bi;
  answer: Bi;
}

export interface FaqCategory {
  title: Bi;
  description: Bi;
  questions: FaqQuestion[];
}

export const FAQ_DATA: FaqCategory[] = [
  {
    title: { en: "Membership", am: "አባልነት" },
    description: {
      en: "Who can join, what it costs, and how to get started.",
      am: "ማን መቀላቀል ይችላል፣ ምን ያስከፍላል፣ እንዴት መጀመር እንዳለብዎት።",
    },
    questions: [
      {
        question: { en: "Who can become a member of Moenco SACCO?", am: "የሞኤንኮ ሳኮ አባል ማን መሆን ይችላል?" },
        answer: {
          en: "Any current Moenco employee is eligible to apply for membership. See the Membership page for the full application process.",
          am: "ማንኛውም የአሁኑ የሞኤንኮ ሰራተኛ ለአባልነት ማመልከት ይችላል። ሙሉ የማመልከቻ ሂደት በአባልነት ገጽ ይመልከቱ።",
        },
      },
      {
        question: { en: "What does it cost to join?", am: "ለመቀላቀል ምን ያስከፍላል?" },
        answer: {
          en: "Joining requires a registration fee, an application fee, and the purchase of at least 5 shares at 1,000 ETB each — see the Membership and Savings & Shares pages for the exact figures.",
          am: "መቀላቀል የምዝገባ ክፍያ፣ የማመልከቻ ክፍያ እና ቢያንስ 5 ድርሻዎችን በ1,000 ብር መግዛትን ይጠይቃል — ትክክለኛ ቁጥሮች በአባልነትና በቁጠባና ድርሻ ገጾች ይገኛሉ።",
        },
      },
      {
        question: { en: "Can I leave the SACCO if I resign from Moenco?", am: "ከሞኤንኮ ብለቅ ከሳኮው መውጣት እችላለሁ?" },
        answer: {
          en: "Yes. Resigning members have their savings and share capital settled according to SACCO bylaws; any outstanding loan balance is recovered first.",
          am: "አዎ። የሚለቁ አባላት ቁጠባቸውና የድርሻ ካፒታላቸው እንደ ማህበሩ ደንብ ይጣራል፤ ያልተከፈለ ብድር ካለ መጀመሪያ ይቀነሳል።",
        },
      },
    ],
  },
  {
    title: { en: "Savings & Shares", am: "ቁጠባና ድርሻ" },
    description: {
      en: "How payroll-deducted savings and share ownership work.",
      am: "በደመወዝ ተቆራጭ ቁጠባና የድርሻ ባለቤትነት እንዴት እንደሚሰሩ።",
    },
    questions: [
      {
        question: { en: "How much of my salary will be deducted for savings?", am: "ከደመወዜ ምን ያህል ለቁጠባ ይቆረጣል?" },
        answer: {
          en: "Non-management employees choose a fixed percentage between 5% and 50% of salary. Management employees choose an initial monthly amount, which increases by 15% every January.",
          am: "የአመራር ያልሆኑ ሰራተኞች ከ5% እስከ 50% የሚሆነውን ቋሚ መቶኛ ይመርጣሉ። የአመራር ሰራተኞች የመጀመሪያ ወርሃዊ መጠን ይመርጣሉ፣ ይህም በየጥር ወር በ15% ይጨምራል።",
        },
      },
      {
        question: { en: "Can I withdraw my shares?", am: "ድርሻዬን ማውጣት እችላለሁ?" },
        answer: {
          en: "No. Share capital is not withdrawable while you remain a member — it represents your ownership stake in the cooperative.",
          am: "አይቻልም። የድርሻ ካፒታል አባል ሆነው እያለ ሊወጣ አይችልም — የማህበሩ ባለቤትነት ድርሻዎን ይወክላል።",
        },
      },
      {
        question: { en: "How are dividends decided?", am: "ትርፍ ድርሻ እንዴት ይወሰናል?" },
        answer: {
          en: "Annual dividends are proposed from the cooperative's yearly profit and approved by the General Assembly. Dividends are never guaranteed in advance.",
          am: "ዓመታዊ ትርፍ ድርሻ ከማህበሩ ዓመታዊ ትርፍ ተነስቶ ይጠቀስና በጠቅላላ ጉባኤ ይፀድቃል። ትርፍ ድርሻ አስቀድሞ ዋስትና አይሰጠውም።",
        },
      },
    ],
  },
  {
    title: { en: "Loan Eligibility & Repayment", am: "የብድር ብቁነትና ክፍያ" },
    description: {
      en: "Rules that apply across Normal, Material, and Holiday loans.",
      am: "በመደበኛ፣ በንዋይና በበዓል ብድሮች ላይ የሚተገበሩ ደንቦች።",
    },
    questions: [
      {
        question: { en: "What happens if I apply after the 15th of the month?", am: "ከወሩ 15ኛ ቀን በኋላ ብመለከት ምን ይሆናል?" },
        answer: {
          en: "Applications submitted after the 15th of the month are processed the following month.",
          am: "ከወሩ 15ኛ ቀን በኋላ የሚቀርቡ ማመልከቻዎች በሚቀጥለው ወር ይሰራሉ።",
        },
      },
      {
        question: { en: "Can I repay my loan early?", am: "ብድሬን ቀድሜ መክፈል እችላለሁ?" },
        answer: {
          en: "Yes, members may repay a loan in full ahead of schedule at any time, without penalty.",
          am: "አዎ፣ አባላት በማንኛውም ጊዜ ያለ ቅጣት ብድራቸውን ቀድመው ሙሉ በሙሉ መክፈል ይችላሉ።",
        },
      },
      {
        question: { en: "When is my guarantor released from their obligation?", am: "ተያዤ መቼ ነው ነፃ የሚሆነው?" },
        answer: {
          en: "A guarantor's obligation ends once the loan they guaranteed is fully repaid. Exact release procedures should be confirmed with the SACCO office.",
          am: "ተያዥ ያረጋገጠው ብድር ሙሉ በሙሉ ሲከፈል ግዴታው ያበቃል። ትክክለኛ የነፃ መውጫ ሂደት ከማህበሩ ጽሕፈት ቤት ይረጋገጥ።",
        },
      },
      {
        question: { en: "What happens to a guarantor if I resign with an unpaid loan?", am: "ያልተከፈለ ብድር ኖሮብኝ ብለቅ ተያዤ ላይ ምን ይደርሳል?" },
        answer: {
          en: "Any unpaid balance is first recovered from your own savings and share capital. Only a remaining shortfall is recovered from your guarantor(s).",
          am: "ያልተከፈለ ቀሪ ገንዘብ መጀመሪያ ከራስዎ ቁጠባና ድርሻ ካፒታል ይቀነሳል። ከዚያ በኋላ የሚቀር ካለ ብቻ ከተያዥ(ዎች) ይሰበሰባል።",
        },
      },
      {
        question: { en: "What if my loan application is rejected?", am: "ማመልከቻዬ ቢውደቅ ምን ይሆናል?" },
        answer: {
          en: "You may reapply in a future cycle once you address the reason for rejection; contact the Loan Committee for specific feedback on your application.",
          am: "ውድቀት ምክንያቱን ካስተካከሉ በኋላ በሚቀጥለው ዙር ዳግም ማመልከት ይችላሉ፤ ስለ ማመልከቻዎ ዝርዝር ምላሽ የብድር ኮሚቴውን ያነጋግሩ።",
        },
      },
      {
        question: { en: "Who can be my guarantor?", am: "ተያዥ ማን ሊሆን ይችላል?" },
        answer: {
          en: "A guarantor must be an active SACCO member in good standing. Material and Holiday loan borrowers may guarantee each other, but members with an outstanding Normal Loan cannot act as a guarantor.",
          am: "ተያዥ ንቁ የማህበሩ አባል መሆን አለበት። የንዋይና የበዓል ብድር ተበዳሪዎች እርስ በርስ ተያዥ መሆን ይችላሉ፣ ያልተከፈለ መደበኛ ብድር ያላቸው ግን ተያዥ መሆን አይችሉም።",
        },
      },
    ],
  },
];
