var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/artist.html#search
echo('artist/search').get({
  name: 'radiohead'
}, function (err, json) {
  console.log(json.response);
});