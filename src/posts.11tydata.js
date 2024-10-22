export default function(data) {
  return {
    layout: "layoutpostlist.njk",  // Set the default layout for all files in the "posts" directory
    eleventyComputed: {
      // Dynamically generate the permalink for all files in the "posts" directory
      permalink: function(data) {
        const postsDir = data.settings.posts;
        // Use the 'title' from front matter
        return `/${this.slugify(postsDir)}/index.html`;
      },
      eleventyNavigation: {
        key: data => data.settings.posts,
        order: data => data.settings.postsorder
      }
    }
  };
};
