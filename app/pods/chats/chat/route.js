import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import moment from 'npm:moment';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  model({chat_id}){
    return this.store.find('conversation', chat_id);
  },

  actions: {
    sendMessage(msg) {
      // clean input box
      this.set('currentModel.message', '');

      let user = this.store.find('user', this.get('session').session.content.authenticated.uid);
      let conversation = this.get('currentModel');
      let message = this.store.createRecord('message', {
        body: msg,
        timestamp: moment()
      });

      conversation.get('messages').pushObject(message);

      return user.then((user) => {
        message.set('user', user);

        message.save().then(() => {
          conversation.save();
        });
      })
    }
  }
});
