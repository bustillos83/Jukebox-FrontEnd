import React, { Component } from "react";

class Song extends Component {
  render() {
    console.log(this.props.music.results.trackmatches);
    return (
      <div>
        {this.props.music.results.trackmatches.track.map((song, index) => {
          return (
          <div key={index}>;
          <h1>Song: {song.name}</h1>
          </div>
          )
        })}
      </div>
    );
  }
}

export default Song;
