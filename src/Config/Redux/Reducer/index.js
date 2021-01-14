const initialstate = {
    users       : [],
    games       : [],
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
        default : return state
    }
}

export default reducer