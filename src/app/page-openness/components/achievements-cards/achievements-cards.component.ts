import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements-cards',
  templateUrl: './achievements-cards.component.html',
  styleUrls: ['./achievements-cards.component.scss'],
})
export class AchievementsCardsComponent implements OnInit {
  public items = [
    {
      image: '2021/code_talk.webp',
      title: 'Code Talk',
      content:
        'Circuito de bate-papos, palestras e minicursos com convidados especiais.',
      url: 'https://instagram.com/p/Cau2R-quc-k',
    },
    {
      image: '2021/fct_app.webp',
      title: 'FCT App',
      content:
        'Aplicativo para facilitar a vida dos alunos do FCT, com o acesso à eventos. Tem alto potencial de expansão.',
      url: 'https://fct-pp.web.app',
    },
    {
      image: '2021/manual_calouro.webp',
      title: 'Manual do calouro',
      content:
        'Fala sobre a FCT-Unesp, o movimento estudantil, a cidade de Presidente Prudente e muito mais! Está aberto a contribuições.',
      url: '/manual-do-calouro',
    },
    {
      image: '2021/recepcao_calouros.webp',
      title: 'Recepção dos calouros',
      content:
        'Agradeçemos a Filipe Nava, Manoela Frattini, Raphael Esposti e a todos os outros que nos auxiliaram.',
    },
    {
      image: '',
      title: 'Homepage do CACiC',
      content: 'Sim, este site.',
      url: '',
    },
    {
      image: '2021/vacinacao_sisgrad.webp',
      title: 'Envio do comprovante de vacinação',
      content:
        'Em primeira mão, orientamos os alunos a realizarem o cadastro do comprovante.',
      url: 'https://instagram.com/p/CYufQC0vwJL',
    },
    {
      image: 'unesp.png',
      title: 'Regularização no conselho de curso',
      content: 'Regularização da situação discente no conselho.',
    },
    {
      image: '2021/dezembro_vermelho.webp',
      title: 'Dezembro vermelho',
      content: 'Série de posts conscientizando sobre HIV/AIDS e outras ISTs.',
      url: 'https://instagram.com/p/CX3xXzXLATD',
    },
    {
      image: '2021/rematricula_calouros.webp',
      title: 'Campanha de rematrícula dos calouros',
      content: 'Post e lembretes nos grupos de WhatsApp.',
      url: 'https://instagram.com/p/CVdSykWLIbD',
    },
    {
      image: '',
      title: 'Manutenção das mídias sociais',
      content:
        'Manutenção realizada nas páginas do Facebook e Instagram, além do perfil no Facebook.',
    },
    {
      image: '2021/hacktoberfest_2021.webp',
      title: 'Hacktoberfest 2021',
      content:
        'Palestra e minicurso com carga horária de 10 horas. Confecção e envio dos certificados.',
    },
    {
      image: '2021/eleicao.webp',
      title: 'Processo eleitoral de 2021',
      content: 'Realizado junto à sua respectiva comissão.',
      url: 'https://instagram.com/p/CUxgWC9Lixk',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
