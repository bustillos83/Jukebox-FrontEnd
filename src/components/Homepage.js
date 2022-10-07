import React from 'react'
import TopTracks from "./TopTracks";
import TopArtists from "./TopArtists";
import TopTags from "./TopTags";
// not sure if we need app.css imported
import "../App.css";

function Homepage(props) {
    return (
        <div className="trending-now">
        <div className="top-tracks">{!props.musicState && <TopTracks />}</div>
        <div className="top-artists">{!props.musicState && <TopArtists />}</div>
        <div className="top-tags">{!props.musicState && <TopTags />}</div>
      </div>
    )
}

export default Homepage
