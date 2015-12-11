import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');
  this.route('registration');
  this.route('chats', function() {
    this.route('chat', {path: '/:chat_id'});
  });
});

export default Router;
