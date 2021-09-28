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
        let validateForm = this.props.validateForm;

            // TODO: Get this fetch to work

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
                <div className={styles.pageContainer}>
                    <div className={styles.orderInfo}>
                    <div className={styles.checkoutForm}>
                    <h1 className={styles.formTest}>{this.props.title}</h1>
                    <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>What's your relationship status?</p>
                        <div className={styles.formInput}>
                        <select id="relationshipStatus" onChange={handleChange('relationship')}>
                            <option defaultValue disabled>Please Select</option>
                            <option value="1">Single</option>
                            <option value="2">In a relationship</option>
                            <option value="3">Married</option>
                        </select>
                    </div>
                    </div>
                <div className={styles.fieldGroup, styles.hw}>
                    <p className={styles.fw}>Your after-tax income</p>
                    <div className={styles.formInput}>
                    <input type="number" step="1" id="income" name="income" onChange={handleChange('income')} placeholder="$" defaultValue={values.income}/>
                    </div>
                </div>
                <div className={styles.fieldGroup, styles.hw}>
                    <div className={styles.formInput}>
                    <select id="incomeFrequency" onChange={handleChange('incomeFrequency')}>
                        <option defaultValue disabled>Select Frequency</option>
                        <option value="weekly">Weekly</option>
                        <option value="fortnightly">Fortnightly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                    </div>
                </div>
                <div className={styles.fieldGroup, styles.fw}>
                <p htmlFor="occupation">Occupation</p>
                <div className={styles.formInput}>
                <input type="text" id="occupation" name="occupation" onChange={handleChange('occupation')} placeholder="Enter your occupation" defaultValue={values.occupation}/>
                </div>
                </div>
                <div className={styles.fieldGroup, styles.fw}>
                    <p className={styles.fw}>Current Employer</p>
                    <div className={styles.formInput}>
                    <input type="text" id="employer" name="employer" onChange={handleChange('employer')} placeholder="Enter your employer's name" defaultValue={values.employer}/>
                    </div>
                    <div className={styles.fieldGroup, styles.hw}>
                            <p className={styles.fw}>Time in current employment</p>
                            <div className={styles.formInput}>
                            <select id="yearsInEmployment" onChange={handleChange('yearsInEmployment')}>
                                <option defaultValue disabled>Number of Years</option>
                                <option value="0">0 years</option>
                                <option value="1">1 year</option>
                                <option value="2">2 years</option>
                                <option value="3">3 years</option>
                                <option value="4">4 years</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.fieldGroup, styles.hw}>
                        <div className={styles.formInput}>
                        <select id="monthsInEmployment" onChange={handleChange('monthsInEmplyoment')}>
                            <option defaultValue disabled>Number of Months</option>
                            <option value="1">1 month</option>
                            <option value="2">2 months</option>
                            <option value="3">3 months</option>
                            <option value="4">4 months</option>
                            <option value="5">5 months</option>
                            <option value="6">6 months</option>
                            <option value="7">7 months</option>
                            <option value="8">8 months</option>
                            <option value="9">9 months</option>
                            <option value="10">10 months</option>
                            <option value="11">11 months</option>
                            <option value="12">12 months</option>
                        </select>
                        </div>
                    </div>
                    <div className={styles.fieldGroup, styles.fw}>
                        <p className={styles.fw}>Have any dependants?</p>
                        <div className={styles.formInput}>
                        <select id="dependants" onChange={handleChange('dependants')}>
                            <option defaultValue disabled>Please select</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                    </div>
                    <div className={styles.fieldGroup, styles.fw, styles.checkboxGroup}>
                    <input type="checkbox"id="otherIncome" name="otherIncome"  onChange={handleChange('otherIncome')} value="true" />
                    <p className={styles.fw, styles.checkbox}>Do you have other sources of income?</p>
                    </div>
                    <button className={styles.continueButton}  onClick={this.back}>Back</button>
                    <button className={styles.continueButton} onClick={this.handleSubmit}>Next</button>
                </div>
                </div>
                </div>
                </div>
        )
    }
}


export default QualificationDetails