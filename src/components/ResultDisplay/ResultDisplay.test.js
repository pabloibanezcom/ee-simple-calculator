import { shallow } from 'enzyme';
import React from 'react';
import ResultDisplay from './ResultDisplay';

describe('ResultDisplay', function () {

  let component;

  it('should render without throwing an error', function () {
    component = shallow(<ResultDisplay result={0} />);
    expect(component.find('.result-display').length).toBe(1);
  });

  it('should show result as 0 when empty result prop', function () {
    component = shallow(<ResultDisplay result={''} />);
    expect(component.find('.result-display span').text()).toBe('0');
  });

  it('should show result when exists', function () {
    component = shallow(<ResultDisplay result={'1000'} />);
    expect(component.find('.result-display span').text()).toBe('1000');
  });

  it('should set small size when result length is between 10 and 16', function () {
    component = shallow(<ResultDisplay result={'123451234512345'} />);
    expect(component.find('.result-display').hasClass('result-display-sm'));
  });

  it('should set small size when result length is over or equals 16', function () {
    component = shallow(<ResultDisplay result={'1234512345123451'} />);
    expect(component.find('.result-display').hasClass('result-display-xs'));
  });

  it('should set medium size when result length is below 10', function () {
    component = shallow(<ResultDisplay result={'12345'} />);
    expect(component.find('.result-display').hasClass('result-display-md'));
  });

});
