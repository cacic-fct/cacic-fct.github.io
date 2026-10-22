import type { Slate, SlateMember } from './types';

export const members: SlateMember[] = [
  {
    name: 'Carlos "Tilt" Alberto',
    role: 'Presidente',
    avatar: require('@site/static/people/carlos-alberto.avif').default,
  },
  {
    name: 'Andrey Cunha',
    role: 'Vice-presidente',
    avatar: require('@site/static/people/andrey-cunha.avif').default,
  },
  {
    name: 'Vinícius Vedovotto',
    role: 'Finanças',
    avatar: require('@site/static/people/vinicius-vedovotto.avif').default,
  },
  {
    name: 'Rebeca Padovani',
    role: 'Comunicação',
    avatar: require('@site/static/people/rebeca-padovani.avif').default,
  },
  {
    name: 'Vitor Alvim',
    role: 'Eventos',
    avatar: require('@site/static/people/vitor-alvim.avif').default,
  },
  {
    name: 'Felipe Canuto',
    role: 'Relações Públicas',
    avatar: require('@site/static/people/felipe-canuto.avif').default,
  },
];

export const slate: Slate = {
  id: 'alan-turing',
  name: 'Alan Turing',
  startDate: '2018-03-15',
  endDate: '2019-05-28',
  description:
    'Consolidou a reabertura do Centro Acadêmico de Ciência da Computação. A reabertura do CACiC foi acordada no encerramento de uma greve.',
  members,
};
