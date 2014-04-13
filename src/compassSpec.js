// can't require main.js
// write code here

var getAngle = function(counter) {
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

describe('Test getAngle', function() {
  it('should return 1', function() {
    expect(getAngle(1)).toBe(1);
  });
});

describe('Test getAngle', function() {
  it('should return 5', function() {
    expect(getAngle(5)).toBe(5);
  });
});

describe('Test getAngle', function() {
  it('should return 180', function() {
    expect(getAngle(180)).toBe(180);
  });
});

describe('Test getAngle', function() {
  it('should return 0', function() {
    expect(getAngle(360)).toBe(0);
  });
});

describe('Test getAngle', function() {
  it('should return 359', function() {
    expect(getAngle(-1)).toBe(359);
  });
});