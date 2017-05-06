import React, {Component} from 'react';
import styles from './App.css';
import Tesst from './test/test';
import Card from './Card/Card';

class App extends Component {
    render() {
        return(
            <div className={styles.app}>
                <h2>Hello, </h2>
                <p>World.</p>
                <Card/>
                <Tesst></Tesst>
            </div>
        );
    }
}

export default App;