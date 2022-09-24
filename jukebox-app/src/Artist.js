import React, { Component } from "react";

class Artist extends Component {
  render() {
    console.log(this.props.music.topalbums.attr);
    return (
      <div>
        <h1>Artist</h1> 
        {/* {this.props.music.topalbums.album.artist.map((data) => {
          return (
            <div >
            <h2 key={data.mbid}><a href={data.url}> {data.name} </a></h2>
           

            </div>
          )
        })} */}
      </div>
    );
  }
}

export default Artist;
