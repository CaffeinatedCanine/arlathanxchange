// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arlathan eXchange',
  tagline: 'A Dragon Age fan exchange focused on a celebration of Elvhen characters.',
  url: 'https://arlathanxchange.neocities.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',
  titleDelimiter: '🙖',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
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
        title: 'Arlathan eXchange',
        logo: {
          alt: 'DA:I Dialogue Wheel Elf Logo',
          src: 'img/icon.png',
        },
        items: [
          {
          type: 'dropdown',
          label: 'Info',
          position: 'left',
          className: 'info',
          items: [
            {
              type: 'doc',
              label: 'Basic',
              docId: 'intro',
            },
            {
              type: 'doc',
              label: 'FAQs',
              docId: 'faqs',
            },
          ],
          },
          {
            type: 'dropdown',
            label: 'Tutorials',
            position: 'left',
            className: 'tutorial',
            items: [
              {
                type: 'doc',
                label: 'How to Nominate',
                docId: 'tutorials/nominate',
              },
            ],
            },
          {
            href: 'https://archiveofourown.org/collections/arlathanxchange2022/profile',
            position: 'left',
            label: 'AO3',
            className: 'ao3',
          },
          {
            href: 'https://arlathanxchange.tumblr.com',
            position: 'left',
            label: 'Tumblr',
            className: 'tumblr',
          },
          {
            href: 'https://twitter.com/ArlathanXchange',
            position: 'left',
            label: 'Twitter',
            className: 'twitter',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '\u263E',
          darkIconStyle: {
            marginLeft: '2px',
            color: 'white'
          },
          lightIcon: '\u263C',
          lightIconStyle: {
            marginLeft: '1px',
            color: 'white'
          },
        },
      },
      footer: {
        style: 'dark',
        links: [{
            title: 'Info',
            items: [{
              label: 'Schedule',
              href: '/docs/intro#schedule',
            },
            {
              label: 'Rules',
              href: '/docs/intro#rules',
            },
            {
              label: 'FAQs',
              to: '/docs/faqs',
            },
          ],
          },
          {
            title: 'Tutorials',
            items: [{
                label: 'How to Nominate',
                to: '/docs/tutorials/nominate',
              },
            ],
          },
          {
            title: 'Contact',
            items: [{
                label: 'Tumblr Ask',
                to: 'https://arlathanxchange.tumblr.com/ask',
              },
              {
                label: 'Twitter DM',
                href: 'https://twitter.com/messages/compose?recipient_id=1439385611652239362',
              },
              {
                label: 'arlathanxchange@gmail.com',
                href: 'mailto: arlathanxchange@gmail.com',
              },
            ],
          },
          {
            title: 'Mods',
            items: [{
              html: '<div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/enig.png" /> <div class="avatar__intro"><div class="avatar__name">enigmalea</div><small class="avatar__subtitle"><a href="http://twitter.com/enigmaleaDA" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://enigmalea.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div><div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/fox.png" /> <div class="avatar__intro"><div class="avatar__name">foxinboots</div><small class="avatar__subtitle"><a href="http://twitter.com/TheFoxInBoots" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://thefoxinboots.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div>'
            }, ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arlathan eXchange. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        {name: 'theme-color', content: '#2F3136'},
        {name: 'twitter:card', content: 'summary'},
        {name: 'twitter:creator', content: 'ArlathanXchange'},
        {name: 'og:image', content: '/img/icon.png'},
      ],
    }
    ),
};

module.exports = config;