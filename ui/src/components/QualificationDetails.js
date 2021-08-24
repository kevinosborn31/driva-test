import React, { Component } from 'react';
import styles from '../styles/Form.module.css';


export class QualificationDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Post data
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };




    render() {
        const { values, handleChange } = this.props;
        return (
                <div style={styles.wrapper}>
                    <h1 style={styles.formTest}>{this.props.title}</h1>
                    <div>
                        <label htmlFor="relationshipStatus">What's your relationship status?</label><br /><br />
                        <select id="relationshipStatus" onChange={handleChange('relationship')}>
                            <option selected disabled>Please Select</option>
                            <option value="single">Single</option>
                            <option value="relationship">In a relationship</option>
                            <option value="married">Married</option>
                        </select>
                    </div>
                <br />
                <div>
                    <label for="income">Your after-tax income</label>
                    <input type="number" step="1" id="income" name="income" onChange={handleChange('income')} placeholder="$" defaultValue={values.income}/>
                    <select id="incomeFrequency" onChange={handleChange('incomeFrequency')}>
                        <option selected disabled>Select Frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </div>
                <br />
                <label for="occupation">Occupation</label>
                <input type="text" id="occupation" name="occupation" onChange={handleChange('occupation')} placeholder="Enter your occupation" defaultValue={values.occupation}/>
                    <br/>
                <div>
                    <label for="employer">Current Employer</label>
                    <input type="text" id="employer" name="employer" onChange={handleChange('employer')} placeholder="Enter your employer's name" defaultValue={values.employer}/>
                        <br/>
                            <label htmlFor="yearsInEmployment">What's your relationship status?</label><br /><br />
                            <select id="yearsInEmployment" onChange={handleChange('yearsInEmployment')}>
                                <option selected disabled>Number of Years</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                    </div>
                    <div>
                        <select id="monthsInEmployment" onChange={handleChange('monthsInEmplyoment')}>
                            <option selected disabled>Number of Months</option>
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
                            <option selected disabled>Please select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <input type="checkbox" id="otherIncome" name="otherIncome" value="true" />
                    <label for="otherIncome" onChange={handleChange('otherIncome')}>Do you have other sources of income?</label>
                    <button onClick={this.back}>Back</button>
                    <button onClick={this.continue}>Next</button>
                </div>
        )
    }
}

const styles = {
    button: {
        margin: 15
    },
    wrapper: {
        width: "100%",
        margin: 15,
        textAlign: "center"
    }
} 

export default QualificationDetails