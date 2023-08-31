export const numberFormat = (number: number | bigint): string =>
  Intl.NumberFormat('en-IE').format(number)
