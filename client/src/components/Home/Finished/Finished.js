import React from 'react'
import './Finished.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Finished() {
    return (
        <>
            <Row className="mt-4">
                <Col xs="12">
                    <h1 className="finished-header ml-2 mb-2">Finished</h1>
                </Col>
            </Row>

            <Container fluid className="finished-container">
                <Row>
                    <Col>
                        wejrherower
                    </Col>
                </Row>
            </Container>
        </>
    )
}
