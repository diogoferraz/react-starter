import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';

describe('<Input />', () => {
  let wrapper;
  const onChange = jest.fn();
  const props = {
    label: 'Default Label',
    type: 'text',
    name: 'user',
    value: '',
  };
  beforeEach(() => {
    wrapper = shallow(<Input onChange={onChange} {...props} />);
  });

  it('should render a span and input within a label', () => {
    const label = wrapper.find('.input-wrapper');
    const span = wrapper.find('.label');
    const input = wrapper.find('.input');
    expect(label).toBeTruthy();
    expect(span).toBeTruthy();
    expect(input).toBeTruthy();
  });
  it('it should call onChange when change value', () => {
    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    };
    wrapper.find('.input').simulate('change', event);
    expect(onChange).toBeCalledWith(event);
  });
});
