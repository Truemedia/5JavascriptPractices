/* 
* @file Application file/script
* @author Wade Penistone (Truemedia)
* @overview Base script containing application instance and methods for controlling all the low levels functions of the application
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
*/
define([
	"stache!templates/page", "i18n!nls/strings",
	"Bootstrap", "Backbone", "KO"
], function(template, nls, jQuery, Backbone, ko) {
	return App = {

		/* Application startup method */
		start: function()
		{
		    // Run autoloader for packages
			this.autoloader();
		},

		/* Autoloading procedure */
		autoloader: function()
		{
			requirejs(['conditioner'], function(conditioner)
			{
				// Reset the base URL to package directory
				require.config({
					baseUrl: "assets/js/packages/"
				});
	
				// Run the package autoloader
				conditioner.init();
			});
		}
	};
});