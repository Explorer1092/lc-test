// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

import 'vk-runtime'

import routers from './router'

const appName = 'newextension' // 应用名称 无法随意填写，需要在vf2e.config.js中 moduleList配置，目前支持应用名称有 dgl, reward, newmajor, exercise, newcourse，newextension，assignment，affiliate
window.VK.registerRouter(appName, routers)
