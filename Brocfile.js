/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  getEnvJSON: require('./config/environment')
});

// Use this to add additional libraries to the generated output files.
app.import('vendor/ember-data/ember-data.js');

// If the library that you are including contains AMD or ES6 modules that
// you would like to import into your application please specify an
// object with the list of modules as keys along with the exports of each
// module as its value.
app.import('vendor/ic-ajax/dist/named-amd/main.js', {
  'ic-ajax': [
    'default',
    'defineFixture',
    'lookupFixture',
    'raw',
    'request',
  ]
});

// ========== add css assets ===========
//module.exports = app.toTree();

var pickFiles = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');

// get a hold of the tree in question
var pikaday = pickFiles('vendor', {
  srcDir: '/bootstrap/dist/css',
    files: [
  'bootstrap.css',
  'bootstrap-theme.css'
  ],
    destDir: '/assets/'
});

// default ember app source tree
var emberApp = app.toTree();

// shim in custom assets
var appAndCustomDependencies = mergeTrees([emberApp, pikaday], {
  overwrite: true
});

module.exports = appAndCustomDependencies;
