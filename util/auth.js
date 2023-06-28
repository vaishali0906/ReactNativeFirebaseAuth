import axios from "axios";

const ApiKey = 'AIzaSyD4QFZb6uJLcu105DFTiZ7SJB6c7WpiYtY'

async function authenticate(mode, email, password){
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${ApiKey}`
    const response = await axios.post(URL,{
        email:email,
        password:password,
        returnSecureToken: true
    })

    return response.data.idToken
}

export function createUser(email, password){
   return authenticate('signUp',email,password)
}

export function login(email, password){
   return authenticate('signInWithPassword', email, password)
}