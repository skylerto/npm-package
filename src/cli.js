const Writer = require('./Writer.js');
const exec = require("child_process").exec;

const dir = require('path').resolve(__dirname);
const templates = `${dir}/templates`;

const pkg =  process.argv[2];
const writer = new Writer(templates, pkg);
writer.parse();

exec(`cd ${pkg}; npm install --save-dev`);
