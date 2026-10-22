import BrowserOnly from '@docusaurus/BrowserOnly';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Slate from './slate';
import { getCurrentSlate, getSlateDate } from './slate-dates';
import { slates } from './slates';

function CurrentSlateContent() {
  const [currentSlate] = useState(() =>
    getCurrentSlate(slates, getSlateDate(new Date())),
  );

  return currentSlate ? (
    <Slate slate={currentSlate} variant="home" />
  ) : (
    <>
      <Typography variant="h5" sx={{ py: 1 }}>
        Diretoria vacante
      </Typography>
      <p>
        A nova diretoria pode ainda não ter atualizado o site, ou novas eleições
        podem não ter sido convocadas.
      </p>
    </>
  );
}

export default function CurrentSlate() {
  return <BrowserOnly>{() => <CurrentSlateContent />}</BrowserOnly>;
}
