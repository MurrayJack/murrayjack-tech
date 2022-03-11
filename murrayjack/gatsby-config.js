module.exports = {
    siteMetadata: {
        siteUrl: 'https://murrayjack.me',
        title: 'murrayjack.me',
    },
    plugins: [
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'bdj4frfl',
                dataset: 'production',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-styled-jsx`,
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
};
