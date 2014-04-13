// can't require main.js
// write code here
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

function mouseWheelHandler(event){
  if(event.wheelDelta > 0){
    compass.counter++;
  } else if (event.wheelDelta < 0){
    compass.counter--;
  }
  compass.showAndRotate(compass.counter);
}

describe('Test suite', function() {
  it('works fine', function() {
    expect(true).toBe(true);
  });
});

describe('Test Compass', function() {
  beforeEach(function() {
    compass = new Compass("#textfield","#imgfield");
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
  describe('showAndRotate is working', function() {
    beforeEach(function(){
      spyOn(Compass.prototype, 'rotate');
      spyOn(Compass.prototype, 'showText');
    });

    describe('Test showAndRotate', function(){
      it('should be called', function(){
        compass.showAndRotate(1)
        expect(Compass.prototype.rotate).toHaveBeenCalledWith(1);
        expect(Compass.prototype.showText).toHaveBeenCalledWith(1);
      });
    });
    describe('Test showAndRotate', function(){
      it('should return N for 0', function(){
        compass.showAndRotate(0)
        expect(Compass.prototype.rotate).toHaveBeenCalledWith(0);
        expect(Compass.prototype.showText).toHaveBeenCalledWith("N");
      });
    });
    describe('Test showAndRotate', function(){
      it('should return S for 180', function(){
        compass.showAndRotate(180)
        expect(Compass.prototype.rotate).toHaveBeenCalledWith(180);
        expect(Compass.prototype.showText).toHaveBeenCalledWith("S");
      });
    });
    describe('Test showAndRotate', function(){
      it('should return NW for 315', function(){
        compass.showAndRotate(315)
        expect(Compass.prototype.rotate).toHaveBeenCalledWith(315);
        expect(Compass.prototype.showText).toHaveBeenCalledWith("NW");
      });
    });
  });
  describe('MouseWheelHandler is working', function() {
    beforeEach(function(){
      spyOn(Compass.prototype, 'showAndRotate');
    });

    describe('Test showAndRotate', function(){
      it('should be called with 0', function(){
        mouseWheelHandler({wheelDelta: 0}, compass);
        expect(Compass.prototype.showAndRotate).toHaveBeenCalledWith(0);
      });
    });
    describe('Test showAndRotate', function(){
      it('should be called with 1', function(){
        mouseWheelHandler({wheelDelta: 100}, compass);
        expect(Compass.prototype.showAndRotate).toHaveBeenCalledWith(1);
      });
    });
  });
});