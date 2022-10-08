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
                  <a target="_blank" href={albums.url}>
                    <img className="album-image" src={albums.image[2]["#text"]} alt={albums.name} />
                    <h3>{albums.name}</h3>
                  </a>
                  {/* artist name will direct user to last.fm artist page */}
                  <a className="album-tag" target="_blank" href={`https://www.last.fm/music/${albums.artist}`}>{albums.artist}</a>
                  
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
