import { isWeekend, addDays } from 'date-fns';
import { isHoliday } from './holidayUtils';

/**
 * Checks if a date is a business day (not a weekend or holiday)
 */
export function isBusinessDay(date: Date, holidays: Date[]): boolean {
  return !isWeekend(date) && !isHoliday(date, holidays);
}

/**
 * Gets the next business day after the provided date
 */
export function getNextBusinessDay(date: Date, holidays: Date[]): Date {
  let next = addDays(date, 1);
  while (!isBusinessDay(next, holidays)) {
    next = addDays(next, 1);
  }
  return next;
}

/**
 * Finds the first pair of consecutive business days starting from a given date
 */
export function findConsecutiveBusinessDays(
  start: Date,
  holidays: Date[],
): [Date, Date] {
  let day1 = new Date(start);

  while (true) {
    const day2 = addDays(day1, 1);
    if (isBusinessDay(day1, holidays) && isBusinessDay(day2, holidays)) {
      return [day1, day2];
    }
    day1 = addDays(day1, 1);
  }
}
