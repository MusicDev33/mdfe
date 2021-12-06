import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <input className="sm-searchbar" placeholder="Search" />
          </Col>
        </Row>
      </div>
    );
  }
}
