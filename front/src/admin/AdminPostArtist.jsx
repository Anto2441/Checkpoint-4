import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AdminPostArtist.scss';

class AdminPostArtist extends Component {
  submitForm = (values) => {
    const { reset } = this.props;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    const url = 'http://localhost:3000/api/artists';
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Artist created !');
          reset();
        } else {
          NotificationManager.warning('', 'Error with the creation.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur with the creation.', 5000);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="AdminPostArtist">
        <p className="adminPostTitle">Add an artist</p>
        <form onSubmit={handleSubmit(this.submitForm)}>
          <div className="form">
            <Field type="text" name="name" component="input" placeholder="Name" />
            <Field type="text" name="job" component="input" placeholder="Job" />
            <Field type="text" name="artist_picture" component="input" placeholder="Picture" />
            <Field type="text" name="description" component="input" placeholder="Description" />
            <input className="buttonSubmit" type="submit" value="Add" id="input-submit" />
          </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default reduxForm({
  form: 'Artist', // a unique identifier for this form
})(AdminPostArtist);