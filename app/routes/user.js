import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		var randalldiann = new Gh3.User("randalldiann");
		return randalldiann;
	}
});

