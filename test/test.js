const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const assert = require('assert');
const execSync = require('child_process').execSync;
const wctLoader = path.resolve(__dirname, '..');
const outputDir = path.resolve(__dirname, './output/loader');
const config = {
    entry: './test/fixtures/requires-html-file.js',
    output: {
        path: outputDir,
        filename: "[id].loader.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: wctLoader }
        ]
    }
};
describe('webpack-compile-templates', function () {
    beforeEach(function () {
        rimraf.sync(outputDir);
    });
    afterEach(function () {
        rimraf.sync(outputDir);
    });
    it('should work as a webpack loader', function (done) {
        webpack(config, function (err, stats) {
            assert(!err);
            const files = fs.readdirSync(outputDir);
            assert.equal(files.length, 1);
            const bundleContents = fs.readFileSync(path.resolve(outputDir, files[0]));
            const output = execSync(`node ${path.join(outputDir, files[0])}`);
            assert.equal(output.toString().trim(), '<h2>doing a test</h2>');
            done();
        });
    });
});
