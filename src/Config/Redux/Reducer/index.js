const initialstate = {
    users       : [],
    games       : [],
    user_game   : [],
}

const reducer = (state = initialstate,action) => {
    switch(action.type){
        case "CHANGE_USER" : 
            return {
                ...state,
                users : action.value
            }
        case "CHANGE_GAME" : 
            return {
                ...state,
                games : action.value
            }
        case "CHANGE_USER_GAME" : 
            return {
                ...state,
                user_game : action.value
            }
        default : return state
    }
}

export default reducer