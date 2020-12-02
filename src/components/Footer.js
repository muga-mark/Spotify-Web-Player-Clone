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
                <div className="album_cover">
                    {/* <img src="" alt="" /> */}
                    image
                </div>
                <div className="song_info">
                    <div className="song_info__left">
                        <span className="song_info__title sidebar_text sidebar_text-white sidebar_text-spacing">
                            Thru Your Phone Thru Your Phone Thru Thru Thru
                        </span>
                        <span className="sidebar_text sidebar_text-small">
                            Cardi B
                        </span>
                    </div>
                </div>
                <div className="footer__left_icon">
                    <span className="sidebar_text">
                        <FavoriteBorderIcon />
                    </span>
                </div>
            </div>
            <div className="footer__center">
                <div className="icons">
                    <div className="footer__center_icon sidebar_text">
                        <ShuffleIcon />
                    </div>
                    <div className="footer__center_icon sidebar_text">
                        <SkipPreviousIcon />
                    </div>
                    <div className="footer__center_icon-center sidebar_text">
                        <PlayCircleOutlineIcon />
                    </div>
                    <div className="footer__center_icon sidebar_text">
                        <SkipNextIcon />
                    </div>
                    <div className="footer__center_icon sidebar_text">
                        <RepeatIcon />
                    </div>
                </div>
                {/* <div className="slider">
                    <Slider />
                </div> */}
            </div>
            <div className="footer__right">
                
                <div className="footer__right_icon sidebar_text">
                    <QueueMusicIcon />
                </div>
                <div className="footer__right_icon sidebar_text">
                    <DevicesIcon />
                </div>
                <div className="footer__right_icon sidebar_text">
                    <VolumeDownIcon />
                </div>
                
            </div>

        </div>
    )
}

export default Footer
