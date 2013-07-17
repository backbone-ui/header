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
		
		el : 'body',
		
		options : {
			// navEl : "nav", 
			headerEl : ".top",
			mainEl : ".main",
			threshold : 40
		},
		
		events: {
			"scroll" : "headerScroll",
		},
		
		headerScroll: function() {
			
			// console.log($(document).scrollTop());
			
			if (!$('html').hasClass('touch') ) {
				
				
				
				    if ($(window).scrollTop() > this.options.threshold) {
					
					$( this.options.headerEl ).addClass("hscroll");
					$( this.options.mainEl ).css("padding-top", "110px");
				}
				else {
					$( this.options.headerEl ).removeClass("hscroll");
					$( this.options.mainEl ).css("padding-top", "50px");
				}
			}
		},
		
		
		
		initialize: function(model, options){
			
			
			_.bindAll(this, 'render', 'headerScroll'); 
			$(window).scroll(this.headerScroll); 
			
		},
	});
	
})(this._, this.Backbone);




