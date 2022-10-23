import $ from 'jquery';
import 'what-input';
//import lightGallery from 'lightgallery.js';
//import lgZoom from 'lightgallery.js/plugins/zoom';

require(['./lib/lightgallery.min.js'], function() {
    require(["./lib/lg-zoom.min.js","./lib/lg-video.min.js"], function(){
        //lightGallery(document.getElementById('lightgallery'));
    });
});

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
//window.jQuery = $;
//require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
import './lib/foundation-explicit-pieces';


$(document).foundation();

$('#sliderMapModal').bind('open.zf.reveal', function() {
  
  lightGallery(document.getElementById('mapGallery'), {
        plugins: ['lgZoom'],
        selector: 'li a',
        speed: 500
    });

  $(window).trigger('resize');
});

$('#sliderPhotoModal').bind('open.zf.reveal', function() {
  
    lightGallery(document.getElementById('photoGallery'), {
        plugins: ['lgZoom'],
        selector: 'li a',
        speed: 500
    });

  $(window).trigger('resize');
});

$('#sliderVideoModal').bind('open.zf.reveal', function() {
    
  lightGallery(document.getElementById('videoGallery'), {
    plugins: ['lgVideo'],
    selector: 'li a',
    speed: 500
  });

  $(window).trigger('resize');

});
