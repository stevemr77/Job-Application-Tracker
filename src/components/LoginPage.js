import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

export default class LoginPage extends Component {

  state = {
    username: "",
    password: "",
    newUsername: "",
    newPassword: "",
    user: {}
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSignup = (event) => {
    event.preventDefault()

    this.props.signup(this.state.newUsername, this.state.newPassword)
    .then(result => {
      if (result.token){
        this.props.history.push('/home')
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.login(this.state.username, this.state.password)
      .then(result => {
        if (result.token){
          this.props.history.push('/home')
        }
      })
  }

  // componentDidMount(){
  //   fetch(`http://localhost:3000/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(user => this.setState( user ))
  // }

  render() {
    return (
      <div>
        <h1>Keep track of your future today!</h1>
        <div className="signup">
          <h3>Please Sign Up</h3>
          <form onSubmit={this.handleSignup}> 
            <Input
              focus placeholder="Username" 
              type="text" 
              name="newUsername" 
              value={this.state.newUsername} 
              onChange={this.handleChange}
            />
            <Input 
              focus placeholder="Password"
              type="password" 
              name="newPassword" 
              value={this.state.newPassword} 
              onChange={this.handleChange}
            />
            <Button type="submit">Submit</Button>
          </form>
        </div>
        <div className="login">
          <h3>Or if you've already done so...</h3>
          <h3>Please Log In</h3>
          <form onSubmit={this.handleSubmit}>
            <Input 
              focus placeholder="Username"
              type="text" 
              name="username" 
              value={this.state.username} 
              onChange={this.handleChange}
            />
            <Input 
              focus placeholder="Password"
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleChange}/>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    )
  }

}
