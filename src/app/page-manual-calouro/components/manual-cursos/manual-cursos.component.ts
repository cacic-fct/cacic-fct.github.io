import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-cursos',
  templateUrl: './manual-cursos.component.html',
  styleUrls: [
    './manual-cursos.component.scss',
    '../../page-manual-calouro.page.scss',
  ],
})
export class ManualCursosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cursos = [
    {
      nome: 'Arquitetura e urbanismo',
      duracao: '5',
      periodo: 'Integral',
      vagas: 40,
    },
    {
      nome: 'Ciência da computação',
      duracao: '4',
      periodo: 'Vespertino e noturno',
      vagas: 35,
    },
    {
      nome: 'Educação física',
      duracao: '4',
      periodo: 'Integral ou vespertino e noturno',
      vagas: 45,
    },
    {
      nome: 'Engenharia ambiental',
      duracao: '5',
      periodo: 'Integral',
      vagas: 35,
    },
    {
      nome: 'Engenharia cartográfica e de agrimensura',
      duracao: '5',
      periodo: 'Integral',
      vagas: 40,
    },
    {
      nome: 'Estatística',
      duracao: '4',
      periodo: 'Integral',
      vagas: 30,
    },
    {
      nome: 'Física',
      duracao: '4',
      periodo: 'Noturno',
      vagas: 30,
    },
    {
      nome: 'Fisioterapia',
      duracao: '4',
      periodo: 'Integral',
      vagas: 45,
    },
    {
      nome: 'Geografia',
      duracao: '4',
      periodo: 'Matutino ou noturno',
      vagas: 40,
    },
    {
      nome: 'Matemática',
      duracao: '4',
      periodo: 'Matutino ou noturno',
      vagas: 40,
    },
    {
      nome: 'Pedagogia',
      duracao: '4/5',
      periodo: 'Vespertino ou noturno',
      vagas: 45,
    },
    {
      nome: 'Química',
      duracao: '5',
      periodo: 'Noturno',
      vagas: 40,
    },
  ];
}
