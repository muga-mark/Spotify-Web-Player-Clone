import React from 'react';
import SidebarOptionsMenu from './SidebarOptionsMenu';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function MenuLists() {
    return (
        <>
            <SidebarOptionsMenu 
                Icon={HomeOutlinedIcon} 
                title="Home" 
                link="/"
            />
            <SidebarOptionsMenu 
                Icon={SearchOutlinedIcon} 
                title="Search" 
                link="/search"
            />
            <SidebarOptionsMenu 
                Icon={LibraryMusicIcon} 
                title="Your Library" 
                link="/collection/playlists"
            />
        </>
    )
};

export default MenuLists
