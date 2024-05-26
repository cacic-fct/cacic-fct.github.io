import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import {
  type DocSearchProps,
  type DocSearchTranslations,
} from 'typesense-docsearch-react';

const config: Config = {
  title: 'CACiC',
  tagline: 'Centro Acadêmico de Ciência da Computação FCT-Unesp',
  favicon: 'icons/favicon.png',

  // Set the production url of your site here
  url: 'https://cacic-fct.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cacic-fct', // Usually your GitHub org/user name.
  projectName: 'cacic-fct.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          path: 'knowledge-base',
          routeBasePath: 'kb',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/cacic-fct/cacic-fct.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.fctapp.yudi.me/js/script.js',
      defer: true,
      'data-domain': 'cacic-fct.github.io',
    },
  ],

  themes: ['docusaurus-theme-search-typesense'],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'CACiC',
        src: 'logo/1024-ionicblue.png',
        srcDark: 'logo/1024-ionicblue.png',
      },
      items: [
        { to: '/links', label: 'Árvore de links', position: 'left' },
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Base de conhecimento',
        },
        {
          label: 'Manual do calouro',
          href: 'https://cacic-fct.github.io/manual-do-calouro',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {
              label: 'Início',
              to: '/',
            },
            {
              label: 'Árvore de links',
              to: '/links',
            },
            {
              label: 'Base de conhecimento',
              to: '/kb/intro',
            },
            {
              label: 'Política de privacidade',
              to: '/legal/privacy-policy',
            },
            {
              label: 'Licenças',
              to: '/legal/licenses',
            },
          ],
        },
        {
          title: 'CACiC',
          items: [
            {
              label: 'Instagram',
              href: 'https://instagram.com/cacic.fct',
            },
            {
              label: 'Facebook',
              href: 'https://fb.com/cacic.fct',
            },
            {
              label: 'YouTube',
              href: 'https://youtube.com/@cacicfct',
            },

            {
              label: 'GitHub',
              href: 'https://github.com/cacic-fct',
            },

            {
              label: 'E-mail',
              href: 'mailto:cacic.fct@gmail.com',
            },
          ],
        },
        {
          title: 'Recursos',
          items: [
            {
              label: 'FCT App',
              href: 'https://fct-pp.web.app',
            },
            {
              label: 'Manual do calouro',
              href: 'https://cacic-fct.github.io/manual-do-calouro',
            },
          ],
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

    plugins: [
      './plugins/configure-webpack',
      [
        'docusaurus-lunr-search',
        {
          languages: ['pt'],
        },
      ],
    ],

    typesense: {
      typesenseCollectionName: 'homepage-cacic',

      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense.fctapp.yudi.me',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: 'VRIbcr31eArhsgEfKLeW0ISynrbtQgRF',
      },

      typesenseSearchParameters: {},

      // @ts-ignore
      contextualSearch: true,

      // Doesn't work
      translations: {
        button: {
          buttonText: 'Buscar',
          buttonAriaLabel: 'Buscar',
        },
        modal: {
          searchBox: {
            resetButtonTitle: 'Limpar a busca',
            resetButtonAriaLabel: 'Limpar a busca',
            cancelButtonText: 'Cancelar',
            cancelButtonAriaLabel: 'Cancelar',
          },
          footer: {
            selectText: 'Selecionar',
            selectKeyAriaLabel: 'Selecionar',
            navigateText: 'Navegar',
            navigateDownKeyAriaLabel: 'Navegar para baixo',
            navigateUpKeyAriaLabel: 'Navegar para cima',
            closeText: 'Fechar',
            closeKeyAriaLabel: 'Fechar',
            searchByText: 'Buscar por',
          },
        },
      } satisfies DocSearchTranslations,
    } satisfies DocSearchProps,
  } satisfies Preset.ThemeConfig,
};

export default config;
