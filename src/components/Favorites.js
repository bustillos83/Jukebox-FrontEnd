import React, { Component } from "react";
import {FaTrashAlt} from "react-icons/fa"
import "./Favorites.css";

// create edit form component - when user clicks on edit a small form pops up under the favorite item on the list

// select options
const options = [
  { value: "select", text: "Category" },  
  { value: "song", text: "Song" },
  { value: "album", text: "Album" },
  { value: "artist", text: "Artist" },
];

export class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      name: "",
    };
  }

  componentDidMount() {
    this.props.getFavorites();
  }

  // function to handle select change
  handleSelect = (event) => {
    this.setState({
      type: event.target.value,
    });
  };

  // function to handle form change
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // function to handle form submit
  handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/faves`,
      {
        method: "POST",
        body: JSON.stringify({
          type: this.state.type,
          name: this.state.name,
        }),
        headers: { "Content-type": "application/json" },
      },
      console.log("im in the fetch", this.state)
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res);
      })
      .then((resJson) => {
        console.log("Form - resJson", resJson);
        this.props.addFavorite(resJson);
        this.setState({
          type: "",
          name: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>♥ Favorites List ♥</h1>
        <div className="table-div">
          <table className="favorites-table">
            <tbody className="table-body">
         
              {this.props.favorites?.map((favorite) => {
                //   console.log(this.props.favorites)
                return (
                  <tr key={favorite._id} className="table-row">
                    <td 
                        onDoubleClick={() => this.props.makeSuperFave(favorite)}
                        className={favorite.superFave ? 'superFave' : null}
                    >
                        {favorite.superFave ? `❤️‍🔥 ${favorite.name}❤️‍🔥 ` : favorite.name}
                    </td>

                    <td>{favorite.type}</td>
                    <td className="trash">
                        <FaTrashAlt onClick={() => this.props.deleteFavorite(favorite._id)}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* ===== FORM TO ADD NEW FAVORITE ===== */}
        <div className="favorites-form">
          <select
            className="type-select"
            name="type"
            id="type"
            value={this.state.value}
            form="favorites-form"
            onChange={this.handleSelect}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <form id="favorites-form" onSubmit={this.handleSubmit}>
            <input
              className="name-input"
              type="text"
              id="name"
              name="name"
              placeholder="What's your favorite?"
              onChange={this.handleChange}
            />
            <input className="fave-btn" type="submit" value="Add" />
          </form>
        </div>

      </div>
    );
  }
}

export default Favorites;
