import Layout from '@theme/Layout';

import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

import { members as currentMembers } from '@site/src/shared/components/slates/2024-ada-lovelace';
import SlateGridGenerator from '@site/src/shared/components/slates/slate-grid-generator';
import QuickAccess from '@site/src/components/index/quick-access';

export default function Home(): JSX.Element {
  return (
    <Layout description="Homepage do CACiC">
      <main>
        <Container sx={{ p: 4 }} maxWidth="sm">
          <QuickAccess />
        </Container>

        <Container sx={{ p: 2 }} maxWidth="sm">
          <Typography variant="h5" sx={{ py: 1 }}>
            O CACiC
          </Typography>
          <p>
            O Centro Acadêmico de Ciência da Computação é o órgão de
            representação estudantil do curso de Bacharelado em Ciência da
            Computação da FCT-Unesp. A organização defende os interesses e
            direitos dos alunos. A direção do Centro Acadêmico (CA) é escolhida
            por meio de eleições periódicas, entre chapas de alunos do curso.
          </p>
        </Container>

        <Container sx={{ p: 2 }} maxWidth="sm">
          <Typography variant="h5" sx={{ py: 1 }}>
            Chapa Ada Lovelace
          </Typography>
          <SlateGridGenerator slateMembers={currentMembers} />
        </Container>
      </main>
      <Box sx={{ py: 4 }} />
    </Layout>
  );
}
