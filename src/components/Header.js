import React from 'react';
import { useStateValue } from '../StateProvider';

import Avatar from '@material-ui/core/Avatar';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Header.css'

function Header() {
    const [ { user }, dispatch ] = useStateValue();
    console.log("USER>", user);
    return (
        <div className="header">
            <div className="header__left">
                <ArrowForwardIosIcon className="header__icon header__icon--rotate" />
                <ArrowForwardIosIcon className="header__icon" />
            </div>

            <div className="header__right">
                <Avatar 
                    className="header__avatar"
                    alt="" 
                    src={user?.images[0]?.url}
                />
                <h5>
                    {user?.display_name}
                </h5>
                <ArrowDropDownIcon />
            </div>
        </div>
    )
}

export default Header
