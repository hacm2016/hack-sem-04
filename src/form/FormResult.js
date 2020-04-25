import React, { Component } from 'react'
import logo from './logo.svg';
import FormInput from './FormInput'
import './Form.css'
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailRounded from '@material-ui/icons/EmailRounded';
import PhoneAndroidRounded from '@material-ui/icons/PhoneAndroidRounded';
import LockRounded from '@material-ui/icons/LockRounded';
import Button from '@material-ui/core/Button';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            labelLegend: ''
        }
      
    }
    
    render() {
        return (
            <div className="Form">
                <div className="Form-form">
                    
                    <div className="caja"  >
                <form  >
                    <h3 className="Form-title">Gracias por registrar tus datos</h3>
                   
                    <br></br>
                    <h3 className="Form-title">Tus datos son los siguientes:</h3>

                    <label className="Form-labelLegend">"Prueba"</label>

                </form>
                </div>
                <div className="caja">
<img src={logo} className="App-logo" alt="logo" />
</div>
                </div>

            </div>

        );
    }
}

export default Form;
