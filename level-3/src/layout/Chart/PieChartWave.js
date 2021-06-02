import { useEffect, useState } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'
import WaveCircle from './PiChartWaveItems/WaveCircle'
import './style.css'



const PieChartWave = (props) => {

    return (
        <Container className='pieChartWave'>
            <Row xs={2}>
                <Col className='wave-chart' >
                    <div className='wave-chart-no'>
                        <p>No <span> {props.item?.tankno}</span></p>
                    </div>
                    <div className='circle-content' style={{textAlign:'center'}}>
                        <WaveCircle color={props.color} ratio={props.ratio} />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <p> {props.item?.oiltype} </p>
                    </div>

                </Col>
                <Col >
                    <div className='char-info'>
                        <div className='row-info' style={{background:'rgb(245, 245, 245)'}}>
                            <div className='row-info-key'> Info 1</div> <div> {props.item?.oilvol} </div>
                        </div>
                        <div className='row-info'>
                            <div className='row-info-key'> Info 2</div><div> {props.item?.capa}</div>
                        </div>
                        <div className='row-info' style={{background:'rgb(245, 245, 245)'}}>
                            <div className='row-info-key'> Info 3</div><div> {props.item?.oilper}</div>
                        </div>
                        <div className='row-info'>
                            <div className='row-info-key'> Info 4</div><div> {props.item?.wtrlev}</div>
                        </div>
                        <div className='row-info' style={{background:'rgb(245, 245, 245)'}}>
                            <div className='row-info-key'> Info 4</div><div> {props.item?.wtrvol}</div>
                        </div>
                        <div className='row-info'>
                            <div className='row-info-key'> Info 4</div><div> {props.item?.oillev}</div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default PieChartWave;