import React, { Component } from "react";

class Artist extends Component {
  render() {
    // console.log(this.props.music.topalbums.album);
    const hash = '#text'

    return (
      <div>
       <h1>Artist:{this.props.music.topalbums.album.name}</h1> 
        {this.props.music.topalbums.album.map((data) => {
          return (
            <div >
            
            {/* <h2 key={data.mbid}><img src={data.image[3]["#text"]}/> {data.name}</h2> */}
            </div>
          )
        })}
      </div>
    );
  }
}

export default Artist;
