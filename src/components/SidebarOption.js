import React from 'react';

import './SidebarOption.css';
import './Sidebar.css';

function SidebarOption({ title, Icon, type }) {

    return (
        <div className={`sidebarOption ${type==="playlist_item" && "sidebarOption__playlist"}`}>
            {Icon && 
                <Icon className={`sidebarOption__icon 
                    ${type==="playlist" && "sidebarOption__icon_playlist"} 
                    ${type==="playlist_item" && "sidebarOption__icon_download"}`} 
                />
            }
            
            {Icon ? 
                <span className="sidebar_text sidebar_text-bold">
                    {title}
                </span> 
            : 
                <span className="sidebar_text">
                    {title}
                </span> 
            }
        </div>
    )
}

export default SidebarOption
