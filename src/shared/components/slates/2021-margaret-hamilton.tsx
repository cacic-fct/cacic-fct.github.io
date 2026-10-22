import type { Slate, SlateMember } from './types';

export const members: SlateMember[] = [
  {
    name: 'Willian Murayama',
    role: 'Presidente em exercício',
    avatar: require('@site/static/people/willian-murayama.webp').default,
  },
  {
    name: 'Andressa Yida',
    role: 'Relações públicas',
    avatar: require('@site/static/people/andressa-yida.webp').default,
  },
  {
    name: 'Carlos Santana',
    role: 'Relações públicas',
    avatar: require('@site/static/people/carlos-santana.webp').default,
  },
  {
    name: 'Guilherme Tomiasi',
    role: 'Finanças',
    avatar: require('@site/static/people/guilherme-tomiasi.webp').default,
  },
  {
    name: 'Rafael Rosseto',
    role: 'Finanças',
    avatar: require('@site/static/people/rafael-rosseto.webp').default,
  },
  {
    name: 'Mariana Alves',
    role: 'Ex-presidenta',
    avatar: require('@site/static/people/mariana-alves.webp').default,
  },
  {
    name: 'Renan Araujo',
    role: 'Ex-vice-presidente',
    avatar: require('@site/static/people/renan-araujo.webp').default,
  },
  {
    name: 'Daniel Monteiro',
    role: 'Ex-eventos',
    avatar: require('@site/static/people/daniel-monteiro.webp').default,
  },
  {
    name: 'Gabriel Augusto',
    role: 'Ex-comunicação',
    avatar: require('@site/static/people/avatar-placeholder.webp').default,
  },
  {
    name: 'Rafael Chinaglia',
    role: 'Ex-comunicação',
    avatar: require('@site/static/people/rafael-chinaglia.webp').default,
  },
  {
    name: 'Victor Eiji',
    role: 'Ex-comunicação',
    avatar: require('@site/static/people/victor-eiji.webp').default,
  },
];

export const slate: Slate = {
  id: 'margaret-hamilton',
  name: 'Margaret Hamilton',
  startDate: '2021-10-26',
  endDate: '2023-05-18',
  members,
};
