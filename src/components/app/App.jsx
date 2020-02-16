import React from 'react';
import { useSelector, useDispatch } from '../../hooks/useReactRedux';
import messageActions from '../../actions/messageActions';
import styles from './styles';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => ({ message: state.messageReducer.message }));
  return (
    <div className="theme-light">
      <div className={styles.intro}>Hello World!</div>
      <button type="submit" onClick={() => dispatch(messageActions.success('Success!'))}>Click here to dispatch success message</button>
      {message}
    </div>
  );
};

export default App;
