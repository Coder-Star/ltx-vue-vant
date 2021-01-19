# ltx-vue-vant

## Project setup
```
npm install
npm run serve
npm run build
npm run lint
```
## package.json相关

**dependencies**
- lib-flexible 移动端适配方案，手机淘宝的方案
- vue-navigation 导航方案，前进刷新，后退不刷新
- vue-directive-touch 手势方案，实现移动端手势返回
- axios 网络请求
- lodash js工具库

**devDependencies**
- postcss-pxtorem px转rem，与lib-flexible配合使用，对行内样式无效
- babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式


### lib-flexible + postcss-pxtorem

lib-flexible将屏幕宽度设置为10份，比如屏幕宽度375px，则html的font-size大小就是37.5px，即1rem就是37.5px。该库只适用于一定宽度（CSS像素尺寸为：540，对应的是devicePixelRatio为2，分辨率是1080x1920的手机）以下的设备，不适用于大屏。

postcss-pxtorem是将px单位自动转换成rem单位。
