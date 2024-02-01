// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("preview", function(title, blurb){
    return `<div class = "preview">
      <div class = "preview_title">${title}</div>
      <div class = "preview_blurb">${blurb}</div>
    </div>`
  })
};