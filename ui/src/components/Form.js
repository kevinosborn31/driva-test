import React, { Component } from 'react';
import BasicDetails from './BasicDetails';
import QualificationDetails from './QualificationDetails';
import Success from './Success';
import styles from '../styles/Form.module.css';


export class Form extends Component {

    state = {
        step: 1,
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        email: '',
        relationship: '',
        income: '',
        incomeFrequency: '',
        occupation: '',
        employer: '',
        yearsWithEmployer: '',
        monthsWithEmployer: '',
        dependants: '',
        otherIncome: false
    }

 

    // Handle fields change

    handleChange = input => e => {
        this.setState({[input]: e.target.value })
    }

    // Proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to the prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

       // Restart form process
       restart = () => {
        this.state = {
            step: 1,
            firstName: '',
            middleName: '',
            lastName: '',
            phone: '',
            email: '',
            relationship: '',
            income: '',
            incomeFrequency: '',
            occupation: '',
            employer: '',
            yearsWithEmployer: '',
            monthsWithEmployer: '',
            dependants: '',
            otherIncome: false
        } 

        console.log(this.state.step);
    }

    render() {
        const { step } = this.state;

        const { firstName, middleName, lastName, phone, email, relationship, income, incomeFrequency, occupation, employer, yearsWithEmployer, monthsWithEmployer, dependants, otherIncome } = this.state;

        const values = { firstName, middleName, lastName, phone, email, relationship, income, incomeFrequency, occupation, employer, yearsWithEmployer, monthsWithEmployer, dependants, otherIncome };

        switch(step) {
            case 1:
                return (
                    <BasicDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        title="Tell us about yourself"
                    />
                )
            case 2:
                return (
                    <QualificationDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        title="A little about you"
                    />
                )
            case 3:
                return (
                    <Success
                    resetData={this.restart}
                    values={values}
                    title="Success! Your quote has been submitted"
                    />
                )
        }
    }
}

export default Form