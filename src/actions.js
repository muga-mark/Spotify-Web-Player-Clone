export function SET_TOKEN(result){
    return{
        type: "SET_TOKEN",
        token: result,
    };
}

export function SET_USER(result){
    return{
        type: "SET_USER",
        user: result,
    };
}

export function SET_PLAYLISTS(result){
    return{
        type: "SET_PLAYLISTS",
        playlists: result,
    };
}

export function SET_PLAYING(result){
    return{
        type: "SET_PLAYING",
        playing: result,
    };
}

export function SET_ITEM(result){
    return{
        type: "SET_ITEM",
        item: result,
    };
}

export function SET_PLAYLIST_ID(result){
    return{
        type: "SET_PLAYLIST_ID",
        playlistId: result,
    }
}

export function SET_CURRENT_PLAYLIST(result){
    return{
        type: "SET_CURRENT_PLAYLIST",
        currentPlaylist: result,
    }
}