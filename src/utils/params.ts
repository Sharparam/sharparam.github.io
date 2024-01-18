import type { CollectionEntry } from "astro:content";
import slugify from "@sindresorhus/slugify";

export function getBlogParams(post: CollectionEntry<"blog">) {
  const pubDate: Date = post.data.pubDate;
  const pubYear = String(pubDate.getFullYear()).padStart(4, "0");
  const pubMonth = String(pubDate.getMonth() + 1).padStart(2, "0");
  const pubDay = String(pubDate.getDate()).padStart(2, "0");

  const slug = slugify(post.data.title);

  const path = `${pubYear}/${pubMonth}/${pubDay}/${slug}`;

  return {
    year: pubYear,
    month: pubMonth,
    day: pubDay,
    slug,
    path
  };
}
