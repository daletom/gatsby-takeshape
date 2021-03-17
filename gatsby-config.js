/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Gatsby Takeshape Example`,
    description: `An example to show how to source data from Takeshape to gatsby.`,
    author: `tomdale`,
    url: `https://takeshapetogatsby.letsgoheadless.com`,
    image: `https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?blend64=aHR0cHM6Ly9kZW1vcy5pbWdpeC5uZXQvZGFyay1lbGxpcHNlLWdyYWRpZW50LmFpP2ZtPXBuZyZhcj0yOjE&blend-mode=multiply&blend-size=inherit&w=900&fit=crop&ar=3%3A1&txt64=RmFyIEZhciBBd2F5IE5ld3M&txt-color=white&txt-align=middle%2Ccenter&txt-fit=max&txt-size=72&auto=format,compress`,
  },
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT
        }/graphql`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-ETGGVHPR5J"],
        gtagConfig: {
          optimize_id: "OPT-NP53F4X",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: ["/preview"]
        }
      }
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
