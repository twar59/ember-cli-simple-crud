export default Ember.Route.extend({
    controllerName: 'mcruds.edit',

//    renderTemplate: function() {
//      this.render('rcruds.form');
//    },

    model: function() {
        return this.store.createRecord('book');
    },

    deactivate: function () {
      // this is meant to rollback a 'cancel'
      // do we need to guard against rollingback a submit
      this.currentModel.rollback();
    }
});

