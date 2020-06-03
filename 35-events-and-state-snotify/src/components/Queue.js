import React from 'react';


const Queue = props => {
    let currentSong = props.currentSong // TODO: how do you figure out what the current song is? 
    
    return (
        <div className="half queue">
            <h2>Queue</h2>
            {currentSong && <iframe 
                title={currentSong.title}
                width="361" 
                height="215" 
                src={`${currentSong.url}?autoplay=1&mute=1`}
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" >
            </iframe>}
            <ol>
                {/**
                 * TODO: Render all the songs in your queue here!
                 * 
                 */props.queuedSongs.map(song => 
                    <li>{song}</li>
                 )}
            </ol>
        </div>
    )
}

export default Queue;