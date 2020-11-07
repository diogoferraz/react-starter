import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import * as ReactReduxHooks from '../../hooks/useReactRedux';

import Login from './Login';
import Input from '../../components/Atoms/Input';

/* mocking store */
const store = configureStore([])({});

/* mocking useDispatch on our mock store  */
jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);

describe('<Login />', () => {
  const wrapper = shallow(<Login />);

  it('should render login with 2 inputs', () => {
    expect(wrapper.find(Input)).toHaveLength(2);
  });
});
