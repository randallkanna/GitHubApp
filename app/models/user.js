import DS from 'ember-data';

export default DS.Model.extend({
  profileImage: DS.attr('string'),
  profileLink: DS.attr('string'),
  username: DS.attr('string'),
  name: DS.attr('string'),
  company: DS.attr('string'),
  blogURL: DS.attr('string'),
  followerCount: DS.attr('integer'),
  followingCount: DS.attr('integer'),
  accountCreationDate: DS.attr('date'),
  repositories: DS.hasMany('repository')
});
