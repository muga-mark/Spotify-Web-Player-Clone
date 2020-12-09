import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

function SidebarPlaylistItems({ title, type, link }) {

    return (
        <Link to={link} className="sidebar-link">
            <div className={`sidebar-option sidebar-option--highlight ${type==="playlist-item" && "sidebar-option__playlist"}`}>
                <span className="sidebar-option__text sidebar-option__text-playlist">
                    {title} 
                </span>
            </div>
        </Link>
    )
}

export default SidebarPlaylistItems
