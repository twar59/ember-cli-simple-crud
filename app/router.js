var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource("books", function() {
    this.route('show', {path: 'show/:book_id'})
  })
});

export default Router;
