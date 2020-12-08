import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './actions';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import Player from './Player';
import Playlist from './components/Playlist';
import Profile from './components/Profile';


import Home from './components/MenuHome'
import Search from './components/MenuSearch';
import Library from './components/MenuLibrary';
import Albums from './components/MenuLibraryAlbums';
import Artists from './components/MenuLibraryArtists';
import Playlists from './components/MenuLibraryPlaylists';
import Podcasts from './components/MenuLibraryPodcasts';
import LikedSongs from './components/PlaylistLikedSongs';
import CreatePlaylist from './components/PlaylistCreate';
import Install from './components/SidebarInstall';





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
        dispatch(SET_USER(user));
        console.log("USER >>>", user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(SET_PLAYLISTS(playlists));
      });

    }

  }, [ token, dispatch, ]);

  return (
    <div className="app">
      {
        token? (
          <Router>
            <Switch>
              <Route exact path="/">
                <Player spotify={spotify} />
              </Route>
              {/* <Route exact path="/login">
                <Login />
              </Route> */}

              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              
              <Route exact path="/collection/playlists">
                <Playlists />
              </Route>
              <Route exact path="/collection/podcasts">
                <Podcasts />
              </Route>
              <Route exact path="/collection/artists">
                <Artists />
              </Route>
              <Route exact path="/collection/albums">
                <Albums />
              </Route>
              <Route exact path="/collection/tracks">
                <LikedSongs />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
