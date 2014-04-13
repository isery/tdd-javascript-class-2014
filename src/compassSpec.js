// can't require main.js
// write code here

var getAngle = function(counter) {
  angle = counter % 360;
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