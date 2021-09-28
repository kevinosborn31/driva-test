import React, { Component } from 'react';
import BasicDetails from './BasicDetails';
import QualificationDetails from './QualificationDetails';
import Success from './Success';


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
        otherIncome: "false",
        errors: {}
    }




    
      handleSubmit(e) {
          let data = this.state;
        e.preventDefault();
    
        if (this.handleValidation()) {
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
          alert("Form submitted");
          this.props.nextStep();
        } else {
          alert("Form has errors.");
        }
      }

 

    // Handle fields change

    handleChange = input => e => {
        // TODO: get this to work properly
        if (input === "otherIncome" && this.state.otherIncome === "false") {
            this.setState({otherIncome: "true"});
        } else {
            this.setState({otherIncome: "false"});
        }
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
                        validateForm={this.validateForm}
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
                    values={values}
                    handleSubmit={this.handleSubmit}
                    title="Success! Your quote has been submitted with the following information"
                    />
                )
        }
    }
}

export default Form