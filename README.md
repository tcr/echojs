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

## Links

* **Register for an API key:** <https://developer.echonest.com/account/profile>
* **API Documentation:** <http://developer.echonest.com/docs/v4>
* **[Read examples for the Echonest API](https://github.com/tcr/echojs/tree/master/examples)**
* **[Submit issues or pull requests](https://github.com/tcr/echojs/issues)**

## License

MIT