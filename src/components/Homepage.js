import React from 'react'
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import TopTags from "./TopTags";
import "../App.css";

function Homepage() {
    return (
        <div className="top-container">
        <div>{<TopTracks/>}</div>
        <div>{<TopArtists/>}</div>
        <div>{<TopTags/>}</div>
      </div>
    )
}

export default Homepage
