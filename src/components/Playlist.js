import React, { useState, useEffect } from 'react';
// import { useStateValue } from '../StateProvider';
import { useHistory, useParams } from 'react-router-dom';
import './Playlist.css';

function Playlist({ spotify }) {
    const { playlistId } = useParams();
    const [ playlist, setPlaylist ] = useState([]);

    useEffect(() => {
        if(playlistId){
            spotify.getPlaylist(playlistId).then((result) =>
                setPlaylist(result)
            );
        }
    }, [playlistId]);

    console.log("PlAYLIST", playlist);

    return (
        <div className="playlist">
            <div className="playlist__banner">
                <img 
                    className="playlist__image"
                    src={playlist.images[0]?.url} 
                    alt={playlist.name} 
                />
                <div className="playlist__info">
                    <span className="playlist-text playlist-text--uppercase">
                        {playlist.type}
                    </span>
                    <span className="playlist-text playlist-text--title">
                        {playlist.name}
                    </span>
                    <span className="playlist-text">
                        {playlist.description}
                    </span>
                    <div className="playlist__sub-info">
                        <span className="playlist-text">
                            {playlist.owner.display_name}
                        </span>
                        <span className="playlist-text">
                            {playlist.tracks.total} songs
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Playlist
