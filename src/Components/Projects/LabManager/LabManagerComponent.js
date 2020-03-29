/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react'
import { Container, Row, Image } from 'react-bootstrap'
import labManagerImg from '../../../Images/labManager.PNG'
import labManagerImg2 from '../../../Images/labManager2.PNG'
import labManagerImg3 from '../../../Images/labManager3.PNG'
import labManagerImg4 from '../../../Images/labManager4.PNG'

export default class LabManagerComponent extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className='dark newLine flexColumn'>
                        <div className='flexRow center projectHeader pdTop'>
                            <h5 className='centerText projectHeader'>
                                LabManager
                            </h5>
                            <a
                                href='https://github.com/linusfr/labManager'
                                class='fab fa-github widthPadding nostyle projectHeader'
                                target='_blank'
                            ></a>
                        </div>

                        <span className='centerSpan'>
                            The LabManager can be used to organize students. The
                            LabManager is a .net Framework Desktop Application.
                            You can create courses and fill it with labs. The
                            labs can then be filled with students and managed.
                        </span>
                        <h5 className='centerText pdTop'>Homepage</h5>
                        <span className='centerText'>
                            All the Courses the lecturer is holding
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg} />
                        </span>
                        <h5 className='centerText pdTop'>Course Overview</h5>
                        <span className='centerText'>
                            All the labs for a specific course
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg2} />
                        </span>
                        <h5 className='centerText pdTop'>Lab Overview</h5>
                        <span className='centerText'>
                            Displays all the students from the lab. Here you can
                            check attendances and tasks or edit students
                        </span>
                        <span className='newLine centerText pdTop'>
                            <Image className='max100' src={labManagerImg3} />
                        </span>
                        <h5 className='centerText pdTop'>PDF Printouts</h5>
                        <span className='centerText'>
                            You can also create PDF's for student informations,
                            attendances or tasks
                        </span>
                        <span className='newLine centerText pdTop pdBot'>
                            <Image className='max100' src={labManagerImg4} />
                        </span>
                    </Row>
                </Container>
            </div>
        )
    }
}
