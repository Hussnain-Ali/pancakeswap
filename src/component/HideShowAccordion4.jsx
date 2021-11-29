import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class HideShowAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.hideShowHandler = this.hideShowHandler.bind(this)
  }

  hideShowHandler = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }

  render() {
    return (
      <div>
        {this.state.show === false ? (
          <div className="div-accordion-button">
            <div className="sub-div-accordion-button">
              <button
                id="button"
                className="accordion-button-custom"
                onClick={this.hideShowHandler}
              >
                Details
                <svg
                  viewBox="0 0 24 24"
                  color="primary"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="accordion-svg"
                >
                  <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                </svg>
              </button>
            </div>
          </div>
        ) : null}
        {this.state.show && <Box />}
      </div>
    )
  }
}
class Box extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
    this.hideShowHandler = this.hideShowHandler.bind(this)
  }

  hideShowHandler = () => {
    const { show } = this.state
    this.setState({ show: !show })
  }
  render() {
    return (
      <div>
        {this.state.show === false ? (
          <Container>
            <Row>
              <Col md={4} lg={4} sm={12} xs={12}>
                <div className="accordion-bodycard4">
                  <div>
                    <h3 className="text-prize-pot">Prize pot</h3>
                    <h2 className="counter-section4">~$147,722</h2>
                    <div className="total-cake-section4">
                      <span>11,245 CAKE</span>
                    </div>
                  </div>
                  <div className="total-player-div">
                    <div className="total-player">
                      <div className="heading-div">
                        Total players this round: 1319
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={8} lg={8} sm={12} xs={12}>
                <p>
                  Match the winning number in the same order to share prizes.
                </p>

                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                  <Col md={3} lg={3} sm={6} xs={6}>
                    <div className="cake-details">
                      <div className="match-first-heading">Match first 1</div>
                      <div className="amount-of-cake4">
                        <span>225 CAKE</span>
                      </div>
                      <div className="span-font4">
                        <span>~$2,976</span>
                      </div>
                      <div className="span-font4">0.38 CAKE each</div>
                      <div className="span-font4">597 Winners</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <div className="div-accordion-button">
                <div className="sub-div-accordion-button">
                  <button
                    className="accordion-button-custom"
                    onClick={this.hideShowHandler}
                  >
                    Hide
                    <svg
                      viewBox="0 0 24 24"
                      color="primary"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="accordion-svgup"
                    >
                      <path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </Row>
          </Container>
        ) : null}
        {this.state.show && <HideShowAccordion />}
      </div>
    )
  }
}

export default HideShowAccordion
