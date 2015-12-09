import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    signIn(){
      this.get("session").open("firebase", {
          provider: 'password',
          email: this.get('email'),
          password: this.get('password')
      }).then(data => {
        console.log(data.currentUser);
      }).catch(err => {
        this.set('errorMsg', err.message);
      });
    },

    signInWithProvider(provider) {
      this.get("session").open("firebase", {provider}).then(data => {
        console.log(data.currentUser);
      });
    },

    signOut() {
      this.get("session").close();
    }
  }
});
