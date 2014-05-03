var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto'
});

Router.map(function() {
  this.resource("books", function() {
    this.route('new');
    this.route('edit', {path: '/:book_id/edit'});
    this.route('show', {path: '/:book_id/show'});
  });
});




export default Router;
