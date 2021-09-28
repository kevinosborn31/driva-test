import React, { Component } from 'react';
import styles from '../styles/Form.module.css';



export class Success extends Component {

    restart = e => {
        this.props.resetData();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
                <div className={styles.wrapper}>
                <h1>{this.props.title}</h1>
                    <button onClick={this.restart}>Restart</button>
                </div>
        )
    }
}

export default Success