import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AchievementsCards from '@site/knowledge-base/cacic/transparencia/components/achievements-cards';
import MeetingsAccordion from '@site/knowledge-base/cacic/transparencia/components/meetings-accordion';
import {
  achievementsHamilton,
  meetingsHamilton,
} from '@site/knowledge-base/cacic/transparencia/data/2021-margaret-hamilton';

export default function MainAccordion() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header">
        Chapa Margaret Hamilton (2021-2023)
      </AccordionSummary>
      <AccordionDetails>
        <MeetingsAccordion meetingsData={meetingsHamilton} />

        <AchievementsCards achievementsData={achievementsHamilton} />
      </AccordionDetails>
    </Accordion>
  );
}
