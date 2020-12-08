import React from 'react';
import SidebarOption from './SidebarOption';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function MenuLists() {
    return (
        <>
            <SidebarOption Icon={HomeOutlinedIcon} title="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        </>
    )
};

export default MenuLists
