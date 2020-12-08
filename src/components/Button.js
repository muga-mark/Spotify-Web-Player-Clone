import React from 'react';
import './Button.css'

function Button({ isLogin, isButtonDefault, isButtonGreen, isDownloadButton, link, title }) {
    return (
        <a href={link} 
        target={`${isLogin?"":"_blank"}`}
        className={`btn link ${isButtonDefault && "btn--default"} ${isButtonGreen && "btn--green"} ${isDownloadButton && "btn--light-green"}`}
        rel="noopener noreferrer" 
        >
            {title}
        </a> 
    )
}

export default Button
