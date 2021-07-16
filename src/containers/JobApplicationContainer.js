import React from 'react'
import JobApplicationCard from '../components/JobApplicationCard' 

export default function JobApplicationContainer(props) {

    

    const showJobApplications = () => {
        return props.jobApplications.map(jobApplication => {
            return <JobApplicationCard jobApplication={ jobApplication } key={ jobApplication.id} delete={props.delete}/>
        })
    }

    

    return (
        <div className="job_applications_div">
            <ol className="job_applications_list">
               { showJobApplications() }
            </ol>
        </div>
    )
}