import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsIcon from '@mui/icons-material/Apps';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import { members as katieMembers } from '@site/src/shared/components/slates/katie-bouman';
import SlateGridGenerator from '@site/src/shared/components/slates/slate-grid-generator';

export default function Home(): JSX.Element {
  return (
    <>
      <Layout
        title={`CACiC`}
        description="Description will go into a meta tag in <head />">
        <main>
          <Container sx={{ p: 4 }} maxWidth="sm">
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Acesso rápido
                </Typography>

                <List>
                  <ListItem disablePadding>
                    <ListItemButton href="https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/">
                      <ListItemIcon>
                        <CalendarMonthIcon />
                      </ListItemIcon>
                      <ListItemText primary="Calendário do câmpus" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton href="https://fct-pp.web.app/">
                      <ListItemIcon>
                        <AppsIcon />
                      </ListItemIcon>
                      <ListItemText primary="FCT App" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton href="https://fct-pp.web.app/calouros">
                      <ListItemIcon>
                        <GroupIcon />
                      </ListItemIcon>
                      <ListItemText primary="Página do calouro" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton href="https://drive.google.com/file/d/1IkP7qYwvtdDc9CRiKueyjZ8bESRsDUS5/view">
                      <ListItemIcon>
                        <ArticleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Estatuto do CACiC" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
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
