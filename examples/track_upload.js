var echojs = require('echojs')
  , fs = require('fs')
  , path = require('path');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/song.html#search
var location = __dirname + '/codemonkey.mp3';
fs.readFile(location, function (err, buffer) {
  echo('track/upload').post({
    filetype: path.extname(location).substr(1)
  }, 'application/octet-stream', buffer, function (err, json) {
    console.log(json.response);
  });
});