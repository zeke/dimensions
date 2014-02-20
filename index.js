var fs = require('fs')
var wget = require('wget')
var md5 = require('MD5')
var sizeOf = require('image-size')

module.exports = function(imageUrl, cb){

  var filename = "/tmp/" + md5(imageUrl)

  if (fs.existsSync(filename)) {

    // Use cached file
    sizeOf(filename, function (err, dimensions) {
      if (err) return cb(err)
      cb(null, dimensions)
    })

  } else {

    // Download from scratch
    var download = wget.download(imageUrl, filename)

    download.on('error', function(err){
      cb(err)
    })

    download.on('end', function(file){
      sizeOf(filename, function (err, dimensions) {
        if (err) return cb(err)
        cb(null, dimensions)
      })
    })

  }





}