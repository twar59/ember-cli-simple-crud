export default Ember.Route.extend({
    model: function() {
        return this.get('store').find('book').then(function(allBooks) {
            return allBooks.filter(function () {
                return true;
            });
        }); 
    }
});

