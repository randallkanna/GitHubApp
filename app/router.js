import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.resource('user', { path: '/:username' }, function() {
  	this.resource('repos', function() {
  		this.resource('repo', { path: '/:username/repos/:reponame' })
  	});
  });
});

export default Router;
