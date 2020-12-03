import React from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import Slider from '@material-ui/core/Slider';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import DevicesIcon from '@material-ui/icons/Devices';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import './Sidebar.css';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            
            <div className="footer__left">
                <div className="footer__album">
                    {/* <img 
                        className="footer__album"
                        src={src} 
                        alt="" 
                    /> */}
                    image
                </div>
                <div className="footer__info">
                    <span className="footer__title footer__text footer__text--white footer__text--small-spacing">
                        Thru Your Phone Thru Your Phone Thru Thru Thru
                    </span>
                    <span className="footer__text footer__text--small">
                        Cardi B
                    </span>
                </div>

                <div className="footer__left-icon">
                    <span className="footer__text">
                        <FavoriteBorderIcon />
                    </span>
                </div>
            </div>


            <div className="footer__center">
                <div className="footer__center-icon-container">
                    <ShuffleIcon className="footer__icon footer__center-icon" />
                    <SkipPreviousIcon className="footer__icon footer__center-icon" />
                    <PlayCircleOutlineIcon className="footer__icon footer__center-icon" fontSize="large" />
                    <SkipNextIcon className="footer__icon footer__center-icon" />
                    <RepeatIcon className="footer__icon footer__center-icon" />
                </div>
                {/* <div className="slider">
                    <Slider />
                </div> */}
            </div>


            <div className="footer__right">
                <div className="footer__right-icon footer__text">
                    <QueueMusicIcon />
                </div>
                <div className="footer__right-icon footer__text">
                    <DevicesIcon />
                </div>
                <div className="footer__right-icon footer__text">
                    <VolumeDownIcon />
                </div>
            </div>

        </div>
    )
}

export default Footer
