import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as ReactReduxHooks from '../../hooks/react-redux';
import messageActions from '../../actions/messageActions';
import messageConstant from '../../constants/messageConstants';

import App from './app';

describe('<App />', () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    /* mocking store */
    store = configureStore([thunk])({
      message: { message: '' },
    });

    /* mocking useEffect */
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect(); // 2 times
    mockUseEffect(); //

    /* mocking useSelector on our mock store */
    jest.spyOn(ReactReduxHooks, 'useSelector').mockImplementation(() => store.getState());

    /* mocking useDispatch on our mock store  */
    jest.spyOn(ReactReduxHooks, 'useDispatch').mockImplementation(() => store.dispatch);

    /* shallow rendering */
    wrapper = shallow(<App store={store} />);
  });
  it('should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
  it('synchronous actions should render success', () => {
    const message = 'Success!';
    store.dispatch(messageActions.success(message));
    const actions = store.getActions();
    const expectedPayload = { type: messageConstant.SUCCESS, message };
    expect(actions).toEqual([expectedPayload]);
  });
});
