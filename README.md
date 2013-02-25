# echojs

An implementation of the Echonest API for Node.js.

```
$ npm install echojs
$ export ECHONEST_KEY=<your API key>
```

Then to get started:

```js
var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

// http://developer.echonest.com/docs/v4/song.html#search
echo('song/search').get({
  artist: 'radiohead',
  title: 'karma police'
}, function (err, json) {
  console.log(json.response);
});
```

## Steps

* **Register for an API key:** <https://developer.echonest.com/account/profile>
* **API Documentation:** <http://developer.echonest.com/docs/v4>
* **[Read examples for the Echonest API](https://github.com/tcr/echojs/tree/master/examples)**
* **[Submit issues or pull requests](https://github.com/tcr/echojs/issues)**

## Links

* **[Remix.js](http://echonest.github.com/remix/javascript.html)** &mdash; Uses the HTML5 Audio API to remix sound in your browser.
* **[jquery.rdio.js](https://github.com/rdio/jquery.rdio.js)** &mdash; Play music from Rdio's Web Playback API. 30 second samples for free, and full music streams available to Rdio subscribers.

## License

MIT