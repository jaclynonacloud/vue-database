
// vue.config.js
module.exports = {
    publicPath: './',
    configureWebpack: {
        resolve: {
            alias: {
                vue$: "vue/dist/vue.common",
            }
        }
    }
}