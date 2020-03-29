/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import { Container, Row, Image } from 'react-bootstrap'

import prophyImg from '../../../Images/prophy.png'
import prophyImg2 from '../../../Images/prophy2.png'
import prophyImg3 from '../../../Images/prophy3.png'
import prophyImg4 from '../../../Images/prophy4.png'
import prophyImg5 from '../../../Images/prophy5.png'

export default class ProphyComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark newLine flexColumn'>
                        <div className='flexRow center projectHeader pdTop'>
                            <h5 className='centerText projectHeader'>Prophy</h5>
                            <a
                                href='https://github.com/linusfr/prophy'
                                class='fab fa-github widthPadding nostyle projectHeader'
                                target='_blank'
                            ></a>
                        </div>

                        <span className='centerSpan'>
                            Prophy is a simple weather app using a weather api
                            and websockets. The websocket is used to synchronize
                            usage of the app over multiple browser instances. I
                            created Prophy as a paper for Web Technologies.
                        </span>
                        <h5 className='centerText pdTop'>Homepage</h5>
                        <span className='centerText'>
                            Weather overview from your current or the selected
                            Location
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={prophyImg} />
                        </span>
                        <h5 className='centerText pdTop'>Preview for 5 days</h5>
                        <span className='centerText'>
                            Weather for the next 5 days
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={prophyImg2} />
                        </span>
                        <h5 className='centerText pdTop'>Detailed Day</h5>
                        <span className='centerText'>
                            You can preview a single day more detailed showing a
                            graph for the day's temperatures
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={prophyImg3} />
                        </span>
                        <h5 className='centerText pdTop'>Search</h5>
                        <span className='centerText'>
                            Search for new places and add them to your favorites
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={prophyImg4} />
                        </span>
                        <h5 className='centerText pdTop'>Favorites</h5>
                        <span className='centerText'>
                            Preview of all the places you added to your places.
                            You can click on any of them to get to their
                            detailed view
                        </span>
                        <span className='newLine centerText pdTop pdBot'>
                            <Image className='max100' src={prophyImg5} />
                        </span>
                    </Row>
                </Container>
            </div>
        )
    }
}
