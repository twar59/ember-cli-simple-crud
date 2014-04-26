var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource("book", {path: '/'})
});

export default Router;
