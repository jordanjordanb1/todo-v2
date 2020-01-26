import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import FormGroup from 'react-bootstrap/FormGroup'
import Alert from 'react-bootstrap/Alert'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const RegisterForm = ({ setContainer }) => {
    const RegisterSchema = Yup.object().shape({
        register: Yup.object().shape({
            username: Yup.string().trim()
                .required('Username is required')
                .min(3, 'Username must be longer than 3 characters')
                .max(10, 'Username must be shorter than 10 characters')
                .test('username-exists', "Username already exists", async (username) => {
                    return await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
                        const found = res.data.find(user => user.username === username)
                        if (found) {
                            return false // Username was found
                        }

                        return true // Username wasn't found
                    })
                }),
            email: Yup.string().trim()
                .email("Email must be valid")
                .notRequired(),
            password: Yup.string()
                .required('Password is required')
                .min(6, 'Password must be longer than 6 characters')
                .max(12, 'Password must be shorter than 12 characters')
                .matches(/^(?=.*[a-z])/, "Password must contain at least 1 lowercase letter")
                .matches(/^(?=.*[A-Z])/, "Password must contain at least 1 uppercase letter")
                .matches(/^(?=.*[0-9])/, "Password must contain at least 1 number"),
            passwordConf: Yup.string()
                .required('Please re-enter password')
                .oneOf([Yup.ref('password')], 'Passwords must match'),
        }),
    })

    return (
        <Formik
            initialValues={{
                register: {
                    username: '',
                    email: '',
                    password: '',
                    passwordConf: '',
                }
            }}

            validationSchema={RegisterSchema}

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
                                <ErrorMessage name="register.username">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="register-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="fas fa-user"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="text" name="register.username" placeholder="Enter username...." />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <ErrorMessage name="register.email">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="register-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text><i className="fas fa-at"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="email" name="register.email" placeholder="Enter email..." />
                                </InputGroup>
                            </FormGroup>


                            <FormGroup className="mb-3">
                                <ErrorMessage name="register.password">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="login-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fas fa-key"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="password" name="register.password" placeholder="Enter password..." />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className="mb-4">
                                <ErrorMessage name="register.passwordConf">{msg => <Alert className="mb-1 form-error text-center" variant="danger">{msg}</Alert>}</ErrorMessage>

                                <InputGroup className="login-inputs home-inputs">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>
                                            <i className="fas fa-shield-alt"></i>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Field className="form-control" type="password" name="register.passwordConf" placeholder="Re-enter password..." />
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>

                    <FormGroup className="m-0">
                        <ButtonGroup className="register-buttons home-buttons">
                            <Button onClick={() => { setContainer(0); resetForm() }}><i className="fas fa-arrow-left"></i> &nbsp; BACK</Button>
                            <Button type="submit" disabled={isSubmitting}>SUBMIT</Button>
                        </ButtonGroup>
                    </FormGroup>
                </Form>
            )}
        </Formik>
    )
}

export default RegisterForm
