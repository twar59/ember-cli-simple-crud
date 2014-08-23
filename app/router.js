import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BooksENV.locationType
});

Router.map(function() {
  this.resource("rcruds", function() {
    this.route('new');
    this.route('edit', {path: '/:book_id/edit'});
    this.route('show', {path: '/:book_id/show'});
  });
  this.resource("mcruds", function() {
    this.route('new');
    this.route('edit', {path: '/:book_id/edit'});
    this.route('show', {path: '/:book_id/show'});
  });
});



export default Router;
