import React from 'react' 
import '../App.css'

export default function JobApplicationCard(props){

    

    return(
        <li className="job_application_card">
            <p>{ props.jobApplication.company_name}</p>
            <p> { props.jobApplication.position }</p>
            <p>{ props.jobApplication.date_applied }</p>
            <p>{ props.jobApplication.salary }</p>
            <button className="delete-button" onClick={() => props.handleDelete(props.jobApplication)}>X</button>
        </li>
    )
}