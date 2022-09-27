import React, { Component } from "react";


class Toptracks extends Component {

    //https://ws.audioscrobbler.com/2.0/?method=track.gettoptags&artist=radiohead&track=paranoid+android&api_key=648607652a8f73431f2b1d7d0c767b7a&format=json

    render () {
        return(
            <div className="top-tracks">
            <h1>Trending music now!</h1>
            <div className="tracks-div"></div>
            </div>
            
        )
    }
}

export default Toptracks