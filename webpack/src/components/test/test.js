import React, {Component} from 'react';
import styles from './test.css';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {likeCount: 0};
        this.onLike = this.onLike.bind(this);
    }
    onLike() {
        let newLikesCount = this.state.likeCount + 1;
        this.setState({likeCount: newLikesCount});
    }

    render() {
        return (
            <div>
                Likes: <span>{this.state.likeCount}</span>
                <div><button onClick={this.onLike} className={styles.redBG}>Like Me</button></div>
            </div>
        );
    }
};