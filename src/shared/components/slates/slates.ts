import { slate as alanTuring } from './2018-alan-turing';
import { slate as annieEasley } from './2019-annie-easley';
import { slate as hipatiaAlexandria } from './2020-hipatia-alexandria';
import { slate as margaretHamilton } from './2021-margaret-hamilton';
import { slate as katieBouman } from './2023-katie-bouman';
import { slate as adaLovelace } from './2024-ada-lovelace';
import { slate as graceHopper } from './2025-grace-hopper';
import type { Slate } from './types';

// Registre novas chapas aqui; tanto a página inicial quanto a de preservação da memória usam esta lista.
export const slates: Slate[] = [
  alanTuring,
  annieEasley,
  hipatiaAlexandria,
  margaretHamilton,
  katieBouman,
  adaLovelace,
  graceHopper,
].sort((a, b) => b.startDate.localeCompare(a.startDate));
