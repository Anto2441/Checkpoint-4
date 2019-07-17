import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import './AdminUpdateArtist.scss';

class AdminUpdateArtist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      job: "",
      artist_picture: "",
      description: "",
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(this.props.match.params)
    fetch(`http://localhost:3000/api/artists/${id}`)
      .then(res => res.json())
      .then(artist => this.setState({
        ...artist,
      }));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    const id = this.props.match.params.id;
    const config = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state)
    }
    const url = `http://localhost:3000/api/artists/${id}`;
    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          alert(res.error)
        } else {
          alert(`artist updated`)
        }
      })
    event.preventDefault();
    NotificationManager.success('', 'Artist Updated !', 3000);
  }

  render() {
    return (
      <div className="AdminUpdateArtist">
        <form onSubmit={this.handleSubmit}>
        <h1 className="title1">Update the artist</h1>
        <div className="form">
          <input type="text" id ="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
          <input type="text" id="job" name="job" onChange={this.handleChange} value={this.state.job} placeholder="Job" />
          <input type="text" id="artist_picture" name="artist_picture" onChange={this.handleChange}  value={this.state.artist_picture} placeholder="Picture" />
          <input type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} placeholder="Description" />
          <input className="buttonSubmit" type="submit" value="Add" id="input-submit" />
        </div>
        </form>
        <NotificationContainer />
      </div>
    );
  }
}

export default AdminUpdateArtist;