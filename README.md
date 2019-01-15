# runtime-major

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目启动

### 本地根目录新建vf2e.config.js文件，内容为
```
module.exports = {
    cdn:{
    publicPath:'/'
    }
} 
```
### tips
下载更新vk-runtime包时，node版本过高导致下载失败，稳定node版本8.11.4,稳定npm版本版本5.6.0

### 安装依赖时执行脚本
```
npm run init
```

## 子模块打包配置和提测流程参考
### 提测时需要修改agile.yaml文件，参考链接：http://wiki.vipkid.com.cn/pages/viewpage.action?pageId=41922800


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
