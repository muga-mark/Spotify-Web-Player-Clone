import React from 'react';

import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './PlaylistTracksHeaderButtons.css';

function PlaylistTracksHeaderButtons() {
    return (
        <div className="playlist-tracks-header-buttons">
            <div className="playlist-tracks-header-buttons-icon-play-container" >
                <PlayCircleFilledIcon className="playlist-tracks-header-buttons-icon-play" />
            </div>
            <div className="playlist-tracks-header-buttons-icon-heart-container" >
                <FavoriteBorderIcon className="playlist-tracks-header-buttons-icon-heart" />
            </div>
            <div className="playlist-tracks-header-buttons-icon-more-container" >
                <MoreHorizIcon className="playlist-tracks-header-buttons-icon-more" />
            </div>
            
        </div>
    )
}

export default PlaylistTracksHeaderButtons
