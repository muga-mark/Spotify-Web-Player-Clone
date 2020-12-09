import React, { useState, useEffect } from 'react';
// import { useStateValue } from '../StateProvider';
import { useHistory, useParams } from 'react-router-dom';
// import { SET_PLAYLIST_ID } from '../actions';
import SpinnerCustom from './SpinnerCustom';
import PlaylistBanner from './PlaylistBanner';
import './Playlist.css';

function Playlist({ spotify }) {
    // const history = useHistory(); 
    const { playlistId } = useParams();
    // const [ {}, dispatch ] = useStateValue();
    const [ playlist, setPlaylist ] = useState([]);
    const [ loading, setLoading] = useState(true);

    

    useEffect(() => {
        if(playlistId){
            spotify.getPlaylist(playlistId).then((result) =>
                setPlaylist(result)
            );
            if(playlist && playlistId){
                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            }
        }
    }, [playlistId]);

    console.log("PlAYLIST", playlist);

    return (
        <div className="playlist">
            {loading?
                <SpinnerCustom 
                    loading={loading}  
                    size={20}
                    color={"#fff"}
                />
            :
                
                <PlaylistBanner playlist={playlist} />
            }
        </div>
    )
}

export default Playlist
