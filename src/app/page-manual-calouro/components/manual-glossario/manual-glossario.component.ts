import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-glossario',
  templateUrl: './manual-glossario.component.html',
  styleUrls: [
    './manual-glossario.component.scss',
    '../../page-manual-calouro.page.scss',
  ],
})
export class ManualGlossarioComponent implements OnInit {
  dictionary = [
    {
      term: 'ACC',
      definition: 'Atividades complementares ao curso.',
    },
    {
      term: 'TG',
      definition: 'Trabalho de gradução. Também conhecido como TCC.',
    },
    {
      term: 'TG',
      definition:
        'Tiro de guerra. Uma forma de prestar o serviço militar obrigatório.',
    },
    {
      term: 'TCC',
      definition: 'Trabalho de conclusão de curso.',
    },
    {
      term: 'CR',
      definition: 'Coeficiente de rendimento.',
    },
    {
      term: 'IC',
      definition: 'Iniciação científica.',
    },
    {
      term: 'PIBIC',
      definition: 'Programa institucional de bolsas de iniciação científica.',
    },
    {
      term: 'FAPESP',
      definition: 'Fundação de amparo à pesquisa do estado de São Paulo.',
    },
    {
      term: 'CAPES',
      definition:
        'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior.',
    },
    {
      term: 'PIBITI',
      definition:
        'Programa institucional de bolsas de iniciação em desenvolvimento tecnológico e inovação.',
    },
    {
      term: 'DP',
      definition: 'Dependência. Quando se fica retido em uma disciplina.',
    },
    {
      term: 'RER',
      definition: 'Regime de recuperação especial.',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.dictionary.sort((a, b) => (a.term > b.term ? 1 : -1));
  }
}
