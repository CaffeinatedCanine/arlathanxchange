// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const copyright =
  "<a href='https://thehangedmanpub.netlify.app'>The Hanged Man</a>";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arlathan eXchange",
  tagline:
    "A Dragon Age fan exchange focused on a celebration of Elvhen characters.",
  url: "https://arlathanxchange.neocities.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/icon.png",
  titleDelimiter: "|",
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
        },
        blog: {
          blogTitle: "Announcements",
          blogDescription:
            "See the latest announcements about Arlathan eXchange. Get exchange news and mod updates.",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} ${copyright}`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Arlathan eXchange",
        logo: {
          alt: "DA:I Dialogue Wheel Elf Logo",
          src: "img/icon.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Info",
            position: "left",
            className: "info",
            items: [
              {
                type: "doc",
                label: "Rules & Information",
                docId: "intro",
              },
              {
                type: "doc",
                label: "FAQs",
                docId: "faqs",
              },
              {
                type: "doc",
                label: "Treats & Treatless FAQs",
                docId: "treats",
              },
              {
                label: "Mod Team & Philosophy",
                href: "/mod",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tutorials",
            position: "left",
            className: "tutorial",
            items: [
              {
                type: "doc",
                label: "How to Nominate",
                docId: "tutorials/nominate",
              },
              {
                type: "doc",
                label: "How to Sign-Up",
                docId: "tutorials/signups",
              },
              {
                type: "doc",
                label: "On Exchange Letters",
                docId: "tutorials/letters",
              },
              {
                type: "doc",
                label: "How to Filter the AutoAO3 App",
                docId: "tutorials/autoao3",
              },
              {
                type: "doc",
                label: "How to Fulfill Your Assignment",
                docId: "tutorials/fulfill",
              },
              {
                type: "doc",
                label: "Keeping It Anon",
                docId: "tutorials/anon",
              },
              {
                type: "doc",
                label: "AO3 & Non-Fanfic Works",
                docId: "tutorials/media",
              },
            ],
          },
          {
            type: "dropdown",
            position: "left",
            label: "2024 Exchange",
						className: "exchange",
            items: [
							{
								label: "2024 AO3 Profile",
								href: "https://archiveofourown.org/collections/arlathanxchange2024/profile",
							},
              {
                label: "Nominate Tags Here",
                href: "https://archiveofourown.org/tag_sets/18841",
              },
              {
                label: "Sign-Up Here",
                href: "https://archiveofourown.org/collections/arlathanxchange2024/signups/new",
              },
							{
                label: "2024 Nominations Sheet",
                href: "https://docs.google.com/spreadsheets/d/1m8ludsrYnkbuI-kbJLz0anjSFhuYUkiAft4NZhp1aOM/edit?usp=sharing",
              },
              {
                label: "2024 AutoAO3: Requests",
                href: "https://autoao3app.fandom.tools/#/arlathanxchange2024/all",
              },
							{
								label: "2024 Treatless List",
								href: "https://docs.google.com/spreadsheets/d/1Zq3otHMwB3bmuJE0_MrgmDWHXluc5nSTkSG7t5d9aww/edit?usp=sharing"
							},
              {
                label: "Request an Extension",
                href: "/extension",
              },
            ],
          },
          {
            type: "dropdown",
            position: "left",
            label: "AO3",
            className: "ao3",
            items: [
              {
                label: "Parent Collection",
                href: "https://archiveofourown.org/collections/arlathanxchange/profile",
                className: "ao3",
              },
              {
                label: "2023 Collection",
                href: "https://archiveofourown.org/collections/arlathanxchange2023/profile",
                className: "ao3",
              },
              {
                label: "2022 Collection",
                href: "https://archiveofourown.org/collections/arlathanxchange2022/profile",
                className: "ao3",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Follow Us",
            position: "left",
            className: "follow",
            items: [
              {
                href: "https://arlathanxchange.tumblr.com",
                label: "Tumblr",
                className: "tumblr",
              },
              {
                href: "https://twitter.com/ArlathanXchange",
                label: "Twitter",
                className: "twitter",
              },
              {
                href: "https://discord.gg/F73NDYMeGC",
                label: "Discord",
                className: "discord",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Announcements",
            position: "left",
            className: "blog",
            items: [
              {
                label: "View",
                href: "/blog",
              },
              {
                label: "Follow via RSS",
                href: "https://arlathanxchange.neocities.org/blog/rss.xml",
                className: "rss",
              },
            ],
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} ${copyright}`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      metadata: [
        { name: "theme-color", content: "#2F3136" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "ArlathanXchange" },
        { name: "og:image", content: "/img/icon.png" },
      ],
      zoom: {
        selector: ".markdown img",
        background: {
          light: "rgba(253, 247, 245, 0.75)",
          dark: "rgba(15, 6, 50, 0.75)",
        },
      },
    }),
};

module.exports = config;
