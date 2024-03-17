import Container from '@mui/material/Container';

import YouTubeIcon from '@mui/icons-material/YouTube';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';

export default function LinkTreeHeader() {
  return (
    <Container maxWidth="sm">
      <img
        src={require('@site/static/logo/1024-ionicblue.png').default}
        alt="CACiC"
        style={{ width: '152px', cursor: 'pointer' }}
      />
      <p>Centro acadêmico de Ciência da Computação FCT-Unesp</p>
      <Button href="https://youtube.com/cacicfct">
        <YouTubeIcon />
      </Button>
      <Button href="https://instagram.com/cacic.fct">
        <InstagramIcon />
      </Button>
      <Button href="https://facebook.com/cacic.fct">
        <FacebookIcon />
      </Button>
      <Button href="mailto:cacic.fct@gmail.com">
        <MailIcon />
      </Button>
    </Container>
  );
}
