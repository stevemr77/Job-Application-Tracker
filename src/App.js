import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import {Component} from 'react'

class App extends Component {
  state = {
    user: {},
  }

  login = (name) => {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    } )
    .then(response => response.json())
    .then( response => {
      if (response.error){
        alert(response.error)
      }
      else{
        localStorage.setItem("userID", response.id)
        this.setState({
          user: response
        })
      }
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/users/${localStorage.userID}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  // handleDelete = (applicationToDelete) =>{
  //   const remainingApplications = this.state.job_applications.filter(job_application => {
  //     return job_application !== applicationToDelete
  //   })
  //   this.setState({
  //     job_applications: remainingApplications
  //   })
  //   fetch(`http://localhost:3000/job_applications/${applicationToDelete.id}`, {
  //     method: 'DELETE'
  //   })
  // }


  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" exact render={(props) => <LoginPage {...props} login={this.login} /> } />
          <Route path="/home" exact render={(props) => <HomePage {...props} job_applications={this.state.job_applications} id={this.state.user.id}/> } />
        </div>
      </Router>
    );
  }
}

export default App;