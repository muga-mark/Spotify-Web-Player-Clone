import React from 'react';
import { loginUrl } from  './spotify';
import SpotifyLogo from './images/spotify-logo.svg';
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="login__header">
                <img 
                    className="logo"
                    src={SpotifyLogo} 
                    alt="spotify logo" 
                />
            </div>

            <div className="login__content">
                
                <div className="login__spotify button__spotify">
                    <a href={loginUrl} 
                        className="btn btn-green link">
                        Continue with spotify
                    </a>
                </div>

                <div className="login__spotify">
                    <h3>Don't have an account?</h3>

                    <a href={"https://www.spotify.com/signup"} 
                        target="_blank" 
                        className="btn btn-default link"
                        rel="noopener noreferrer" 
                    >
                        Sign up for spotify
                    </a>  
                </div>

            </div>

        </div>
    )
}

export default Login
