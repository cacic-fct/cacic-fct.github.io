import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.page.html',
  styleUrls: ['./page-home.page.scss'],
})
export class PageHomePage implements OnInit {
  urlList = [
    {
      title: 'Calendário do câmpus',
      icon: 'calendar',
      url: 'https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/',
    },
    {
      title: 'FCT App',
      icon: 'apps',
      url: 'https://fct-pp.web.app',
    },
    {
      title: 'Calouros',
      icon: 'people',
      url: 'https://fct-pp.web.app/calouros',
    },
    {
      title: 'Estatuto do CACiC',
      icon: 'document-text',
      url: 'https://drive.google.com/file/d/1IkP7qYwvtdDc9CRiKueyjZ8bESRsDUS5/view',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
