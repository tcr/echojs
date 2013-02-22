var echojs = require('..');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

echo('song/search').get({
  artist: 'radiohead',
  title: 'karma police'
}, function (err, json) {
  console.log(json.response);
});