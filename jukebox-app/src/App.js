import React, { Component } from "react";
import Select from "react-select";
import Artist from "./Artist";
import "./App.css";

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
      method: "",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
      musicSearch: "",
      searchURL: "",
    };
  }

  handleSelect = (option) => {
    if (option === searchOptions[0]) {
      this.setState({ method: "method=artist.search&artist=" });
    } else if (option === searchOptions[1]) {
      this.setState({ method: "method=album.search&album=" });
    } else if (option === searchOptions[2]) {
      this.setState({ method: "method=track.search&track=" });
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
        fetch(this.state.searchURL)
          .then((response) => response.json())
          .then(
            (json) =>
              this.setState({
                music: json,
                musicSearch: "",
              }),
            (err) => console.log(err)
          );
      }
    );
  };

  render() {
    console.log(this.state.searchURL);
    return (
      <div className="navbar">
        <form onSubmit={this.handleSubmit}>
          <Select
            id="searchOption"
            options={searchOptions}
            onChange={this.handleSelect}
          />
          <input
            id="musicSearch"
            type="text"
            placeholder="Search for music..."
            value={this.state.musicSearch}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
        {this.state.music ? <Artist music={this.state.music} /> : ""}
      </div>
    );
  }
}

export default App;
