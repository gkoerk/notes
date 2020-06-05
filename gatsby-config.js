module.exports = {
  siteMetadata: {
    title: `Sainadh's notes`,
  },
  plugins: [
    {
      resolve: 'gatsby-theme-andy',
      options: {
        'rootNote': 'atomic-habits'
      }
    }
    , `gatsby-plugin-postcss`],
};
