export const initialState = {
    user: null,
    playlists: [],
    token: null,
    playing: false,
    item: null,
    playlistId: "",
    currentPlaylist: [],
    // token: "BQA_4IBZ0-zRm-myBzYQ0VJt5tEWX2v19a2J-RkhS6mZjcTRgvsI3mGECqjiuKSLjB5tuD99B2hO4jBUMaGpBS4CfjhyCyY43d0jM6KJO1G3o1oRz_EG4eAELiKRkH7qWr-ImuU2o7vsw2o",
    // token: "BQCPwjUcQ1YESte_4wWLdwbCw8wcPVOvokYA8iAefMcQv9Z6_eKz5XLqZSX1mOn0hQDq2yfih1PHJtxc-CYc1Yw47m6OGduA8vhTANQQJaFpRS2pHSndR0vvmtB6_XMdY6OHe7rivWiSBfqZ6CU1v1N0HZzsOK35YWJOMsvpIau8kA", 
}

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_PLAYING: "SET_PLAYING",
    SET_ITEM: "SET_ITEM",
    SET_PLAYLIST_ID: "SET_PLAYLIST_ID",
    SET_CURRENT_PLAYLIST: "SET_CURRENT_PLAYLIST",
}

const reducer = (state, action) => {
    console.log("reducer action", action);

    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case actionTypes.SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };

        case actionTypes.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case actionTypes.SET_PLAYING:
            return {
                ...state,
                playing: action.playing,
            };

        case actionTypes.SET_ITEM:
            return {
                ...state,
                item: action.item,
            };

        case actionTypes.SET_PLAYLIST_ID:
            return {
                ...state,
                playlistId: action.playlistId,
            }

        case actionTypes.SET_CURRENT_PLAYLIST:
            return {
                ...state,
                currentPlaylist: action.currentPlaylist,
            }

        default:
            return state;
    }
}

export default reducer;

