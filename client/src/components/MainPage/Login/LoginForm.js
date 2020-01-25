import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import Alert from 'react-bootstrap/Alert'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginForm = ({ setContainer }) => {
    const LoginSchema = Yup.object().shape({
        login: Yup.object().shape({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required'),
            persistLogin: Yup.boolean().default(false)
        })
    })

    return (
        <Formik
            initialValues={{
                login: {
                    username: '',
                    password: '',
                    persistLogin: false,
                }
            }}

            validationSchema={LoginSchema}

            onSubmit={
                (values, { setSubmitting }) => {
                    setSubmitting(false)
                    console.log(values)
                }
            }
        >

            {({ isSubmitting, resetForm }) => (
                <Form>
                    <Row>
                        <Col xs="12" md={{ span: 10, offset: 1 }}>
                            <FormGroup>
                                <ErrorMessage name="login.username">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="login-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="text" name="login.username" placeholder="Enter username..." />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <ErrorMessage name="login.password">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="login-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fas fa-key"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="password" name="login.password" placeholder="Enter password..." />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup style={{ position: "relative" }}>
                                <FormLabel className="checkbox-container"> Remember me
                                    <Field className="form-control" type="checkbox" name="login.persistLogin" id="persistLogin" />
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
                                </FormLabel>
                            </FormGroup>
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

                    <FormGroup className="m-0">
                        <ButtonGroup className="login-buttons home-buttons">
                            <Button type="submit" disabled={isSubmitting}>LOGIN</Button>
                            <Button onClick={() => { setContainer(1); resetForm() }}>SIGNUP &nbsp;<i className="fas fa-arrow-right"></i></Button>
                        </ButtonGroup>
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm
