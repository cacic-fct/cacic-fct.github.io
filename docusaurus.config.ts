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
  url: 'https://cacic.dev.br',
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
          sidebarPath: './sidebar-kb.ts',
          path: 'knowledge-base',
          routeBasePath: 'kb',
          editUrl:
            'https://github.com/cacic-fct/cacic-fct.github.io/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  scripts: [
    {
      src: 'https://plausible.cacic.dev.br/js/script.js',
      defer: true,
      'data-domain': 'cacic.dev.br',
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://plausible.cacic.dev.br',
      },
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
          sidebarId: 'kb',
          position: 'left',
          label: 'Base de conhecimento',
        },
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          docsPluginId: 'docs',
          position: 'left',
          label: 'Documentação',
        },
        {
          label: 'Manual do calouro',
          href: 'https://manual.cacic.dev.br',
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
              to: '/kb',
            },
            {
              label: 'Documentação',
              to: '/docs',
            },
            {
              label: 'Transmissão ao vivo',
              to: '/live',
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
              href: 'https://youtube.com/@cacic-fct',
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
              href: 'https://fctapp.cacic.dev.br',
            },
            {
              label: 'Manual do calouro',
              href: 'https://manual.cacic.dev.br',
            },
            {
              label: 'Estado dos serviços',
              href: 'https://status.cacic.dev.br',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
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
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['javascript', 'typescript', 'bash', 'yaml'],
    },

    typesense: {
      typesenseCollectionName: 'homepage-cacic',
      typesenseServerConfig: {
        nodes: [
          {
            host: 'typesense.cacic.dev.br',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: '3RhEqDi1DwXS764K7XdEvXFRb8LG66Ks',
      },

      typesenseSearchParameters: {},

      // @ts-ignore
      contextualSearch: true,

      // Doesn't work
      translations: {} satisfies DocSearchTranslations,
    } satisfies DocSearchProps,
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'docs',
        routeBasePath: 'docs',
        sidebarPath: './sidebar-docs.ts',
        editUrl: 'https://github.com/cacic-fct/cacic-fct.github.io/tree/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
  ],
};

export default config;
