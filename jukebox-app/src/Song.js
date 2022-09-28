import React, { Component } from "react";

class Song extends Component {
  render() {
    // console.log(this.props.music.results.trackmatches);
    return (
      <div>
        <h1>Songs</h1>
        {this.props.music?.results?.trackmatches?.track?.map((song, index) => {
          return <div key={index}>
          <h2>Song:{song.name} </h2>
          <h3>Artist:{song.artist}</h3>
         <a href={song.url}>
          <button>Click me </button></a>
          
          </div>
        })}
      </div>
    );
  }
}

export default Song;


