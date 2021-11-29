import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import starSmall from '../images/star-small.png'
import starbig from '../images/star-big.png'
import ticketl from '../images/ticket-l.png'
import BuyTicket from '../images/buyTicket'
import threestar from '../images/three-stars.png'
import ticketr from '../images/ticket-r.png'

const HomeSection1 = () => {
  return (
    <div className="main-section1">
      <Container className="container">
        <Row className="d-flex justify-content-center">
          <Col className="d-flex" md={8} lg={8} sm={8}>
            <Col md={3} lg={3} sm={2} className="in-center-section1">
              <div className="small-star-div">
                <img src={starSmall} className="starsmall" />
              </div>
              <div className="big-star-div">
                <img src={starbig} className="starbig" />
              </div>
              <div className="ticketl-star-div">
                <img src={ticketl} className="ticketl" />
              </div>
            </Col>
            <Col md={6} lg={6} sm={8} className="in-center-section1">
              <div className="pancakeswap-div">
                <h5 className="heading-pancake">The PancakeSwap Lottery</h5>
              </div>
              <div className="counter">
                <span>$203,757</span>
              </div>
              <h5 className="in-prize">in prizes!</h5>
              <BuyTicket />
            </Col>
            <Col md={3} lg={3} sm={2} className="in-center-section1">
              <div className="three-star-div">
                <img src={threestar} className="threestar" />
              </div>
              <div className="ticket-r-star-div">
                <img src={ticketr} className="ticketr" />
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection1
