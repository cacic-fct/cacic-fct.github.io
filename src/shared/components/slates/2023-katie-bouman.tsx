import type { Slate, SlateMember } from './types';

export const members: SlateMember[] = [
  {
    name: 'Willian Murayama',
    role: 'Presidente',
    avatar: require('@site/static/people/willian-murayama.webp').default,
  },
  {
    name: 'Abigail Nakashima',
    role: 'Vice-presidente',
    avatar: require('@site/static/people/abigail-nakashima.avif').default,
  },
  {
    name: 'Andressa Yida',
    role: 'Relações públicas',
    avatar: require('@site/static/people/andressa-yida.webp').default,
  },
  {
    name: 'Gabrielly Moreira',
    role: 'Relações públicas',
    avatar: require('@site/static/people/gabrielly-moreira.avif').default,
  },
  {
    name: 'Lucas Bernardo',
    role: 'Comunicação',
    avatar: require('@site/static/people/lucas-bernardo.avif').default,
  },
  {
    name: 'Paulo Júnior',
    role: 'Comunicação',
    avatar: require('@site/static/people/paulo-junior.avif').default,
  },
  {
    name: 'Cristian Eidi',
    role: 'Finanças',
    avatar: require('@site/static/people/cristian-eidi.avif').default,
  },
  {
    name: 'Ana Kodama',
    role: 'Ex-eventos',
    avatar: require('@site/static/people/ana-kodama.avif').default,
  },
];

export const slate: Slate = {
  id: 'katie-bouman',
  name: 'Katie Bouman',
  startDate: '2023-05-18',
  endDate: '2024-04-11',
  members,
};
