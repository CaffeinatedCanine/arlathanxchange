// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Arlathan eXchange",
	tagline:
		"A Dragon Age fan exchange focused on a celebration of Elvhen characters.",
	url: "https://arlathanxchange.neocities.org",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/icon.png",
	titleDelimiter: "|",
	plugins: [
		require.resolve('docusaurus-plugin-image-zoom')
	  ],
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					breadcrumbs: false,
					sidebarPath: require.resolve("./sidebars.js"),
				},
				blog: false,
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
								label: "Basic",
								docId: "intro",
							},
							{
								type: "doc",
								label: "FAQs",
								docId: "faqs",
							},
							{
								label: "2023 Tag Set",
								href: "https://archiveofourown.org/tag_sets/14455",
							},
							{
								label: "2023 Nominations Sheet",
								href:
									"https://docs.google.com/spreadsheets/d/1ruHKiXgFvfz54Q5m1K7wIMvVpbfI5k-_dk5mvxr9Sv8/edit?usp=sharing",
							},
							{
								label: "2023 AutoAO3: Requests",
								href:
									"https://autoao3app.fandom.tools/#/arlathanxchange2023/all",
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
						],
					},
					{
						href:
							"https://archiveofourown.org/collections/arlathanxchange2023/profile",
						position: "left",
						label: "AO3",
						className: "ao3",
					},
					{
						href: "https://arlathanxchange.tumblr.com",
						position: "left",
						label: "Tumblr",
						className: "tumblr",
					},
					{
						href: "https://twitter.com/ArlathanXchange",
						position: "left",
						label: "Twitter",
						className: "twitter",
					},
					{
						href: "https://discord.gg/F73NDYMeGC",
						position: "left",
						label: "Discord",
						className: "discord",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Info",
						items: [
							{
								label: "Basics",
								href: "/docs/intro",
							},
							{
								label: "FAQs",
								to: "/docs/faqs",
							},
							{
								label: "Nominations Sheet",
								href:
									"https://docs.google.com/spreadsheets/d/1ruHKiXgFvfz54Q5m1K7wIMvVpbfI5k-_dk5mvxr9Sv8/edit?usp=sharingg",
							},
							{
								label: "Requests",
								href:
									"https://autoao3app.fandom.tools/#/arlathanxchange2023/all",
							},
						],
					},
					{
						title: "Tutorials",
						items: [
							{
								label: "How to Nominate",
								to: "/docs/tutorials/nominate",
							},
							{
								label: "How to Sign-Up",
								to: "/docs/tutorials/signups",
							},
							{
								label: "On Exchange Letters",
								to: "/docs/tutorials/letters",
							},
							{
								label: "How to Filter the AutoAO3 App",
								to: "/docs/tutorials/autoao3",
							},
						],
					},
					{
						title: "Contact",
						items: [
							{
								label: "Tumblr Ask",
								to: "https://arlathanxchange.tumblr.com/ask",
							},
							{
								href: "https://discord.gg/F73NDYMeGC",
								label: "Discord",
							},
							{
								label: "arlathanxchange@gmail.com",
								href: "mailto: arlathanxchange@gmail.com",
							},
						],
					},
					{
						title: "Mods",
						items: [
							{
								html:
									'<div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/enig.png" /> <div class="avatar__intro"><div class="avatar__name">enigmalea</div><small class="avatar__subtitle"><a href="http://twitter.com/enigmaleaDA" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://enigmalea.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div><div class="avatar"><img class="avatar__photo avatar__photo--sm" src="/img/fox.png" /> <div class="avatar__intro"><div class="avatar__name">foxinboots</div><small class="avatar__subtitle"><a href="http://twitter.com/TheFoxInBoots" class="footer__link-item"><i class="fa-brands fa-twitter"></i></a> <a href="http://thefoxinboots.tumblr.com" class="footer__link-item"><i class="fa-brands fa-tumblr"></i></a></small></div></div>',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Arlathan eXchange. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [
				{ name: "theme-color", content: "#2F3136" },
				{ name: "twitter:card", content: "summary" },
				{ name: "twitter:creator", content: "ArlathanXchange" },
				{ name: "og:image", content: "/img/icon.png" },
			],
			announcementBar: {
				id: "twitter_dms",
				content:
					'<i class="fa-brands fa-twitter"></i> Please note that although we are using twitter for posts, we are no longer accepting twitter DMs as official communication. Please use one of our other contact methods if you need mod help. <i class="fa-brands fa-twitter"></i>',
				backgroundColor: "#FDEB86",
				textColor: "#3d3d3d",
				isCloseable: true,
			},
			zoom: {
				selector: '.markdown img',
				background: {
				  light: 'rgb(255, 255, 255, 0.75)',
				  dark: 'rgba(0, 0, 0, 0.75)'
				},
			},
		}),
};

module.exports = config;
