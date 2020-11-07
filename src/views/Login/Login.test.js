import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';
import Input from '../../components/Atoms/Input';

describe('<Login />', () => {
  const wrapper = shallow(<Login />);

  it('should render login with 2 inputs', () => {
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
