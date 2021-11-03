module.exports = {
    devServer: {
        open: true,
        host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '^/api': {
                target: 'http://imissu.herokuapp.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: app=>{}
    }
}