import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { Fragment } from 'react';
import { ListItemIcon } from '@mui/material';
import {
  FingerprintOutlined,
  InfoOutlined,
  AnalyticsOutlined,
} from '@mui/icons-material';

import styles from './common.module.css';

export default function TrackingData() {
  return (
    <>
      <FingerprintOutlined
        className={styles.icon_big}
        aria-hidden="true"
        name="finger-print-outline"
      />
      <Typography variant="h5">Dados usados para rastrear você</Typography>
      <Typography>Usamos serviços Google em nosso aplicativo.</Typography>
      <Typography>
        Os seguintes dados podem ser usados para rastrear você em apps e sites
        de propriedade de outras empresas:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <InfoOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações de contato"
            secondary={
              <Fragment>
                <Typography>O nome da sua conta Google</Typography>
                <Typography>
                  O endereço de e-mail da sua conta Google
                </Typography>
                <Typography>
                  Seu número do celular se ele foi verificado pelo Google
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AnalyticsOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações de uso"
            secondary={
              // Fragment is required to make it gray
              <Fragment>
                <Typography>
                  Suas interações com o aplicativo são coletadas pelo Google
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
