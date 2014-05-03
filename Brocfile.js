/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  name: require('./package.json').name,

  legacyFilesToAppend: [
    'jquery.js',
    'handlebars.js',
    'ember.js',
    'ic-ajax/dist/named-amd/main.js',
    'ember-data.js',
    'app-shims.js',
    'ember-resolver.js',
    'ember-load-initializers.js'
  ],

  // AKA whitelisted modules
  ignoredModules: [
    'ember',
    'ember/resolver',
    'ember/load-initializers',
    'ic-ajax'
  ],

  // hack we can hopefully remove as the addon system improves
  importWhitelist: {
    'ember': ['default'],
    'ember/resolver': ['default'],
    'ember/load-initializers': ['default']
  },

  // hack
  getEnvJSON: require('./config/environment')
});

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

