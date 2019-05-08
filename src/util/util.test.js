import { isNumber } from './util';

describe('isNumber', function () {

  it('should return true when a number is passed as argument', function () {
    expect(isNumber('4')).toBe(true);
  });

  it('should return false when a non-number is passed as argument', function () {
    expect(isNumber('+')).toBe(false);
  });

});