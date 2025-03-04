import { defineCollection, z } from "astro:content";

import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { glob } from "astro/loaders";

const mods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/mods/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      links: SocialLinks,
    }),
});

const docs = defineCollection({
  loader: docsLoader(),
  schema: docsSchema(),
});

export const collections = {
  docs,
  mods,
};
