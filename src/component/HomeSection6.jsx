import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Section6SidePortion from '../images/Section6SidePortion'

const HomeSection6 = () => {
  return (
    <div className="section6">
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="section6-content-div">
              <h2 className="section6-heading-first">Winning Criteria</h2>
              <h2 className="sectin6-heading-scd">
                The digits on your ticket must match in the correct order to
                win.
              </h2>
              <div className="section6-para-1">
                Here’s an example lottery draw, with two tickets, A and B.
              </div>
              <ul className="content-list6">
                <li>
                  <div className="list-para6">
                    Ticket A: The first 3 digits and the last 2 digits match,
                    but the 4th digit is wrong, so this ticket only wins a
                    “Match first 3” prize.
                  </div>
                </li>
                <li>
                  <div className="list-para6">
                    Ticket B: Even though the last 5 digits match, the first
                    digit is wrong, so this ticket doesn’t win a prize.
                  </div>
                </li>
              </ul>
              <div className="section6-last-para">
                Prize brackets don’t ‘stack’: if you match the first 3 digits in
                order, you’ll only win prizes from the ‘Match 3’ bracket, and
                not from ‘Match 1’ and ‘Match 2’.
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} xs={12} sm={12}>
            <Section6SidePortion />
          </Col>
          <hr className="section-divider-line mt-4" />
        </Row>
      </Container>
    </div>
  )
}

export default HomeSection6
