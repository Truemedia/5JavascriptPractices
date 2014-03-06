
define([
	"stache!./templates/partial", "i18n!./nls/strings",
	"jQuery"
], function(template, nls, jQuery) {
	return bookmark = {
		trans: {}, // Translations

		/* Initial load-up procedure if first time package is loaded */
		init: function(options)
		{		
			// Load translations
			this.trans = nls;
		},
			
		/* Autoloading hook */
	    load: function(element, options)
	    {    	
	        // Load the package onto current web-page
	    	this.init(options);
	    	this.view(element);
	    },

	    /* Render the HTML for this package and append to the DOM */
	    view: function(element)
	    {
			var data = {
				"trans": this.trans 
			};

			jQuery(element).html( template(data) );	    	
	    }
	}
});