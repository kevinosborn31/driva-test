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
                <div className={styles.pageContainer}>
                    <div className={styles.orderInfo}>
                    <div className={styles.checkoutForm}>
                    <h1>{this.props.title}</h1>
                        <div className={styles.fieldGroup, styles.fw}>
                            <p className={styles.fw}>First name</p>
                            <div className={styles.formInput}>
                                <input type="text" id="firstName" name="firstName" onChange={handleChange('firstName')} placeholder="As it appears on your license" defaultValue={values.firstName}/>
                            </div>
                        </div>
                        <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>Middle name</p>
                            <div className={styles.formInput}>
                        <input type="text" id="middleName" name="middleName" onChange={handleChange('middleName')} placeholder="Optional" defaultValue={values.middleName}/>
                            </div>
                        </div>
                        <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>Last name</p>
                            <div className={styles.formInput}>
                        <input type="text" id="lastName" name="lastName" onChange={handleChange('lastName')} placeholder="As it appears on your license" defaultValue={values.middleName}/>
                            </div>
                        </div>
                        <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>Mobile number</p>
                            <div className={styles.formInput}>
                        <input type="tel" id="phone" name="phone" onChange={handleChange('phone')} placeholder="+61" defaultValue={values.phone}/>
                            </div>
                        </div>
                        <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>Email</p>
                            <div className={styles.formInput}>
                        <input type="email" id="email" name="email" onChange={handleChange('email')} placeholder="Please enter a valid email" defaultValue={values.email}/>
                            </div>
                        </div>
                            <button className={styles.continueButton} onClick={this.continue}>Next</button>
                    </div>
                </div>
                </div>
        )
    }
}

export default BasicDetails