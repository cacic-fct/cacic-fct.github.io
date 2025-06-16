import { addDays, isSameDay, subDays } from 'date-fns';

// Store holidays as a map keyed by year for better organization
const holidaysCache: Map<number, Date[]> = new Map();

/**
 * Fetches holidays for a specific year and caches them
 */
export async function fetchHolidaysForYear(year: number): Promise<Date[]> {
  // Return cached holidays if available
  if (holidaysCache.has(year)) {
    return holidaysCache.get(year) || [];
  }

  const holidays: Date[] = [];

  try {
    // Fetch holidays from BrasilAPI
    const response = await fetch(
      `https://brasilapi.com.br/api/feriados/v1/${year}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch holidays: ${response.statusText}`);
    }

    const holidaysData = await response.json();

    // Process each holiday
    holidaysData.forEach(
      (holiday: { date: string; name: string; type: string }) => {
        const date = new Date(holiday.date + 'T12:00:00Z');
        holidays.push(date);

        if (holiday.name.includes('Carnaval')) {
          holidays.push(addDays(date, 1)); // Quarta-feira de Cinzas
        }
      },
    );

    // Add local holidays
    holidays.push(new Date(`${year}-01-20T12:00:00Z`)); // Dia de São Sebastião
    holidays.push(new Date(`${year}-07-09T12:00:00Z`)); // Revolução Constitucionalista
    holidays.push(new Date(`${year}-09-14T12:00:00Z`)); // Aniversário de Presidente Prudente
    holidays.push(new Date(`${year}-10-28T12:00:00Z`)); // Dia do Servidor Público

    // Cache the results
    holidaysCache.set(year, holidays);

    return holidays;
  } catch (error) {
    console.error('Error fetching holidays:', error);
    return [];
  }
}

/**
 * Checks if a date is a holiday or an extended holiday (bridge)
 */
export function isHoliday(date: Date, holidays: Date[]): boolean {
  return holidays.some((holiday) => {
    if (isSameDay(holiday, date)) return true;

    // Segunda before a Tuesday holiday (bridge)
    const isMondayBeforeTuesdayHoliday =
      holiday.getDay() === 2 && isSameDay(subDays(holiday, 1), date);

    // Friday after a Thursday holiday (bridge)
    const isFridayAfterThursdayHoliday =
      holiday.getDay() === 4 && isSameDay(addDays(holiday, 1), date);

    return isMondayBeforeTuesdayHoliday || isFridayAfterThursdayHoliday;
  });
}
