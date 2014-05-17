var compileFile = require('./lib/compile.js');
var path = require('path');

module.exports = function (content) {
    this.callback(null, compileFile(content));
};
