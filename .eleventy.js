module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/");
    eleventyConfig.addWatchTarget("./src/css/");

    return {
        dir: {
            input: "src",
            output: "public",
            },
        templateFormats: [ "md", "njk", "html", "liquid" ],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};