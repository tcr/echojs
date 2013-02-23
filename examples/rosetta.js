var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/artist.html#profile
echo('artist/profile').get({
  id: 'ARH6W4X1187B99274F',
  bucket: ['id:7digital-US', 'id:spotify-WW', 'id:twitter']
}, function (err, json) {
  var foreign_ids = json.response.artist.foreign_ids;
  console.log('Radiohead\'s IDs on other services:');
  console.log(json.response.artist);

  echo('artist/profile').get({
    id: foreign_ids[0].foreign_id
  }, function (err, json) {
    console.log('\n...and from', foreign_ids[0].foreign_id, 'back to Echonest:');
    console.log(json.response);
  });
});