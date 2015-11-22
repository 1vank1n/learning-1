var SithView = Backbone.View.extend({
	tagName: 'li',
	className: 'css-slot',
	initialize: function(options) {
		this.template = _.template($('#sith-view').html());
		this.model = new SithModel({id: options.id});
		this.model.fetch();
		this.model.on('change', this.render, this);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});


var SithCollectionView = Backbone.View.extend({
	tagName: 'ul',
	className: 'css-slots',
	capacity: 5,
	initialize: function(options) {
		options.map(function(id){
			this.collection = new SithCollection(new SithModel({id: id}));
		}, this);
		return this;
	},

	render: function(){
		this.collection.each(function(model){
			var sithView = new SithView({id: model.id});
			this.$el.append(sithView.render().el);
		}, this);
		return this;
	},
});
