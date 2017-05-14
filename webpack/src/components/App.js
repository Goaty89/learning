import React, {Component} from 'react';
import styles from './App.css';
import Tesst from './test/test';
import Card from './Card/Card';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return(
            <div className={styles.app}>
                <h1><Link to="/card">Click Me</Link></h1>

                <h2>Hello, U</h2>
                <p>World.</p>
                <Card/>
                <Tesst></Tesst>
            </div>
        );
    }
}

export default App;