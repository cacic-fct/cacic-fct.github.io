import Layout from '@theme/Layout';

import LinkTreeHeader from '@site/src/pages/link-tree/components/header';
import LinkList from '@site/src/pages/link-tree/components/linkList';

import {
  CardList,
  ListType,
} from '@site/src/pages/link-tree/components/linkList';

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
const linkList: ListType[] = [
  {
    title: 'Plenária do MUP – Inscrições',
    icon: 'add_circle',
    url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
    content:
      '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
  },
];
const cardList: CardList[] = [
  {
    title: 'Title',
    content: linkList,
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

export default function LinkTree(): JSX.Element {
  return (
    <>
      <Layout title={`Árvore de links`} description="Árvore de links do CACiC">
        <main>
          <LinkTreeHeader />
          <LinkList cardList={cardList} />
        </main>
      </Layout>
    </>
  );
}
