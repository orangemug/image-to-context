# image-to-context
Create a canvas context from an image element/object/url

[![browser support](https://ci.testling.com/orangemug/image-to-context.png)](https://ci.testling.com/orangemug/image-to-context)

## Install
To install simply run

    npm install https://github.com/orangemug/image-to-context.git


## Usage

    var imageToContext = require("image-to-context");
    imageToContext("/image.png", function(err, ctx) {});
    imageToContext(imageElement, function(err, ctx) {});
    imageToContext(imageObj, function(err, ctx) {});


## Test
To run the tests

    npm test

[Image](test/chla_8day_2013.png) used in the test from [remotesensing.io](http://blog.remotesensing.io/2013/05/Dealing-with-no-data-using-NumPy-masked-array-operations)


## License
MIT

