var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/artist.html#blogs
echo('artist/blogs').get({
  id: 'ARH6W4X1187B99274F'
}, function (err, json) {
  console.log('Radiohead blogs (id ARH6W4X1187B99274F)');
  console.log(json.response);
});