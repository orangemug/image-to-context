# image-to-context
Create an canvas context from an image url


## Install
To install simply run

    npm install https://github.com/orangemug/image-to-context.git


## Usage

    var canvasToContext = require("canvas-to-context");
    canvasToContext("http://exmaple.com/image.png", function(err, ctx) {
      // Code here...
    });


## Test
To run the tests

    npm test

[Image](test/chla_8day_2013.png) used in the test from <http://blog.remotesensing.io/2013/05/Dealing-with-no-data-using-NumPy-masked-array-operations>


## License
MIT

