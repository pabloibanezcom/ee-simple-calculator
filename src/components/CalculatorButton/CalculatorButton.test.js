import { shallow } from 'enzyme';
import React from 'react';
import CalculatorButton from './CalculatorButton';

describe('CalculatorButton', function () {

  const clickFn = jest.fn();
  let component;

  it('should render without throwing an error', function () {
    component = shallow(<CalculatorButton />);
    expect(component.find('.calculator-button').length).toBe(1);
  });

  it('should fire onClick prop on handleClick', function () {
    component = shallow(<CalculatorButton onClick={clickFn} />);
    component.find('.calculator-button').simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('should set type when passed as prop', function () {
    component = shallow(<CalculatorButton type="primary" />);
    expect(component.find('.calculator-button').hasClass('calculator-button-primary'));
  });

  it('should set default type when no type prop', function () {
    component = shallow(<CalculatorButton />);
    expect(component.find('.calculator-button').hasClass('calculator-button-default'));
  });

  it('should set size when passed as prop', function () {
    component = shallow(<CalculatorButton size="2" />);
    expect(component.find('.calculator-button').hasClass('calculator-button-size-2'));
  });

  it('should set size 1 when no size prop', function () {
    component = shallow(<CalculatorButton />);
    expect(component.find('.calculator-button').hasClass('calculator-button-size-1'));
  });

  it('should show label in span', function () {
    component = shallow(<CalculatorButton label="This is a test" />);
    expect(component.find('.calculator-button span').text()).toBe('This is a test');
  });

});
