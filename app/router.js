var AppRouter = Backbone.Router.extend({
	routes: {
		"": "indexRoute",
	},
});

var router = new AppRouter;

router.on('route:indexRoute', function() {
	var sithCollectionView = new SithCollectionView([3616]);
	$('.css-slots').html(sithCollectionView.render().el);
});

Backbone.history.start();
