export default Ember.Route.extend({
    model: function(params) {
        return this.store.all('book').findBy('id', params.book_id);
    }
});
