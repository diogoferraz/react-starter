import React from 'react';
import { useSelector, useDispatch } from '../../hooks/useReactRedux';
import messageActions from '../../actions/messageActions';
import './styles';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => ({ message: state.messageReducer.message }));
  return (
    <div className="theme-light">
      <div className="app-container">
        <div className="intro">Hello World!</div>
        <button type="submit" onClick={() => dispatch(messageActions.success('Success!'))}>Click here to dispatch success message</button>
        {message}
      </div>
    </div>
  );
};

export default App;
