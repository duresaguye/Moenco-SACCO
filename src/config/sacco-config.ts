import type { Bi } from "@/i18n/locale-context";

/**
 * Single source of truth for every Moenco SACCO business figure, limit,
 * bank detail and contact point used across the site. UI components must
 * read values from here rather than hardcoding numbers.
 *
 * `confirmed: false` marks anything that has not been confirmed by Moenco
 * SACCO management. Pages must either hide those values or show a
 * "Contact the SACCO" note instead of presenting them as fact — see the
 * `confirmed` flag on each affected entry below.
 */

export interface ConfirmableValue<T> {
  value: T;
  confirmed: boolean;
  note?: Bi;
}

export const ORG = {
  name: { en: "Moenco Workers Savings and Credit Cooperative", am: "ሞኤንኮ ሰራተኞች ቁጠባና ብድር ህብረት ስራ ማህበር" } as Bi,
  shortName: { en: "Moenco SACCO", am: "ሞኤንኮ ሳኮ" } as Bi,
  country: { en: "Ethiopia", am: "ኢትዮጵያ" } as Bi,
  currency: "ETB",
  currencyLabel: { en: "Ethiopian Birr", am: "የኢትዮጵያ ብር" } as Bi,
};

export const BANKING = {
  bankName: { en: "Zemen Bank", am: "ዘመን ባንክ" } as Bi,
  accountName: "Moenco Worker Saving and Credit",
  accountNumber: "202410701604018",
};

export const MEMBERSHIP_FEES = {
  registration: { value: 1400, confirmed: true } as ConfirmableValue<number>,
  application: {
    value: 1068,
    confirmed: false,
    note: { en: "Application fee amount requires confirmation from the SACCO office.", am: "የማመልከቻ ክፍያ መጠን ከማህበሩ ጽሕፈት ቤት መረጋገጥ አለበት።" },
  } as ConfirmableValue<number>,
  annualCharity: { value: 600, confirmed: true } as ConfirmableValue<number>,
  annualRetirement: { value: 420, confirmed: true } as ConfirmableValue<number>,
  minimumShares: { value: 5, confirmed: true } as ConfirmableValue<number>,
  pricePerShare: { value: 1000, confirmed: true } as ConfirmableValue<number>,
  minimumShareCapital: { value: 5000, confirmed: true } as ConfirmableValue<number>,
};

export const SAVINGS_RULES = {
  nonManagement: {
    minPercentOfSalary: 5,
    maxPercentOfSalary: 50,
    description: {
      en: "Non-management employees choose a fixed percentage of their monthly salary, between 5% and 50%, to be deducted through payroll and deposited as savings.",
      am: "የአመራር ያልሆኑ ሰራተኞች ከወርሃዊ ደመወዛቸው ከ5% እስከ 50% የሚሆነውን ቋሚ መቶኛ መርጠው በደመወዝ ተቆራጭ ቁጠባቸው ውስጥ ያስገባሉ።",
    } as Bi,
  },
  management: {
    annualIncreasePercent: 15,
    increaseMonth: { en: "January", am: "ጥር" } as Bi,
    description: {
      en: "Management employees select an initial savings amount when they join. That amount automatically increases by 15% every January.",
      am: "የአመራር ሰራተኞች ሲቀላቀሉ የመጀመሪያ የቁጠባ መጠን ይመርጣሉ። ይህ መጠን በየዓመቱ ጥር ወር በ15% ይጨምራል።",
    } as Bi,
  },
  changeAfterYears: 1,
  frequencyConfirmed: false,
  frequencyNote: {
    en: "Exact savings-change approval procedure and frequency require confirmation from the SACCO office.",
    am: "የቁጠባ ለውጥ ማፅደቅ ሂደትና ድግግሞሽ ዝርዝር ከማህበሩ ጽሕፈት ቤት መረጋገጥ አለበት።",
  } as Bi,
};

export const SHARES = {
  minimumShares: 5,
  pricePerShare: 1000,
  withdrawable: false,
  dividendBasis: {
    en: "Annual dividends are declared based on the cooperative's yearly profit and approved by the General Assembly. Dividends are not guaranteed.",
    am: "ዓመታዊ ትርፍ ድርሻ በማህበሩ ዓመታዊ ትርፍ መሰረት ተወስኖ በጠቅላላ ጉባኤ ይፀድቃል። ትርፍ ድርሻ አስቀድሞ የተረጋገጠ አይደለም።",
  } as Bi,
};

export type LoanType = "normal" | "material" | "holiday";

export interface LoanProductConfig {
  id: LoanType;
  name: Bi;
  description: Bi;
  minAmount: number;
  maxAmount: number;
  maxMonths: number;
  minMonths: number;
  interestType: "reducing-balance" | "flat-service-charge";
  annualInterestRate?: number; // Normal loan only
  serviceChargeRate?: number; // Material / Holiday loans
  salaryRepaymentCapFraction: number; // e.g. 1/3
  minMembershipMonths: number;
  rejoinedMembershipMonths: number;
  maxMultipleOfSavings?: number; // Normal loan only
  guarantorRequired: boolean;
  collateralOptional: boolean;
  applicationWindow?: Bi;
  mustBeRepaidBy?: Bi;
  insuranceFeeConfirmed: boolean;
  insuranceFeeNote?: Bi;
}

export const LOAN_PRODUCTS: Record<LoanType, LoanProductConfig> = {
  normal: {
    id: "normal",
    name: { en: "Normal Loan", am: "መደበኛ ብድር" },
    description: {
      en: "A general-purpose loan repaid over a longer period on a reducing balance, intended for larger personal needs.",
      am: "ለትላልቅ የግል ፍላጎቶች የታሰበ፣ በቀሪ ሂሳብ ቀንሶ በረጅም ጊዜ የሚከፈል አጠቃላይ ዓላማ ብድር።",
    },
    minAmount: 1000,
    maxAmount: 1_400_000,
    minMonths: 1,
    maxMonths: 84,
    interestType: "reducing-balance",
    annualInterestRate: 0.09,
    salaryRepaymentCapFraction: 1 / 3,
    minMembershipMonths: 6,
    rejoinedMembershipMonths: 12,
    maxMultipleOfSavings: 4,
    guarantorRequired: true,
    collateralOptional: true,
    insuranceFeeConfirmed: false,
    insuranceFeeNote: {
      en: "An annual insurance fee may apply; the exact rate is pending confirmation from Moenco SACCO and is excluded from calculator estimates.",
      am: "ዓመታዊ የመድን ክፍያ ሊኖር ይችላል፤ ትክክለኛው መጠን ከማህበሩ እስኪረጋገጥ እየተጠበቀ ነው እና በማስያው ግምት ውስጥ አልተካተተም።",
    },
  },
  material: {
    id: "material",
    name: { en: "Material Loan", am: "የንዋይ ብድር" },
    description: {
      en: "A short-term, interest-free loan for purchasing household materials, repaid with a flat 5% service charge.",
      am: "የቤት ቁሳቁስ ለመግዛት የሚሰጥ፣ ወለድ የለሽ፣ በ5% ቋሚ የአገልግሎት ክፍያ የሚከፈል የአጭር ጊዜ ብድር።",
    },
    minAmount: 1000,
    maxAmount: 100_000,
    minMonths: 1,
    maxMonths: 12,
    interestType: "flat-service-charge",
    serviceChargeRate: 0.05,
    salaryRepaymentCapFraction: 1 / 3,
    minMembershipMonths: 6,
    rejoinedMembershipMonths: 12,
    guarantorRequired: true,
    collateralOptional: true,
    applicationWindow: { en: "Applications open every September", am: "ማመልከቻ በየዓመቱ መስከረም ይከፈታል" },
    mustBeRepaidBy: { en: "Must be fully repaid by the following September", am: "በሚቀጥለው መስከረም ሙሉ በሙሉ መከፈል አለበት" },
    insuranceFeeConfirmed: true,
  },
  holiday: {
    id: "holiday",
    name: { en: "Holiday Loan", am: "የበዓል ብድር" },
    description: {
      en: "A short-term, interest-free loan to help members cover holiday expenses, repaid with a flat 5% service charge.",
      am: "አባላት የበዓል ወጪያቸውን እንዲሸፍኑ የሚያግዝ፣ ወለድ የለሽ፣ በ5% ቋሚ የአገልግሎት ክፍያ የሚከፈል የአጭር ጊዜ ብድር።",
    },
    minAmount: 15_000,
    maxAmount: 20_000,
    minMonths: 1,
    maxMonths: 12,
    interestType: "flat-service-charge",
    serviceChargeRate: 0.05,
    salaryRepaymentCapFraction: 1 / 3,
    minMembershipMonths: 6,
    rejoinedMembershipMonths: 12,
    guarantorRequired: true,
    collateralOptional: true,
    applicationWindow: { en: "Applications open every April", am: "ማመልከቻ በየዓመቱ ሚያዝያ ይከፈታል" },
    mustBeRepaidBy: { en: "Must be fully repaid by the following April", am: "በሚቀጥለው ሚያዝያ ሙሉ በሙሉ መከፈል አለበት" },
    insuranceFeeConfirmed: true,
  },
};

export const GENERAL_LOAN_RULES = {
  cutoffDay: 15,
  cutoffRule: {
    en: "Applications submitted after the 15th of the month are processed the following month.",
    am: "ከወሩ 15ኛ ቀን በኋላ የሚቀርቡ ማመልከቻዎች በሚቀጥለው ወር ይሰራሉ።",
  } as Bi,
  earlyRepayment: {
    en: "Members may repay a loan in full ahead of schedule at any time, without penalty.",
    am: "አባላት በማንኛውም ጊዜ ቅጣት ሳይጣልባቸው ብድራቸውን ቀድመው ሙሉ በሙሉ መክፈል ይችላሉ።",
  } as Bi,
  resignationRecovery: {
    en: "If a member resigns with an unpaid loan balance, the amount is first recovered from the member's savings and share capital, and then from the guarantor(s) if a shortfall remains.",
    am: "አባል ያልተከፈለ ብድር ሳለበት ከማህበሩ ቢለቅ፣ ገንዘቡ በመጀመሪያ ከአባሉ ቁጠባና ካፒታል ይቀነሳል፣ የቀረ ቢኖር ደግሞ ከተያዥ(ዎች) ይሰበሰባል።",
  } as Bi,
};

export const GUARANTOR_RULES = {
  membersOnly: {
    en: "A guarantor must be an active SACCO member in good standing.",
    am: "ተያዥ ንቁ የማህበሩ አባል መሆን አለበት።",
  } as Bi,
  crossGuarantee: {
    en: "Material and Holiday loan borrowers may guarantee each other's loans.",
    am: "የንዋይና የበዓል ብድር ተበዳሪዎች እርስ በርስ ለብድራቸው ተያዥ መሆን ይችላሉ።",
  } as Bi,
  normalLoanRestriction: {
    en: "Members who currently have an outstanding Normal Loan cannot act as a guarantor for another member's loan.",
    am: "ያልተከፈለ መደበኛ ብድር ያላቸው አባላት ለሌላ አባል ብድር ተያዥ መሆን አይችሉም።",
  } as Bi,
};

export interface Branch {
  id: string;
  name: Bi;
  address: Bi;
  phone: string;
  isHeadOffice?: boolean;
}

export const BRANCHES: Branch[] = [
  {
    id: "addis-ababa",
    name: { en: "Addis Ababa (Head Office)", am: "አዲስ አበባ (ዋና ጽሕፈት ቤት)" },
    address: { en: "Address to be confirmed", am: "አድራሻ ይረጋገጣል" },
    phone: "To confirm",
    isHeadOffice: true,
  },
  {
    id: "adama",
    name: { en: "Adama Branch", am: "አዳማ ቅርንጫፍ" },
    address: { en: "Address to be confirmed", am: "አድራሻ ይረጋገጣል" },
    phone: "To confirm",
  },
  {
    id: "hawassa",
    name: { en: "Hawassa Branch", am: "ሀዋሳ ቅርንጫፍ" },
    address: { en: "Address to be confirmed", am: "አድራሻ ይረጋገጣል" },
    phone: "To confirm",
  },
  {
    id: "dire-dawa",
    name: { en: "Dire Dawa Branch", am: "ድሬ ዳዋ ቅርንጫፍ" },
    address: { en: "Address to be confirmed", am: "አድራሻ ይረጋገጣል" },
    phone: "To confirm",
  },
  {
    id: "bahir-dar",
    name: { en: "Bahir Dar Branch", am: "ባህር ዳር ቅርንጫፍ" },
    address: { en: "Address to be confirmed", am: "አድራሻ ይረጋገጣል" },
    phone: "To confirm",
  },
];

export const CONTACT = {
  email: "info@moencosacco.example.et",
  phone: "To confirm",
  workingHours: { en: "Monday – Friday, 8:30 AM – 5:30 PM", am: "ከሰኞ እስከ አርብ፣ ከጠዋት 2:30 እስከ ምሽት 11:30" } as Bi,
  workingHoursConfirmed: false,
};

export const GOVERNANCE_ROLES: Bi[] = [
  { en: "Chairperson", am: "ሰብሳቢ" },
  { en: "Vice Chairperson", am: "ምክትል ሰብሳቢ" },
  { en: "Loan Committee Member", am: "የብድር ኮሚቴ አባል" },
  { en: "Loan Committee Member", am: "የብድር ኮሚቴ አባል" },
  { en: "Loan Committee Member", am: "የብድር ኮሚቴ አባል" },
  { en: "Loan Committee Member", am: "የብድር ኮሚቴ አባል" },
  { en: "Manager", am: "ማናጀር" },
  { en: "Finance Department Head", am: "የፋይናንስ ክፍል ኃላፊ" },
];
