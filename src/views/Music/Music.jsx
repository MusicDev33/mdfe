import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SCPlayer from '@components/SCPlayer/SCPlayer';

import * as data from './sc.json';

export default class Music extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

    console.log(data.default);
  }

  render() {
    return (
      <div>
        <h1>Music</h1>
        <p className="px-1">
          I make music. That's it. I currently don't upload to Spotify but I plan on doing so sometime soon. Until then, 
          SoundCloud is the place to find me.
        </p>

        <Row>
          {data.default.map(track => (
            <Col sm={6}>
              <SCPlayer track={track} />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
