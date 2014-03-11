
define([
	"stache!./templates/partial", "i18n!./nls/strings", "Bootstrap", "Backbone", "KO"
], function(template, nls, jQuery, Backbone, ko) {
	return bookmark = {
		trans: {}, // Translations

		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			this.trans = nls;
		},

	    /* Autoloading hook */
	    load: function(element, options)
	    {    	
	    	this.init(options);
			new this.view({el: element});
	    },
	        
	    /* Data collection */
	    collection: Backbone.Collection.extend({
	        url: function() { return "http://localhost/5JavascriptPractices/public/assets/js/packages/bookmark/data.json"; },
	        parse: function(data) { return data.items; }
	    }),
	        
	    /* Append the HTML for this package to the DOM */
	    view: Backbone.View.extend({
	        initialize: function()
	        {    	
	            this.collection = new bookmark.collection({model: Backbone.Model.extend()});
	            this.render();
	        },
	        render: function()
	        {
	        	var self = this;
	            this.collection.fetch().done( function() {
	            	var data = { trans: bookmark.trans };
	            	self.$el.html( template(data) );
	            	ko.applyBindings(new bookmark.ViewModel( self.collection.toJSON() ), this.el);
	            });
	        }
	    }),

	    /* ViewModel for this package */
	    ViewModel: function(items)
		{
			this.bookmarks = ko.observableArray(items);
		}
	}
});