import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  email: DS.attr('string'),
  conversations: DS.hasMany('conversation', {async: true})
});
