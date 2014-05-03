export default Ember.Route.extend({
    renderTemplate: function() {
      this.render('books.form');
    },

    deactivate: function () {
      // this is meant to rollback a 'cancel'
      // do we need to guard against rollingback a submit
      this.currentModel.rollback();
    }
});

