// laravelEchoSetup.js
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';


Pusher.logToConsole = true;

var pusher = new Pusher('951bfa99f081c703f469', {
  cluster: 'eu'
});

var channel = pusher.subscribe('notification-channel');
channel.bind('new-notify', function(data) {
  console.log(data);;
});
