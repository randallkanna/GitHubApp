import DS from 'ember-data';

var attr = DS.attr;
var Model = DS.Model;
var hasMany = DS.hasMany;

export default Model.extend({
  avatar_url: attr('string'),
  url: attr('string'),
  login: attr('string'),
  name: attr('string'),
  location: attr('string'),
  bio: attr('string'),
  company: attr('string'),
  blog: attr('string'),
  followers: attr('integer'),
  following: attr('integer'),
  created_at: attr('date'),
  repositories: hasMany('repository')
});
