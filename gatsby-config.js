const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.spacedigest.live`,
        title: `spacedigest.live`,
        description: `For space aficionados`,
        author: ``,
    },
    plugins: [
        `gatsby-plugin-layout`,
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-postcss`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-80068675-2",
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `spacedigest.live`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["300"],
                display: `minimal-ui`,
                icon: `src/images/logo.svg`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : []),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Avenir\:300, 400, 700, 800`],
                display: "swap",
            },
        },
        `gatsby-plugin-offline`,
    ],
};
