import LinkedDataCard from '@site/src/components/legal/privacy/linked-data-card';
import NonLinkedDataCard from '@site/src/components/legal/privacy/not-linked-data-card';
import TrackingData from '@site/src/components/legal/privacy/tracking-data-card';

import { Divider } from '@mui/material';

import styles from './common.module.css';
import MuiThemeClientProvider from '@site/src/theme/MuiThemeProvider';

export default function PrivacyCards() {
  return (
    <MuiThemeClientProvider>
      <TrackingData />
      <Divider className={styles.divider} />
      <LinkedDataCard />
      <Divider className={styles.divider} />
      <NonLinkedDataCard />
    </MuiThemeClientProvider>
  );
}
