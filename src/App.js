import React, { Component } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// === IMPORT COMPONENTS === //
import Search from "./components/Search";
import Homepage from "./components/Homepage"
import Album from "./components/Album";
import Artist from "./components/Artist";
import Song from "./Song";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites"
import "./App.css";

let baseURL = process.env.REACT_APP_BACKEND_URL;

const searchOptions = [
  { label: "Artist", value: "artist" },
  { label: "Album", value: "album" },
  { label: "Song", value: "track" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseURL: "https://ws.audioscrobbler.com/2.0/?",
      searchOption: "",
      method: "",
      apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=12`,
      musicSearch: "",
      searchURL: "",
      favorites: []
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
        // console.log("hi im inside this function");
        fetch(this.state.searchURL)
          .then((response) => response.json())
          .then(
            (json) => {
              // console.log(json, "this is the json");
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

  goHome = () => {
    console.log("go home")
    this.setState({
      music: ""
    })
  }

  // add function to get (READ) favorites list here 
  getFavorites = () => {
    fetch(baseURL + "/faves")
    .then((res) => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    })
    .then((data) => {
      console.log("data", data)
      if (data === []){
        this.setState({ favorites: data })
      } else {
        this.setState({ favorites: data.faves })
      }
      
    })
  }


  // function to create a favorite 
  addFavorite = (favorite) => {
    const copyFavorites = [...this.state.favorites]
    copyFavorites.unshift(favorite)
    this.setState({ favorites: copyFavorites })
  }

  // function to delete a favorite
  deleteFavorite = (id) => {
    fetch(baseURL + '/faves/' + id, {
			method: 'DELETE'
		}).then( res => {
			const copyFavorites = [...this.state.favorites];
			const findIndex = this.state.favorites.findIndex(
					(favorite) => favorite._id === id
				);
			 copyFavorites.splice(findIndex, 1);
			 this.setState({ favorites: copyFavorites });
		})
  }

  // function to update a favorite - make SUPERFAV
  makeSuperFave = (favorite) => {
    fetch(baseURL + '/faves/' + favorite._id, {
			method: 'PUT',
			body: JSON.stringify({ superFave: !favorite.superFave }),
			headers: {
				'Content-Type': 'application/json',
			}
		})
			.then((res) => res.json())
			.then((resJson) => {
				console.log('resJson', resJson);
				const copyFavorites = [...this.state.favorites];
				const findIndex = this.state.favorites.findIndex(
					(favorite) => favorite._id === resJson._id
				);
				copyFavorites[findIndex].superFave = resJson.superFave;
				this.setState({ favorites: copyFavorites });
			});
  }



  render() {
    return (
      <Router>
      <div className="app">
        <Navbar goHome={this.goHome}/>
        <Search
          searchOptions={searchOptions}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSelect={this.handleSelect}
          musicSearch={this.state.musicSearch}
        />
        
         <Routes>
            <Route exact path="/" element={!this.state.music && <Homepage/>}>
            </Route>

            <Route path="/favorites" element={
            <Favorites 
              getFavorites={this.getFavorites}
              favorites={this.state.favorites}
              addFavorite={this.addFavorite}
              deleteFavorite={this.deleteFavorite}
              makeSuperFave={this.makeSuperFave}
              />
              }>
             </Route> 
          </Routes>

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
      
      </Router>
    );
  }
}

export default App;