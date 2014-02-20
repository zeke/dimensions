var dimensions = require("..")
var assert = require("assert")

describe('dimensions', function(){

  it('returns an object with width and height', function(done){
    dimensions('http://placekitten.com/g/200/300', function(err, dimensions){
      if (err) throw err
      assert.equal(dimensions.width, 200)
      assert.equal(dimensions.height, 300)
      done()
    })
  })

  it('supports PNG', function(done){
    dimensions('http://upload.wikimedia.org/wikipedia/en/7/70/Example.png', function(err, dimensions){
      if (err) throw err
      assert.equal(dimensions.width, 275)
      assert.equal(dimensions.height, 297)
      done()
    })
  })

  it('supports JPG', function(done){
    dimensions('http://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', function(err, dimensions){
      if (err) throw err
      assert.equal(dimensions.width, 275)
      assert.equal(dimensions.height, 297)
      done()
    })
  })

  it('uses cached files if already downloaded', function(done){
    this.timeout(10);
    dimensions('http://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', function(err, dimensions){
      if (err) throw err
      assert.equal(dimensions.width, 275)
      assert.equal(dimensions.height, 297)
      done()
    })
  })

  it("throws an error if URL doesn't resolve", function(done){
    dimensions('http://not-a-real-website.com/boom-crash', function(err, dimensions){
      assert(err)
      done()
    })
  })

})