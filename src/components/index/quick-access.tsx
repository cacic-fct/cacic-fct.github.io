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

export default function QuickAccess() {
  return (
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
            <ListItemButton href="https://cacic-fct.github.io/manual-do-calouro/pagina-do-calouro">
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
  );
}
