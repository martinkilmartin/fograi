import {
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  MONTH,
  YEAR,
} from '@constants/MILLISECOND_TIME';

const diffDate = (date: Date): number => {
  const DATE_NOW = new Date();
  return DATE_NOW.getTime() - date.getTime();
};

const diffAmount = (
  diff: number,
): [number, 's' | 'min' | 'mins' | 'hr' | 'days' | 'day' | 'mon' | 'yr'] => {
  if (diff > YEAR) {
    return [diff / YEAR, 'yr'];
  } else if (diff > MONTH) {
    return [diff / MONTH, 'mon'];
  } else if (diff > DAY * 2) {
    return [diff / DAY, 'days'];
  } else if (diff > DAY) {
    return [diff / DAY, 'day'];
  } else if (diff > HOUR) {
    return [diff / HOUR, 'hr'];
  } else if (diff > MINUTE * 2) {
    return [diff / MINUTE, 'mins'];
  } else if (diff > MINUTE) {
    return [diff / MINUTE, 'min'];
  } else {
    return [diff / SECOND, 's'];
  }
};

const diffDisplay = (date: Date): string => {
  const DIFF = diffDate(date);
  const [value, period] = diffAmount(DIFF);
  return `${Math.floor(value)} ${period}`;
};

export default diffDisplay;
