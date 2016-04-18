const fs = require('fs');

function rewrite(file){
  console.log(file);
  fs.readFile(file, 'utf8', (err, data) => {
    if(err) {
      return console.log(err);
    }
    const text = data.replace(/%PACKAGE-NAME%/g, pkgname);
    file = file.replace(/.tt/g, '');
    fs.writeFile(file, text, 'utf8', (err) => {
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
 * @param {String} The path to the templates directory.
 * @param {Function} a callback on each file.
 */
function parse(path, callback){

  // read the tempalte DIR.
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
          console.log(file + ' is a directory!');
          parse(file, callback);

        } else {
          if (callback) {
           callback(file);
          } else {
            rewrite(file);
          }
        }
      });
    });
  });
}


module.exports = parse;

