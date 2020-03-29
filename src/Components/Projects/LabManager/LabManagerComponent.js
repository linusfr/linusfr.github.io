import React, { Component } from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import labManagerImg from '../../../Images/labManager.png'
import labManagerImg2 from '../../../Images/labManager2.png'
import labManagerImg3 from '../../../Images/labManager3.png'
import labManagerImg4 from '../../../Images/labManager4.png'

export default class LabManagerComponent extends Component {
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
                            <Image className='max100' src={labManagerImg} />
                        </span>
                        <h5 className='centerText pdTop'>Preview for 5 day</h5>
                        <span className='centerText'>
                            Weather for the next 5 days
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg2} />
                        </span>
                        <h5 className='centerText pdTop'>Detailed Day</h5>
                        <span className='centerText'>
                            You can preview a single day more detailed showing a
                            graph for the day's temperatures
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg3} />
                        </span>
                        <h5 className='centerText pdTop'>Search</h5>
                        <span className='centerText'>
                            Search for new places and add them to your favorites
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg4} />
                        </span>
                    </Row>
                </Container>
            </div>
        )
    }
}
