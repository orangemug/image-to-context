var assert = require("assert");
var canvasToContext = require("../");

describe("canvas-to-context", function() {
  it("should load a image if a valid url is passed", function(done) {
    canvasToContext("test/chla_8day_2013.png", function(err, ctx) {
      assert.equal(err, undefined);
      assert(ctx instanceof CanvasRenderingContext2D);
      assert.equal(ctx.canvas.width, 400);
      assert.equal(ctx.canvas.height, 256);
      done();
    });
  });

  it("should fail to load an image if an invalid image is passed", function(done) {
    canvasToContext("no-image.png", function(err, ctx) {
      assert.equal(err, true);
      assert.equal(ctx, undefined);
      done();
    });
  });
});
