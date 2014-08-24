//
// Depends on an upstream object accepting actions:
//   submit
//   cancel
//
export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['modal-form', 'modal', 'fade'],
    attributeBindings: ['tabindex', 'role', 'aria-labelledby', 'aria-hidden'],
    tabindex: '-1',
    role: 'dialog',
    'aria-labelledby': "myModalLabel",
    'aria-hidden': "true",

    didInsertElement: function() {
        var self = this;

        this.$().on('hide.bs.modal', function () {
          self.sendAction('cancel');
        });
        this.$().on('shown.bs.modal', function() {
          self.$('input:visible:first').focus();
        });
          
        this.$().modal('show');
    },

    willDestroyElement: function() {
        this.$().modal('hide');
    },

    actions: {
      cancel: function() { this.sendAction('cancel'); },
      submit: function() { this.sendAction('submit'); },
    },
});
