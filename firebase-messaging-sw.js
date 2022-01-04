//This is service worker file which run in background & show notification from background


importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js"')

var firebaseConfig = {
    apiKey: "AIzaSyA8px3xXBOe8Jy1dsU7ZQFScfjrNQiOOUQ",
    authDomain: "cybot-4edf8.firebaseapp.com",
    projectId: "cybot-4edf8",
    storageBucket: "cybot-4edf8.appspot.com",
    messagingSenderId: "906311480692",
    appId: "1:906311480692:web:6a77a6b4fd5f2ee4ca2821",
    measurementId: "G-9162704MJ1"
};

firebase.initializeApp(firebaseConfig);
/* if('serviceWorker' in navigator) { 
    navigator.serviceWorker.register('root/chatbot/contents/static/js/firebase-messaging-sw.js')
  .then(function(registration) {
   console.log("Service Worker Registered");
  messaging.useServiceWorker(registration);  
    }); 
    } */
const messaging = firebase.messaging()

//this function will handle notification in background
messaging.setBackgroundMessageHandler(function (payload){
    console.log(payload)
});
