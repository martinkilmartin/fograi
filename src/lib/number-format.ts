export const numberFormat = (number: number | bigint): string =>
  Intl.NumberFormat('en-IE', { maximumSignificantDigits: 3 }).format(number)
