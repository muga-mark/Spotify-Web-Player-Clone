import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

function SidebarOptionsPlaylist({ title, Icon, type }) {

    return (
        <Link to="" className="sidebar-link">
            <div id="sidebar-option--highlight" className={`sidebar-option sidebar-option--highlight ${type==="playlist-item" && "sidebar-option__playlist"}`}>
                <Icon className={`sidebar-option__icon 
                    ${type==="playlist-option" && "sidebar-option__icon-playlist"} 
                    ${type==="install-app" && "sidebar-option__icon-install"}`} 
                />
                <span className="sidebar-option__text sidebar-option__text--bold">
                    {title}
                </span> 
            </div>
        </Link>
    )
}

export default SidebarOptionsPlaylist
