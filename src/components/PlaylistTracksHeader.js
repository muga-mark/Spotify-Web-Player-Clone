import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import './PlaylistTracksHeader.css';

function PlaylistTracksHeader() {
    return (
        <div className="playlist-tracks-header">
            <span className="number-sign">
                #
            </span>

            <div className="playlist-tracks-header-center">
                <span className="playlist-tracks-header-title">
                    TITLE
                </span>
                <span className="playlist-tracks-header-album">
                    ALBUM
                </span>
                <span className="playlist-tracks-header-date-added">
                    DATE ADDED
                </span>
            </div>

            <AccessTimeIcon />
            
        </div>
    )
}

export default PlaylistTracksHeader
