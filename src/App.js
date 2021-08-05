import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import { Component } from 'react'

class App extends Component {
  state = {
    username: '',
    password: '',
  }

  signUp = (name, password) => {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name,
          password
        }
      })
    })
    .then(response => response.json())
    .then( result => {
      if (result.error){
        console.error(result.error)
      } else {
        localStorage.setItem("token", result.token)
      }
      return result
    } )
  }

  login = (name, password) => {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
          name,
          password
        }
      })
    })
    .then(response => response.json())
    .then( result => {
      if (result.error){
        console.error(result.error)
      } else {
        localStorage.setItem("token", result.token)
      }
      return result
    } )
  }


  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props) => <LoginPage {...props} login={this.login} signup={this.signUp} /> } />
          <Route path="/home" exact render={(props) => <HomePage {...props} 
            job_applications={this.state.job_applications} 
            /* id={this.state.user.id} *//> } 
          />
        </div>
      </Router>
    );
  }
}

export default App;