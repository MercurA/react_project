import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';

import './Login.css'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false
        }

        this.setLoggedIn = this.setLoggedIn.bind(this)
    }

    render() {
        return (
            <div>
                {this.checkIfLoggedIn()}
            </div>
        )
    }

    setLoggedIn(e) {

        this.setState({ loggedIn: true })
    }

    checkIfLoggedIn() {
        if (!this.state.loggedIn) {
            return (
                <Row>
                    <Col s={12}>
                        <Row>
                            <Col s={4}></Col>
                            <Col s={4} className="center-container">
                                <Row className="form-container">
                                    <Input s={6} label="First Name" />
                                    <Input s={6} label="Last Name" />
                                    <Input type="password" label="password" s={12} />
                                    <Input type="email" label="Email" s={12} />
                                    <div s={12} className="log-text" onClick={this.setLoggedIn}>Already logged in?</div>
                                </Row>

                            </Col>
                            <Col s={4}></Col>
                        </Row>
                    </Col>
                </Row>
            )
        } else {
            return (
                <Row>
                    <Col s={12}>
                        <Row>
                            <Col s={4}></Col>
                            <Col s={4} className="center-container">
                                <Row className="form-container">
                                    <Input type="email" label="Email" s={12} />
                                    <Input type="password" label="Password" s={12} />
                                </Row>
                            </Col>
                            <Col s={4}></Col>
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

    submitForm() {

    }
}

export default Login;