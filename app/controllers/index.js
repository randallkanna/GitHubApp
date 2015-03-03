import Ember from 'ember';

export default Ember.ObjectController.extend({
	actions: {
		login: function() {
			var github = new Github({
			  username: this.get("username"),
			  password: this.get("password"),
			  auth: "basic"
			}).then(function() {
				document.location = "/" + this.username;
			}, function() {
				this.set("loginFailed", true);
			}.bind(this));
		}
	}
});
