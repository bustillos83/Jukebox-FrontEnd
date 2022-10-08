import React from 'react'
import "./Favorites.css";
// select options
const options = [
    { value: "select", text: "Category" },  
    { value: "song", text: "Song" },
    { value: "album", text: "Album" },
    { value: "artist", text: "Artist" },
  ];

function FavoriteForm(props) {
    return (
         <div className="favorites-form">
          <select
            className="type-select"
            name="type"
            id="type"
            value={props.stateValue}
            form="favorites-form"
            onChange={props.handleSelect}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <form id="favorites-form" onSubmit={props.handleSubmit}>
            <input
              className="name-input"
              type="text"
              id="name"
              name="name"
              placeholder="Tell us your favorites..."
              onChange={props.handleChange}
            />
            <input className="fave-btn" type="submit" value="Add" />
          </form>
        </div>
    )
}

export default FavoriteForm
