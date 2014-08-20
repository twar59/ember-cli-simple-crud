export default Ember.ObjectController.extend({
  actions: {

    submit: function() {
        this.get('content').save().then(function() {
          console.log("save successful");
          this.transitionToRoute('rcruds');
        }.bind(this), function(error) {
          console.log(error);
        });
    },

    cancel: function() {
      this.transitionToRoute('rcruds');
    }
  }
});
