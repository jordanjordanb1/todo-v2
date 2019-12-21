import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Main.scss'

export default class Main extends PureComponent {
    render() {
        return (
            <Container>
                <Row className="mt-xs-2 mt-md-4">
                    <Col xs="12" md={{ span: 6, offset: 3 }}>
                        <h1 className="login-header text-center">Login</h1>

                        <Row className="login-body mt-xs-2 mt-md-4">
                            <Col xs="12">
                                <Form className="mt-3">
                                    <Form.Group>
                                        <Form.Label htmlFor="username">Username</Form.Label>
                                        <Form.Control type="text" id="username" name="username" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                        <Form.Control type="password" name="password" id="password" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check type="checkbox" label="Remember me?" />
                                    </Form.Group>

                                    <Button type="submit" className="login-submit mb-2">Login</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
