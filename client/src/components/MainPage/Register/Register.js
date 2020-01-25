import React, { PureComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import './Register.scss'

export default class Register extends PureComponent {
    render() {
        const { container, setContainer } = this.props

        return (
            <div className={(container === 1) ? 'register-container home-cards show-register' : (container === 0) ? 'register-container home-cards hide-register' : 'register-container home-cards'}>
                <Row className="text-center mt-4 mb-4">
                    <Col xs="12">
                        <h1>REGISTER</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12">
                        <Form>
                            <Row>
                                <Col xs="12" md={{ span: 10, offset: 1 }}>
                                    <Form.Group>
                                        <InputGroup className="register-inputs home-inputs">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="text" placeholder="Enter username..." />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group>
                                        <InputGroup className="register-inputs home-inputs">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text><i className="fas fa-at"></i></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="email" placeholder="Enter email..." />
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

                                    <Form.Group className="mb-3">
                                        <InputGroup className="login-inputs home-inputs">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>
                                                    <i className="fas fa-shield-alt"></i>
                                                </InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control type="password" placeholder="Re-enter password..." />
                                        </InputGroup>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="m-0">
                                <ButtonGroup className="register-buttons home-buttons">
                                    <Button onClick={() => setContainer(0)}><i className="fas fa-arrow-left"></i> &nbsp; BACK</Button>
                                    <Button>SUBMIT</Button>
                                </ButtonGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

Register.propTypes = {
    container: PropTypes.number,
    setContainer: PropTypes.func
}
