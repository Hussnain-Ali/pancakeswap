import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import HideShowAccordion from './HideShowAccordion'

const HomeSection2Card = () => {
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center">
          <Col md={8} lg={8} sm={12} xs={12} className="home-section2-card">
            <Col className="card-header" md={12} lg={12} sm={12} xs={12}>
              <div className="header">
                <div className="header-content">
                  <h5 className="text-next-draw">Next Draw</h5>
                  <div className="text-date-header">
                    #291 | Draw: Nov 25, 2021, 5:00 PM
                  </div>
                </div>
              </div>
            </Col>
            <Row>
              <Col md={3} lg={3} sm={12} xs={12}>
                <div className="card-body-content">
                  <h5 className="text-prize-pot">Prize Pot</h5>
                </div>
                <div className="card-body-content">
                  <h5 className="text-your-ticket">Your tickets</h5>
                </div>
              </Col>
              <Col md={3} lg={3} sm={12} xs={12}>
                <div className="card-counter">
                  <span>~$197,780</span>
                </div>
                <div className="cake-quantity">
                  <span>13,932 CAKE</span>
                </div>
                <div className="card-body-button">
                  <button className="button-design" scale="md">
                    Buy Tickets
                  </button>
                </div>
              </Col>
            </Row>
            <hr />
            <HideShowAccordion />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection2Card
