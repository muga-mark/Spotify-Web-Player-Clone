export const initialState = {
    user: null,
    playlists: [],
    // token: null,
    playing: false,
    item: null,
    // token: "BQA_4IBZ0-zRm-myBzYQ0VJt5tEWX2v19a2J-RkhS6mZjcTRgvsI3mGECqjiuKSLjB5tuD99B2hO4jBUMaGpBS4CfjhyCyY43d0jM6KJO1G3o1oRz_EG4eAELiKRkH7qWr-ImuU2o7vsw2o",
    token: "BQB_12IMvLz7SuB8Pgp_zpWrH61lHQzq0MHUeoQaR8HkPLkW8TO19ix_2gpdKdt96muolF5jacuCDON9eB-4LUsEwFa5pAL85KHCaMMQkzehDqVFetesOAQ9CX3N9ltRgPAaGM1J7dcO45fyHLEKOXUNDeQoKf79CZng-CJC9VH1kw" 
}

export const actionTypes = {
    SET_USER: "SET_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLISTS: "SET_PLAYLISTS",
    SET_PLAYING: "SET_PLAYING",
    SET_ITEM: "SET_ITEM",
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

        default:
            return state;
    }
}

export default reducer;

