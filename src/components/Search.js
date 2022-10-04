import React, { Component } from 'react'
import Select from "react-select";

export class Search extends Component {
    render(props) {
        return (
            <div className="search">
            <form className="search-bar " onSubmit={this.props.handleSubmit}>
              <Select
                className="select-container "
                id="searchOption"
                options={this.props.searchOptions}
                onChange={this.props.handleSelect}
              />
              <div>
                <input
                  id="musicSearch"
                  type="text"
                  placeholder="Search for music..."
                  value={this.props.musicSearch}
                  onChange={this.props.handleChange}
                />
                <input type="submit" value="Search" />
              </div>
            </form>
          </div>
        )
    }
}

export default Search


// <div className="search">
// <form className="search-bar " onSubmit={this.handleSubmit}>
//   <Select
//     className="select-container "
//     id="searchOption"
//     options={searchOptions}
//     onChange={this.handleSelect}
//   />
//   <div>
//     <input
//       id="musicSearch"
//       type="text"
//       placeholder="Search for music..."
//       value={this.state.musicSearch}
//       onChange={this.handleChange}
//     />
//     <input type="submit" value="Search" />
//   </div>
// </form>
// </div>