import React, { Component } from "react";

class Artist extends Component {
  render() {
    return (
      <div>
        <h1>Albums</h1>
        {this.props.music.topalbums.album.map((data, index) => {
          return (
            <div key={index} >
            <h2><img src={data.image[3]["#text"]}/> {data.name}</h2> 
            </div>
          )
        })}

      </div>
      
    )
  }
}

export default Artist
