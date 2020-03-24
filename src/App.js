import React from 'react'

import './App.css'

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import HomeComponent from './Components/Home/HomeComponent'
import AboutComponent from './Components/About/AboutComponent'
import ProjectsComponent from './Components/Projects/ProjectsComponent'

function App() {
    return (
        <div className='App'>
            <Router>
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar bg='dark' variant='dark' expand='lg'>
                                <Navbar.Brand href='/home'>
                                    Linus Frotscher
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                <Navbar.Collapse id='basic-navbar-nav'>
                                    <Nav className='mr-auto'>
                                        <Nav.Link as={Link} to='/home'>
                                            Home
                                        </Nav.Link>
                                        <Nav.Link as={Link} to='/about'>
                                            About
                                        </Nav.Link>
                                        <Nav.Link as={Link} to='/projects'>
                                            Projects
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Switch>
                                <Route path='/home'>
                                    <HomeComponent />
                                </Route>
                                <Route path='/about'>
                                    <AboutComponent />
                                </Route>
                                <Route path='/projects'>
                                    <ProjectsComponent />
                                </Route>
                                <Route path='/'>
                                    <Redirect to='/home' />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    )
}

export default App
