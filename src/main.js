import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/fonts/all.css'

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;
 
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBI2ktnhnVkNRYw8qbIPDctZJsNllaWMto",
  authDomain: "itkmitl-oph-2019.firebaseapp.com",
  databaseURL: "https://itkmitl-oph-2019.firebaseio.com",
  projectId: "itkmitl-oph-2019",
  storageBucket: "itkmitl-oph-2019.appspot.com",
  messagingSenderId: "145532931045",
  appId: "1:145532931045:web:447e376b517e0d17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
