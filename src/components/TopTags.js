import React, { Component } from "react";
import tagsimg from '../images/guitar2.png'


class TopTags extends Component {
    constructor(props) {
        super(props);
        this.state = {
          baseURL: "http://ws.audioscrobbler.com/2.0/?",
          method: "method=chart.gettoptags",
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
            <h1>Trending genre now!</h1>
            <div className="top-tags">
                {this.state.music?.tags?.tag?.map((tag, index) => {
                    return (
                        <div key={index} className="indiv-container-tags" style={{ backgroundImage: `url(${tagsimg})` }}>
                             <h2>{tag.name}</h2>
                             <a className="linkTag" href={tag.url}><h3>Find out more</h3></a>
                        </div>
                    )

                }
            )}
            </div>
            </div>
            
        )
    }
}

export default TopTags

