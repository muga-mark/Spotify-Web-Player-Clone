import React, { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './action';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import Player from './Player';

import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [ { user, token, playlists }, dispatch ] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token));

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("USER", user);
        dispatch(SET_USER(user));
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS(playlists));
      });

    }

    console.log("TOKEN", token);
  }, [ token, dispatch ]);

  console.log("I HAVE A TOKEN", token);
  console.log("USER", user);
  console.log("MY PLAYLIST", playlists);

  return (
    <div className="app">
      {
        token? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
