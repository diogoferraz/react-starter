import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('Testing app', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
