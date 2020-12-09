import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { SET_USER, SET_TOKEN, SET_PLAYLISTS } from './actions';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import Login from './Login';
// import Player from './Player';
import Playlist from './components/Playlist';
import Profile from './components/Profile';


import Home from './components/MenuHome'
import Search from './components/MenuSearch';
import Playlists from './components/MenuLibraryPlaylists';
import Podcasts from './components/MenuLibraryPodcasts';
import Artists from './components/MenuLibraryArtists';
import Albums from './components/MenuLibraryAlbums';

import LikedSongs from './components/PlaylistLikedSongs';
import CreatePlaylist from './components/PlaylistCreate';
import Install from './components/SidebarInstall';





import './App.css';


const spotify = new SpotifyWebApi();

function App() {
  // const { playlistId } = useParams();
  const [ { user, token, playlists, playlistId }, dispatch ] = useStateValue();
  // const [ loading, setLoading] = useState(true);
  // const [ playlist, setPlaylist ] = useState([]);

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

      
        // if(playlist){
        //     if( playlist.images.length>0 && playlist.name && playlist.description && playlist.owner && playlist.tracks){
        //         setLoading(false)
        //     }
        // }
    }

    // if(playlistId){
    //   spotify.getPlaylist(playlistId).then((result) =>
    //       setPlaylist(result),
    //       // setLoading(false/)
    //   );

    // }

  }, [ token, dispatch, playlistId ]);

  // console.log(loading);
  // console.log(playlistId);

  return (
    <div className="app">
      {
        token? (
          <Router>            
            <div className="app-player">
              <Sidebar />
              <Switch>
                {/* <Route exact path="/">
                  <Player spotify={spotify} />
                </Route> */}
                {/* <Route exact path="/login">
                  <Login />
                </Route> */}

                <Route exact path="/">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Home />
                  </div>
                </Route>
                <Route exact path="/search">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Search />
                  </div>
                </Route>

                <Route exact path="/collection/playlists">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Playlists />
                  </div>
                </Route>
                <Route exact path="/collection/podcasts">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Podcasts />
                  </div>
                </Route>
                <Route exact path="/collection/artists">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Artists />
                  </div>
                </Route>
                <Route exact path="/collection/albums">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Albums />
                  </div>
                </Route>
                <Route exact path="/collection/tracks">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <LikedSongs />
                  </div>
                </Route>

                <Route exact path="/playlist/:playlistId">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Playlist 
                      spotify={spotify} 
                      // loading={loading} 
                      // playlist={playlist}
                    />
                  </div>
                </Route>

                <Route exact path="/download">
                  <div className="wrapper">
                    <Header spotify={spotify} />
                    <Install />
                  </div>
                </Route>

              </Switch>
            </div>
            <Footer />
          </Router>
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
