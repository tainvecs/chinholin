// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chin-Ho Lin',
  tagline: '',
  favicon: 'img/logo.svg',

  url: 'https://chinholin.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  organizationName: 'tainvecs',
  projectName: 'chinholin',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chin-Ho Lin',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            href: 'https://chinholin.com/docs/resume.pdf',
            position: 'right',
            className: 'header-resume-link',
            'aria-label': 'Resume',
          },
          {
            href: 'https://www.linkedin.com/in/chinholin/',
            position: 'right',
            className: 'header-linkedin-link',
            'aria-label': 'LinkedIn Profile',
          },
          {
            href: 'https://github.com/tainvecs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub Repository',
          },
          {
            href: 'mailto:chinho.lin@mailbox.org',
            position: 'right',
            className: 'header-email-link',
            'aria-label': 'Contact Email',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Chin-Ho Lin. Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
