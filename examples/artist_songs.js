var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/artist.html#songs
echo('artist/songs').get({
  id: 'ARH6W4X1187B99274F',
  results: 20
}, function (err, json) {
  console.log('Radiohead songs (id ARH6W4X1187B99274F)');
  console.log(json.response);
});