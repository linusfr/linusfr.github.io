import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import KiteImage from '../../Images/IMG_3441.JPG'
import { Container, Row, Col } from 'react-bootstrap'

export default class HomeComponent extends Component {
    render() {
        return (
            <div className='imageContainer'>
                <Container>
                    <Row className='white'>Welcome</Row>
                    <Row>
                        <Col xs={20}>
                            <Image src={KiteImage} className='kiteImage' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
