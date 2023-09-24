// laravelEchoSetup.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

Pusher.logToConsole = true;

var pusher = new Pusher('c3f1b7312e4adfa74e7f', {
  cluster: 'ap1'
});

var channel = pusher.subscribe('notification-channel');
channel.bind('new-notify', function (data) {
  alert(JSON.stringify(data));
});