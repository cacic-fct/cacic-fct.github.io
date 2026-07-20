import { JSX } from 'react';
import Layout from '@theme/Layout';

import NoBroadcasts from '@site/src/components/live/noBroadcasts';

import { Container, Typography } from '@mui/material';

import YouTubeBroadcast from '@site/src/components/live/youtubeBroadcast';
import TwitchBroadcast from '@site/src/components/live/twitchBroadcast';

// IDs das transmissões
const youtubeList: string[] = [];

// IDs dos canais
const twitchList: string[] = [];

// Transmissões para testes
// youtubeList.push('4xDzrJKXOOY');
// youtubeList.push('S_MOd40zlYU');

// twitchList.push('mst3k');
// twitchList.push('flexingseal');

export default function LinkTree(): JSX.Element {
  return (
    <Layout
      title={`Ao vivo`}
      description="Confira nossas transmissões ao vivo.">
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h6" sx={{ my: 4 }}>
          Transmissão ao vivo
        </Typography>
        {youtubeList.length === 0 && twitchList.length === 0 && (
          <NoBroadcasts />
        )}

        <YouTubeBroadcast youtubeList={youtubeList} />
        <TwitchBroadcast twitchList={twitchList} />
      </Container>
    </Layout>
  );
}
