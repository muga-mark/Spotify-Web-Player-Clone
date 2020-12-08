import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

function MenuSearch() {
    return (
        <div>
            <SearchIcon className="header__left-icon" />
            <input placeholder="Search" type="text" />
        </div>
    )
}

export default MenuSearch
