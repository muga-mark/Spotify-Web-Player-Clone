import React from 'react'

function PlaylistBanner({playlist}) {
    return (
        <div className="playlist__banner">
            {playlist.images[0]?.url?
                <img 
                    className="playlist__image"
                    src={playlist.images[0].url} 
                    alt={playlist.name} 
                />
            :null}
            <div className="playlist__info">
                {playlist.type?
                    <span className="playlist-text playlist-text--uppercase playlist-text--bold">
                        {playlist.type}
                    </span>
                :null}
                {playlist.name?
                    <span className="playlist-text playlist-text--title">
                        {playlist.name}
                    </span>
                :null}
                {playlist.description?
                    <span className="playlist-text playlist-text--gray">
                        {playlist.description}
                    </span>
                :null}
                <div className="playlist__sub-info">
                    {playlist.owner.display_name?
                        <span className="playlist-text playlist-text--margin-right playlist-text--bold">
                            {playlist.owner.display_name} &middot;
                        </span>
                    :null}
                    {playlist.tracks.total?
                        <span className="playlist-text playlist-text--gray">
                            {playlist.tracks.total} songs
                        </span>
                    :null}
                </div>
            </div>   
        </div>
    )
}

export default PlaylistBanner
