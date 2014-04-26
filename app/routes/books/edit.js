export default Ember.Route.extend({
    model: function() {
        return this.store.all('book').findBy('id', params.book_id);
    },

    deactivate: function () {
      // this is meant to rollback a 'cancel'
      // do we need to guard against rollingback a submit
      this.currentModel.rollback();
    }
});

