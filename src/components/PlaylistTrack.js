import React, { useEffect, useState } from 'react';
import './PlaylistTrack.css';

function PlaylistTrack({ track, date_added }) {
    const [ duration, setDuration ] = useState("");
    const [ date, setDate ] = useState("");

    useEffect(() => {
        if(track.duration_ms){
            var duration_ms = track.duration_ms;
            var minutes = Math.floor(duration_ms / 60000);
            var seconds = ((duration_ms % 60000) / 1000).toFixed(0);
            setDuration(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
        }

        if(date_added){
            // var release_date = track.album.release_date;
            // var arr = release_date.split("-");
            // var event = new Date(Date.UTC(arr[0], arr[1], arr[2], 0, 0, 0));
            // var options = { year: 'numeric', month: 'long', day: 'numeric' };
            // setDate(event.toLocaleDateString(undefined, options));

            var dateAdded = date_added;
            var date_split = dateAdded.split("-");
            var date_split_again = date_split[2].split(":");
            date_split[1] = date_split[1]-1;
            date_split[2] = parseInt(date_split_again[0])
            // console.log("arr", date_split);
            var event = new Date(Date.UTC(date_split[0], date_split[1], date_split[2], 0, 0, 0));
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
            setDate(event.toLocaleDateString(undefined, options));
            // console.log("new fucking date",event.toLocaleDateString(undefined, options));
        }
        
    }, [track])

    return (
        <div className="playlist-track">
            <span className="number-sign playlist-track-text">
                #
            </span>

            <div className="playlist-track-center">
                <div className="playlist-track-title-container">
                    <img 
                        src={track.album.images[2].url}
                        className="playlist-track-image"
                    />
                    <div className="playlist-track-title">
                        <span className="playlist-track-text playlist-track-text--bold  playlist-track-text--white">
                            {track.name}
                        </span>
                        <span className="playlist-track-text" id="track">
                            {track.artists[0]?.name}
                        </span>
                    </div>
                </div>
                <span className="playlist-track-album playlist-track-text">
                    {track.album.name}
                </span>
                <span className="playlist-track-date-added playlist-track-text">
                    {date}
                </span>
            </div>

            <span className="number-sign playlist-track-text">
                {duration}
            </span>

        </div>
    )
}

export default PlaylistTrack
