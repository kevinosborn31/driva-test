import React, { Component } from 'react';
import styles from '../styles/Form.module.css';



export class BasicDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
                <div className={styles.wrapper}>
                <h1>{this.props.title}</h1>
                <label for="firstName">First name</label>
                <input type="text" id="firstName" name="firstName" onChange={handleChange('firstName')} placeholder="As it appears on your license" defaultValue={values.firstName}/>
                <br/>
                <label for="middleName">Middle name</label>
                <input type="text" id="middleName" name="middleName" onChange={handleChange('middleName')} placeholder="Optional" defaultValue={values.middleName}/>
                <br/>
                <label for="lastName">Last name</label>
                <input type="text" id="lastName" name="lastName" onChange={handleChange('lastName')} placeholder="As it appears on your license" defaultValue={values.middleName}/>
                <br/>
                <label for="phone">Mobile number</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange('phone')} placeholder="+61" defaultValue={values.phone}/>
                <br/>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" onChange={handleChange('email')} placeholder="Please enter a valid email" defaultValue={values.email}/>
                <br/>
                    <button onClick={this.continue}>Next</button>
                </div>
        )
    }
}

export default BasicDetails