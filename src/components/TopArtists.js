import React, { Component } from "react";
import artistimg from "../images/maybeartist.jpg";
import "../App.css"

class TopArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://ws.audioscrobbler.com/2.0/?",
      method: "method=chart.gettopartists",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=5`,
      tracksURL: "",
      music: {},
    };
  }

  fetchTopTracks = () => {
    this.setState(
      {
        tracksURL: this.state.baseURL + this.state.method + this.state.apiKey,
      },

      () => {
        // fetch request will go here
        fetch(this.state.tracksURL)
          .then((response) => response.json())
          .then(
            (json) => {
              console.log(json, "top tracks");
              this.setState({
                ...this.state,
                music: { ...json },
              });
            },

            (err) => console.log(err)
          );
      }
    );
  };

  componentDidMount() {
    this.fetchTopTracks();
  }

  render() {
    // console.log(this.props.music?.tracks?.track?)
    return (
      <div className="trending-container">
        <h1>Trending Artist now!</h1>
        <div className="top-artist">
          {this.state.music?.artists?.artist?.map((track, index) => {
            return (
              <div
                key={index}
                className="indiv-container-artist"
                style={{ backgroundImage: `url(${artistimg})` }}
              >
                <div className="artist-info">
                  <h2>{track.name}</h2>
                  <h3>Playcount: {track.playcount}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopArtists;
