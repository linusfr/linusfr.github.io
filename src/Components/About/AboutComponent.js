/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
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
                            Hello! I am Linus, nice to meet you! I am a computer
                            science student studying in Flensburg, Germany.
                            During my study we had multiple bigger projects and
                            I wanted a place where I can show them to others,
                            thats how I ended up creating this website. Under
                            projects you can find the projects with pictures and
                            short descriptions for each of them.
                        </span>
                    </Row>
                    <Row className='pdTop'>
                        <Col xs={20}>
                            <Image src={LinusImage} className='max100' />
                        </Col>
                    </Row>
                    <Row>
                        <div className='flexRow center pdTop pdBot'>
                            <div>
                                <a
                                    href='mailto:linusfrotscher@gmail.com'
                                    class='fas fa-envelope widthPadding icons nostyle'
                                ></a>
                            </div>
                            <div>
                                <a
                                    href='https://github.com/linusfr'
                                    class='fab fa-github widthPadding icons nostyle'
                                    target='_blank'
                                ></a>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
