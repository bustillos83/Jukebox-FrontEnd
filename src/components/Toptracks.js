import React, { Component } from "react";
import '../App.css'
import trackimg from '../images/track2.png'

class TopTracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          baseURL: "http://ws.audioscrobbler.com/2.0/?",
          method: "method=chart.gettoptracks",
          apiKey: `&api_key=${process.env.REACT_APP_API_KEY}&format=json&limit=5`,
          tracksURL:"",
          music:{},
        };
      }

 
    fetchTopTracks = () => {
        this.setState(
          {
            tracksURL:
              this.state.baseURL +
              this.state.method +
              this.state.apiKey,
          },
    
          () => {
            // fetch request will go here
            fetch(this.state.tracksURL)
              .then((response) => response.json())
              .then(
                (json) => {
                  console.log(json, "top tracks");
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

      componentDidMount () {
        this.fetchTopTracks()
      }

    render () {
        // console.log(this.props.music?.tracks?.track?)
        return(
            <div className="trending-container">
            <h1>Trending music now!</h1>
            <div className="top-tracks" >
                {this.state.music?.tracks?.track?.map((track, index) => {
                    return (
                        <div key={index} className="indiv-container-tracks" style={{ backgroundImage: `url(${trackimg})` }}>
                             <h2>{track.name} by {track.artist.name}</h2>
                             <h3>Playcount: {track.playcount}</h3>
                             <a href={track.url}><h4>Listen Now</h4></a>
                             {/* <img src={track.image[3]["#text"]} alt="" /> */}
                        </div>
                    )

                }
            )}
            </div>
            </div>
            
        )
    }
}

export default TopTracks

