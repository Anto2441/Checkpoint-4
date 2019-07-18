import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, token, ...propsRoute }) => (
  <Route
    {...propsRoute}
    render={props => (
      token && token !== ''
        ? <Component {...props} />
        : (
          <Redirect to={{
            pathname: '/SignIn',
            state: { from: props.location },
          }}
          />
        )
    )}
  />
);
const mstp = state => {
  return{
    token: state.user.token,
  };
}
export default connect(mstp)(PrivateRoute);