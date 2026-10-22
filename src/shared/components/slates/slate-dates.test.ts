import { strict as assert } from 'node:assert';
import { test } from 'node:test';
import { getCurrentSlate, getSlateDate } from './slate-dates';
import type { Slate } from './types';

const previous: Slate = {
  id: 'previous',
  name: 'Previous',
  startDate: '2025-09-26',
  endDate: '2026-09-26',
  members: [],
};
const successor: Slate = {
  ...previous,
  id: 'successor',
  name: 'Successor',
  startDate: '2026-09-26',
  endDate: '2027-09-26',
};

test('includes the first and last day of a term', () => {
  assert.equal(getCurrentSlate([previous], previous.startDate), previous);
  assert.equal(getCurrentSlate([previous], previous.endDate), previous);
});

test('returns no slate before a term, after it, or during a gap', () => {
  assert.equal(getCurrentSlate([], '2026-09-26'), undefined);
  assert.equal(getCurrentSlate([previous], '2025-09-25'), undefined);
  assert.equal(getCurrentSlate([previous], '2026-09-27'), undefined);
  assert.equal(getCurrentSlate([previous, successor], '2027-09-27'), undefined);
  assert.equal(
    getCurrentSlate(
      [previous, { ...successor, startDate: '2026-10-01' }],
      '2026-09-27',
    ),
    undefined,
  );
});

test('prioritizes a successor on a shared date regardless of registry order', () => {
  for (const slates of [
    [previous, successor],
    [successor, previous],
  ]) {
    assert.equal(getCurrentSlate(slates, '2026-09-25'), previous);
    assert.equal(getCurrentSlate(slates, '2026-09-26'), successor);
    assert.equal(getCurrentSlate(slates, '2026-09-27'), successor);
  }
});

test('uses the calendar day in São Paulo at the midnight boundary', () => {
  assert.equal(getSlateDate(new Date('2026-09-27T02:59:59Z')), '2026-09-26');
  assert.equal(getSlateDate(new Date('2026-09-27T03:00:00Z')), '2026-09-27');
});
