import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  constructor() {}

  urlList = [
    {
      title: 'Calendário do câmpus',
      icon: 'calendar',
      url: 'https://www.fct.unesp.br/#!/administracao/graduacao/espaco-do-aluno/',
    },
    {
      title: 'Casos de COVID-19 em Prudente',
      icon: 'analytics',
      url: 'https://inovaprudente.com.br/coronavirus',
    },
    {
      title: 'Diretrizes para a reorganização das atividades',
      icon: 'book',
      url: 'https://unesp.br/portal#!/covid19/reorganizacao-das-atividades/estrategia/',
    },
  ];

  ngOnInit() {}
}
