import React from 'react';
import { shallow } from 'enzyme';

import PrivateRoute from './PrivateRoute';

describe('<PrivateRoute />', () => {
  let wrapper;
  const mockComponent = () => <div>MockCompenent</div>;
  beforeEach(() => {
    wrapper = shallow(<PrivateRoute component={mockComponent} />);
  });

  it('should redirect to begining if not authenticated', () => {
    wrapper.debug();
    expect(global.window.location.pathname).toEqual('/');
  });
});
