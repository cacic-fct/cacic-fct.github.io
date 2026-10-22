import Heading from '@theme/Heading';
import Typography from '@mui/material/Typography';
import SlateGridGenerator from './slate-grid-generator';
import { formatSlateDate, getSlateHistoryTitle } from './slate-dates';
import type { Slate as SlateData } from './types';

interface SlateProps {
  slate: SlateData;
  variant: 'home' | 'history';
}

/** Home shows only the name and members; history includes the term and notes. */
export default function Slate({ slate, variant }: SlateProps) {
  return (
    <>
      {variant === 'home' ? (
        <Typography variant="h5" sx={{ py: 1 }}>
          Chapa {slate.name}
        </Typography>
      ) : (
        <>
          <Heading as="h2" id={slate.id}>
            {getSlateHistoryTitle(slate)}
          </Heading>
          <p>
            <time dateTime={slate.startDate}>
              {formatSlateDate(slate.startDate)}
            </time>
            {' - '}
            <time dateTime={slate.endDate}>
              {formatSlateDate(slate.endDate)}
            </time>
            {slate.endDateIsExpected && ' (previsto)'}
          </p>
          {slate.description && <p>{slate.description}</p>}
        </>
      )}
      <SlateGridGenerator slateMembers={slate.members} />
    </>
  );
}
