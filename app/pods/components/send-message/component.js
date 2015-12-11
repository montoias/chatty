import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendMessage() {
      this.sendAction('sendMessage', this.get('message'));
    }
  }
});
