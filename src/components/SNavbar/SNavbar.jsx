import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Link } from 'react-router-dom';

import './SNavbar.scss';

import { IconContext } from "react-icons";
import { FaHome, FaCode, FaMusic } from 'react-icons/fa';

export default class SNavbar extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <section className="navbar-container px-4 mt-1">
        <Row className="item-container mb-5">
          <Col sm={3} className="px-0">
            <div className="snavbar-profile">
              <img alt="A beautiful depiction of yours truly." src="/profilepic.jpeg" className="img-fluid profile"/>
            </div>
          </Col>

          <Col>
            <h4 className="mb-0">Shelby McCowan</h4>
            <p className="subtitle mb-0">
              Programming, music, biochemistry...
            </p>
          </Col>
        </Row>

        <Link to='/'>
          <Row className="snavbar-item mt-5">
            <Col sm={3} className="px-0 text-center">
              <div className="icon">
                <IconContext.Provider value={{size: '2.5em'}}>
                  <div>
                    <FaHome />
                  </div>
                </IconContext.Provider>
              </div>
            </Col>

            <Col className="my-auto">
              <h3 className="mb-0 my-auto">Home</h3>
            </Col>
          </Row>
        </Link>

        <Link to='/code'>
          <Row className="snavbar-item">
            <Col sm={3} className="px-0 text-center">
              <div className="icon">
                <IconContext.Provider value={{size: '2.5em'}}>
                  <div>
                    <FaCode />
                  </div>
                </IconContext.Provider>
              </div>
            </Col>

            <Col className="my-auto">
              <h3 className="mb-0 my-auto">Code</h3>
            </Col>
          </Row>
        </Link>

        <Row className="snavbar-item">
          <Col sm={3} className="px-0 text-center">
            <div className="icon">
              <IconContext.Provider value={{size: '2.5em'}}>
                <div>
                  <FaMusic />
                </div>
              </IconContext.Provider>
            </div>
          </Col>

          <Col className="my-auto">
            <h3 className="mb-0 my-auto">Music</h3>
          </Col>
        </Row>
      </section>
    );
  }
}
