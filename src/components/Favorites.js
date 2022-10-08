import React, { Component } from "react";
import {FaTrashAlt} from "react-icons/fa"
import FavoriteForm from "./FavoriteForm"
import Footer from "./Footer"
import "../App.css"
import "./Favorites.css";

// create edit form component - when user clicks on edit a small form pops up under the favorite item on the list



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
        

        {/* ===== FORM TO ADD NEW FAVORITE ===== */}
        

        <div className="table-div">
        <h1>♥ Favorites List ♥</h1>
            <FavoriteForm
            stateValue={this.state.value}
            handleSelect={this.handleSelect}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}

            />
          <table className="favorites-table">
            <tbody className="table-body">
                <th>Name</th>
                <th>Category</th>
              {this.props.favorites?.map((favorite) => {
                //   console.log(this.props.favorites)
                return (
                  <tr key={favorite._id} className="table-row">
                    <td 
                        onClick={() => {
                        this.props.makeSuperFave(favorite)
                        }}
                        id="fave-name"
                        className={favorite.superFave ? 'superFave' : null}
                    >
                        {favorite.superFave ? `❤️‍❤ "${favorite.name}" ❤️❤️` : `"${favorite.name}"`}
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
        
        <Footer/>
      </div>
    );
  }
}

export default Favorites;
