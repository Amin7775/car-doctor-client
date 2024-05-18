import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn= (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {email : userEmail}
            setUser(currentUser);
            console.log("Current user : " , user)
            setLoading(false)
            if(currentUser){
                axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials : true})
                .then(res => 
                    console.log("login response",res.data)
                )
            }else{
                axios.post('http://localhost:5000/logout' , loggedUser, {withCredentials : true})
                .then(res => 
                    console.log("logout response",res.data)
                )
            }
        })
        return ()=>{
            return unSubscribe();
        } 
            
    },[])

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;