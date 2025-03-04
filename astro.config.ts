// @ts-check
import { defineConfig } from "astro/config";
import favicons from "astro-favicons";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightThemeFlexoki from "starlight-theme-flexoki";

// https://astro.build/config
export default defineConfig({
  site: "https://arlathanxchange.neocities.org",

  integrations: [
    metaTags(),
    starlight({
      plugins: [
        starlightImageZoom(),
        starlightLinksValidator(),
        starlightThemeFlexoki({ accentColor: "green" }),
      ],
      title: "Arlathan eXchange",
      customCss: ["./src/assets/styles/global.css"],
      logo: {
        src: "/public/favicon.svg",
      },
      pagefind: false,
      social: {
        blueSky: "https://bsky.app/profile/arlathanxchange.bsky.social",
        discord: "https://discord.gg/F73NDYMeGC",
      },
      components: {
        SocialIcons: "./src/components/SocialLinks.astro",
      },
      sidebar: [
        {
          label: "Info",
          autogenerate: { directory: "info" },
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Exchange Links",
          items: [
            {
              label: "2025 Collection",
              link: "https://archiveofourown.org/collections/arlathanxchange2025/profile",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "Tag Nominations",
              link: "https://archiveofourown.org/tag_sets/22804",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "Sign-Ups",
              link: "https://archiveofourown.org/collections/arlathanxchange2025/signups/new",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "Nominations Spreadsheet",
              link: "https://docs.google.com/spreadsheets/d/1Zmc8aIcyigZB0UE-5RYq60St5_Ia1JEXM5g_haABVG4/edit?usp=sharing",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "AutoAO3App: Requests",
              link: "https://autoao3app.fandom.tools/#/arlathanxchange2025/all?",
              badge: { text: "New", variant: "success" },
            },
            {
              label: "Treatless List",
              link: "https://docs.google.com/spreadsheets/d/1eTkq2Hhj0h1Kd0daWslWuZozA13Vj5Cof8b2izG6tjQ/edit?usp=sharing",
              badge: { text: "New", variant: "success" },
            },
            // {
            //   label: "Extension Request",
            //   link: "https://archiveofourown.org/collections/arlathanxchange2024/profile",
            //   badge: { text: "New", variant: "success" },
            // },
            {
              label: "2024 Collection",
              link: "https://archiveofourown.org/collections/arlathanxchange2024/profile",
            },
            {
              label: "2023 Collection",
              link: "https://archiveofourown.org/collections/arlathanxchange2023/profile",
            },
            {
              label: "2022 Collection",
              link: "https://archiveofourown.org/collections/arlathanxchange2022",
            },
            {
              label: "Parent Collection",
              link: "https://archiveofourown.org/collections/arlathanxchange/profile",
              badge: { text: "All Works", variant: "tip" },
            },
          ],
        },
      ],
    }),
    favicons(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          disallow: ["/search", "/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "Googlebot",
          allow: "/",
          disallow: ["/_astro/"],
          crawlDelay: 5,
        },
        {
          userAgent: "CCBot",
          disallow: "/",
        },
        {
          userAgent: "GPTBot",
          disallow: "/",
        },
        {
          userAgent: "ChatGPT-User",
          disallow: "/",
        },
        {
          userAgent: "Slurp",
          crawlDelay: 30,
        },
      ],
    }),
    icon(),
    react(),
  ],
});
