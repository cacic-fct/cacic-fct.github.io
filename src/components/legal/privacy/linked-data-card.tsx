import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Fragment } from 'react';
import {
  PersonOutlined,
  InfoOutlined,
  ShoppingBagOutlined,
  BadgeOutlined,
  ImageOutlined,
  SchoolOutlined,
  AnalyticsOutlined,
  SettingsOutlined,
  CreditCardOutlined,
} from '@mui/icons-material';

import styles from './common.module.css';

export default function LinkedDataCard() {
  return (
    <>
      <PersonOutlined
        className={styles.icon_big}
        aria-hidden="true"
        name="person-circle-outline"
      />
      <Typography variant="h5">Dados vinculados a você</Typography>
      <Typography>
        Os seguintes dados podem ser coletados e vinculados à sua identidade:
      </Typography>
      <br />
      <Typography variant="h6" className="ion-padding-horizontal">
        Funcionalidade do app
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
                <Typography>Nome</Typography>
                <Typography>Endereço de e-mail</Typography>
                <Typography>Número do celular</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ShoppingBagOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Compras"
            secondary={
              <Fragment>
                <Typography>Histórico de compras</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CreditCardOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações financeiras"
            secondary={
              <Fragment>
                <Typography>Dados de pagamento</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BadgeOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Identificadores"
            secondary={
              <Fragment>
                <Typography>ID de usuário</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ImageOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Conteúdo do usuário"
            secondary={
              <Fragment>
                <Typography>E-mails ou mensagens de texto</Typography>
                <Typography>Fotos ou vídeos</Typography>
                <Typography>Suporte ao usuário</Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h6" className="ion-padding-horizontal">
        Personalização do aplicativo
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
                <Typography>Endereço de e-mail</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações acadêmicas"
            secondary={
              <Fragment>
                <Typography>Número do Registro Acadêmico (RA)</Typography>
                <Typography>Vínculo com a Unesp</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CreditCardOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações financeiras"
            secondary={
              <Fragment>
                <Typography>Dados de pagamento</Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>

      <Typography variant="h6" className="ion-padding-horizontal">
        Análise
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
                <Typography>Endereço de e-mail</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Informações acadêmicas"
            secondary={
              <Fragment>
                <Typography>Número do Registro Acadêmico (RA)</Typography>
                <Typography>Vínculo com a Unesp</Typography>
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
              <Fragment>
                <Typography>Interações com o aplicativo</Typography>
                <Typography>Outros dados de uso</Typography>
              </Fragment>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SettingsOutlined aria-hidden="true" />
          </ListItemIcon>
          <ListItemText
            primary="Diagnóstico"
            secondary={
              <Fragment>
                <Typography>Dados de falhas</Typography>
                <Typography>Dados de desempenho</Typography>
                <Typography>Outros dados de diagnóstico</Typography>
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
