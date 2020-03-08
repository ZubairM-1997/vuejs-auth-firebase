import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app"

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBGazX1abrJ4flKP143-jlfRAjuMf1-40k",
  authDomain: "vue-firebase-project-dcde4.firebaseapp.com",
  databaseURL: "https://vue-firebase-project-dcde4.firebaseio.com",
  projectId: "vue-firebase-project-dcde4",
  storageBucket: "vue-firebase-project-dcde4.appspot.com",
  messagingSenderId: "194974176528",
  appId: "1:194974176528:web:1dfaccad12c73ec1464195",
  measurementId: "G-EKHSHZRD61"
};

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
