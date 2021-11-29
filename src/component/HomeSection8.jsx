import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import tombola from '../images/tombola.png'

const HomeSection8 = () => {
  return (
    <div className="section8">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col
            className="justify-content-center d-flex"
            md={6}
            lg={6}
            sm={12}
            xs={12}
          >
            <Row>
              <Col md={5} lg={5} sm={12} xs={12}>
                <div className="section8-image-div">
                  <img src={tombola} className="section8-image-style" />
                </div>
              </Col>
              <Col md={7} lg={7} sm={12} xs={12}>
                <div className="section8-content-div">
                  <h2 className="section8-still-heading">
                    Still got questions?
                  </h2>
                  <div className="check-our">
                    Check our in-depth guide on
                    <a
                      href="#"
                      className="lottery-play-style lottery-play  display-section8"
                    >
                      how to play the PancakeSwap lottery!
                    </a>
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

export default HomeSection8
