/**
 * Single source of truth for Moenco SACCO's confirmed business figures.
 * `confirmed: false` marks anything Moenco SACCO management has not verified —
 * pages must hedge those ("to be confirmed") instead of stating them as fact.
 */

export interface ConfirmableValue<T> {
  value: T
  confirmed: boolean
}

export const ORG = {
  nameEn: 'Moenco Workers Savings and Credit Cooperative',
  nameAm: 'ሞኤንኮ ሰራተኞች ቁጠባና ብድር ህብረት ስራ ማህበር',
  shortName: 'Moenco SACCO',
}

export const BANKING = {
  bankNameEn: 'Zemen Bank',
  bankNameAm: 'ዘመን ባንክ',
}

export const MEMBERSHIP_FEES = {
  registration: { value: 1400, confirmed: true } as ConfirmableValue<number>,
  application: { value: 1068, confirmed: false } as ConfirmableValue<number>,
  annualCharity: { value: 600, confirmed: true } as ConfirmableValue<number>,
  annualRetirement: { value: 420, confirmed: true } as ConfirmableValue<number>,
  minimumShares: { value: 5, confirmed: true } as ConfirmableValue<number>,
  pricePerShare: { value: 1000, confirmed: true } as ConfirmableValue<number>,
  minimumShareCapital: { value: 5000, confirmed: true } as ConfirmableValue<number>,
}

export const SAVINGS_RULES = {
  nonManagement: { minPercent: 5, maxPercent: 50 },
  management: { annualIncreasePercent: 15 },
}

export const LOAN_PRODUCTS = {
  normal: {
    minAmount: 1000,
    maxAmount: 1_400_000,
    maxMonths: 84,
    annualInterestRate: 0.09,
    minMembershipMonths: 6,
    insuranceFeeConfirmed: false,
  },
  material: {
    minAmount: 1000,
    maxAmount: 100_000,
    maxMonths: 12,
    serviceChargeRate: 0.05,
    minMembershipMonths: 6,
  },
  holiday: {
    minAmount: 15_000,
    maxAmount: 20_000,
    maxMonths: 12,
    serviceChargeRate: 0.05,
    minMembershipMonths: 6,
  },
}

export const BRANCH_COUNT = 5

export const CONTACT = {
  emailConfirmed: false,
  phoneConfirmed: false,
  workingHoursConfirmed: false,
}
