import React, { Component } from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { parseResults } from "./parse";

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      searchResults: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
  }

  async handleSearch(event) {
    if (event.key === 'Enter') {
      const results = await parseResults(this.state.searchField);
      this.setState({
        searchResults: results
      });

      console.log(results);
    }
  }

  handleSearchFieldChange(event) {
    this.setState({searchField: event.target.value});
  }

  render() {
    return (
      <div>
        <Row className="mb-4">
          <Col>
            <input className="sm-searchbar" placeholder="Search" 
              onKeyPress={this.handleSearch} value={this.state.searchField} onChange={this.handleSearchFieldChange} />
          </Col>
        </Row>
          
        <Row>
          {this.state.searchResults.map((result, index) => (
            <Col key={index.toString()} sm={4} className="mb-4">
              <a href={result.link} target="_blank" rel="noreferrer">
                <div className="search-result">
                  {result.name}
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
