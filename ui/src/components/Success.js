import React, { Component } from 'react';
import styles from '../styles/Form.module.css';



export class Success extends Component {



    render() {
        const { values, handleChange } = this.props;
        return (
                <div className={styles.pageContainer}>
                <h1>{this.props.title}</h1>
                <ul className={styles.successList}>
                    <li>First name: {values.firstName}</li>
                    <li>Middle name: {values.middleName}</li>
                    <li>Last name: {values.lastName}</li>
                    <li>Mobile Phone: {values.phone}</li>
                    <li>Email Address: {values.email}</li>
                    <li>Relationship status: {values.relationship}</li>
                    <li>Income: {values.income}</li>
                    <li>Income Frequency: {values.incomeFrequency}</li>
                    <li>Occupation: {values.occupation}</li>
                    <li>Employer: {values.employer}</li>
                    <li>Time with employer: {values.yearsWithEmployer} years {values.monthsWithEmployer} months</li>
                    <li>Dependants: {values.dependants}</li>
                    <li>Other income? {values.otherIncome}</li>
                </ul>
                </div>
        )
    }
}

export default Success