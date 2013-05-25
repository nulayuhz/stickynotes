// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',

    // storage has built in support for requirejs
    // hence, it doesn't need to configured in 'shim'
    storage: 'libs/backbone/backbone.localStorage',
    text: 'libs/require/text'
  },

  shim: {

    underscore: {
      exports: '_'
    },

    backbone: {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    }
  }

});

require(['jquery', 'views/app', 'collections/todos' ], function($, AppView, AppCollection){
  var app_view = new AppView({
    collection: AppCollection
  });

  $('#stickies a').click(function(e) {
      //console.log('clicked');
     // do something fancy
     //return false; // prevent default click action from happening!
     e.preventDefault(); // same thing as above
  });
});
