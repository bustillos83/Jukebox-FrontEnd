import React, { Component } from "react";

class Song extends Component {
  render() {
    console.log(this.props.music.track.getInfo.music);
    return (
      <div>
        <h1>Song: {this.props.music.track.getInfo.music}</h1>
        {this.props.music.track.getInfo.map((song, index) => {
          return <div key={index}></div>;
        })}
      </div>
    );
  }
}

export default Song;
