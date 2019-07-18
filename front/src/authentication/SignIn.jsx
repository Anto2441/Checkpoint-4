import React, { Component } from 'react';
import { userRegister } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",

    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  submitForm = (event) => {
    const { userRegister, history, location: { state } } = this.props;
    event.preventDefault();
    fetch('http://localhost:3000/api/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        throw new Error();
      })
      .then((admin) => {
        NotificationManager.success('', 'Bonjour dans votre espace administrateur!', 1000);
        userRegister(admin);
        setTimeout(() => {
          const nextLocation = state ? state.from.pathname : '/admin';
          history.push(nextLocation);
        }, 1000);
        localStorage.setItem('login', admin.token);
      })
      .catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'authentification.', 1000);
      });
  }

  render() {
    const { login, password } = this.state;
    return (
      <div className='SignIn'>
        <form onSubmit={this.submitForm}>
          <label htmlFor="login">
            Login:
            <input id="login" type="text" name="login" value={login} onChange={this.handleChange} />
          </label>
          <label htmlFor="password">
            Password:
            <input id="password" type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
          <button type="submit"> SignIn </button>
        </form>
        <NotificationContainer />
      </div>
    )
  }
}
const mdtp = dispatch => bindActionCreators({ userRegister }, dispatch);

export default connect(null, mdtp)(SignIn);