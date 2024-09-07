module.exports = {
	permalink: function ({ title }) {
		return `/${this.slugify(title)}`;
	},
};
