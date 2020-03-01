module.exports = {
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/core.scss";`,
            },
        },
    },
}