import Layout from '@theme/Layout';

import LinkTreeHeader from '@site/src/components/links/header';
import LinkList from '@site/src/components/links/linkList';

import { CardList, ListType } from '@site/src/components/links/linkList';
import { Container } from '@mui/material';

/* Para adicionar um item à árvore de links, edite as variáveis linkList e cardList que estão fora do comentário.
 * Se você não possui permissão no repositório, abra um pull request com as alterações.
 *
 * Descrição dos campos:
 ** linkList: Lista de links {
 **   title: Título do item,
 **   icon: Ícone MUI,
 **   url: URL do item,
 **   content: Descrição do item ou null
 ** }
 **
 ** cardList: Lista de cards {
 **   title: Título do card ou null
 **   content: Lista de links
 **   img: Imagem do card (opcional)
 **   src: URL da imagem
 **   alt: Texto alternativo da imagem
 ** }
 *
 * Exemplo:

 const linkList1 = [
   {
     title: 'Plenária do MUP – Inscrições',
     icon: 'document-text',
     url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
     content:
       '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
  },
 ];
  
 const linkList2 = [
   {
     title: 'Site do CACiC',
     icon: 'school',
     url: 'https://cacic.dev.br',
     content: null,
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
     content: linkList1,
   },
   {
     title: 'CACiC',
     content: linkList2,
   },
 ];
*/

const linkList: ListType[] = [];
const cardList: CardList[] = [];

export default function LinkTree(): JSX.Element {
  return (
    <>
      <Layout title="Links" description="Árvore de links do CACiC">
        <Container maxWidth="sm" sx={{ py: 4 }}>
          <LinkTreeHeader />
          <LinkList cardList={cardList} />
          <a href="https://github.com/cacic-fct/cacic-fct.github.io/edit/main/src/pages/links/index.tsx">
            Editar árvore
          </a>
        </Container>
      </Layout>
    </>
  );
}
