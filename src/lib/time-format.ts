const rtf = new Intl.RelativeTimeFormat('en', {
  localeMatcher: 'best fit',
  numeric: 'always',
  style: 'short',
})

const diffDate = (date: Date): number => {
  const DATE_NOW = new Date()
  return date.getTime() - DATE_NOW.getTime()
}

const diffAmount = (
  diff: number
): [number, 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'] => {
  if (diff < -31_536_000_000) {
    return [diff / 31_536_000_000, 'year']
  } else if (diff < -2_592_000_000) {
    return [diff / 2_592_000_000, 'month']
  } else if (diff < -86_400_000) {
    return [diff / 86_400_000, 'day']
  } else if (diff < -3_600_000) {
    return [diff / 3_600_000, 'hour']
  } else if (diff < -60_000) {
    return [diff / 60_000, 'minute']
  } else {
    return [diff / 1000, 'second']
  }
}

const diffDisplay = (date: Date): string => {
  const DIFF = diffDate(date)
  const [value, style] = diffAmount(DIFF)
  const FORMATTED_DIFF_ARRAY = rtf.formatToParts(value, style)
  const FORMATTED_DIFF = `${FORMATTED_DIFF_ARRAY[0].value} ${
    FORMATTED_DIFF_ARRAY[FORMATTED_DIFF_ARRAY.length - 1].value
  }`
  return FORMATTED_DIFF
}

export default diffDisplay
