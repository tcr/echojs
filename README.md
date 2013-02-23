# echojs

An implementation of the Echonest API for Node.js.

```
npm install echojs
```

Register for an API key:

[https://developer.echonest.com/account/profile](https://developer.echonest.com/account/profile)

Then to get started:

```js
var echojs = require('echojs');

var echo = echojs({
  key: process.env.ECHONEST_KEY
});

echo('song/search').get({
  artist: 'radiohead',
  title: 'karma police'
}, function (err, json) {
  console.log(json.response);
});
```

Check out the [examples for different parts of the API](https://github.com/olinjs/tcr/tree/master/example)

## License

MIT