import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

function formatDate(date: string) {
  return format(parseISO(date), "dd 'de' MMMM 'de' y", {
    locale: ptBR,
  });
}

export default function MeetingsAccordion({
  meetingsData,
}: {
  meetingsData: Meetings[];
}) {
  return (
    <MuiThemeClientProvider>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          Reuniões da chapa, plenárias e assembleias
        </AccordionSummary>
        <AccordionDetails>
          Decisões e discussões também ocorrem fora de reuniões, plenárias e
          assembleias e não constam nessa lista.
          <List>
            {meetingsData.map((m, index) => (
              <ListItemButton
                component={m.id ? 'a' : 'div'}
                href={
                  m.id
                    ? 'https://docs.google.com/document/d/' + m.id
                    : undefined
                }
                target="_blank"
                key={index}>
                <ListItemText
                  primary={m.title}
                  secondary={formatDate(m.date)}
                />
              </ListItemButton>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </MuiThemeClientProvider>
  );
}

export interface Meetings {
  date: string;
  title: string;
  id?: string;
}
