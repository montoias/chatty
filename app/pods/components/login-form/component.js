import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    signIn(){
      this.get('session').authenticate('authenticator:firebase-simple-auth','firebase-simple-auth', {
          provider: 'password',
          email: this.get('email'),
          password: this.get('password')
      }).catch(err => {
        this.set('errorMsg', err.message);
      });
    },

    signInWithProvider(provider) {
      this.get('session').authenticate(
        'authenticator:firebase-simple-auth',
        'firebase-simple-auth',
        {provider}
      );
    },

    signOut() {
      this.get("session").close();
    }
  }
});
