// Backbone.js Header extension
//
// Created by: Lyndel Thomas (@ryndel)
// Source: https://github.com/backbone-ui/header
//
// Licensed under the MIT license: 
// http://makesites.org/licenses/MIT

(function(_, Backbone) {
	
	// fallbacks
	if( _.isUndefined( Backbone.UI ) ) Backbone.UI = {};
	// Support backbone app (if available)
	var View = ( typeof APP != "undefined" && !_.isUndefined( APP.View) ) ? APP.View : Backbone.View;
	
	Backbone.UI.Header = View.extend({
		
		el : '.ui-header',
		
		options : {
			// navEl : "nav", 
			// mainEl : ".main"
		},
		
		events: {
			"click .ui-header-control": "toggle"
		},
		
		toggle: function( e ) {
			e.preventDefault();
			$(this.el).find('.ui-header-target').toggleClass('ui-element-active');
		}, 
		
		dooSomething: function() {
			
		},
		
		initialize: function(model, options){
			
			_.bindAll(this, 'render'); 
			
		},
	});
	
})(this._, this.Backbone);