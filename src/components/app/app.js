import React from 'react';
import styles from './app.module';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
    render() {
        return <div className={styles.intro}>Hello World!</div>;
    }
}

export default hot(App);