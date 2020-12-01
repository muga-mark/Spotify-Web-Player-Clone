import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [ token, setToken ] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""
    const _token = hash.access_token;

    if(_token){
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        console.log("USER", user);
      }) 
    }

    console.log("I HAVE A TOKEN", token);
  }, []);

  return (
    <div className="app">
      {
        token? (
          <h1>I AM LOGGED IN</h1>
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
