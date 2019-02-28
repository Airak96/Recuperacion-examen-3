importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

//----------------------firebase messaging ---------------------//

firebase.initializeApp({
    'messagingSenderId': '851841023042'
});
//messages

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){

});