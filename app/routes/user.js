import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var github = new Github({
		  username: "randalldiann",
		  password: "abc123456",
		  auth: "basic"
		});
		var user = github.getUser();
		var repo = github.getRepo("randalldiann", "FIRSTREPO");
		debugger
	}
});