import React, { Component } from "react";


class Toptracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          baseURL: "http://ws.audioscrobbler.com/2.0/?",
          method: "method=chart.gettopartists",
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
            <div className="top-tracks">
            <h1>Trending music now!</h1>
            <div>
                {this.state.music?.artists?.artist?.map((track, index) => {
                    return (
                        <div key={index}>
                             <h2>{track.name}</h2>
                             <h3>{track.playcount}</h3>
                             <img src={track.image[3]["#text"]} alt="" />
                        </div>
                    )

                }
            )}
            </div>
            </div>
            
        )
    }
}

export default Toptracks

