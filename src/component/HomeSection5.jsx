import React from 'react'
import Section4end from '../images/section4end'
import { Container, Row, Col } from 'react-bootstrap'

const HomeSection5 = () => {
  return (
    <div className="homesection5">
      <Section4end />
      <Container>
        <Row className="d-flex justify-content-center mt-4">
          <div>
            <div className="d-flex justify-content-center">
              <h2 className="section-five-heading">How to Play </h2>
            </div>
            <div className="d-flex justify-content-center">
              <p className="section5-para-if-the">
                If the digits on your tickets match the winning numbers in the
                correct order, you win a portion of the prize pool.
              </p>
            </div>
            <div className="d-flex justify-content-center simple-heading">
              Simple!
            </div>
          </div>

          <Col md={4} lg={4} sm={12} xs={12}>
            <div className="section5-box-content">
              <div className="section5-box-subdiv">
                <div className="box-heading-1-section5">Step 1</div>
                <h2 className="buy-ticket-heading-section5">Buy Tickets</h2>
                <div color="textSubtle" className="box-para-section5">
                  Prices are set when the round starts, equal to 5 USD in CAKE
                  per ticket.
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12}>
            {' '}
            <div className="section5-box-content">
              <div className="section5-box-subdiv">
                <div className="box-heading-1-section5">Step 1</div>
                <h2 className="buy-ticket-heading-section5">Buy Tickets</h2>
                <div color="textSubtle" className="box-para-section5">
                  Prices are set when the round starts, equal to 5 USD in CAKE
                  per ticket.
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12} xs={12}>
            {' '}
            <div className="section5-box-content">
              <div className="section5-box-subdiv">
                <div className="box-heading-1-section5">Step 1</div>
                <h2 className="buy-ticket-heading-section5">Buy Tickets</h2>
                <div color="textSubtle" className="box-para-section5">
                  Prices are set when the round starts, equal to 5 USD in CAKE
                  per ticket.
                </div>
              </div>
            </div>
          </Col>
          <hr className="section-divider-line" />
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection5
