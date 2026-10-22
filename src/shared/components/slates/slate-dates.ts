import type { Slate } from './types';

export function getSlateDate(now: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((value) => value.type === type)!.value;

  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function getCurrentSlate(
  slates: readonly Slate[],
  date: string,
): Slate | undefined {
  // A successor takes priority on its first day, including a shared end date.
  return slates.reduce<Slate | undefined>((current, slate) => {
    if (slate.startDate > date || slate.endDate < date) return current;
    if (!current || slate.startDate > current.startDate) return slate;
    return current;
  }, undefined);
}

export function formatSlateDate(date: string): string {
  return date.split('-').reverse().join('/');
}

export function getSlateHistoryTitle(slate: Slate): string {
  return `${slate.name} — ${slate.startDate.slice(0, 4)}–${slate.endDate.slice(0, 4)}`;
}
