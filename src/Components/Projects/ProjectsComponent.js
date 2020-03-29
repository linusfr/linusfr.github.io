import React, { Component } from 'react'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import ProphyComponent from './Prophy/ProphyComponent'
import LabManagerComponent from './LabManager/LabManagerComponent'

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Navbar bg='light' variant='light' expand='lg'>
                                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                                    <Navbar.Collapse id='basic-navbar-nav'>
                                        <Nav className='mr-auto center'>
                                            <Nav.Link
                                                as={Link}
                                                to='/projects/prophy'
                                            >
                                                Prophy
                                            </Nav.Link>
                                            <Nav.Link
                                                as={Link}
                                                to='/projects/labManager'
                                            >
                                                LabManager
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Switch>
                                    <Route path='/projects/prophy'>
                                        <ProphyComponent />
                                    </Route>
                                    <Route path='/projects/labManager'>
                                        <LabManagerComponent />
                                    </Route>
                                    <Route path='/'>
                                        <Redirect to='projects/prophy' />
                                    </Route>
                                </Switch>
                            </Col>
                        </Row>
                    </Container>
                </Router>
            </div>
        )
    }
}
