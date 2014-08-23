export default Ember.ObjectController.extend({
  actions: {

    submit: function() {
        this.get('content').save().then(function() {
          console.log("save successful");
          this.transitionToRoute('mcruds');
        }.bind(this), function(error) {
          console.log(error);
        });
    },

    cancel: function() {
      this.transitionToRoute('mcruds');
    }
  }
});
