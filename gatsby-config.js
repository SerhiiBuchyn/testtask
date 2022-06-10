module.exports = {
    siteMetadata: {
        title: 'testtask',
        siteUrl: 'https://www.yourdomain.tld',
    },
    plugins: [{
        resolve: 'gatsby-plugin-prettier-eslint',
        options: {
            prettier: {
                patterns: [
                    '**/*.{css,scss,less}',
                    '**/*.{json,json5}',
                    '**/*.{graphql}',
                    '**/*.{md,mdx}',
                    '**/*.{html}',
                    '**/*.{yaml,yml}',
                ],
            },
            eslint: {
                patterns: '**/*.{js,jsx,ts,tsx}',
                customOptions: {
                    fix: true,
                    cache: true,
                },
            },
        },
    },],
};
