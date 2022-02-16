import React, { Component } from "react";

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <section className="content-section">
          <h1>Home</h1>
          <p>
            Quick note: this website is currently under construction. Take a look around, but much of it is unfinished. 
            Then again, are you ever really finished with your website anyway?
          </p>
        </section>
      </div>
    );
  }
}
