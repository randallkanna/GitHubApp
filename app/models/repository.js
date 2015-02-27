import DS from 'ember-data';

var attr = DS.attr;
var Model = DS.Model;
var belongsTo = DS.belongsTo;
var hasMany = DS.hasMany;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  url: attr('string'),
  user: belongsTo('user'),
  issues: hasMany('issue'),
  pullRequests: hasMany('pullrequest'),
  starring: hasMany('starring'),
  watched: hasMany('watcher')
});
