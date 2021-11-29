import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Text,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap'
import Logo from '../images/logo'
import MobileSvgHeader from '../images/MobileSvgHeader'
import { AiTwotoneSetting } from 'react-icons/ai'
import { AiOutlineGlobal } from 'react-icons/ai'
import Currency from '../images/currency'

const Header = () => {
  const rendertooltip = (props, id, body) => {
    console.log(props, body, id)
    return (
      <Tooltip className="tooltip" id={id} {...props}>
        {body}
      </Tooltip>
    )
  }
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        variant="light"
        id="navbar-header"
        className="dis"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo />
            <MobileSvgHeader />
          </Navbar.Brand>

          <Nav className="me-auto ">
            <OverlayTrigger
              className="overlay-trigger-dis"
              placement="bottom-start"
              delay={{ show: 250, hide: 400 }}
              overlay={rendertooltip(
                'button-tooltips',
                'button-tooltips',
                <div>
                  <div type="button" className="div-exchnage">
                    <h6>Exchange</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>Liquidity</h6>
                  </div>
                </div>,
              )}
            >
              <Nav.Link className="nav-item-dis" href="#action1">
                Trade
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              className="overlay-trigger-dis"
              placement="bottom-start"
              delay={{ show: 250, hide: 400 }}
              overlay={rendertooltip(
                'button-tooltips',
                'button-tooltips',
                <div>
                  <div type="button" className="div-exchnage">
                    <h6>Farms</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>Pools</h6>
                  </div>
                </div>,
              )}
            >
              <Nav.Link className="nav-item-dis" href="#action2">
                Earn
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              className="overlay-trigger-dis"
              placement="bottom-start"
              delay={{ show: 250, hide: 400 }}
              overlay={rendertooltip(
                'button-tooltips',
                'button-tooltips',
                <div>
                  <div type="button" className="div-exchnage">
                    <h6>Prediction(BETA)</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>Lottery</h6>
                  </div>
                </div>,
              )}
            >
              <Nav.Link className="nav-item-dis" href="#action2">
                Win
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              className="overlay-trigger-dis"
              placement="bottom-start"
              delay={{ show: 250, hide: 400 }}
              overlay={rendertooltip(
                'button-tooltips',
                'button-tooltips',
                <div>
                  <div type="button" className="div-exchnage">
                    <h6>Overview</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>Collection</h6>
                  </div>
                </div>,
              )}
            >
              <Nav.Link className="nav-item-dis" href="#action2">
                NFT
              </Nav.Link>
            </OverlayTrigger>
            <OverlayTrigger
              className="overlay-trigger-dis"
              placement="bottom-start"
              delay={{ show: 250, hide: 400 }}
              overlay={rendertooltip(
                'button-tooltips',
                'button-tooltips',
                <div>
                  <div type="button" className="div-exchnage">
                    <h6>Info</h6>
                  </div>
                  <div type="button" className="div-exchnage">
                    <h6>IFO</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>Voting</h6>
                  </div>
                  <hr />
                  <div type="button" className="div-liquidity">
                    <h6>LeaderBoard</h6>
                  </div>
                  <hr />
                  <div type="button" className="div-exchnage">
                    <h6>Blog</h6>
                  </div>
                  <div type="button" className="div-liquidity">
                    <h6>DOcs</h6>
                  </div>
                </div>,
              )}
            >
              <Nav.Link className="nav-item-dis" href="#action2">
                <b>
                  <strong>...</strong>
                </b>
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
          <Form className="d-flex justify-content-center">
            <Currency />
            <div className="div-global-icon-button">
              <button className="global-icon">
                <AiOutlineGlobal size={24} className="icon-global-svg" />
              </button>
            </div>

            <div className="div-setting-icon">
              <button class="setting-button">
                <AiTwotoneSetting class="setting-icon pl-24" size={24} />
              </button>
            </div>

            <button className="conect-button">Connect Wallet</button>
          </Form>
        </Container>
      </Navbar>
      <div className="sub-header-main-div">
        <div className="sub-header">
          <a className="text-prediction" href="/prediction">
            Prediction (BETA)
          </a>

          <a className="text-lottery" href="/lottery">
            Lottery
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
