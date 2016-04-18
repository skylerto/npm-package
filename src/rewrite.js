const fs = require('fs');
//const path = require('path');

/**
 * Rewrite the given file.
 * The file should include the path 
 *
 * @method rewrite
 * @param {String} The name of a file to be rewritten.
 */
function parse(path, filename){

  // read the tempalte DIR.
  fs.readdir(path, (err, files) => {
    if (err) {
      console.log(err);
      return 0;
    }

    // Loop over files
    files.forEach((file) => {
      fs.stat(`${path}/${file}`, (err, stats) => {
        if (err) {
          console.log(err);
          return 0;
        }
        if(stats.isDirectory()){
          console.log(file + ' is a directory!');

        } else {
          rewrite(file);
          console.log(file + ' is just a file');
        }
      });
    });
  });
}


module.exports = parse;

