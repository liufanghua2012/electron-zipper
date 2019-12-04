const Zipper = require('../index');
const path = require('path');
const dir = __dirname;
const base_dir = dir.split('test')[0];
console.log(base_dir);

const zipper = new Zipper( {
    targetFilePath: path.join(base_dir,'windows','simple.mailserver-master.zip'),
    toDir: 'tmp'
});
zipper.unzip();

