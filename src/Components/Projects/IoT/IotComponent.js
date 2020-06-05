/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import { Container, Row, Image } from 'react-bootstrap'

import architectureImg from '../../../Images//iot/architecture.PNG'
import grafanaImg from '../../../Images//iot/grafana.PNG'
import nodeRedImg from '../../../Images//iot/nodeRed.PNG'
import telegramImg from '../../../Images//iot/telegram.PNG'

import { Link } from 'react-router-dom'

export default class iotComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Link
                            to='/projects'
                            className='fas fa-arrow-alt-circle-left backButton pdTop'
                        ></Link>
                    </Row>
                    <Row className='dark newLine flexColumn'>
                        <div className='flexRow center projectHeader pdTop'>
                            <h5 className='centerText projectHeader'>IoT</h5>
                        </div>

                        <span className='centerSpan'>
                            The IoT plattform is a simple IoT Cloud which
                            visualizes available parking space in Hamburg. It
                            also notifies users if selected car parks are nearly
                            full. The cloud is created using docker, node-red,
                            grafana, influxDB and python. Because there were no
                            real sensors available a parking API (parkendd) was
                            used instead.
                        </span>

                        <h5 className='centerText pdTop'>Architecture</h5>
                        <span className='centerText'>
                            Overview for all the components used.
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={architectureImg} />
                        </span>

                        <h5 className='centerText pdTop'>Grafana</h5>
                        <span className='centerText'>
                            Grafana is used to visualize the data from the
                            sensors.
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={grafanaImg} />
                        </span>

                        <h5 className='centerText pdTop'>Node Red</h5>
                        <span className='centerText'>
                            Node-Red is used to query data from the database and
                            create notifications through telegram if selected
                            car parks are nearly full.
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={nodeRedImg} />
                        </span>

                        <h5 className='centerText pdTop'>Telegram</h5>
                        <span className='centerText'>
                            Telegram clients receive notifications from
                            node-red.
                        </span>
                        <span className='newLine centerText pdTop pdBot'>
                            <Image className='max100' src={telegramImg} />
                        </span>
                    </Row>
                </Container>
            </div>
        )
    }
}
