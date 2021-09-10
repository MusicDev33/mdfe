import React, { Component } from "react";

import './SCPlayer.scss';

export default class SCPlayer extends Component {

  constructor(props) {
    super(props);

    let src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1060220644&color=%237decc9&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true';
    let srcQuery = 'color=%237decc9&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true';
    console.log(props.track);
    this.state = {
      iframeSrc: `${props.track.iframeUrl}&${srcQuery}`,
      trackName: props.track.trackName,
      trackUrl: props.track.trackUrl,
      authorUrl: 'https://soundcloud.com/shelby-mccowan'
    };
  }

  render() {
    return (
      <div className="scplayer mb-3">
        <iframe className="player" width="100%" height="166" scrolling="no" title="SM iframe" frameborder="no" allow="autoplay" src={this.state.iframeSrc}></iframe>
      </div>
    );
  }
}
