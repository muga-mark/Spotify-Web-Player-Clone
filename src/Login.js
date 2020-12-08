import React from 'react';
import Button from './components/Button';
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
                    <Button 
                        isLogin={true}
                        isButtonGreen={true}
                        link={loginUrl}
                        title="Continue with spotify"
                    />
                </div>

                <div className="login__spotify">
                    <h3>Don't have an account?</h3>
                    <Button 
                        isLogin={true}
                        isButtonDefault={true}
                        link="https://www.spotify.com/signup"
                        title="Sign up for spotify"
                    />
                </div>

            </div>

        </div>
    )
}

export default Login
