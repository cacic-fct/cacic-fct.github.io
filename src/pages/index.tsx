import Layout from '@theme/Layout';

import styles from './index.module.css';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import { members as katieMembers } from '@site/src/shared/components/slates/katie-bouman';
import SlateGridGenerator from '@site/src/shared/components/slates/slate-grid-generator';
import QuickAccess from '@site/src/pages/index-components/quick-access';

export default function Home(): JSX.Element {
  return (
    <>
      <Layout
        title={`CACiC`}
        description="Description will go into a meta tag in <head />">
        <main>
          <Container sx={{ p: 4 }} maxWidth="sm">
            <QuickAccess />
          </Container>

          <Container sx={{ p: 2 }} maxWidth="sm">
            <Typography variant="h5">O CACiC</Typography>
            <p>
              O Centro Acadêmico de Ciência da Computação é o órgão de
              representação estudantil do curso de Bacharelado em Ciência da
              Computação da FCT-Unesp. A organização defende os interesses e
              direitos dos alunos. A direção do CA é escolhida por meio de
              eleições periódicas, entre chapas de alunos do curso.
            </p>
          </Container>

          <Container sx={{ p: 2 }} maxWidth="sm">
            <Typography variant="h5">Chapa Katie Bouman</Typography>
            <SlateGridGenerator slateMembers={katieMembers} />
          </Container>
        </main>
      </Layout>
    </>
  );
}
