import React from 'react'

import './App.css'

import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import HomeComponent from './Components/Home/HomeComponent'
import AboutComponent from './Components/About/AboutComponent'
import ProjectsComponent from './Components/Projects/ProjectsComponent'

import Logo from './Images/logo.Bu9v87'
import Image from 'react-bootstrap/Image'
import ProphyComponent from './Components/Projects/Prophy/ProphyComponent'
import LabManagerComponent from './Components/Projects/LabManager/LabManagerComponent'
import IotComponent from './Components/Projects/IoT/IotComponent'

function App() {
    return (
        <div className='App'>
            <Router>
                <Container fluid>
                    <Row>
                        <Col>
                            <Navbar bg='light' variant='light' expand='lg'>
                                <Navbar.Brand href='/home'>
                                    <Image src={Logo} className='logo'></Image>
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
                </Container>
                <Switch>
                    <Route path='/home'>
                        <HomeComponent />
                    </Route>
                    <Route path='/about'>
                        <AboutComponent />
                    </Route>
                    <Route path='/prophy'>
                        <ProphyComponent />
                    </Route>
                    <Route path='/iot'>
                        <IotComponent />
                    </Route>

                    <Route path='/prophy'>
                        <ProphyComponent />
                    </Route>
                    <Route path='/labManager'>
                        <LabManagerComponent />
                    </Route>
                    <Route path='/projects'>
                        <ProjectsComponent />
                    </Route>
                    <Route path='/'>
                        <Redirect to='/home' />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
