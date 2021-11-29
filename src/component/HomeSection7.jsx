import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Section7SidePortion from '../images/Section7SidePortion'

const HomeSection7 = () => {
  return (
    <div className="section7">
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="section7-content-div">
              <h2 className="section7-heading-prize-fund">Prize Funds</h2>
              <div className="section7-h1-details">
                The prizes for each lottery round come from three sources:
              </div>
              <h2 className="section7-sub-heading">Ticket Purchases</h2>
              <ul className="section7-uldata">
                <li>
                  <div className="section7-lidata">
                    100% of the CAKE paid by people buying tickets that round
                    goes back into the prize pools.
                  </div>
                </li>
              </ul>
              <h2 className="section7-sub-heading">Rollover Prizes</h2>
              <ul className="section7-uldata">
                <li>
                  <div className="section7-lidata">
                    After every round, if nobody wins in one of the prize
                    brackets, the unclaimed CAKE for that bracket rolls over
                    into the next round and are redistributed among the prize
                    pools.
                  </div>
                </li>
              </ul>
              <h2 className="section7-sub-heading">CAKE Injections</h2>
              <ul className="section7-uldata">
                <li>
                  <div className="section7-lidata">
                    An average total of 35,000 CAKE from the treasury is added
                    to lottery rounds over the course of a week. This CAKE is of
                    course also included in rollovers! Read more in our guide to{' '}
                    <a
                      href="https://docs.pancakeswap.finance/tokenomics/cake/cake-tokenomics"
                      className="a-decoration a-direction a-line"
                      color="primary"
                    >
                      CAKE Tokenomics
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} lg={4} xs={12} sm={12}>
            <Section7SidePortion />
          </Col>
          <hr className="section-divider-line mt-4" />
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection7
