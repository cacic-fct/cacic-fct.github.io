import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import { setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';

setDefaultOptions({ locale: ptBR });

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
          editUrl: 'https://github.com/cacic-fct/manual-do-calouro/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-14H61HB1MW',
        },
      } satisfies Preset.Options,
    ],
  ],

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
  } satisfies Preset.ThemeConfig,
};

export default config;
