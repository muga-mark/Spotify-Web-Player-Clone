import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

function SidebarOptionsInstall({ title, Icon, type, id, link }) {

    return (
        <Link to={link} className="sidebaro">
            <span className="sidebar-option sidebar-option__text sidebar-option__text--bold">
                <Icon className="sidebar-option__icon sidebar-option__icon-install" />
                {title}
            </span> 
        </Link>
    )
}

export default SidebarOptionsInstall
