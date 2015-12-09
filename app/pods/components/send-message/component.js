import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendMessage() {
      this.attrs.sendMessage(this.get('message')).then(() => {
        this.set('message', '');
      });
    }
  }
});
