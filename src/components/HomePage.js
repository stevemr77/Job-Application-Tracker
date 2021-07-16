import React from 'react'
import JobApplicationForm from './JobApplicationForm'
import JobApplicationContainer from '../containers/JobApplicationContainer'
import { useState, useEffect } from 'react'

export default function HomePage(props) {

  console.log(props.delete)

  const [jobApplications, setJobApplications] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/job_applications/?user_id=${props.id}`)
      .then(response => response.json())
      .then(jobApplications => setJobApplications( jobApplications ))
  },[props.id])


  return (
    <div>
      <h1>Job Application Tracking App!</h1>
      <JobApplicationForm id={props.id} />
      <JobApplicationContainer jobApplications={jobApplications} delete={props.delete}/> 
    </div>
  )
}
