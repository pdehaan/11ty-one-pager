const inspect = require("util").inspect;

module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("subpages", (collectionApi) => {
    // const sections = collectionApi.getFilteredByTag( "subpage" )
    const sections = collectionApi.getFilteredByGlob("./src/pages/subpages/**")
      .sort((a, b) => a.data.pageOrderId - b.data.pageOrderId);
    process.env.DEBUG && console.log(inspect(sections));
    return sections;
  });

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
