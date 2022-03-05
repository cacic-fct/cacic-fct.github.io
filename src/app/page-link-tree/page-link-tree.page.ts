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

  eventsList = [
    {
      title: 'Code Talk - FCT-Unesp',
      icon: 'easel',
      url: '/eventos',
      content: 'Circuito de palestras, bate-papos e minicursos do CACiC',
    },
    {
      title: 'Recepção do calouros',
      icon: 'people',
      url: 'https://fct-pp.web.app',
    },
  ];

  calourosList = [
    {
      title: 'Página dos calouros',
      icon: 'people',
      url: '/calouros',
      content: 'Você é calouro? Confira essa página!',
    },
    {
      title: 'Manual do calouro',
      icon: 'book',
      url: '/manual-do-calouro',
    },
  ];

  cardList = [
    {
      title: 'Eventos',
      content: this.eventsList,
    },
    {
      title: 'Calouros',
      content: this.calourosList,
    },
  ];
  constructor() {}
}
