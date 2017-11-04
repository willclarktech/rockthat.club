Package.describe({
	name: 'rockthatclub',
	version: '0.1.0',
});

Package.onUse( function(api) {

	api.use([
		'vulcan:core',
		'example-forum',

		'fourseven:scss@4.5.0',
	]);

	api.mainModule('lib/server/index.js', 'server');
	api.mainModule('client.js', 'client');

	api.addFiles([
		'lib/stylesheets/custom.scss'
	], ['client']);

  api.addAssets([
    'lib/assets/images/logo.jpg',
  ], ['client']);

	api.addAssets([
		'lib/server/emails/customNewPost.handlebars',
		'lib/server/emails/customEmail.handlebars'
	], ['server']);

});
