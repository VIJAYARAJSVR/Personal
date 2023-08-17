import type {GatsbyConfig} from "gatsby";

module.exports = {
    pathPrefix: "/Personal",
}

const config: GatsbyConfig = {
    siteMetadata: {
        title: `vijayarajsuyambu`,
        siteUrl: `https://www.yourdomain.tld`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [

        "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",

        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },

        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "content-images",
                "path": "./content/"
            },
            __key: "content-images"
        },

        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },



    ]
};

export default config;