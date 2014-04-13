// can't require main.js
// write code here
var $ = require('jquery');

function Compass(){
}

Compass.prototype.getAngle = function(counter) {
  angle = counter % 360;
  if(angle < 0){
    angle = 360 + angle;
  }
  return angle;
}

describe('Test suite', function() {
  it('works fine', function() {
    expect(true).toBe(true);
  });
});

describe('Test Compass', function() {
  beforeEach(function() {
    compass = new Compass();
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
});