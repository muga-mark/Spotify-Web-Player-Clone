import React from 'react';
import Button from './Button';
import Download from '../images/download.jpg';
import './SidebarInstall.css';

function SidebarInstall() {
    return (
        <div className="sidebar-install">
            <img src={Download} alt="" />
            <span className="sidebar-install-text sidebar-install-text--bold title">
                Get our free app
            </span>
            <span className="sidebar-install-text sidebar-install-text--bold sub-title">
                Seamlessly listen to music you love. Download the Spotify app for your computer.
            </span>
            <Button 
                isDownloadButton={true}
                link="https://www.spotify.com/ph/download/windows/b/" 
                title="DOWNLOAD DESKTOP APP"
            />
        </div>
    )
}

export default SidebarInstall
