import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './Contact.scss';

class Contact extends Component {
  submitForm = (values) => {
    const { reset } = this.props;
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    const url = 'http://localhost:3000/api/send';
    fetch(url, config)
      .then((res) => {
        if (res.ok) {
          NotificationManager.success('', 'Formulaire envoyé !');
          reset();
        } else {
          NotificationManager.warning('', 'Erreur lors de l\'envoi du formulaire.', 3000);
        }
      }).catch(() => {
        NotificationManager.error('', 'Erreur lors de l\'envoi du formulaire.', 5000);
      });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="Contact">
        <div className="imageContact">
          <img
            src="https://i.pinimg.com/564x/e9/66/57/e96657c1a00f8a2bacca051700c9c597.jpg"
            alt="imageContact"
          />
        </div>
        <div className="form">
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit(this.submitForm)}>
            <div className="half left cf">
              <div>
                <Field type="text" name="name" component="input" placeholder="Name" />
              </div>
              <Field type="email" name="email" component="input" placeholder="Email" />
              <Field type="text" name="subject" component="input" placeholder="Subject" />
            </div>
            <div className="half right cf">
              <Field type="text" name="message" component="textarea" placeholder="Your message" />
            </div>
            <input type="submit" value="Envoyer" id="input-submit" />
          </form>
          <NotificationContainer />
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'Contact', // a unique identifier for this form
})(Contact);