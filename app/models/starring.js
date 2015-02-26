import DS from 'ember-data';

App.Starring = DS.Model.extend({
  starring: DS.attr('string'),
  repository: DS.belongsTo('repository')
});
