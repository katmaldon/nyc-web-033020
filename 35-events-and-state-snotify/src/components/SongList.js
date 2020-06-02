import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem'

const SongList = props => {
    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter />
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {songs.map(song => {
                            return <SongItem key={song.id} {...song}/>
                        })
                        /** TODO: Render a SongItem component per each song here*/}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;