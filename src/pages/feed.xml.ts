import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getBlogParams } from "@utils/params";
import rss from "@astrojs/rss";
import { site } from "../consts";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog");
  return rss({
    title: site.title,
    description: site.description,
    site: context.site || "https://localhost:4321",
    items: posts.map(post => {
      const { path } = getBlogParams(post);
      post.render();
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${path}/`
      };
    }),
    customData: "<language>en-us</language>",
    stylesheet: "/rss/pretty-feed-v3.xsl"
  });
}
