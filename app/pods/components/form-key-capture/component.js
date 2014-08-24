export default Ember.Component.extend({
    tagName: 'div',

    didInsertElement: function() {
        var KEYCODE_ENTER = 13;
        var KEYCODE_ESC = 27;

        // use keydown here, keyup can actually catch events from the previous screen
        this.$('input').on('keydown', function(e) {
            var charCode = (typeof e.which === "number") ? e.which : e.keyCode;

            if (charCode === KEYCODE_ENTER) { console.log('submit'); this.sendAction('submit'); }
            if (charCode === KEYCODE_ESC) { console.log('cancel'); this.sendAction('cancel'); }
        }.bind(this));

        this.$('input')[0].focus();
    }

});
