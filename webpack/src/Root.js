import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

export default class Root extends Component {
    render() {
        console.log('this.props', this.props);
        return (
            <Router>
                {this.props.routes()}
            </Router>
        );
    }
}
