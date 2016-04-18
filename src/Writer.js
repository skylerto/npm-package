'use strict';

const fs = require('fs');
var mkdirp = require('mkdirp');

/**
 * This is a writer class.
 *
 * @class Writer
 * @constructor
 */
const Writer = class Writer {

  /**
   * Create a new writer class.
   *
   * @param {String} [path] the path to the directory
   */
  constructor(path, pkg){
    this.pkg = pkg;
    this.path = path;
    this.templates = path;
    mkdirp(this.pkg, (err) => {
      if(err){
        return console.log(err);
      }
    });
  }

  rewrite(file){
    console.log(file);
    fs.readFile(`${this.path}/${file}`, 'utf8', (err, data) => {
      if(err) {
        return console.log(err);
      }
      const text = data.replace(/%PACKAGE-NAME%/g, this.pkg);
      file = file.replace(/.tt/g, '');
      fs.writeFile(`${this.pkg}/${file}`, text, 'utf8', (err) => {
        if(err) {
          return console.log(err);
        }
      });
    });
  }

  /**
   * Parse over the files in the templates directory.
   * Callback on a `${relpath}/${file}`
   *
   * @method parse
   * @param {Function} [callback] callback on each file.
   * @param {String} [pre] any additional path after `templates/`
   */
  parse(callback,pre) {
    // read the tempalte DIR.

    let path = this.path;
    if(pre){
      path = `${path}/${pre}/`;
    }

    fs.readdir(path, (err, files) => {
      if (err) {
        return console.log(err);
      }

      // Loop over files
      files.forEach((file) => {
        fs.stat(`${path}/${file}`, (err, stats) => {

          if(err) {
            return console.log(err);
          }
          if(stats.isDirectory()){
            mkdirp(`${this.pkg}/${file}`, (err) => {
              if(err){
                return console.log(err);
              }
            });
            this.parse(callback, file);

          } else {
            if(pre) {
              file = `${pre}/${file}`;
            }

            if (callback) {
              callback(file);
            } else {
              this.rewrite(file);
            }
          }
        });
      });
    });
  }
};

module.exports = Writer;
