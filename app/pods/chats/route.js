import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),

  model(){
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', this.get('session').session.content.authenticated.uid),
      users: this.store.findAll('user'),
      actions: {
        createConversation: this.actions.createConversation.bind(this)
      }
    })
  },

  actions: {
    createConversation(user){
      let conversation = this.store.createRecord('conversation', {});

      conversation.get('users').pushObject(user);
      conversation.get('users').pushObject(this.get('currentModel.user'));

      return conversation.save().then(() => {
        user.save();
        this.get('currentModel.user').save();
      })
    }
  }
});
