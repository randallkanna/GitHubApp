import DS from 'ember-data';

var attr = DS.attr;
var Model = DS.Model;
var belongsTo = DS.belongsTo;

export default Model.extend({
  name: attr('string'),
  repository: belongsTo('repository')
});
