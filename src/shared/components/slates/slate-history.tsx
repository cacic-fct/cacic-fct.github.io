import Slate from './slate';
import { getSlateHistoryTitle } from './slate-dates';
import { slates } from './slates';

export const slateHistoryToc = slates.map((slate) => ({
  value: getSlateHistoryTitle(slate),
  id: slate.id,
  level: 2,
}));

export default function SlateHistory() {
  return slates.map((slate) => (
    <Slate key={slate.id} slate={slate} variant="history" />
  ));
}
