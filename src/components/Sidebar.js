import React from 'react';
import { useStateValue } from '../StateProvider';

import MenuLists from './MenuLists';
import SidebarOptionsInstall from './SidebarOptionsInstall';
import SidebarPlaylistItems from './SidebarPlaylistItems';
import SidebarOptionsPlaylist from './SidebarOptionsPlaylist';

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
                <MenuLists />
                <div className="sidebar__playlist">
                    <span className="sidebar_text sidebar_text--bold">
                        PLAYLISTS
                    </span>
                    <SidebarOptionsPlaylist 
                        Icon={AddIcon} 
                        title="Create Playlist" 
                        type="playlist-option" 
                        link="/"
                    />
                    <SidebarOptionsPlaylist 
                        Icon={FavoriteIcon} 
                        title="Liked Songs" 
                        type="playlist-option" 
                        link="/collection/tracks"
                    />
                </div>
                <hr />
            </div>

            <div className="sidebar__playlist sidebar__playlist-items">
                {playlists?.items?.map((playlist) => (
                    <div key={playlist.id} className="sidebar__playlist-item">
                        <SidebarPlaylistItems 
                            type="playlist-item" 
                            title={playlist.name} 
                            link={`/playlist/${playlist.id}`}
                        />
                    </div>
                ))}                
            </div>

            <div className="sidebar__menu">
                <SidebarOptionsInstall 
                    Icon={GetAppIcon}  
                    title="Install App" 
                    link="/download"
                />
            </div>

        </div>
    )
}

export default Sidebar
