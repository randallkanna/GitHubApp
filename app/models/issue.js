import DS from 'ember-data';

export default DS.Model.extend({
  issueTitle: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
