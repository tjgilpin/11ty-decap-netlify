export default function(data) {
  return {
    layout: "layoutpost.njk",  // Set the default layout for all files in the "posts" directory
    tags: "post",
    eleventyComputed: {
      // Dynamically generate the permalink for all files in the "posts" directory
      permalink: function(data) {
        const postsDir = data.settings.posts;
        // Use the 'title' from front matter
        const slug = data.title 
        // Return the permalink using the global data values and the title-based slug
        return `/${this.slugify(postsDir)}/${this.slugify(slug)}/index.html`;
      }
    }
  };
};
