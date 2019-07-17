import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AdminPostEvent.scss';

class AdminPostEvent extends Component {
  submitForm = (values) => {
    const { reset } = this.props;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    const url = `http://localhost:3000/api/events`;
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Event add !');
          reset();
        } else {
          NotificationManager.warning('', 'Error add', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Error add', 5000);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="AdminPostEvent">
        <h1 className="adminPostEventTitle">Add an event</h1>
        <form onSubmit={handleSubmit(this.submitForm)}>
          <div className="form">
            <Field type="text" name="event_picture" component="input" placeholder="Picture" />
            <Field type="text" name="name" component="input" placeholder="Name" />
            <Field type="text" name="city" component="input" placeholder="City" />
            <Field type="text" name="year" component="input" placeholder="Year" />
            <input className="buttonSubmit" type="submit" value="Add" id="input-submit" />
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default reduxForm({
  form: 'Event', // a unique identifier for this form
})(AdminPostEvent);