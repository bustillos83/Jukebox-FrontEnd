import React, { Component } from "react";

class Artist extends Component {
  render() {
    console.log(this.props.music.results.artistmatches.artist.name);
    return (
      <div>
        <h1>Artist: {this.props.music.results.artistmatches.artist.name}</h1>
      </div>
    );
  }
}

export default Artist;
