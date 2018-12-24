module.exports = {
  siteMetadata: {
    title: "Cincy Martin",
    author: "Alex Martin",
    description: "A landing page for the Cincy Martin domain."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131201429-1",
        head: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}