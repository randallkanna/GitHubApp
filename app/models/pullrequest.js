import DS from 'ember-data';

export default DS.Model.extend({
  pullRequestTitle: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
