module.exports = {
	permalink: function ({ title }) {
		return `/${this.slugify(title)}/index.html`;
	},
  eleventyComputed: {
    eleventyNavigation: {
      key: data => data.title,
      order: data => data.order
    }
  }, 
  layout: "layout.njk", 
};
