import React, { useEffect } from "react";
// const ColorThief = require('colorthief');
// import ColorThief from 'colorthief';

import "./PlaylistBanner.css";

function PlaylistBanner({ playlist, loading }) {
  // useEffect(() => {
  //     if(loading===false){
  //         if(playlist.images[0].url){
  //             const ColorThief = require('colorthief');
  //             const img = playlist.images[0].url;

  //             ColorThief.getColor(img)
  //             .then(color => { console.log("color", color) })
  //             .catch(err => { console.log(err) })
  //         }
  //     }
  // }, [loading]);

  return (
    <div className="playlist__banner">
      {playlist.images[0]?.url ? (
        <img
          id="image"
          className="playlist__image"
          src={playlist.images[0].url}
          alt={playlist.name}
        />
      ) : null}
      <div className="playlist__info">
        {playlist.type ? (
          <span className="playlist-text playlist-text--uppercase playlist-text--bold">
            {playlist.type}
          </span>
        ) : null}
        {playlist.name ? (
          <span className="playlist-text playlist-text--title playlist__title">
            {playlist.name}
          </span>
        ) : null}
        {playlist.description ? (
          <span className="playlist-text playlist-text--gray">
            {playlist.description}
          </span>
        ) : null}
        <div className="playlist__sub-info">
          {playlist.owner.display_name ? (
            <span className="playlist-text playlist-text--margin-right playlist-text--bold">
              {playlist.owner.display_name} &middot;
            </span>
          ) : null}
          {playlist.tracks.total ? (
            <span className="playlist-text playlist-text--gray">
              {playlist.tracks.total} songs
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PlaylistBanner;
