function imageToContext(src, done) {
  var img = new Image();
  var canvas = document.createElement("canvas");

  img.onload = function() {
    canvas.width  = img.naturalWidth;
    canvas.height = img.naturalHeight;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    done(undefined, ctx);
  };

  img.onerror = function() {
    done(true);
  }

  img.src = src;
}

module.exports = imageToContext;
