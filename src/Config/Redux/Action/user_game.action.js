export const getUserGame = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:8080/api/user-game')
        .then( res => res.json() )
        .then( res => {
            dispatch({type:'CHANGE_USER_GAME',value:res})
            resolve(true)
        })
    })
}