const { DateTime } = require('luxon');

const markdownItAnchor = require('markdown-it-anchor');

const { EleventyHtmlBasePlugin } = require('@11ty/eleventy');
const navigationPlugin = require('@11ty/eleventy-navigation');
const rssPlugin = require('@11ty/eleventy-plugin-rss');
const syntaxPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function(config) {
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(navigationPlugin);
  config.addPlugin(rssPlugin);
  config.addPlugin(syntaxPlugin);

  config.addPassthroughCopy({
    './public/': '/'
  });

  config.addWatchTarget('public/**.*');

  config.setLayoutResolution(false);
  config.addLayoutAlias('default', 'layouts/default.njk');
  config.addLayoutAlias('post', 'layouts/blog/post.njk');

  config.addFilter('htmlDate', date => DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('yyyy-LL-dd'));
  config.addFilter('humanDate', (date, format, zone) => DateTime.fromJSDate(date, { zone: zone || 'utc' }).toFormat(format || 'dd LLLL yyyy'));
  config.addFilter('postUrlDate', date => DateTime.fromJSDate(date, { zone: 'utc' }).toFormat('yyyy/LL/dd'));

  config.amendLibrary('md', md => {
    md.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
        class: 'header-anchor',
        symbol: '#',
        ariaHidden: false
      }),
      level: [1, 2, 3, 4],
      slugify: config.getFilter('slugify')
    });
  });

  return {
    templateFormats: [
      'md',
      'njk',
      'html',
      'liquid'
    ],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '../_includes',
      data: '../_data',
      output: '_site'
    },
    pathPrefix: '/'
  };
};
