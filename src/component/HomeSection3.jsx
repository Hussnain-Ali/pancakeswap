import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ticketl from '../images/ticket-l.png'
import ticketr from '../images/ticket-r.png'

const HomeSection3 = () => {
  return (
    <div className="homesection3-container">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col md={6} lg={6} sm={12} xs={12}>
            <Row>
              <Col md={3} lg={3} sm={3} xs={3}>
                <div className="ticketl-section3">
                  <img className="ticketl-section3" src={ticketl} />
                </div>
              </Col>
              <Col md={6} lg={6} sm={6} xs={6}>
                <div className="Section3-content">
                  <h2 color="#F4EEFF" className="heading-section3">
                    Connect your wallet
                  </h2>
                  <h2 color="#F4EEFF" className="heading-section3-2">
                    to check if you've won!
                  </h2>
                  <button className="section-3-button" width="190px" scale="md">
                    Connect Wallet
                  </button>
                </div>
              </Col>
              <Col md={3} lg={3} sm={3} xs={3}>
                <div className="ticketr-section3">
                  <img className="ticketr-section3" src={ticketr} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection3
