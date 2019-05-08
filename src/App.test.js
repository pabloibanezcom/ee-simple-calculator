import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', function () {

  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });

  it('should render without throwing an error', function () {
    expect(component.find('.app').length).toBe(1);
  });

  it('should render logo', function () {
    expect(component.find('.app--logo').prop('src')).toEqual('logo.svg');
  });
});
