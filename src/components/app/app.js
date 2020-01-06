import React from 'react';
import { hot } from 'react-hot-loader/root';
import { useSelector, useDispatch } from '../../hooks/react-redux';
import messageActions from '../../actions/messageActions';
import MenuDrawer from '../menu-drawer/menu-drawer';
import styles from './styles';

const App = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => ({ message: state.messageReducer.message }));
  return (
    <div className={styles.main}>
      <MenuDrawer />
      <div>
        <div className={styles.intro}>Hello World!</div>
        <button type="submit" onClick={() => dispatch(messageActions.success('Success!'))}>Click here to dispatch success message</button>
        {message}
      </div>
    </div>
  );
};

export default hot(App);
