// console.log("")
importScripts("https://www.gstatic.com/firebasejs/8.4.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.0/firebase-messaging.js");
firebase.initializeApp({
    apiKey: "AIzaSyCVX4oJifFSSjp-tOlGmzde73jCmeqrkRY",
    authDomain: "lojavirtual-c82f5.firebaseapp.com",
    projectId: "lojavirtual-c82f5",
    storageBucket: "lojavirtual-c82f5.appspot.com",
    messagingSenderId: "71882723771",
    appId: "1:71882723771:web:57110b75f59f843a59f49e"
  });
const messaging = firebase.messaging();