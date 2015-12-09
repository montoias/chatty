import config from 'ember-chat/config/environment';
import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});