import { Component } from 'react'
import  { Form, Button }  from 'semantic-ui-react'


class JobApplicationForm extends Component {

    

    state = {
        company_name: "",
        position: "",
        date_applied: {},
        salary: 0,
        user_id: ''

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
            user_id: this.props.user.id
        }

        this.props.setJobApplications(
            [...this.props.jobApplications, new_job_application]
        )

        fetch('http://localhost:3000/job_applications',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(new_job_application)
        })

        this.setState({
            company_name: "",
            position: "",
            date_applied: {},
            salary: 0,
        })    
    }



    render() {
        return (
            <div className="job_applications_form_div">
                <div className="job_applications_form">
                <h2>Add a job application to keep track of:</h2>
                    <Form name="new_job_application" onSubmit={this.handleSubmit}>
                        <Form.Field>
                            <label>Company Name </label>
                            <input placeholder="Company Name" type="text" name="company_name" value={this.state.companyName} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Position </label>
                            <input placeholder="Position/Title" type="text" name="position" value={this.state.position} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Date Applied </label>
                            <input placeholder="Date applied" type="date" name="date_applied" value={this.state.dateApplied} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Salary </label>
                            <input placeholder="Salary" type="number" name="salary" value={this.state.salary} onChange={this.handleChange} />
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }

}

export default JobApplicationForm;
 

