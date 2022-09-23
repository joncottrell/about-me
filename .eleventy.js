const { FontAwesomeIcon } = require("@joncottrell/eleventy-fa-icons");

module.exports = (config) => {
  config.addNunjucksShortcode("FontAwesomeIcon", FontAwesomeIcon());
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("images");
};
