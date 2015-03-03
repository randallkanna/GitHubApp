import Ember from 'ember';
import Github from 'github-api';

export default Ember.Route.extend({
	model: function() {
		debugger
		var github = new Github({
		  username: "randalldiann",
		  password: "abc123456",
		  auth: "basic"
		});
		console.log(Github);
		console.log(github);
		debugger
		var user = github.getUser();
		console.log(user);
		debugger
		return user;

		// var github = new Github({
		//   token: "8b0c0d2d6e5cb3017ddd87e7f243152afcc66698",
		//   auth: "oauth"
		// });

		// var user = github.getUser();
		// var repo = github.getRepo("randalldiann", "FIRSTREPO");
		// debugger
	}
});
