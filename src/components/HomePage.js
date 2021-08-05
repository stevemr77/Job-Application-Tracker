import React from 'react'
import JobApplicationForm from './JobApplicationForm'
import JobApplicationContainer from '../containers/JobApplicationContainer'
import { useState, useEffect } from 'react'

export default function HomePage(props) {

  // console.log(props)

  const [jobApplications, setJobApplications] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
      .then(response => response.json())
      .then(user => setUser( user ))
  }, [])


  useEffect(() => {
    if (user.id) {
      fetch(`http://localhost:3000/job_applications/?user_id=${user.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
        .then(response => response.json())
        .then(jobApplications => {
          if (jobApplications.error){
            console.error(jobApplications.error)
          } else {
            setJobApplications( jobApplications )
          }
        })
    }
  },[user.id])

  const handleDelete = (applicationToDelete) =>{
    const remainingApplications = jobApplications.filter(jobApplication => {
      return jobApplication !== applicationToDelete
    })
    setJobApplications(
      remainingApplications
    )
    fetch(`http://localhost:3000/job_applications/${applicationToDelete.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.token}`
      }
    })
  }

  return (
    <div>
      <h1 className="hello">Hello, {user.name}!</h1>
      <JobApplicationForm jobApplications={jobApplications} setJobApplications={setJobApplications} id={props.id} user={user} />
      <JobApplicationContainer jobApplications={jobApplications} handleDelete={handleDelete}/> 
    </div>
  )
}
