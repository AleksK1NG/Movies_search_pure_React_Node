import React from 'react';
import { Redirect } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from './common/form';
import { login, getCurrentUser } from '../services/authService';
import { toast } from 'react-toastify';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : '/';
    } catch (e) {
      if (e.response && e.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = e.response.data;
        this.setState({ errors });
        toast.error('Wrong email or password');
      }
    }
  };

  render() {
    if (getCurrentUser()) return <Redirect to="/"/>
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
