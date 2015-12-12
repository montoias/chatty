import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  timestamp: DS.attr('string'),
  user: DS.belongsTo('user')
});
