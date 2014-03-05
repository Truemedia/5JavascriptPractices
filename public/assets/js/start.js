/* 
* @file Starting file/script
* @overview Base script included in the HTML of any page
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
*/

// RequireJS config
require.config({
    baseUrl: "assets/js",
    paths: {
        /* Require JS plugins */
        conditioner: 'libs/conditioner.min'
    },
    
    /* Packages (/packages directory) */
    packages: [
        'bookmark'
    ]
});

// Autoloading procedure
requirejs(['conditioner'], function(conditioner) {
    
    // Reset the base URL to package directory
    require.config({
        baseUrl: "assets/js/packages/"
    });
    
    // Run the package autoloader
    conditioner.init();
});