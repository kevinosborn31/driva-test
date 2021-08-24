import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Select } from '@material-ui/core';


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
            <MuiThemeProvider>
                <AppBar title="A little about you" />
                <div style={styles.wrapper}>
                    <h1>{this.props.title}</h1>
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
                    <TextField
                        hintText="$"
                        floatingLabelText="Your after-tax income"
                        onChange={handleChange('income')}
                        defaultValue={values.income}
                    /> 
                    <div>
                        <select id="incomeFrequency" onChange={handleChange('incomeFrequency')}>
                            <option selected disabled>Select Frequency</option>
                            <option value="weekly">Weekly</option>
                            <option value="fortnightly">Fortnightly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                <br />
                    <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your employer's name"
                        floatingLabelText="Current Employer"
                        onChange={handleChange('employer')}
                        defaultValue={values.employer}
                    />
                    <br/>

                    <div>
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
                    <label for="otherIncome">Do you have other sources of income?</label>
                    <RaisedButton 
                        label="Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </div>
            </MuiThemeProvider>
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
    },
    formControl: {
        //margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        // marginTop: theme.spacing(2),
      },
} 

export default QualificationDetails