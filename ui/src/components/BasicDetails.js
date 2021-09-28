import React, { Component } from 'react';
import styles from '../styles/Form.module.css';



export class BasicDetails extends Component {

    validateForm() {
        let fields = this.props.values;
        let errors = {};
        let nameIsValid = true;
        let emailIsValid = true;

        // TODO: Write unit tests for this function
        function validateName() {
            if (!fields.firstName) {
                nameIsValid = false;
                // alert("First Name" + fields.firstName + " cannot be empty")
              }
              if (fields.firstName !== "") {
                if (!fields.firstName.match(/^[a-zA-Z]+$/)) {
                  nameIsValid = false;
                  // alert("Please only enter letters for first name")
                  console.log(errors);
                } else {
                    return true;
                }
              }     
        }
            

        // TODO: put this into a function to be unit tested
        // TODO: add validation for the other fields
        // Validate email
        function validateEmail() {
            if (!fields.email) {
                emailIsValid = false;
                errors["email"] = "Cannot be empty";
              }
          
              if (fields["email"] !== "") {
                let lastAtPos = fields["email"].lastIndexOf("@");
                let lastDotPos = fields["email"].lastIndexOf(".");
          
                if (
                  !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                  )
                ) {
                    emailIsValid = false;
                  console.log(errors);
                }
              }
          
              return emailIsValid;
            }

            if (!validateEmail()) {
                alert("Email is not valid")
            }

            if(!validateName()) {
                alert("Name is not valid");
            }

            if (validateEmail() && validateName()) {
                return true;
            }


        }


        continue = e => {
            this.validateForm();
            if (this.validateForm()) {
                this.props.nextStep();
            }
            e.preventDefault();
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
                        <input type="text" id="lastName" name="lastName" onChange={handleChange('lastName')} placeholder="As it appears on your license" defaultValue={values.lastName}/>
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

export default BasicDetails;