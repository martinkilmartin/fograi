import {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  MONTH,
  YEAR,
} from '@constants/MILLISECOND_TIME'


const diffDate = (date: Date): number => {
  const DATE_NOW = new Date()
  return DATE_NOW.getTime() - date.getTime()
}

const diffAmount = (
  diff: number
): [number, 's' | 'm' | 'h' | 'd' | 'm' | 'y'] => {
  if (diff > YEAR) {
    return [diff / YEAR, 'y']
  } else if (diff > MONTH) {
    return [diff / MONTH, 'm']
  } else if (diff > DAY) {
    return [diff / DAY, 'd']
  } else if (diff > HOUR) {
    return [diff / HOUR, 'h']
  } else if (diff > MINUTE) {
    return [diff / MINUTE, 'm']
  } else {
    return [diff / SECOND, 's']
  }
}

const diffDisplay = (date: Date): string => {
  const DIFF = diffDate(date)
  const [value, period] = diffAmount(DIFF)
  return `${Math.floor(value)}${period}`
}

export default diffDisplay
