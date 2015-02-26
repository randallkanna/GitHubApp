import DS from 'ember-data';

App.Repository = DS.Model.extend({
  repoTitle: DS.attr('string'),
  repoDescription: DS.attr('string'),
  repoFiles: DS.attr('string'),
  user: DS.belongsTo('user'),
  issues: DS.hasMany('issue'),
  pullRequests: DS.hasMany('pullrequest'),
  starring: DS.hasMany('starring'),
  watched: DS.hasMany('watched')
});