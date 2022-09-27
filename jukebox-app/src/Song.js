import React, { Component } from "react";

class Song extends Component {
  render() {
    // console.log(this.props.music.results.trackmatches);
    return (
      <div>
        <h1>Song: {this.props.music?.results?.trackmatches?.track?.name}</h1>
        {this.props.music?.results?.trackmatches?.track?.map((song, index) => {
          return <div key={index}></div>;
        })}
      </div>
    );
  }
}

export default Song;
