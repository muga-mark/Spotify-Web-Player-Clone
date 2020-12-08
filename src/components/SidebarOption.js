import React from 'react';
import { Link } from "react-router-dom";
import './SidebarOption.css';

function SidebarOption({ title, Icon, type, id }) {

    return (
        <Link to="" className="sidebar-option-link">
            <div id="sidebar-option--highlight" className={`sidebar-option sidebar-option--highlight ${type==="playlist-item" && "sidebar-option__playlist"}`}>
                
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
                <>
                        {id?
                            <span className="sidebar-option__text">
                                {title} 
                            </span>
                        :
                            <span className="sidebar-option__text">
                                {title}
                            </span> 
                        }
                    </>
                }
            </div>
        </Link>
    )
}

export default SidebarOption
