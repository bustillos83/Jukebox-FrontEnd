import React, { Component } from "react";
import trackimg from "../images/track2.png";
import "../App.css"

class TopTracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://ws.audioscrobbler.com/2.0/?",
      method: "method=chart.gettoptracks",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=6`,
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
        <h1>Trending music now!</h1>
        <div className="top-tracks">
          {this.state.music?.tracks?.track?.map((track, index) => {
            return (
              <div
                key={index}
                className="indiv-container-tracks"
                style={{ backgroundImage: `url(${trackimg})` }}
              >
              <div className="overlay">
                <h2>
                  {track.name} by {track.artist.name}
                </h2>
                <h3>Playcount: {track.playcount}</h3>
                <a target="_blank" href={track.url}>
                  <button className="tracks-button">Listen Now</button>
                </a>
                </div>
                {/* <img src={track.image[3]["#text"]} alt="" /> */}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TopTracks;
