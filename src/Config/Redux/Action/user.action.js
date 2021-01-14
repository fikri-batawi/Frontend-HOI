export const getUsers = () => dispatch => {
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/api/users')
        .then(res=>res.json())
        .then(data=>{
            let users = []
            data.forEach(element => {
                users.push({
                    name        : element.name,
                    about       : element.about === "" ? "-" : element.about,
                    createdAt   : new Date(element.createdAt).toDateString(),
                    updatedAt   : new Date(element.updatedAt).toDateString(),
                })
            });
            dispatch({
                type    : 'CHANGE_USER',
                value   : users
            })
            resolve(true)
        })
    })
}

export const createUser = (data) => dispatch => {
    return new Promise((resolve,reject)=>{
        fetch('http://localhost:8080/api/users',{
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