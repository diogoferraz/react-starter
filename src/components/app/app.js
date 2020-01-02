import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import messageActions from '../../actions/messageActions';
import './styles';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => ({ message: state.messageReducer.message }));
  return (
    <div>
      <div className="intro">Hello World!</div>
      <button type="submit" onClick={() => dispatch(messageActions.success('Success!'))}>Click here to dispatch success message</button>
      {message}
    </div>
  );
};

export default hot(App);
