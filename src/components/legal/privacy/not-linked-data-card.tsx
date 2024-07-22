import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Fragment } from 'react';
import {
  NearMeOutlined,
  AnalyticsOutlined,
  SearchOutlined,
  PersonOffOutlined,
} from '@mui/icons-material';

import styles from './common.module.css';

export default function NonLinkedDataCard() {
  return (
    <>
      <PersonOffOutlined
        className={styles.icon_big}
        aria-hidden="true"
        name="ellipsis-horizontal-circle-outline"
      />
      <Typography variant="h5">Dados não vinculados a você</Typography>
      <Typography>
        Os seguintes dados podem ser coletados, mas não estão vinculados à sua
        identidade:
      </Typography>
      <Typography variant="h6" className="ion-padding-horizontal">
        Análise
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <NearMeOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Localização"
            secondary={
              <Fragment>
                <Typography>Localização aproximada</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SearchOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText primary="Histórico de buscas" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <AnalyticsOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações de uso"
            secondary={
              <Fragment>
                <Typography>Interações com o aplicativo</Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
