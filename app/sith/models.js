var SithModel = Backbone.Model.extend({
	initialize: function(options) {
		this.url = 'http://jedi.smartjs.academy/dark-jedis/' + options.id;
	},
	defaults: {
		id: '',
		name: '',
		homeworld: HomeworldModel,
		master: '',
		apprentice: ''
	}
});
