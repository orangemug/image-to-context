function imageToContext(img, done) {
  var canvas, img, src;

  // Check if Image type object
  if ((img instanceof Image) || (img instanceof HTMLImageElement)) {
    // We have no idea if the image has loaded or not, so force a re-render
    // I know this is bad bad perf need to find a better way to do this...
    src = img.src;
  } else {
    // Just assume it's a url
    src = img;
    img = new Image();
  }

  canvas = document.createElement("canvas");

  img.onload = function() {
    var ctx;
    canvas.width  = img.naturalWidth;
    canvas.height = img.naturalHeight;

    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    done(undefined, ctx);
  };

  img.onerror = function(e) {
    done(e);
  }

  img.src = src;
}

module.exports = imageToContext;
