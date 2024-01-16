import { DateTime } from "luxon";

import markdownItAnchor from "markdown-it-anchor";

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import navigationPlugin from "@11ty/eleventy-navigation";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import syntaxPlugin from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (config) {
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(navigationPlugin);
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxPlugin, {
    lineSeparator: "<br>",
    preAttributes: {
      tabindex: 0,
      "data-language": function ({ language, content, options }) {
        return language;
      }
    }
  });

  config.addPassthroughCopy({
    "./public/": "/"
  });

  config.addWatchTarget("public/**.*");

  config.setLayoutResolution(false);
  config.addLayoutAlias("default", "layouts/default.njk");
  config.addLayoutAlias("page", "layouts/page.njk");
  config.addLayoutAlias("post", "layouts/blog/post.njk");

  config.addFilter("htmlDate", date =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd")
  );
  config.addFilter("humanDate", (date, format, zone) =>
    DateTime.fromJSDate(date, { zone: zone || "utc" }).toFormat(
      format || "dd LLLL yyyy"
    )
  );
  config.addFilter("postUrlDate", date =>
    DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy/LL/dd")
  );

  config.amendLibrary("md", md => {
    md.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: "after",
        class: "header-anchor",
        symbol: "#",
        ariaHidden: false
      }),
      level: [1, 2, 3, 4],
      slugify: config.getFilter("slugify")
    });
  });

  return {
    templateFormats: ["md", "njk", "html", "11ty.js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    pathPrefix: "/"
  };
}
