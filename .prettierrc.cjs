module.exports = {
    semi: true,
    singleQuote: false,
    tabWindth : 2,
    useTabs: true,
    plugins: [
        require("prettier-plugin-astro")
    ],
    overrides: [
        {
            files: "**/*astro",
            options : {
                parser: "astro",
            },
        },
    ],
};