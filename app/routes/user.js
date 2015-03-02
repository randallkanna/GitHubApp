import Ember from 'ember';
import Github from 'node_modules/github-api/github.js';

export default Ember.Route.extend({

	model: function() {
		return [{
			avatar_url: "http://www.google.com",
			login: 'randalldiann',
			name: 'Randall',
			location: 'San Francisco',
			bio: 'Test bio here',
			blog: 'randallkanna.com',
			company: 'Ticketfly'
		}]
	}
	//   var user = new Github({
	// 	  username: "randalldiann",
	// 	  password: "abc123456",
	// 	  auth: "basic"
	// 	});

	// return user;
});

