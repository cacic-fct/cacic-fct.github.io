import { Component } from '@angular/core';

@Component({
  selector: 'app-page-link-tree',
  templateUrl: './page-link-tree.page.html',
  styleUrls: ['./page-link-tree.page.scss'],
})
export class PageLinkTreePage {
  cardList: CardList[];
  exampleList: ListType;

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
        title: 'Movimento estudantil',
        content: this.movEstList,
      },
    ];
  */
  }
}

interface ListType {
  title: string;
  icon: string;
  url: string;
  content: string;
}

interface CardList {
  title: string;
  content: ListType[];
}
