var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource("books", function() {
    this.route('new', {path: 'new'});
    this.route('show', {path: 'show/:book_id'});
    this.route('edit', {path: 'edit/:book_id'});
  });
});

export default Router;
