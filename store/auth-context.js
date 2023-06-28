import { createContext, useState } from "react";

export const AuthContext = createContext({
    token:'',
    isauthenticate: false,
    setAuthenticationToken:{},
    logout:{}
})

export default function AuthContextProvider({children}){
    const [authToken, setAuthToken ] =useState();

    function setAuthenticationToken(token){
        setAuthToken(token)
    }

    function logout(){
        setAuthToken(null)
    }

    const value = {
        token: authToken,
        isauthenticate: !!authToken,
        setAuthenticationToken: setAuthenticationToken,
        logout: logout
    }
    return <AuthContext.Provider value={ value } >{children}</AuthContext.Provider>
}