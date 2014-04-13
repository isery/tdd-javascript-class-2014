var $ = require('jquery');

function Compass(text, img){
  this.text = text
  this.img = img
  this.counter = 0
  this.compassMap = {
    0: 'N',
    45: 'NE',
    90: 'E',
    135: 'SE',
    180: 'S',
    225: 'SW',
    270: 'W',
    315: 'NW'
  }
}

Compass.prototype.getAngle = function(counter) {
  angle = counter % 360;
  if(angle < 0){
    angle = 360 + angle;
  }
  return angle;
}

Compass.prototype.showText = function(text) {
  $(this.text).html(text)
}

Compass.prototype.rotate = function(angle) {
  $(this.img).css('webkitTransform', 'rotate(' + angle + 'deg)');
}

Compass.prototype.showAndRotate = function(counter) {
  angle = this.getAngle(counter);
  this.rotate(angle);
  if(this.compassMap[angle])
      angle = this.compassMap[angle];
  this.showText(angle);
}

Compass.prototype.mouseWheelHandler = function(event){
  if(event.wheelDelta > 0){
    compass.counter++;
  } else if (event.wheelDelta < 0){
    compass.counter--;
  }
  compass.showAndRotate(compass.counter);
}

module.exports = Compass