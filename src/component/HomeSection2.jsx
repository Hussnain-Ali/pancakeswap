import React from 'react'
import { Container } from 'react-bootstrap'
import Section1end from '../images/section1end'
import HomeSection2Card from './HomeSection2Card'

const HomeSection2 = () => {
  return (
    <div className="section2">
      <Section1end />
      <Container>
        <div className="section2-content">
          <div className="get-ticket d-flex">
            <div>
              <h2 className="text-getticket">Get your tickets now!</h2>
              <div className="d-flex">
                <div className="clock-time">
                  <span className="clock-time-h">10</span>
                  <span className="time-sign">h</span>
                  <span className="clock-time-h">43</span>
                  <span className="time-sign">m</span>
                </div>
                <h5 className="until-the-draw-text">until the draw</h5>
              </div>
            </div>
          </div>
        </div>
        <HomeSection2Card />
      </Container>
    </div>
  )
}

export default HomeSection2
