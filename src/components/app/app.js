import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import messageActions from '../../actions/messageActions';
import styles from './app.module';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.messageReducer);
  return (
    <div>
      <div className={styles.intro}>Hello World!</div>
      <button type="submit" onClick={() => dispatch(messageActions.success('Success!'))}>Click here to dispatch success message</button>
      {message}
    </div>
  );
};

export default hot(App);
