import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class BasicDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <AppBar title="Tell us about yourself" />
                <div style={styles.wrapper}>
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
                <TextField
                    hintText="Please enter a valid email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                <br/>
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
    }
} 

export default BasicDetails