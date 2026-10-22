import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useState } from 'react';
import Button from '@mui/material/Button';
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
      <Button
        component={Link}
        to="/kb/Preservação da memória/CACiC/Mandatos"
        variant="outlined">
        Ver histórico de diretorias
      </Button>
    </>
  );
}

export default function CurrentSlate() {
  return <BrowserOnly>{() => <CurrentSlateContent />}</BrowserOnly>;
}
