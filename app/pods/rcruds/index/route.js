export default Ember.Route.extend({
    model: function() {
      console.log("load rcruds/route");
        return this.store.find('book');
    }
});

