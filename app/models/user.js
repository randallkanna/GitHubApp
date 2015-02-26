import DS from 'ember-data';

var attr = DS.attr;
var Model = DS.Model;
var hasMany = DS.hasMany;

export default Model.extend({
  profileImage: attr('string'),
  profileLink: attr('string'),
  username: attr('string'),
  name: attr('string'),
  company: attr('string'),
  blogURL: attr('string'),
  followerCount: attr('integer'),
  followingCount: attr('integer'),
  accountCreationDate: attr('date'),
  repositories: hasMany('repository')
});
