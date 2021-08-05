import React from 'react' 
import '../App.css'
import { Card } from 'semantic-ui-react'

export default function JobApplicationCard(props){

    

    return(
            <Card className="job_application_card">
                <p>{ "Company Name: " + props.jobApplication.company_name}</p>
                <p> { "Position/Title: " + props.jobApplication.position }</p>
                <p>{ "Date Applied: " + props.jobApplication.date_applied }</p>
                <p>{ "Salary: " + '$' + new Intl.NumberFormat().format(props.jobApplication.salary) }</p>
                <button className="delete-button" onClick={() => props.handleDelete(props.jobApplication)}>X</button>
            </Card>
    )
}