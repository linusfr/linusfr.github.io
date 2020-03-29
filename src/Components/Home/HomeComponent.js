import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import KiteImage from '../../Images/kitesurf.JPG'
import { Container, Row, Col } from 'react-bootstrap'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='imageContainer'>
                <Container>
                    <Row className='dark flexColumn'>
                        <h4 className='centerText pdTop'>
                            Welcome to my Website!
                        </h4>
                        <span className='centerSpan pdTop'>
                            I am Linus, a computer science student studying in
                            Flensburg, Germany. On here you can find more
                            information about me and about projects I worked on.
                        </span>
                    </Row>
                    <Row className='pdTop pdBot'>
                        <Col xs={20}>
                            <Image src={KiteImage} className='max100' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
