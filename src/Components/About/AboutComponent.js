import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LinusImage from '../../Images/linus.jpg'

export default class AboutComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark flexColumn'>
                        <h4 className='centerText pdTop'>About</h4>
                        <span className='centerSpan pdTop'>
                            Hello! I am Linus, nice to meet you!
                        </span>
                        <span className='centerSpan'>
                            I am a computer science student studying in
                            Flensburg, Germany.
                        </span>
                        <span className='centerSpan'>
                            During my study we had multiple bigger projects and
                            I wanted a place where I can show them to others,
                            thats how I ended up creating this website.
                        </span>
                        <span className='centerSpan'>
                            Under Projects you can find the projects which
                            pictures and short descriptions for each of them.
                        </span>
                    </Row>
                    <Row className='pdTop'>
                        <Col xs={20}>
                            <Image src={LinusImage} className='max100' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
