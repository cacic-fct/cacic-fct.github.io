import type { Slate, SlateMember } from './types';

export const members: SlateMember[] = [
  {
    name: 'Abigail Nakashima',
    role: 'Presidente',
    avatar: require('@site/static/people/abigail-nakashima.avif').default,
  },
  {
    name: 'Miguel Moret',
    role: 'Vice-presidente',
    avatar: require('@site/static/people/avatar-placeholder.webp').default,
  },
  {
    name: 'Cristian Eidi',
    role: 'Comunicação',
    avatar: require('@site/static/people/cristian-eidi.avif').default,
  },
  {
    name: 'Daniel Pádua',
    role: 'Eventos',
    avatar: require('@site/static/people/avatar-placeholder.webp').default,
  },
  {
    name: 'Filipe Nava',
    role: 'Relações públicas',
    avatar: require('@site/static/people/avatar-placeholder.webp').default,
  },
  {
    name: 'Paulo Lima',
    role: 'Finanças',
    avatar: require('@site/static/people/avatar-placeholder.webp').default,
  },
];

export const slate: Slate = {
  id: 'grace-hopper',
  name: 'Grace Hopper',
  startDate: '2025-09-26',
  endDate: '2026-09-26',
  endDateIsExpected: true,
  members,
};
