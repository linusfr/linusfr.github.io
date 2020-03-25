import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import LinusImage from '../../Images/linus.jpg'

export default class AboutComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark pdTop newLine flexColumn'>
                        <h4 className='centerText pdTop'>About</h4>
                        <span className='centerText pdTop'>
                            Aliqua quis nostrud excepteur laborum. Excepteur
                            nulla laboris aliquip nulla elit nisi amet
                            reprehenderit. Eiusmod velit aute fugiat sint sit
                            labore enim eiusmod mollit. Lorem qui duis
                            adipisicing qui cupidatat duis do do cillum sint
                            laboris.
                        </span>
                        <span className='centerText'>
                            Aliqua quis nostrud excepteur laborum. Excepteur
                            nulla laboris aliquip nulla elit nisi amet
                            reprehenderit. Eiusmod velit aute fugiat sint sit
                            labore enim eiusmod mollit. Lorem qui duis
                            adipisicing qui cupidatat duis do do cillum sint
                            laboris.
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
