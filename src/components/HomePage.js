import React from 'react'
import JobApplicationForm from './JobApplicationForm'
import JobApplicationContainer from '../containers/JobApplicationContainer'
import { useState, useEffect } from 'react'

export default function HomePage(props) {

  

  const [jobApplications, setJobApplications] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/job_applications/?user_id=${props.id}`)
      .then(response => response.json())
      .then(jobApplications => setJobApplications( jobApplications ))
  },[props.id])

  const handleDelete = (applicationToDelete) =>{
    const remainingApplications = jobApplications.filter(jobApplication => {
      return jobApplication.id !== applicationToDelete.id
    })
    setJobApplications(
      remainingApplications
    )
    fetch(`http://localhost:3000/job_applications/${applicationToDelete.id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div>
      <h1>Job Application Tracking App!</h1>
      <JobApplicationForm jobApplications={jobApplications} setJobApplications={setJobApplications} id={props.id} />
      <JobApplicationContainer jobApplications={jobApplications} handleDelete={handleDelete}/> 
    </div>
  )
}
