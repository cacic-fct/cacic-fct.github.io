import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AchievementsCards from '@site/src/shared/components/kb/cacic/transparency/achievements-cards';
import MeetingsAccordion from '@site/src/shared/components/kb/cacic/transparency/meetings-accordion';
import {
  achievementsHamilton,
  meetingsHamilton,
} from '@site/src/shared/components/kb/cacic/transparency/data/2021-margaret-hamilton';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

export default function MainAccordion() {
  return (
    <MuiThemeClientProvider>
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
    </MuiThemeClientProvider>
  );
}
