module.exports = function (eleventyConfig) {
    // Output directory: _site

    // Copy `style.css` to `_site/`
    eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");

    return {
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site',
            data: "_data",
            includes: "_includes",
            layouts: "_layouts"
        }
    };
};