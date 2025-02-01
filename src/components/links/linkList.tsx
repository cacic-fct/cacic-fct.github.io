import {
  Card,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Icon,
  Container,
  CardContent,
} from '@mui/material';

export default function LinkList({ cardList }: { cardList: CardList[] }) {
  let content: JSX.Element[] | JSX.Element = [];

  if (!cardList || cardList.length === 0) {
    return (
      <Card sx={{ my: 4 }}>
        <CardContent>
          <Typography variant="h6">
            Nossa árvore de links está vazia!
          </Typography>
          <Button href="/">Ir à página inicial</Button>
        </CardContent>
      </Card>
    );
  } else {
    content = cardList.map((card: CardList) => {
      return (
        <Card sx={{ my: 4 }} key={card.title}>
          <CardContent>
            <Typography variant="h6">{card.title}</Typography>
            <List>
              {card.content.map((item: ListType) => (
                <ListItem disablePadding key={item.title}>
                  <ListItemButton href={item.url}>
                    <ListItemIcon>
                      <Icon>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      );
    });

    return (
      <Container sx={{ py: 2 }} maxWidth="sm">
        {content}
      </Container>
    );
  }
}

/**
 * Interface representing a link item with associated metadata
 * @interface ListType
 * @property {string} title - The title or name of the link
 * @property {string} icon - The MUI icon identifier
 * @property {string} url - The URL or destination path of the link
 * @property {string | null} content - Optional content description associated with the link
 */
export interface ListType {
  title: string;
  icon: string;
  url: string;
  content: string | null;
}

/**
 * Interface representing a card list structure.
 * @interface
 * @property {string | null} title - The title of the card list
 * @property {ListType[]} content - Array of list items
 * @property {Object} [img] - Optional image object
 * @property {string} img.src - Source URL of the image
 * @property {string} img.alt - Alternative text for the image
 */
export interface CardList {
  title: string | null;
  content: ListType[];
  img?: {
    src: string;
    alt: string;
  };
}
