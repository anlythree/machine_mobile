/*
 * @Description: 
 * @Autor: anlythree
 * @Date: 2020-11-21 13:09:24
 * @LastEditors: anlythree
 * @LastEditTime: 2020-11-21 13:22:42
 */
module.exports = {
    presets: [
    '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
        }, 'vant']
    ]
}
