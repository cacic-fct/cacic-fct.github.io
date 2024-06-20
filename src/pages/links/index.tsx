import Layout from '@theme/Layout';

import LinkTreeHeader from '@site/src/components/links/header';
import LinkList from '@site/src/components/links/linkList';

import { CardList, ListType } from '@site/src/components/links/linkList';
import { Container } from '@mui/material';

/* Example
      const linkList1 = [
        {
          title: 'Plenária do MUP – Inscrições',
          icon: 'document-text',
          url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
          content:
            '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
        },
      ];
  
      const cardList = [
        {
          title: null,
          content: null,
          img: {
            src: 'assets/linktree/banner.webp',
            alt: 'Banner da plenária',
          },
        },
        {
          title: 'Movimento estudantil',
          content: linkList,
        },
      ];
    */
const linkList: ListType[] = [];
const cardList: CardList[] = [];

export default function LinkTree(): JSX.Element {
  return (
    <>
      <Layout title={`Links`} description="Árvore de links do CACiC">
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <LinkTreeHeader />
          <LinkList cardList={cardList} />
        </Container>
      </Layout>
    </>
  );
}
