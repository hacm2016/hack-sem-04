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
import PropTypes from 'prop-types'
class FormResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labelLegend: '',
            usuario: this.props.match.params.usuario,
            email: this.props.match.params.email,
            clave: this.props.match.params.password,
            telefono: this.props.match.params.phone
        }

    }

    render() {
        return (
            <div className="Form">
                <div className="Form-form">

                    <div className="cajaresult"  >

                        <h2 className="Form-title">Gracias por registrar tus datos</h2>

                        <h5 className="Form-title">Tus datos son los siguientes:</h5>
                        <div className="cajaresult" >
                            <p> <label className="Form-labelResult">Usuario: {this.state.usuario}</label></p>
                            <p><label className="Form-labelResult"> Email: {this.state.email}</label> </p>
                            <p><label className="Form-labelResult"> Contraseña: {this.state.clave}</label> </p>                            
                            <p>   <label className="Form-labelResult"> Telefono: {this.state.telefono}</label> </p>
                        </div>

                    </div>
                    <div className="caja">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>

            </div>

        );
    }
}
FormResult.propTypes = {
    match: PropTypes.any
}
export default FormResult;
