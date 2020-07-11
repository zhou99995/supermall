module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@':'src',  默认配置过的
                'components': '@/components',
                'content': 'components/content',
                'common': 'components/common',
                'assets': '@/assets',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}