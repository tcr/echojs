var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

echo.debug = true;

// http://developer.echonest.com/docs/v4/catalog.html#create
echo('catalog/create').post({
  type: 'general',
  name: Math.random().toString(36).substr(2,10)
}, function (err, json) {
  console.log(err, json);

  // Uploaded bundle. You must JSON.stringify this when
  // calling catalog/update.
  var items = [
    {
      "action":"update",
      "catalog_keyvalues": {
        "type": "station",
        "format": "classic rock",
        "call-letters": "WGIR",
        "zipcode": "03101"
      }
    }
  ];

  echo('catalog/update').post({
    id: json.response.id,
    data: JSON.stringify(items)
  }, function (err, json) {
    console.log(err, json);
  });
});