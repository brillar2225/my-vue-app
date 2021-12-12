import Vue from "vue"
import App from "./App.vue"
import vuetify from "./plugins/vuetify"
import VueTextareaAutosize from "vue-textarea-autosize"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAsVeanYlyOlDP3-apyoNGUO5UcIT8Fyrk",
  authDomain: "vue-calendar-9c6c7.firebaseapp.com",
  projectId: "vue-calendar-9c6c7",
  storageBucket: "vue-calendar-9c6c7.appspot.com",
  messagingSenderId: "743202050915",
  appId: "1:743202050915:web:d292f958dbb4ab9f8eb956",
})

export const db = firebase.firestore()

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
