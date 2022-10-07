import React, { Component } from "react";
import "./Album.css";

class Album extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ALBUM DATA", this.props.music);
    return (
      <>
        <h1>Album search results...</h1>
        <div className="album-grid">
          {this.props.music?.results?.albummatches?.album?.map(
            (albums, index) => {
              return (
                <div key={index} className="album-container">
                  {/* img and album name will direct user to last.fm album page */}
                  <a href={albums.url}>
                    <img className="album-image" src={albums.image[2]["#text"]} alt={albums.name} />
                    <h2>{albums.name}</h2>
                  </a>
                  {/* artist name will direct user to last.fm artist page */}
                  <a target="_blank" href={`https://www.last.fm/music/${albums.artist}`}>
                    <h3>{albums.artist}</h3>
                  </a>
                </div>
              );
            }
          )}
        </div>
      </>
    );
  }
}

export default Album;
