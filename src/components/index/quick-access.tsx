import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsIcon from '@mui/icons-material/Apps';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import BookIcon from '@mui/icons-material/Book';

import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

export default function QuickAccess() {
  return (
    <MuiThemeClientProvider>
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
              <ListItemButton href="https://account.cacic.dev.br/">
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="Conta CACiC" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href="https://manual.cacic.dev.br">
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Manual do calouro" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href="https://manual.cacic.dev.br/página-do-calouro">
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
    </MuiThemeClientProvider>
  );
}
