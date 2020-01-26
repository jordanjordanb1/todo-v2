import React from 'react'
import './Todo.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Todo() {
    const db = [
        { _id: 1, task: 'Get milk', finished: false },
        { _id: 2, task: 'Add cookies', finished: false },
        { _id: 3, task: 'Add passportjs', finished: true },
        { _id: 4, task: 'Connect login', finished: false },
        { _id: 5, task: 'Connect logout', finished: false },
        { _id: 6, task: 'Add filtering for finished tasks', finished: false },
        { _id: 7, task: 'Add guards for routes', finished: true },
        { _id: 8, task: 'Add animations for fluidity', finished: false },
    ]

    return (
        <>
            <Row className="mt-4 mb-2">
                <Col xs="11">
                    <h1 className="todo-header ml-2">Tasks</h1>
                </Col>
                <Col xs="1">
                    <i className="far fa-trash-alt delete-mode-button mt-4 ml-3"></i>
                </Col>
            </Row>

            <Container fluid className="todo-container">
                {db.map(({ _id, task, finished }) => (
                    <Row key={_id}>
                        <Col xs="12">{task} Finished: {finished.toString()}</Col>
                    </Row>
                ))}
            </Container>
        </>
    )
}
