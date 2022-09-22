import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseURL: "http://ws.audioscrobbler.com/2.0/?",
      query: "method=track.search&track=",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json`,
      musicSearch: "",
      searchURL: "",
    };
  }

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
          this.state.query +
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
    
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select name="searchOption" id="searchOption">
            <option value="artist">Artist</option>
            <option value="album">Album</option>
            <option value="song">Song</option>
          </select>
          <input
            id="musicSearch"
            type="text"
            placeholder="Search for music..."
            value={this.state.musicSearch}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default App;
