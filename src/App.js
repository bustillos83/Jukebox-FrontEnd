import React, { Component } from "react";
// === IMPORT COMPONENTS === //
import Search from "./components/Search";
import Album from "./components/Album";
import Artist from "./components/Artist";
import Song from "./Song";
import Navbar from "./components/Navbar";
import TopTracks from "./components/TopTracks";
import TopArtists from "./components/TopArtists";
import TopTags from "./components/TopTags";
import "./App.css";

let baseURL = process.env.REACT_APP_BACKEND_URL;

// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3003";
// } else {
//   baseURL = process.env.REACT_APP_BACKEND_URL;
// }
// console.log("current base url: ", baseURL);

console.log("current base url: ", baseURL);

const searchOptions = [
  { label: "Artist", value: "artist" },
  { label: "Album", value: "album" },
  { label: "Song", value: "track" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "http://ws.audioscrobbler.com/2.0/?",
      searchOption: "",
      method: "",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=12`,
      musicSearch: "",
      searchURL: "",
    };
  }

  handleSelect = (option) => {
    // console.log("searchOption:", this.state.searchOption)
    if (option === searchOptions[0]) {
      this.setState({
        ...this.state,
        searchOption: option.value,
        method: "method=artist.gettopalbums&artist=",
      });
    } else if (option === searchOptions[1]) {
      this.setState({
        ...this.state,
        searchOption: option.value,
        method: "method=album.search&album=",
      });
    } else if (option === searchOptions[2]) {
      this.setState({
        ...this.state,
        searchOption: option.value,
        method: "method=track.search&track=",
      });
    }
    this.performSearch();
    console.log("THIS IS THE STATE IN handleSelect", this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  performSearch = () => {
    console.log("search performed");
    this.setState(
      {
        searchURL:
          this.state.baseURL +
          this.state.method +
          this.state.musicSearch +
          this.state.apiKey,
      },

      () => {
        // fetch request will go here
        console.log("hi im inside this function");
        fetch(this.state.searchURL)
          .then((response) => response.json())
          .then(
            (json) => {
              console.log(json, "this is the json");
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

  handleSubmit = (event) => {
    event.preventDefault();
    this.performSearch();
  };

  render() {
    console.log("THIS IS THE STATE IN RENDER:", this.state);
    // console.log("searchOption:", this.state.searchOption)
    // console.log("method:", this.state.method);
    return (
      <div>
        <Navbar />
        <Search
          searchOptions={searchOptions}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          musicSearch={this.state.musicSearch}
        />
        <div className="trending-now">
          <div className="top-tracks">{!this.state.music && <TopTracks />}</div>
          <div className="top-artists">
            {!this.state.music && <TopArtists />}
          </div>
          <div className="top-tags">{!this.state.music && <TopTags />}</div>
        </div>

        {this.state.music && this.state.searchOption === "album" && (
          <Album music={this.state.music} />
        )}

        {this.state.music && this.state.searchOption === "artist" ? (
          <Artist music={this.state.music} />
        ) : (
          ""
        )}

        {this.state.music && this.state.searchOption === "track" ? (
          <Song music={this.state.music} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;


