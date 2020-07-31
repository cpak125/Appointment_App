import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const ModalMain = styled.form`
 text-align:center;
  position:fixed;
  background: white;
  width: 80%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`

export default class Appt extends Component {
    state = {
        appt: {},
        redirect: false
    }

    getAppt = async () => {
        const apptId = this.props.match.params.apptId
        const response = await axios.get(`/api/appts/${apptId}`)
        this.setState({
            appt: response.data
        })
    }

    componentDidMount = () => {
        this.getAppt()
    }

    handleChange = (event) => {
        const updatedAppt = { ...this.state.appt }
        updatedAppt[event.target.name] = event.target.value
        this.setState({ appt: updatedAppt })
    }

    handleSubmit = async () => {
        const apptId = this.props.match.params.apptId
        const updatedAppt = this.state.appt
        this.setState({ redirect: true })
        await axios.put(`/api/appts/${apptId}`, updatedAppt) 
    }

    handleClose = () => {
        this.setState({ redirect: true })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }

        return (
            <Modal>
                <ModalMain onSubmit={this.handleSubmit}>
                    <h2>{this.state.appt.time}</h2>
                    <div>
                        <label>
                            Name:
                        <input type='text' name='name' value={this.state.appt.name} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone number:
                        <input type='text' name='phoneNumber' value={this.state.appt.phoneNumber} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.handleClose}>Cancel</button>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>

                </ModalMain>
            </Modal>
        )
    }
}


