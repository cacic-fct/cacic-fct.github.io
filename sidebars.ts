import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: 'doc',
      label: 'Introdução',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'CACiC',
      items: [
        {
          type: 'doc',
          label: 'Recursos',
          id: 'cacic/recursos',
        },
        {
          type: 'doc',
          label: 'Transparência',
          id: 'cacic/transparencia/transparencia',
        },
        {
          type: 'category',
          label: 'Guias de estilo',
          items: [
            {
              type: 'doc',
              id: 'cacic/guidelines/intro',
              label: 'Introdução',
            },
            {
              type: 'doc',
              id: 'cacic/guidelines/design',
              label: 'Identidade visual',
            },
            {
              type: 'doc',
              id: 'cacic/guidelines/escrita',
              label: 'Redação',
            },
          ],
        },
        {
          type: 'link',
          href: 'https://drive.google.com/file/d/1IkP7qYwvtdDc9CRiKueyjZ8bESRsDUS5/view',
          label: 'Estatuto',
        },
      ],
    },
    {
      type: 'category',
      label: 'SECOMPP',
      items: [
        {
          type: 'doc',
          id: 'secompp/guidelines/design',
          label: 'Guia de identidade',
        },
      ],
    },

    {
      type: 'category',
      label: 'Preservação da memória',
      items: [
        {
          type: 'category',
          label: 'CACiC',
          items: [
            {
              type: 'doc',
              id: 'history/cacic/mandatos',
              label: 'Mandatos',
            },
            {
              type: 'doc',
              id: 'history/cacic/sites',
              label: 'Sites',
            },
          ],
        },
        {
          type: 'category',
          label: 'SECOMPP',
          items: [
            {
              type: 'doc',
              id: 'history/secompp/arquivo',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
