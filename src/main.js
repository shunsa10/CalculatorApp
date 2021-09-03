import Vue from 'vue'// Vue 本体
import App from './App.vue' //コンポーネントの読み込み
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

//render: h => h(App),は元はこれ
//Appを生成する関数でAppを返している
// render: function (createElement) {
//   return createElement(App)
// }

//hというエイリアスはhyperscriptから来ており、仮想DOMの実装でよく使われるらしい。