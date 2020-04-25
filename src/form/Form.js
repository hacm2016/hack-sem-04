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
import {
    BrowserRouter as Router,Redirect,hashHistory,withRouter ,
    Route
  } from 'react-router-dom';
  
class Form extends Component {
    constructor() {
        super();
        this.state = {
            labelLegend: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        
        let usuario = this.refs.usuario.getValue();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        let telefono = this.refs.telefono.getValue();
        alert(usuario);
        
    }
    render() {
        return (
            <div className="Form">
                <div className="Form-form">
                    
                    <div className="caja"  >
                <form onSubmit={ this.onSubmit } >
                    <h3 className="Form-title">Ingrese sus datos para el registro</h3>
                    <FormInput
                        inputType="text"
                        ref="usuario"
                       
                        isRequired={true} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }} />
                    <br></br>
                    <FormInput
                        inputType="email"
                        ref="email"
                       
                        isRequired={true} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailRounded />
                                </InputAdornment>
                            ),
                        }} />
                    <br></br>
                    <FormInput
                        inputType="password"
                        ref="password"
                        
                        isRequired={true} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            ),
                        }} />
                    <br></br>
                    <FormInput
                        inputType="text"
                        ref="telefono"
                       
                        isRequired={true} InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneAndroidRounded />
                                </InputAdornment>
                            ),
                        }} />
                    <br></br>
                    <Button variant="contained"  className="Form-button" type="onSubmit">
                        Enviar
</Button>


                    <label className="Form-labelLegend">{this.state.labelLegend}</label>

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
