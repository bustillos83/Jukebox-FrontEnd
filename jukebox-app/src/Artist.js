import React, { Component } from "react";

class Artist extends Component {
  render() {
    // console.log(this.props.music.topalbums.album);

    return (
      <div>
        <h1>Albums</h1>
        {/* {this.props.music.topalbums.album.map((data) => {
          return (
            <div key={index}>
              <h2>
                <img src={data.image[3]["#text"]} alt="" /> {data.name}
              </h2>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Artist;
