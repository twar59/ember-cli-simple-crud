export default Ember.ArrayController.extend({
  actions: {
    delete: function(book) {
      book.destroyRecord();
    }
  }
});
