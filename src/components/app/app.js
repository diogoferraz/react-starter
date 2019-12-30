import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './app.module';

const App = () => <div className={styles.intro}>Hello World!</div>;

export default hot(App);
