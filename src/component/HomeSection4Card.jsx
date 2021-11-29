import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Balls from '../images/balls'
import Homesection4header from '../images/homesection4header'
import HideShowAccordion4 from './HideShowAccordion4'

const HomeSection4Card = () => {
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center">
          <Col md={8} lg={8} sm={12} xs={12} className="home-section2-card">
            <Col className="card2-header" md={12} lg={12} sm={12} xs={12}>
              <div className="header">
                <Homesection4header />
              </div>
            </Col>
            <hr />
            <Row>
              <Col md={4} lg={4} sm={12} xs={12}>
                <div className="card-body-content-4">
                  <h5 className="text-your-ticket4">Winning Number</h5>
                </div>
              </Col>
              <Col className="col-for-balls" md={8} lg={8} sm={12} xs={12}>
                <Balls />
              </Col>
            </Row>
            <hr />
            <HideShowAccordion4 />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection4Card
