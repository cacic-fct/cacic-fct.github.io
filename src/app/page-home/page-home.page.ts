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
  ];

  constructor() {}

  ngOnInit() {}
}
