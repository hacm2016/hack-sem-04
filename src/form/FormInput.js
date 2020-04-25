import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Form.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';

class FormInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }
  onChange(e){
    this.setState({ inputValue: e.target.value });
  }
  getValue(){
    return this.state.inputValue;
  }
  render(){
    return(
      <div >
          <TextField type={ this.props.inputType }  variant="filled" 
           value={ this.state.inputValue }
           onChange= { this.onChange }
           required= { this.props.isRequired }
           InputProps={this.props.InputProps}
          />
    
      </div>
    );
  }
}

FormInput.propTypes = {
  inputType: PropTypes.string,
  isRequired: PropTypes.bool,
  InputProps: PropTypes.object
  
}

export default FormInput;
