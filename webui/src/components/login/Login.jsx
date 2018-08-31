import React, { Component } from 'react';
import { Row, Col, Input } from 'react-materialize';

import './Login.css'

class Login extends Component {

    render() {
        return (
            <Row>
                <Col s={12}>
                    <Row>
                        <Col s={4}></Col>
                        <Col s={4} className="center-container">
                            <Row className="form-container">
                                <Input placeholder="Placeholder" s={6} label="First Name" />
                                <Input s={6} label="Last Name" />
                                <Input type="password" label="password" s={12} />
                                <Input type="email" label="Email" s={12} />
                            </Row>

                        </Col>
                        <Col s={4}></Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default Login;