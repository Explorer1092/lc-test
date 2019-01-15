const moduleName = '/newextension'
const helloWorld = () => import(/* webpackChunkName: 'majorExtensionMc' */ '../components/helloWorld/HelloWorld.vue')
export default [
  {
    path: moduleName + '/helloWorld',
    component: helloWorld,
    title: '主修拓展 - VIPKID在线少儿英语'
  }
]
