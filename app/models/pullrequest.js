import DS from 'ember-data';

App.PullRequest = DS.Model.extend({
  pullRequests: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
