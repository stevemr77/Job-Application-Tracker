import React from 'react'
import JobApplicationCard from '../components/JobApplicationCard' 

export default function JobApplicationContainer(props) {

    //console.log(props.job_applications)

    const showJobApplications = () => {
        return props.jobApplications.map(jobApplication => {
            return <JobApplicationCard jobApplication={ jobApplication } key={ jobApplication.id} delete={props.handleDelete}/>
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