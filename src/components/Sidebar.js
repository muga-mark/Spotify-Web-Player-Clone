import React from 'react';
import { useStateValue } from '../StateProvider';

import Menu from './Menu';
import SidebarOption from './SidebarOption';

import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GetAppIcon from '@material-ui/icons/GetApp';

import SpotifyLogoWhite from '../images/spotify-logo-white.jpg'
import './Sidebar.css'

function Sidebar() {
    const [ { playlists }, dispatch ] = useStateValue();

    return (
        <div className="sidebar">
            
            <div className="sidebar__menu">
                <img 
                    className="sidebar__logo"
                    src={SpotifyLogoWhite} 
                    alt="spotify-logo" 
                />

                <Menu />

                <div className="sidebar__playlist">
                    <span className="sidebar_text sidebar_text-bold">
                        PLAYLISTS
                    </span>
                    
                    <SidebarOption Icon={AddIcon} title="Create Playlist" type="playlist" />
                    <SidebarOption Icon={FavoriteIcon} title="Liked Songs" type="playlist" />
                </div>

                <hr />
            </div>

            <div className="sidebar__playlist lists">
                {playlists?.items?.map((playlist) => (
                    <div className="playlist__items">
                        <SidebarOption title={playlist.name} type="playlist_item" />
                    </div>
                ))}                
            </div>

            <div className="sidebar__menu">
                <SidebarOption Icon={GetAppIcon}  title="Install App" type="playlist_item" />
            </div>

        </div>
    )
}

export default Sidebar
