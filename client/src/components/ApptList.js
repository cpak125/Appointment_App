import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Page = styled.div`
text-align:center;
`
export default class ApptList extends Component {
    state = {
        appts: [],
        showModal: false
    }

    componentDidMount = async () => {
        this.getAllAppts()
    }

    getAllAppts = async () => {
        const response = await axios.get('/api/appts')
        this.setState({ appts: response.data })
    }

    render() {

        const apptsList = this.state.appts.map((appt, i) => {
            return (
                <div  key={i} >
                    <Link  style={{color: (this.state.appts[i].name === '' && this.state.appts[i].phoneNumber === '') ? 'black' : 'red'}} 
                    to={`/appts/${appt._id}`}>
                    {appt.time}
                    </Link>
                </div>
            )
        })

        return (
            <Page>
                <h1>Available Appointments</h1>
                <div>
                    {apptsList}
                </div>
            </Page>
        )
    }
}
