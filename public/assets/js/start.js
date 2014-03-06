/* 
* @file Starting file/script
* @overview Base script included in the HTML of any page
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
*/

/* RequireJS config */
require.config({
    baseUrl: "assets/js",

    paths: {
        // Require JS plugins
        conditioner: "libs/conditioner.min",
        i18n: "libs/require.i18n",
        stache : "libs/require.stache",
        text : "libs/require.text",

        // Third party libraries
        'jQuery': "libs/jquery.1.9.1.min",
        'Mustache': "libs/mustache.min",

        'Backbone': "libs/backbone.min",
        'Bootstrap': "libs/bootstrap.min",
        'KO': "libs/knockout.min",
        'Modernizr': "libs/modernizr.min",
        'Underscore': "libs/underscore.min",

        // Core classes
        'App': "core/app"
    },
    
    /* Packages (/packages directory) */
    packages: [
        'bookmark'
    ],

    /* AMD backwards compatability */
    shim: {
        'Backbone': {
            deps: ['Underscore', 'jQuery'],
            exports: 'Backbone'
        },
        'Bootstrap': {
            deps: ['jQuery'],
            exports: 'jQuery'
        },
        'jQuery': {
            exports: 'jQuery'
        },
        'Modernizr': {
            exports: 'Modernizr'
        },
        'Underscore': {
            exports: '_'
        },

        // Inject core classes into autoloader
        'conditioner': {
            deps: ['App'],
            exports: 'conditioner'
        }
    },

    /* Configure i18n! plugin */
    config: {
        i18n: {
            locale: localStorage['language'] || 'en'
        }
    },

    /* Configure stache! plugin */
    stache: { extension: '.mustache' }
});

/* Start the application (Run the main method) */
requirejs(['conditioner'], function(conditioner) {
    App.start();
});