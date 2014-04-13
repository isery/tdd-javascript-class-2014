var jQuery = require('jquery');
Compass = require('./compass')

var compass = new Compass('#directionHeading', '#compassImage');
document.addEventListener("mousewheel", compass.mouseWheelHandler.bind(compass), false);

var imageEl = jQuery(new Image());
imageEl
  .load(function() {
    jQuery('#compassImage').append(imageEl);
    imageEl.attr('width', '500');
  })
  .attr('src', '/img/compass.png');
