import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { parseISO, format } from 'date-fns';

export default function MeetingsAccordion({
  meetingsData,
}: {
  meetingsData: Meetings[];
}) {
  return (
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
              component="a"
              href={'https://docs.google.com/document/d/' + m.id}
              target="_blank"
              key={index}>
              <ListItemText
                primary={m.title}
                secondary={format(parseISO(m.date), "dd 'de' MMMM 'de' y")}
              />
            </ListItemButton>
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
}

export interface Meetings {
  date: string;
  title: string;
  id: string;
}
