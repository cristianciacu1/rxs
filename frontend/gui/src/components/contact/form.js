import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import axios from 'axios';
import { Redirect } from 'react-router'

export default class FormPage extends React.Component {

    state = {
        redirect: false,
        name: null,
    }


    handleSubmitForm = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;

        this.setState({
            name: name,
        })

        return axios.post('http://192.168.1.7:8000/letter/', {
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            this.setState({ redirect: true })
        })
        .catch(error => console.err(error));
    }


    render() {

        const {redirect} = this.state;

        if (redirect)
            return(
                <Redirect to={{
                    pathname: '/success',
                    state: { name1: this.state.name }
                 }}
                 />
            )

        return (
            <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <div className="paddingTitle Page1002 formCenter customFont">
                        <form onSubmit={this.handleSubmitForm.bind(this)}>
                            <p className="h2 text-center mb-4 text-uppercase">Contact Me</p>
                            <div className="grey-text font-weight-light">
                            <MDBInput
                                label="Your name"
                                name = "name"
                                icon="user"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Your email"
                                name="email"
                                icon="envelope"
                                group
                                type="email"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                label="Subject"
                                icon="tag"
                                name="subject"
                                group
                                type="text"
                                validate
                                error="wrong"
                                success="right"
                            />
                            <MDBInput
                                type="textarea"
                                name="message"
                                rows="2"
                                label="Your message"
                                icon="pencil-alt"
                            />
                            </div>
                            <div className="text-center">
                            <MDBBtn outline color="secondary" type="submit">
                                Send <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                            </div>
                        </form>
                </div>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
        );
    }
}