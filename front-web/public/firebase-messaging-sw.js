// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js');


// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
    apiKey: "AIzaSyDiwvE1fY-MyJ8FuFcAdCXy_c9Y92CgY2s",
    authDomain: "walacespo-push.firebaseapp.com",
    projectId: "walacespo-push",
    storageBucket: "walacespo-push.appspot.com",
    messagingSenderId: "163614542678",
    appId: "1:163614542678:web:b7c8cd049e4c75863ae4f7"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
     console.log('sw bg message event: ', payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context