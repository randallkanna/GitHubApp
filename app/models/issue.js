import DS from 'ember-data';

App.Issue = DS.Model.extend({
  issues: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
