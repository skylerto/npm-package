const rewrite = require('./rewrite.js');

const dir = require('path').resolve(__dirname);
const templates = `${dir}/templates`;

module.exports = parse(templates, '');
