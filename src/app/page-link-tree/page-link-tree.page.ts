import { Component } from '@angular/core';

@Component({
  selector: 'app-page-link-tree',
  templateUrl: './page-link-tree.page.html',
  styleUrls: ['./page-link-tree.page.scss'],
})
export class PageLinkTreePage {
  cardList: CardList[];
  linkList: ListType[];
  linkListTwo: ListType[];

  constructor() {
    /* Example
    this.exampleList = [
      {
        title: 'Plenária do MUP – Inscrições',
        icon: 'document-text',
        url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
        content:
          '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
      },
    ];

    this.cardList = [
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
        content: this.exampleList,
      },
    ];
  */

    this.linkList = [
      {
        title: 'Kit completo',
        icon: 'sparkles-outline',
        url: 'https://forms.gle/87GvRmK83wJhrpqGA',
        content: 'Melhor custo-benefício!\nR$ 85,00',
      },
      {
        title: 'Camiseta + caneca com tirante',
        icon: 'bag-handle-outline',
        url: 'https://forms.gle/PwjXRFs6XHiaKBKT7',
        content: 'R$ 60,00',
      },
      {
        title: 'Colete + caneca com tirante',
        icon: 'bag-handle-outline',
        url: 'https://forms.gle/E4MPp7A4GpDpEovH6',
        content: 'R$ 50,00',
      },
    ];

    this.linkListTwo = [
      {
        title: 'Camiseta',
        icon: 'shirt-outline',
        url: 'https://forms.gle/DTSCTQzhmpYooM5V9',
        content: 'R$ 40,00',
      },
      {
        title: 'Colete',
        icon: 'bag-handle-outline',
        url: 'https://forms.gle/TW2LsVxtLybV8mks7',
        content: 'R$ 35,00',
      },
      {
        title: 'Caneca com tirante',
        icon: 'cafe-outline',
        url: 'https://forms.gle/tVn9QFvknvzReUcy8',
        content: 'R$ 25,00',
      },
    ];

    this.cardList = [
      {
        title: null,
        content: null,
        img: {
          src: 'assets/linktree/kit-bixo-2023.webp',
          alt: 'Kit bixo 2023',
        },
      },
      {
        title: 'Combos',
        content: this.linkList,
      },
      {
        title: 'Itens individuais',
        content: this.linkListTwo,
      },
    ];
  }
}

interface ListType {
  title: string;
  icon: string;
  url: string;
  content: string | null;
}

interface CardList {
  title: string | null;
  content: ListType[];
  img?: {
    src: string;
    alt: string;
  };
}
