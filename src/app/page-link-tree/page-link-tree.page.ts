import { Component } from '@angular/core';

@Component({
  selector: 'app-page-link-tree',
  templateUrl: './page-link-tree.page.html',
  styleUrls: ['./page-link-tree.page.scss'],
})
export class PageLinkTreePage {
  /* Example
  movEstList = [
    {
      title: 'Plenária do MUP – Inscrições',
      icon: 'document-text',
      url: 'https://forms.gle/kd6AKGDaKRnphDYW8',
      content:
        '22/01 e 23/01 – Ciência e Tecnologia no Brasil: Para onde vai o que produzimos? E para onde deve ir?',
    },
  ];

    cardList = [
    {
      title: 'Movimento estudantil',
      content: this.movEstList,
    },
  ];
  */

  secomppList = [
    {
      title: 'Página da SECOMPP22',
      icon: 'laptop-outline',
      url: 'https://docs.fct.unesp.br/semanas/secompp',
      content: 'Saiba mais sobre o evento',
    },
    {
      title: 'Inscreva-se na SECOMPP22',
      icon: 'document-text',
      url: 'https://fct-pp.web.app/eventos',
    },
  ];

  cardList = [
    {
      title: 'SECOMPP',
      content: this.secomppList,
    },
  ];
  constructor() {}
}
