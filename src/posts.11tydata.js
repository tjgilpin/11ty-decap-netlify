export default function(data) {
  return {
    layout: "layoutpostlist.njk",  // Set the layout
    eleventyComputed: {
      // Dynamically generate the permalink
      permalink: function(data) {
        const postsDir = data.posts.posts;
        // Use the 'title' from front matter
        return `/${this.slugify(postsDir)}/index.html`;
      },
      eleventyNavigation: {
        key: data => data.posts.posts,
        order: data => data.posts.postsorder
      }
    }
  };
};
