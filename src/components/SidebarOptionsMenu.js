import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

function SidebarOptionMenu({ title, Icon, link }) {

    return (
        <Link to={link} className="sidebar-link">
            <span className="sidebar-option sidebar-option__text sidebar-option__text--bold">
                <Icon className="sidebar-option__icon "/>
                {title}
            </span> 
        </Link>
    )
}

export default SidebarOptionMenu
