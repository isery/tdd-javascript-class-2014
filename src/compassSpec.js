// can't require main.js
// write code here
var $ = require('jquery');

function Compass(text, img){
  this.text = text
  this.img = img
}

Compass.prototype.getAngle = function(counter) {
  angle = counter % 360;
  if(angle < 0){
    angle = 360 + angle;
  }
  return angle;
}

Compass.prototype.showText = function(text) {
  jQuery(this.text).html(text)
}

Compass.prototype.rotate = function(angle) {
  jQuery(this.img).css('webkitTransform', 'rotate(' + angle + 'deg)');
}

describe('Test suite', function() {
  it('works fine', function() {
    expect(true).toBe(true);
  });
});

describe('Test Compass', function() {
  beforeEach(function() {
    compass = new Compass("#textfiel");
  });
  describe('Test getAngle', function() {
    it('should return 1', function() {
      expect(compass.getAngle(1)).toBe(1);
    });
    it('should return 5', function() {
      expect(compass.getAngle(5)).toBe(5);
    });
    it('should return 180', function() {
      expect(compass.getAngle(180)).toBe(180);
    });
    it('should return 0', function() {
      expect(compass.getAngle(360)).toBe(0);
    });
    it('should return 359', function() {
      expect(compass.getAngle(-1)).toBe(359);
    });
    it('should return 359', function() {
      expect(compass.getAngle(-180)).toBe(180);
    });
  });

  describe('Test if jquery is working', function() {
  it('works fine', function() {
      expect($).toBeDefined();
    });
  });
  describe('showText is working', function() {
    beforeEach(function(){
      spyOn(Compass.prototype, 'showText');
    });

    describe('Test showText', function(){
      it('should be called', function(){
        compass.showText(1)
        expect(Compass.prototype.showText).toHaveBeenCalledWith(1);
      });
    });
  });
  describe('rotate is working', function() {
    beforeEach(function(){
      spyOn(Compass.prototype, 'rotate');
    });

    describe('Test rotate', function(){
      it('should be called', function(){
        compass.rotate(1)
        expect(Compass.prototype.rotate).toHaveBeenCalledWith(1);
      });
    });
  });
});