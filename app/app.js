import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'books', // TODO: loaded via config
  podModulePrefix: 'books/pods',
  Resolver: Resolver
});

loadInitializers(App, 'books');

export default App;
