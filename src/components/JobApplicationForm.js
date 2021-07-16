import { Component } from 'react'


class JobApplicationForm extends Component {

    state = {
        company_name: "",
        position: "",
        date_applied: {},
        salary: 0,

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const new_job_application = {
            company_name: this.state.company_name,
            position: this.state.position,
            date_applied: this.state.date_applied,
            salary: this.state.salary,
            user_id: this.props.id
        }

        this.props.setJobApplications(
            [...this.props.jobApplications, new_job_application]
        )

        

        fetch('http://localhost:3000/job_applications',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(new_job_application)
        })
    }



    render() {
        return (
            <div className="job_applications_form_div">
                <div className="job_applications_form">
                    <h3>Add a job application to keep track of:</h3>
                    <form name="new_job_application" onSubmit={this.handleSubmit}>
                        <label>Company Name: </label>
                        <input type="text" name="company_name" value={this.state.companyName} onChange={this.handleChange} />
                        <label>Position: </label>
                        <input type="text" name="position" value={this.state.position} onChange={this.handleChange} />
                        <label>Date Applied: </label>
                        <input type="date" name="date_applied" value={this.state.dateApplied} onChange={this.handleChange} />
                        <label>Salary: </label>
                        <input type="number" name="salary" value={this.state.salary} onChange={this.handleChange} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        )
    }

}

export default JobApplicationForm;
 

