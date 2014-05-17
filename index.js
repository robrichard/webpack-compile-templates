var compileFile = require('./lib/compile.js');
var path = require('path');
var transformTools = require('browserify-transform-tools');

module.exports = function (content) {
    this.callback(null, compileFile(content));
//        output = compileFile(content);
//    var file = transformOptions.file;
//    var output;f
//    var extension = path.extname(file);
//    if (extension === '.html') {
//        // If compileFile returned an error send that to done
//        if (output instanceof Error) {
//            done(output.message);
//        } else {
//            done(null, output);
//        }
//    } else {
//        done(null, content);
//    }
};
