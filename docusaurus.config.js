// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chin-Ho Lin',
  tagline: '',
  favicon: 'img/logo-280.png',

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
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: {
          blogTitle: 'Tech Blog',
          blogDescription: 'Chin-Ho Lin\'s Tech Blog',
          showReadingTime: true,
          feedOptions: {
            type: 'all',
          },
          blogSidebarCount: 5,
          postsPerPage: 5,
          blogArchiveComponent: '../src/theme/BlogArchivePage/index.tsx',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Chin-Ho Lin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-280.png',
        },
        items: [
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://chinholin.com/docs/resume.pdf',
            position: 'right',
            className: 'header-resume-link menu-resume-text',
            'aria-label': 'Resume',
          },
          {
            href: 'https://www.linkedin.com/in/chinholin/',
            position: 'right',
            className: 'header-linkedin-link menu-linkedin-text',
            'aria-label': 'LinkedIn Profile',
          },
          {
            href: 'https://github.com/tainvecs',
            position: 'right',
            className: 'header-github-link menu-github-text',
            'aria-label': 'GitHub Repository',
          },
          {
            href: 'mailto:chinho.lin@mailbox.org',
            position: 'right',
            className: 'header-email-link menu-email-text',
            'aria-label': 'Contact Email',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()}-present Chin-Ho Lin. Built with <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
