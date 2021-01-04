import React, { useState } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import "./PlaylistTrack.css";

function PlaylistTracksHeader() {
  const [playlistHeader, setPlaylistHeader] = useState(false);

  //   const changeBackground = () => {
  //     console.log("sadewfd", window.scrollY);
  //   };

  //   window.addEventListener("scroll", changeBackground);

  return (
    <div className="playlist-track-header active">
      <p className="number-sign playlist-track-text">#</p>

      <div className="playlist-track-center">
        <div className="playlist-track-title-container">TITLE</div>

        <div className="playlist-track-album-container">
          <span className="playlist-track-album playlist-track-text">
            ALBUM
          </span>
        </div>

        <span className="playlist-track-date-added playlist-track-text">
          DATE ADDED
        </span>
      </div>

      <span className="number-sign playlist-track-text">
        <AccessTimeIcon />
      </span>
    </div>
  );
}

export default PlaylistTracksHeader;
