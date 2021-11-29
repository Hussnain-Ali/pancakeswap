import React, { useState } from 'react'
import { Container, Row, Col, ButtonGroup, ToggleButton } from 'react-bootstrap'
import HomeSection4Card from './HomeSection4Card'
import Section4CardEmpty from './Section4CardEmpty'

const HomeSection4 = () => {
  const [active, setActive] = useState(true)
  return (
    <div className="main-div-section4">
      <Container>
        <Row className="d-flex justify-content-center mt-4">
          <Col className="d-flex" md={4} lg={4} sm={12} xs={12}>
            <div>
              <div>
                <h2 className="finished-round-heading">Finished Rounds</h2>
              </div>
            </div>
          </Col>
        </Row>
        <div className="button-main-div">
          <div className="inner-btn">
            <div
              className={active ? 'btn-wrapper btn-active' : 'btn-wrapper'}
              onClick={() => {
                setActive(true)
              }}
            >
              All History
            </div>
            <div
              className={active ? 'btn-wrapper ' : 'btn-wrapper btn-active'}
              onClick={() => {
                setActive(false)
              }}
            >
              Your History
            </div>
          </div>
        </div>
        {active ? <HomeSection4Card /> : null}
        {active ? null : <Section4CardEmpty />}
      </Container>
    </div>
  )
}

export default HomeSection4
