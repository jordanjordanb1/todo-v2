import React from 'react'
import './Home.scss'
import Container from 'react-bootstrap/Container'
import Todo from './Todo/Todo'
import Finished from './Finished/Finished'

export default function Home() {
    return (
        <Container>
            <Todo />
            <Finished />
        </Container>
    )
}
