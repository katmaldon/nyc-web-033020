import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = props => {
    return (
        <div className="simple-flex-row top">
            <SongList /> {/** TODO: What props do I need? Title, url, likes, favorite, artist*/}
            <Queue /> {/** TODO: What props do I need? Title Artist Delete*/}
        </div>
    )
}

export default MainContainer;