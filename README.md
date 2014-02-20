# dimensions

Get the width and height of any image on the Internet. Supports BMP, GIF, JPEG, PNG, PSD.

## Install it

```sh
npm install dimensions --save
```

## Use it

Give dimensions an image URL, get back an object with the image's width and height in pixels.

```js
var dimensions = require('dimensions')
var url = 'http://placekitten.com/g/200/300'

dimensions(url, function(err, dimensions){
  if (err) throw err
  console.log(dimensions)
})
```

The above yields:

```js
{
  height: 300,
  width: 200
}
```

See [tests/index.js](tests/index.js) for more usage examples.

## License

[WTFPL](http://wtfpl.org)