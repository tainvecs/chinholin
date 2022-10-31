// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chin-Ho Lin',
  tagline: '',
  favicon: 'img/logo.svg',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  url: 'https://chinholin.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'tainvecs', // Usually your GitHub org/user name.
  projectName: 'chinholin', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
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
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Projects',
          // },
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left'
          // },
          {
            type: 'html',
            value: '<a class="header-resume-link" aria-label="Resume" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer"></a>',
            position: 'right',
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
        // links: [
        //   {
        //     title: 'Projects',
        //     items: [],
        //   },
        //   {
        //     title: 'Community',
        //     items: [],
        //   },
        //   {
        //     title: 'More',
        //     items: [],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Chin-Ho Lin. Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
