'use strict';

const Writer = require('./Writer.js');
const exec = require("child_process").exec;
const Promise = require('promise');

const dir = require('path').resolve(__dirname);
const templates = `${dir}/templates`;

const pkg =  process.argv[2];
const writer = new Writer(templates, pkg);
const promise = new Promise((resolve, reject) => {
  resolve(writer.parse());
});

promise.done(()=> {
  console.log('Installing dependancies...');
  exec(`cd ${pkg}; npm install`);
  console.log('Creating executable scripts...');
  exec(`chmod u+x ${pkg}/script/run`);
  exec(`chmod u+x ${pkg}/script/test`);
});
