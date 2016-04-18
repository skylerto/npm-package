Pack
====

Pack is an npm package generator.

## Installation

To install, get the code from github, or npm:

```
$ npm install -g npm-packager
```

## Usage

To create a new package named app, run:

```
$ pack app
```
## What You Get

When you create a new package, you get a few files generated for you:

```
sky dev $ pack app >> /dev/null
sky dev $ tree -L 2 -a app/
app/
├── .gitignore
├── .travis.yml
├── README.md
├── index.js
├── node_modules
│   ├── .bin
│   ├── commander
│   ├── debug
│   ├── diff
│   ├── escape-string-regexp
│   ├── glob
│   ├── graceful-fs
│   ├── growl
│   ├── inherits
│   ├── jade
│   ├── lru-cache
│   ├── minimatch
│   ├── minimist
│   ├── mkdirp
│   ├── mocha
│   ├── ms
│   ├── sigmund
│   └── supports-color
├── package.json
├── script
│   ├── run
│   └── test
├── src
│   └── main.js
└── test
    └── test.js

22 directories, 9 files
```
