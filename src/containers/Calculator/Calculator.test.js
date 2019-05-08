import { shallow } from 'enzyme';
import React from 'react';
import Calculator from './Calculator';

describe('Calculator', function () {

  let component;

  beforeEach(() => {
    component = shallow(<Calculator />);
  });

  describe('render', function () {
    it('should render without throwing an error', function () {
      expect(component.find('.calculator').length).toBe(1);
    });
  });

  describe('addNumberOrOperation', function () {
    it('should add element to currentOperation ', function () {
      component.instance().addNumberOrOperation('4');
      expect(component.state().currentOperation).toBe('4');
      component.instance().addNumberOrOperation('7');
      expect(component.state().currentOperation).toBe('47');
      component.instance().addNumberOrOperation('+');
      component.instance().addNumberOrOperation('2');
      component.instance().addNumberOrOperation('5');
      expect(component.state().currentOperation).toBe('47+25');
    });

    it('should not add element to currentOperation when currentOperation lenght is over 22', function () {
      component.setState({ currentOperation: '1'.repeat(23) });
      component.instance().addNumberOrOperation('4');
      expect(component.state().currentOperation).toBe('1'.repeat(23));
    });

    it('should not add point when curretOperation contains another one', function () {
      component.setState({ currentOperation: '111.222' });
      component.instance().addNumberOrOperation('.');
      expect(component.state().currentOperation).toBe('111.222');
    });

    it('should not add operation element when last char in currentOperation is operarion element', function () {
      component.setState({ currentOperation: '111.222+' });
      component.instance().addNumberOrOperation('-');
      expect(component.state().currentOperation).toBe('111.222+');
    });

    it('should add number element when last char in currentOperation is operarion element', function () {
      component.setState({ currentOperation: '111.222+' });
      component.instance().addNumberOrOperation('4');
      expect(component.state().currentOperation).toBe('111.222+4');
    });
  });

  describe('clear', function () {
    it('should set currentOperation to "" ', function () {
      component.setState({ currentOperation: '12345' });
      component.instance().clear();
      expect(component.state().currentOperation).toBe('');
    });
  });

  describe('removeLast', function () {
    it('should remove last character from currentOperation ', function () {
      component.setState({ currentOperation: '12345' });
      component.instance().removeLast();
      expect(component.state().currentOperation).toBe('1234');
    });
  });

  describe('doCalculation', function () {
    it('should calculate a sum based on currentOperation ', function () {
      component.setState({ currentOperation: '12+45' });
      component.instance().doCalculation();
      expect(component.state().currentOperation).toBe('57');
    });

    it('should calculate a subtraction based on currentOperation ', function () {
      component.setState({ currentOperation: '11-3' });
      component.instance().doCalculation();
      expect(component.state().currentOperation).toBe('8');
    });

    it('should calculate a multiplication based on currentOperation ', function () {
      component.setState({ currentOperation: '4 * 5' });
      component.instance().doCalculation();
      expect(component.state().currentOperation).toBe('20');
    });

    it('should calculate a division based on currentOperation ', function () {
      component.setState({ currentOperation: '12 / 3' });
      component.instance().doCalculation();
      expect(component.state().currentOperation).toBe('4');
    });
  });


});