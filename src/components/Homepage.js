import React from 'react'
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import TopTags from "./TopTags";
import "../App.css";

function Homepage() {
    return (
        <div className="trending-now">
        <div className="top-tracks">{<TopTracks/>}</div>
        <div className="top-artists">{<TopArtists/>}</div>
        <div className="top-tags">{<TopTags/>}</div>
      </div>
    )
}

export default Homepage
