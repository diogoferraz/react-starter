import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('<Login />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render login with 2 inputs and button', () => {
    console.log(wrapper.debug());
  });
});
