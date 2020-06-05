import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div>
                <div className='pdTop centerSpan'>
                    Here you can find multiple projects I worked on. Feel free
                    to explore them! Each card shows briefly which technologies
                    were used and what the project is about. For more details on
                    any project just follow the link on each card.
                </div>

                <div className='pdTop center cards'>
                    <Card style={{ width: '24rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>IoT Parking Plattform</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                Iot Cloud
                            </Card.Subtitle>
                            <Card.Text>
                                Simple tool which informs you when your favorite
                                car parks are full.
                            </Card.Text>
                            <Card.Link as={Link} to='/iot'>
                                Learn more about the IoT tool
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>Prophy</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                Vanilla Javascript Website
                            </Card.Subtitle>
                            <Card.Text>
                                Prophy is a simple Weather App.
                            </Card.Text>
                            <Card.Link as={Link} to='/prophy'>
                                Learn more about Prophy
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '24rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>LabManager</Card.Title>
                            <Card.Subtitle className='mb-2 text-muted'>
                                .net Framework Desktop Application
                            </Card.Subtitle>
                            <Card.Text>
                                The LabManager can be used to organize students
                                in labs.
                            </Card.Text>
                            <Card.Link as={Link} to='/labManager'>
                                Learn more about the LabManager
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}
