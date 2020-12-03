import React from 'react';
import './SidebarOption.css';

function SidebarOption({ title, Icon, type }) {

    return (
        <div className={`sidebar-option ${type==="playlist-item" && "sidebar-option__playlist"}`}>
            
            {Icon && 
                <Icon className={`sidebar-option__icon 
                    ${type==="playlist-option" && "sidebar-option__icon-playlist"} 
                    ${type==="install-app" && "sidebar-option__icon-install"}`} 
                />
            }
            
            {Icon ? 
                <span className="sidebar-option__text sidebar-option__text--bold">
                    {title}
                </span> 
            : 
                <span className="sidebar-option__text">
                    {title}
                </span> 
            }
        </div>
    )
}

export default SidebarOption
