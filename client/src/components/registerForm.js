import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import { loginWithJwt } from '../services/authService';
import { register } from '../services/userService';
import { toast } from 'react-toastify';



class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label('Username'),
    password: Joi.string()
      .required()
      .min(5)
      .label('Password'),
    name: Joi.string()
      .required()
      .label('Name')
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });

        toast.error('User is already registered');
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
