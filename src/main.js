import Vue from 'vue'// Vue 本体
import App from './App.vue' //コンポーネントの読み込み
import vuetify from './plugins/vuetify'
import router from './router'

// import firebase from "firebase";
// import firebaseConfig from "./firebase/config.js";
// firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = true
// true の場合の方が開発者向けのメッセージがコンソールによりたくさん出るようです。

// const config = {
//   apiKey: "AIzaSyCwXAGnjVdqTnqJnZ9hlhn2rvNV9zSDijo",
//   authDomain: "calculator-app-67215.firebaseapp.com",
//   databaseURL: "https://calculator-app-67215-default-rtdb.firebaseio.com",
//   projectId: "calculator-app-67215",
//   storageBucket: "calculator-app-67215.appspot.com",
//   messagingSenderId: "388444424533",
//   appId: "1:388444424533:web:c90e3ecaed198eb44147dc",
//   measurementId: "G-DK1ZRFSWN2",
// };

// firebase.initializeApp(config);

new Vue({
  vuetify,
  router,
  // firebase,
  render: h => h(App)
}).$mount('#app')

//render: h => h(App),は元はこれ
//Appを生成する関数でAppを返している
// render: function (createElement) {
//   return createElement(App)
// }

//hというエイリアスはhyperscriptから来ており、仮想DOMの実装でよく使われるらしい。