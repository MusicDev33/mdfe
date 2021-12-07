import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { parseResults } from "./parse";

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchField: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
  }

  handleSearch(event) {
    if (event.key === 'Enter') {
      parseResults(this.state.searchField);
    }
  }

  handleSearchFieldChange(event) {
    this.setState({searchField: event.target.value});
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <input className="sm-searchbar" placeholder="Search" 
              onKeyPress={this.handleSearch} value={this.state.searchField} onChange={this.handleSearchFieldChange} />
          </Col>
        </Row>
      </div>
    );
  }
}
