

//create AuthContext

import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

//Provide context to other component
export default function AuthProvider({children}){
    
    //Put some state to context
    //const [number, setNumer] = useState(0)
    const [isAuthenticated, setAuthenticated] = useState(false);
    //setInterval(()=>setNumer(number+1),5000)

    //const valuesToBeShared = { number , isAuthenticated, setAuthenticated}
    function login(username,password){
        if(username==='fazla' && password==='12345')
            {
                setAuthenticated(true)
                return true;
            }else{
                setAuthenticated(false)
                return false
            }
    }

    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated,login,  logout} }>
            {children}
        </AuthContext.Provider>
    );
}