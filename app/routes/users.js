import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		debugger
		var github = new Github({
		  token: "8b0c0d2d6e5cb3017ddd87e7f243152afcc66698",
		  auth: "oauth"
		});
		var user = github.getUser();
		var repo = github.getRepo("randalldiann", "FIRSTREPO");
		debugger
	}
});


	// var github = new Github({
	// 	  username: "randalldiann",
	// 	  password: "abc123456",
	// 	  auth: "basic"
	// 	});