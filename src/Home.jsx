import React, { Component } from 'react'
import Register from './Register'
import Login from './Login'
import {Container, Row, Col} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Register />
                        </Col>
                        <Col sm={6}>
                            <Login />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home;