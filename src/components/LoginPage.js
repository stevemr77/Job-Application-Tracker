import React, { Component } from 'react'

export default class LoginPage extends Component {

  state = {
    username: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.login(this.state.username)
      .then(res => this.props.history.push('/home'))
  }

  render() {
    return (
      <div className="login">
        <p>Please Log In</p>
        <form onSubmit={this.handleSubmit}>
          Username: 
          <input 
            type="text" 
            name="username" 
            value={this.state.username} 
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }

}
