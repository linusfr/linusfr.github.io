import React, { Component } from 'react'
import { Container, Row, Nav, Image } from 'react-bootstrap'
import prophyImg from '../../Images/prophy.png'

const notImplemented =
    'https://mh-1-bildagentur.panthermedia.net/media/previews/0011000000/11497000/11497521_thumb_170.jpg'

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark pdTop newLine flexColumn'>
                        <h4 className='centerText pdTop'>Projects</h4>
                        <span className='centerText pdTop'>
                            In this section are some of the projects showcased I
                            worked on during my study.
                        </span>
                        <h5 className='centerText pdTop'>Web Technology</h5>
                        <span className='centerText'>
                            Prophy is a simple weather app using a weather api
                            and websockets. The websocket is used to synchronize
                            usage of the app over multiple browser instances.
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={prophyImg} />
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Nav.Link href={notImplemented}>
                                Check out Prophy
                            </Nav.Link>
                        </span>
                        <h5 className='centerText pdTop'>Web Programming</h5>
                        <span className='centerText'>
                            drueckMich is a chrome Browser extension which
                            enables the user to organize his/her bookmarks.
                        </span>
                        <span className='newLine centerText pdTop'>
                            Image of App
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Nav.Link href={notImplemented}>
                                Check out drueckMich
                            </Nav.Link>
                        </span>
                        <h5 className='centerText pdTop'>Web Systems</h5>
                        <span className='centerText'>
                            Pals is a social media plattform on which you can
                            connect with other people to meet up for any
                            Activity you can think of. It is build using Angular
                            and Typescript in the Frontend and a Node Server in
                            combination with MongoDD and Mongoose for the
                            Backend.
                        </span>
                        <span className='newLine centerText pdTop'>
                            Image of App
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Nav.Link href={notImplemented}>
                                Check out Pals
                            </Nav.Link>
                        </span>
                    </Row>
                </Container>
            </div>
        )
    }
}
