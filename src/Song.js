import React, { Component } from "react";
import img from './images/image1.png'
import './Song.css'

class Song extends Component {
  render() {
 
    // console.log(this.props.music.results.trackmatches);
    return (
       <>
        <h1>Songs</h1>
      
        <div className="songs-grid">
        
        
        {this.props.music?.results?.trackmatches?.track?.map((song, index) => {
          return (
           
            <div className="songs-container" key={index} style={{ backgroundImage: `url(${img})` }}>
            {/* <img className="image" /> */}
          <h2>Song: {song.name} </h2>
          <h3>Artist: {song.artist}</h3>
         <a target="_blank" href={song.url}>
          <button>Click me </button></a>
          </div>
          
          )
        })}
      </div>
      </>
    );
  }
}

export default Song;


