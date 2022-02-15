module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css")
  eleventyConfig.addPassthroughCopy("./src/images")
  eleventyConfig.addPassthroughCopy("./src/js")
  eleventyConfig.addWatchTarget("./src/")
  eleventyConfig.addWatchTarget("./src/css/")

  function sortByOrder(values) {
    let vals = [...values] // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order))
  }

  eleventyConfig.addFilter("sortByOrder", sortByOrder)

  return {
    dir: {
      input: "src",
      output: "public",
    },
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }
}
