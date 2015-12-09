import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(){
    return Ember.RSVP.hash({
      messages: this.store.findAll('message'),
      actions: {
        sendMessage: this.actions.sendMessage.bind(this)
      }
    })
  },

  actions: {
    sendMessage(msg) {
      let message = this.store.createRecord('message', {
        message: msg
      });

      return message.save();
    }
  }
});
