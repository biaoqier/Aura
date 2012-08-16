var require = {
	// shim underscore & backbone (cause we use the non AMD versions here)
	shim: {
		'dom': {
			exports: '$',
			deps: ['jquery'] // switch to the DOM-lib of your choice
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'dom'],
			exports: 'Backbone'
		},
		'deferred': {
			exports: 'Deferred',
			deps: ['dom']
		}
	},
	// paths
	paths: {
		// jQuery
		jquery: '/App/aura/lib/jquery/jquery',

		// Zepto
		zepto: '/App/aura/lib/zepto/zepto',
		deferred: '/App/aura/lib/zepto/deferred',

		// Aura
		dom: '/App/aura/lib/dom',
		underscore: '/App/aura/lib/underscore',
		aura_core: '/App/aura/mediator',
		aura_perms: '/App/aura/permissions',
		aura_sandbox: '/App/aura/facade',

		// Backbone Extension
		core: '/App/extensions/backbone/mediator',
		sandbox: '/App/extensions/backbone/facade',
		text: '/App/extensions/backbone/lib/text',
		backbone: '/App/extensions/backbone/lib/backbone',
		localstorage: '/App/extensions/backbone/lib/localstorage',
        jquery_ui: '/App/extensions/backbone/lib/jquery-ui.min',

		// Demo App
		perms: '/App/pages/sqaure/js/permissions'
	}
};