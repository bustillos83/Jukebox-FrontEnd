import React, { Component } from "react";
import './Artist.css'


class Artist extends Component {
  render() {
    // console.log(this.props.music.topalbums.album);

    return (

      <>
        <h1>Artist</h1>
        <div className="artist-grid">
        {this.props.music?.topalbums?.album?.map((data, index) => {
          return (
            <div className="artist-container" key={index}>
            <img className="artist-image" src={data.image[3]["#text"]} alt="" /> 
            
              <h2>
                {data.name}
              </h2>
            <a href={data.url}>Listen</a>
              
            </div>
          );
        })}
      </div>
      </>

    );
  }
}

export default Artist;
