const { defineConfig } = require('@vue/cli-service')
 
const AutoImport = require('unplugin-auto-import/webpack')



const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const Icons = require('unplugin-icons/webpack')
const IconsResolver = require('unplugin-icons/resolver')
 
module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            //配置webpack自动按需引入element-plus，
            // require('unplugin-element-plus/webpack')({
            //     libs: [{
            //         libraryName: 'element-plus',
            //         esModule: true,
            //         resolveStyle: (name) => {
            //             return `element-plus/theme-chalk/${name}.css`
            //         },
            //     }, ]
            // }),
            AutoImport({
                resolvers: [
                    // 自动导入图标组件
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                    ElementPlusResolver()
                ]
            }),
            Components({
                resolvers: [
                    // 自动注册图标组件
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    ElementPlusResolver()
                ]
            }),
            Icons({
                autoInstall: true,
            }),
        ],
    },
    // 打包警告
    css: {
        extract: {
            ignoreOrder: true
        }
    }
 
})