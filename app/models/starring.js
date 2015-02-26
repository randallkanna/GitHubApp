import DS from 'ember-data';

export default DS.Model.extend({
  starringName: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
