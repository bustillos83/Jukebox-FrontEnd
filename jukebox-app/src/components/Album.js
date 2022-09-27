import React, {Component} from 'react'
// import './Album.css'

class Album extends Component {

    render(){
        console.log('ALBUM DATA', this.props.music )
        return(
            <div>
                <h1>Albums</h1>
            </div>
        )
            // <div className="albumSearch">
            //     <h1>Album search results...</h1>
            //     <div className='albumResults'>
            //         {this.props.music.results.albummatches.album.map((albums, index) => {
            //             return(
            //                 <div key={index} className='albumInfo'>
            //                 {/* img and album name will direct user to last.fm album page */}
            //                 <a href={albums.url}>
            //                 <img src={albums.image[2]['#text']} alt={albums.name}/>
            //                 <h2 className='albumName'>{albums.name}</h2>
            //                 </a>
            //                 {/* artist name will direct user to last.fm artist page */}
            //                 <a href={`https://www.last.fm/music/${albums.artist}`}>
            //                 <h3 className='albumArtist'>{albums.artist}</h3>
            //                 </a>
            //                 </div>
            //             )
            //         })}
            //     </div>
            // </div>
        
    }
}

export default Album 