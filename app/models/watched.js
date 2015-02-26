import DS from 'ember-data';

App.Watched = DS.Model.extend({
  watched: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
