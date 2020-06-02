import React from 'react';

class SongItem extends React.Component {
    render() {
        const { title, artist } = this.props;
        return (
            <tr>
                <td>{props.title}</td>
                <td>{props.artist}</td>
                <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
                <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
                <td onClick={null /* Put your click handler here */}>{props.favorite ? "💚" : "♡"}</td>
                <td>Likes: 0</td>
            </tr>
        )
    }
}

export default SongItem;