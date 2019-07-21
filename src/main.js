import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/all.css'
 


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBI2ktnhnVkNRYw8qbIPDctZJsNllaWMto",
  authDomain: "itkmitl-oph-2019.firebaseapp.com",
  databaseURL: "https://itkmitl-oph-2019.firebaseio.com",
  projectId: "itkmitl-oph-2019",
  storageBucket: "itkmitl-oph-2019.appspot.com",
  messagingSenderId: "145532931045",
  appId: "1:145532931045:web:447e376b517e0d17"
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
