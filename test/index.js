var assert = require("assert");
var canvasToContext = require("../");
var bind = require("lodash.bind");

var IMAGE_URL = "test/chla_8day_2013.png";

describe("image-to-context", function() {
  function assertValid(done, err, ctx) {
    assert.equal(err, undefined);
    assert(ctx instanceof CanvasRenderingContext2D);
    assert.equal(ctx.canvas.width, 400);
    assert.equal(ctx.canvas.height, 256);
    done();
  }

  function assertError(done, err, ctx) {
    assert.ok(err);
    assert.equal(ctx, undefined);
    done();
  }

  it("should load a image if a valid url is passed", function(done) {
    canvasToContext(IMAGE_URL, bind(assertValid, undefined, done));
  });

  it("should load an image if a valid image element is passed", function(done) {
    var el = document.createElement("img");
    el.src = IMAGE_URL;
    canvasToContext(el, bind(assertValid, undefined, done));
  });

  it("should load an image if a valid image object is passed", function(done) {
    var obj = new Image();
    obj.src = IMAGE_URL;
    canvasToContext(obj, bind(assertValid, undefined, done));
  });

  it("should fail to load an image if an invalid image url is passed", function(done) {
    canvasToContext("no-image.png", bind(assertError, undefined, done));
  });

  it("should fail to load an image if an invalid type is passed", function(done) {
    canvasToContext({}, bind(assertError, undefined, done));
  });
});
