// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!style!css!semantic-ui-css/semantic.min.css'

firebase.initializeApp({
  apiKey: 'AIzaSyBn85Mbcky1C3iMGyEiw_Di0eOyYex4HLg',
  authDomain: 'findrecipes-db50b.firebaseapp.com',
  databaseURL: 'https://findrecipes-db50b.firebaseio.com',
  storageBucket: 'findrecipes-db50b.appspot.com',
  messagingSenderId: '501805987052'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
