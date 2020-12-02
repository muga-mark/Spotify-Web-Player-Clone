import React from 'react';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';
import './Player.css';

function Player() {
    return (
        <div>
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
}

export default Player
