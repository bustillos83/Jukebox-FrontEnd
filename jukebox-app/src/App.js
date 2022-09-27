import React, { Component } from "react";
import Select from "react-select";
import { findDOMNode, render, unmountComponentAtNode } from "react-dom";
// === IMPORT COMPONENTS === //
// import Album from "./Album";
import Song from "./Song";
// import Navbar from "./components/Navbar";
// import Album from './components/Album'
// import Song from "./Song"
import Artist from "./components/Artist";
import Navbar from "./components/Navbar";
import Toptracks from "./components/Toptracks";
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
      searchOption: "",
      method: "",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=5`,
      musicSearch: "",
      searchURL: "",
    };
  }

  handleSelect = (option) => {
    console.log(option);

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
      this.setState({ method: "method=track.search&track=" });
    }
    console.log(this.state.method);
  };

  // not working when passing as prop to <Select/> but will work when passed to regular html element
  handleClick = () => {
    console.log("I clicked it");
    // unmountComponentAtNode(
    //   document.getElementById('result-container')
    // )
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
        <div className="search">
          <form className="search-bar " onSubmit={this.handleSubmit}>
            <Select
              className="select-container "
              id="searchOption"
              options={searchOptions}
              onChange={this.handleSelect}
            />
            <div>
              <input
                id="musicSearch"
                type="text"
                placeholder="Search for music..."
                value={this.state.musicSearch}
                onChange={this.handleChange}
              />
              <input type="submit" value="Search" />
            </div>
          </form>

          {/* {this.state.music ? <Album music={this.state.music} /> : ""} */}
          {this.state.music ? <Artist music={this.state.music} /> : ""}
          {this.state.music ? <Song music={this.state.music} /> : ""}
        </div>
        <Toptracks />
        {/* {this.state.music ? <Album music={this.state.music} /> : ""} */}
        {this.state.music ? <Artist music={this.state.music} /> : ""}

        {/* {this.state.music ? <Song music={this.state.music} /> : ""} */}
      </div>
    );
  }
}

export default App;
