import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  firebase: Ember.inject.service(),
  store: Ember.inject.service(),
  myUser: Ember.inject.service('my-user'),

  actions: {
    signIn(){
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth', {
          provider: 'password',
          email: this.get('email'),
          password: this.get('password')
      }).catch(err => this.set('errorMsg', err.message));
    },

    signInWithProvider(provider) {
      this.get('session').authenticate(
        'authenticator:firebase-simple-auth',
        'firebase-simple-auth',
        {provider}
      );
    },

    signUp(){
      this.get('firebase').createUser({
        email: this.get('email'),
        password: this.get('password')
      }, (err, data) => {
        if(err){
          this.set('errorMsg', err.message);
          return;
        }

        //data.uid if needed
        let user = this.get('store').createRecord('user', {
          email: this.get('email'),
          uid: data.uid
        });

        user.set('id', data.uid);
        user.save();

        this.send('signIn');
      });
    }
  }
});
