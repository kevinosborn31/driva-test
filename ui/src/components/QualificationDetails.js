import React, { Component } from 'react';
import styles from '../styles/Form.module.css';


export class QualificationDetails extends Component {
    continue = e => {

    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    handleSubmit = e => {
        let data = this.props;

        fetch('https://localhost:8080/driva', {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({data})
            }).then(function(response) {
                return response.json()
            }).catch(error => console.log(error))

            e.preventDefault();
            this.props.nextStep();
    }




    render() {
        const { values, handleChange } = this.props;
        return (
                <div className={styles.wrapper}>
                    <h1 className={styles.formTest}>{this.props.title}</h1>
                    <div>
                        <label htmlFor="relationshipStatus">What's your relationship status?</label><br /><br />
                        <select id="relationshipStatus" onChange={handleChange('relationship')}>
                            <option defaultValue disabled>Please Select</option>
                            <option value="1">Single</option>
                            <option value="2">In a relationship</option>
                            <option value="3">Married</option>
                        </select>
                    </div>
                <br />
                <div>
                    <label htmlFor="income">Your after-tax income</label>
                    <input type="number" step="1" id="income" name="income" onChange={handleChange('income')} placeholder="$" defaultValue={values.income}/>
                    <select id="incomeFrequency" onChange={handleChange('incomeFrequency')}>
                        <option defaultValue disabled>Select Frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <br />
                <label htmlFor="occupation">Occupation</label>
                <input type="text" id="occupation" name="occupation" onChange={handleChange('occupation')} placeholder="Enter your occupation" defaultValue={values.occupation}/>
                    <br/>
                <div>
                    <label htmlFor="employer">Current Employer</label>
                    <input type="text" id="employer" name="employer" onChange={handleChange('employer')} placeholder="Enter your employer's name" defaultValue={values.employer}/>
                        <br/>
                            <label htmlFor="yearsInEmployment">What's your relationship status?</label><br /><br />
                            <select id="yearsInEmployment" onChange={handleChange('yearsInEmployment')}>
                                <option defaultValue disabled>Number of Years</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                    </div>
                    <div>
                        <select id="monthsInEmployment" onChange={handleChange('monthsInEmplyoment')}>
                            <option defaultValue disabled>Number of Months</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="dependants">Have any dependants?</label><br /><br />
                        <select id="dependants" onChange={handleChange('dependants')}>
                            <option defaultValue disabled>Please select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <input type="checkbox" id="otherIncome" name="otherIncome" value="true" />
                    <label htmlFor="otherIncome" onChange={handleChange('otherIncome')}>Do you have other sources of income?</label>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.handleSubmit}>Next</button>
                </div>
        )
    }
}


export default QualificationDetails