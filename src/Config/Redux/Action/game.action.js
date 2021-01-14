export const getGames = () => dispatch => {
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/api/games')
        .then(res=>res.json())
        .then(data=>{
            let games = []
            data.forEach(element => {
                games.push({
                    game_name   : element.game_name,
                    slug        : element.slug,
                    desc        : element.desc,
                    createdAt   : new Date(element.createdAt).toDateString(),
                    updatedAt   : new Date(element.updatedAt).toDateString(),
                })
            });
            dispatch({
                type    : 'CHANGE_GAME',
                value   : games
            })
            resolve(true)
        })
    })
}

export const createGame = (data) => dispatch => {
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/api/games',{
            method  : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body    : JSON.stringify(data)
        }).then(res => res.json())
        .then(res=>{
            resolve(res)
        })
    })
}