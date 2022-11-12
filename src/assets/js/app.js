import $ from 'jquery';
import 'what-input';
//import lightGallery from 'lightgallery.js';
//import lgZoom from 'lightgallery.js/plugins/zoom';

require(['./lib/lightgallery.min.js'], function () {
  require(["./lib/lg-zoom.min.js", "./lib/lg-video.min.js"], function () {
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

$('#sliderMapModal').on('closeme.zf.reveal', function () {

  lightGallery(document.getElementById('mapGallery'), {
    plugins: ['lgZoom'],
    selector: 'li a',
    speed: 500
  });

  $(window).trigger('resize');

});

$('#sliderMapModal').on('open.zf.reveal', function () {

  var totalItems = $('#mapSlider').find('li.orbit-slide').length;
  var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
  $('.slider-number').html(currentItem + '/' + totalItems);

  $('#mapSlider').on('slidechange.zf.orbit', function (e) {
    var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
    $('.slider-number').html(currentItem + '/' + totalItems);
  });

  setTimeout(() => {
    $(window).trigger('resize');
  }, 500);

});

$('#sliderPhotoModal').on('closeme.zf.reveal', function () {

  lightGallery(document.getElementById('photoGallery'), {
    plugins: ['lgZoom'],
    selector: 'li a',
    speed: 500
  });

  $(window).trigger('resize');

});

$('#sliderPhotoModal').on('open.zf.reveal', function () {

  var totalItems = $('#photoSlider').find('li.orbit-slide').length;
  var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
  $('.slider-number').html(currentItem + '/' + totalItems);

  $('#photoSlider').on('slidechange.zf.orbit', function (e) {
    var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
    $('.slider-number').html(currentItem + '/' + totalItems);
  });

  setTimeout(() => {
    $(window).trigger('resize');
  }, 500);

});

$('#sliderVideoModal').on('closeme.zf.reveal', function () {

  lightGallery(document.getElementById('videoGallery'), {
    plugins: ['lgVideo'],
    selector: 'li a',
    speed: 500
  });

  $(window).trigger('resize');

});

$('#sliderVideoModal').on('open.zf.reveal', function () {

  var totalItems = $('#videoSlider').find('li.orbit-slide').length;
  var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
  $('.slider-number').html(currentItem + '/' + totalItems);

  $('#videoSlider').on('slidechange.zf.orbit', function (e) {
    var currentItem = $(this).find('li.orbit-slide.is-active').index() + 1;
    $('.slider-number').html(currentItem + '/' + totalItems);
  });

  setTimeout(() => {
    $(window).trigger('resize');
  }, 500);

});