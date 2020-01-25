import React, { PureComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import './Login.scss'

export default class Login extends PureComponent {
    render() {
        const { container, setContainer } = this.props

        return (
            <div className={(container === 1) ? 'login-container home-cards hide-login' : (container === 0) ? 'login-container home-cards show-login' : 'login-container home-cards'}>
                <Row className="text-center mt-4 mb-4">
                    <Col xs="12">
                        <h1>LOGIN</h1>
                    </Col>
                </Row>


                <Row>
                    <Col xs="12">
                        <Form>
                            <Row>
                                <Col xs="12" md={{ span: 10, offset: 1 }}>
                                    <Form.Group>
                                        <InputGroup className="login-inputs home-inputs">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Enter username..." />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <InputGroup className="login-inputs home-inputs">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i className="fas fa-key"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="password" placeholder="Enter password..." />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group style={{ position: "relative" }}>
                                        <Form.Label className="checkbox-container"> Remember me
                                            <Form.Control type="checkbox" id="persistLogin" />
                                            <span className="checkbox">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="icon">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                        </Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={{ span: 8, offset: 2 }}>
                                    <hr style={{ marginTop: "0px" }} />
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={{ span: 8, offset: 2 }}>
                                    <Button href="/" block className="password-reset">Forgot Password</Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={{ span: 8, offset: 2 }}>
                                    <hr style={{ marginTop: "0px" }} />
                                </Col>
                            </Row>

                            <Form.Group className="m-0">
                                <ButtonGroup className="register-buttons home-buttons">
                                    <Button>LOGIN</Button>
                                    <Button onClick={() => setContainer(1)}>SIGNUP</Button>
                                </ButtonGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

Login.propTypes = {
    container: PropTypes.number,
    setContainer: PropTypes.func
}
