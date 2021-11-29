import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Section4CardEmpty = () => {
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center">
          <Col md={8} lg={8} sm={12} xs={12} className="home-section2-card">
            <Col className="card2-header" md={12} lg={12} sm={12} xs={12}>
              <div className="header">
                <div>
                  <h2 color="text" class="round-heading">
                    Round
                  </h2>
                </div>
              </div>
            </Col>
            <hr />
            <Row>
              <Col md={12} lg={12} sm={12} xs={12}>
                <div className="section-4 epmty-card">
                  <div color="textSubtle" className="body-content">
                    Connect your wallet to check your history
                  </div>
                  <button className="empty-card-button" scale="md">
                    Connect Wallet
                  </button>
                </div>
              </Col>

              <Col className="col-for-balls" md={12} lg={12} sm={12} xs={12}>
                <hr className="empty-card-dividerline" />
                <div className="card-footer-content">
                  <div className="text-footr">
                    <div
                      font-size="12px"
                      color="textSubtle"
                      className="text-style-emptycard"
                    >
                      Only showing data for Lottery V2
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Section4CardEmpty
