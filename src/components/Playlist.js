import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import { useHistory, useParams } from "react-router-dom";
import { SET_PLAYLIST_ID, SET_CURRENT_PLAYLIST } from "../actions";

import SpinnerCustom from "./SpinnerCustom";
import PlaylistBanner from "./PlaylistBanner";
import PlaylistTracksHeaderButtons from "./PlaylistTracksHeaderButtons";
import PlaylistTracksHeader from "./PlaylistTracksHeader";
import PlaylistTrack from "./PlaylistTrack";

import "./Playlist.css";

function Playlist({ spotify }) {
  // const history = useHistory();
  const { playlistId } = useParams();
  const [{ currentPlaylist }, dispatch] = useStateValue();
  // const [ playlist, setPlaylist ] = useState([]);
  const [loading, setLoading] = useState(true);

  window.addEventListener("scroll", () => console.log("shit", window.scrollY));

  useEffect(() => {
    if (playlistId) {
      dispatch(SET_PLAYLIST_ID(playlistId));
      spotify.getPlaylist(playlistId).then((result) =>
        // setPlaylist(result)
        dispatch(SET_CURRENT_PLAYLIST(result))
      );
      if (currentPlaylist && playlistId) {
        setTimeout(() => {
          setLoading(false);
        }, 1500);

        if (currentPlaylist.id !== playlistId) {
          setLoading(true);
        }
      }
    }
  }, [playlistId]);

  console.log("PlAYLIST", currentPlaylist);
  console.log("playlistId", playlistId);
  console.log("window.location.hash", window.location.pathname);

  return (
    <div className={`playlist ${loading === true && "playlist__loading"}`}>
      {loading ? (
        <SpinnerCustom loading={loading} size={10} color={"#fff"} />
      ) : (
        <>
          <PlaylistBanner playlist={currentPlaylist} loading={loading} />
          <div className="playlist__body">
            <PlaylistTracksHeaderButtons />
            <PlaylistTracksHeader />
            <div className="playlist__separator">
              <hr />
            </div>
            {/* <PlaylistTrack  /> */}
            <div className="playlist__tracks">
              {currentPlaylist.tracks?.items.map((result) => (
                <PlaylistTrack
                  track={result.track}
                  date_added={result.added_at}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Playlist;
