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

dimensions('http://upload.wikimedia.org/wikipedia/en/7/70/Example.png', function(err, dimensions){
  if (err) throw err
  console.log(dimensions)
})
```

The above yields:

```js
{
  height: 297,
  width: 275
}
```

See [tests/index.js](tests/index.js) for more usage examples.

## License

[WTFPL](http://wtfpl.org)